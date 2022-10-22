describe('overview', () => {
    it('should have correct navbar', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.nav-bar > .logo-and-buttons').contains('ReportCard')
    })

    it('should have correct overview information', () => {
        cy.get('article').get('p').first().contains("The effect that a classroom teacher has on a student is second only to a parent.")
        cy.get('p').eq(1).contains("Login with an email and then provide an address to search for the nearest school district.")
    })

    it('should have button to continue to login page', () => {
        cy.get('.overview > a > .nav-container').click()
        cy.url().should('eq', 'http://localhost:3000/login')
    })
})