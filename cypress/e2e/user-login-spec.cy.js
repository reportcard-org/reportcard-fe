describe('ReportCard login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    //gql stub??  

  })

  it('loads the main page', () => {
    cy.get('.nav-bar').contains('ReportCard')
      .get('.logo').contains('✅')
      .get('.nav-button-container').contains("Favorites")
      .get('.nav-button-container').contains("Logout")
      .get('.guest-button').contains("Continue as Guest")


      // .location('pathname').should('eq', '3000/')

  });

});