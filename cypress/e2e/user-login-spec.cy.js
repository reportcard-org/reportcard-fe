describe('ReportCard login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    //gql stub??  
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


  // it('can login', () => {

  // });
});