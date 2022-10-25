import data from '../fixtures/user_info.json';

describe('ReportCard login page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  Cypress.Commands.add(
    "interceptGQL",
    (
      uri,
      operation,
      data,
      alias
    ) => {
      
      const previous = Cypress.config("interceptions");
      const alreadyRegistered = uri in previous;

      const next = {
        ...(previous[uri] || {}),
        [operation]: { alias, data },
      };

      Cypress.config("interceptions", {
        ...previous,
        [uri]: next,
      });

      if (alreadyRegistered) {
        return;
      }

      cy.intercept("POST", uri, (req) => {
        const interceptions = Cypress.config("interceptions");
        const match = interceptions[uri]?.[req.body.operationName];

        if (match) {
          req.alias = match.alias;
          req.reply({ body: match.data });
        }
      });
    }
  );

  beforeEach(() => {
    Cypress.config("interceptions", {});
    cy.visit('http://localhost:3000/')
    cy.interceptGQL("https://reportcard-rails.herokuapp.com/graphql", "user", data)
  })

  it('loads the main page', () => {
    cy.get('.nav-bar').contains('ReportCard')
      .get('.logo').contains('✅')
      .location('pathname').should('eq', '/')
  });

  it('user can continue as guest without logging in', () => {
    cy.get('.overview > a > .nav-container').click()
      .url().should('eq', 'http://localhost:3000/login')
      .get('.guest-button').contains("Continue as Guest").click()
      .location('pathname').should('eq', '/home')
  });

  it('user can return to login in from search page with the sign in button', () => {
    cy.get('.nav-button-container > .return-to-login-page-button').click()
      .url().should('eq', 'http://localhost:3000/login')
      .get('input').type('test_email0@email.test');
          const userData = {
                    "data": {
                          "user": {
                          "name": "Arlen Wisoky",
                          "email": "test_email0@email.test",
                          "id": "1",
                          "__typename": "User"
                        }          
                    }
              };
              cy.interceptGQL(
                        'https://reportcard-rails.herokuapp.com/graphql',
                        'user',
                         userData
              );
    cy.get('.login-button').click()
    .url().should('eq', 'http://localhost:3000/home')
    .get('h3').contains('Arlen Wisoky')
  });
});