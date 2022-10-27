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
    });

    it('loads the main page', () => {
        cy.visit('http://localhost:3000/')
            .get('.sign-in-nav-bar').contains('ReportCard')
            .get('.sign-in-logo').contains('✅')
            .location('pathname').should('eq', '/')
    });


    it('user can return to login in from search page with the sign in button', () => {
        cy.visit('http://localhost:3000/login')
        .url().should('eq', 'http://localhost:3000/login')
        .get('input').first().type('test_email0@email.test')
        .get('input').eq(1).type('Welcome2022')
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
        cy.get('.search-form-container').should('exist')
            .get('.search-input-city').type('Littleton').should('have.value', 'Littleton')
            .get('.search-input-street').type('6805 S Webster Street').should('have.value', '6805 S Webster Street')
            .get('.search-input-state-address').type('CO').should('have.value', 'CO')
            .get('.search-button').should('not.be.disabled')
            .get('.search-button').contains('Search').click()
            .url().should('eq', 'http://localhost:3000/district-info')
            .get('.title-and-info-container')
            .get('p').first().contains('Back to Search')
            .get('p').eq(2).contains(18.07)
            .get('p').eq(3).contains('Teacher salary: ')
            .get('p').eq(4).contains(73400.51)
            .get('p').eq(5).contains('Instruction Salary % of Total: ')
            .get('p').eq(7).contains('Enrollment: ')
            .get('p').eq(8).contains(84646)
            .get('p').eq(9).contains('Number of Schools: ')
            .get('p').eq(10).contains(165)
            .get('p').eq(11).contains('Guidance Counselor Ratio: ')
            .get('p').eq(12).contains(299.1)
            .get('p').eq(13).contains('Expenditure Per Student: ')
            .get('p').eq(14).contains(12100.68)
    });

    it('should not be able to save a favorite twice and should see all favorited districts on the favorites page', () => {
        cy.get('.saved-message').contains('❤️ Already saved to faves ❤️')
          .get('.go-to-favorites-page').click()
          .url().should('eq', 'http://localhost:3000/favorite-districts')
          .get('.fav-school-name').first().contains('Clinch County')
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
            .get('.title-and-info-container')
            .get('p').first().contains('Back to Search')
            .get('p').eq(2).contains(14.95)
            .get('p').eq(3).contains('Teacher salary: ')
            .get('p').eq(4).contains(65475.06)
            .get('p').eq(5).contains('Instruction Salary % of Total: ')
            .get('p').eq(6).contains(50.40)
            .get('p').eq(7).contains('Enrollment: ')
            .get('p').eq(8).contains(92039)
            .get('p').eq(9).contains('Number of Schools: ')
            .get('p').eq(10).contains(206)
            .get('p').eq(11).contains('Guidance Counselor Ratio: ')
            .get('p').eq(12).contains(484.42)
            .get('p').eq(13).contains('Expenditure Per Student: ')
            .get('p').eq(14).contains(16752.85)
    })

    it('should allow a user to logout and return them to the overview/login page', () => {
        cy.get('.return-to-login-page-button').click()
            .url().should('eq', 'http://localhost:3000/')
    })
});