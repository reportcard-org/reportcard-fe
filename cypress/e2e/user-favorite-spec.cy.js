import data from '../fixtures/user_info.json';

describe('User Favorites page', () => {

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
        cy.interceptGQL("https://reportcard-rails.herokuapp.com/graphql", "user", data)
    })

    it('loads the main page', () => {
        cy.visit('http://localhost:3000/')
            .get('.nav-bar').contains('ReportCard')
            .get('.logo').contains('✅')
            .location('pathname').should('eq', '/')
    });


    it('user can return to login in from search page with the sign in button', () => {
        cy.visit('http://localhost:3000/login')
        .url().should('eq', 'http://localhost:3000/login')
        .get('input').type('test_email0@email.test')
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

    it('can search for a district if user inputs a city, street, and state', () => {
        cy.visit('http://localhost:3000/home')
            .get('.search-form-container').should('exist')
            .get('.search-input-city').type('Littleton').should('have.value', 'Littleton')
            .get('.search-input-street').type('6805 S Webster Street').should('have.value', '6805 S Webster Street')
            .get('.search-input-state-address').type('Colorado').should('have.value', 'Colorado')
            .get('.search-button').should('not.be.disabled')
            .get('.search-button').contains('Search').click()
            .url().should('eq', 'http://localhost:3000/district-info')
            .get('.report-card').should('exist')
            .get('.card-bubble').first().contains('Student to teacher')
            .get('.card-bubble').eq(1).contains(59.39)
            .get('.card-bubble').eq(2).contains('Teacher salary')
            .get('.card-bubble').eq(3).contains('Enrollment')
            .get('.card-bubble').eq(4).contains('# of Schools in District')
            .get('.card-bubble').eq(5).contains('Guidance counselor ratio')
            .get('.card-bubble').eq(6).contains('$ per student')
    });

    it('should not be able to save a favorite twice and should see all favorited districts on the favorites page', () => {
        cy.get('.add-district-to-favorites').contains('❤️ Already saved to faves ❤️')
          .get('.go-to-favorites-page').click()
          .url().should('eq', 'http://localhost:3000/favorite-districts')
          .get('h1').first().contains('Clinch County')
          .get('h1').next().contains('Paradise Valley Unified District (4241)')
          .get('h1').next().contains('Jefferson County School District No. R-1')
    })

    it('should allow users to return to the search page and look for a different address', () => {
        cy.get('.search-page').click()
           .url().should('eq', 'http://localhost:3000/home')
            .get('.search-input-city').type('Denver').should('have.value', 'Denver')
            .get('.search-input-street').type('2523 Emerson Street').should('have.value', '2523 Emerson Street')
            .get('.search-input-state-address').type('Colorado').should('have.value', 'Colorado')
            .get('.search-button').should('not.be.disabled')
            .get('.search-button').contains('Search').click()
            .url().should('eq', 'http://localhost:3000/district-info')
            .get('.report-card').should('exist')
            .get('.card-bubble').first().contains('Student to teacher')
            .get('.card-bubble').eq(1).contains(50.4)
            .get('.card-bubble').eq(2).contains('Teacher salary')
            .get('.card-bubble').eq(3).contains('Enrollment')
            .get('.card-bubble').eq(4).contains('# of Schools in District')
            .get('.card-bubble').eq(5).contains('Guidance counselor ratio')
            .get('.card-bubble').eq(6).contains('$ per student')
    })

    it('should allow a user to logout and return them to the overview/login page', () => {
        cy.get('.return-to-login-page-button').click()
            .url().should('eq', 'http://localhost:3000/')
    })
});