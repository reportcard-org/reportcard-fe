import data from '../fixtures/user_info.json';

describe('overview', () => {
    it('should have correct overview information', () => {
        cy.visit('http://localhost:3000/')
        cy.get('article').get('p').first().contains("The effect that a classroom teacher has on a student is sometimes second only to a parent.")
        cy.get('p').eq(1).contains("Your report Card will provide you with up-to-date, relevant information for educators about the district.")
    })

    it('should have button to continue to login page', () => {
        cy.get('.nav-button-container > .return-to-login-page-button').click()
        cy.url().should('eq', 'http://localhost:3000/login')
    })
})