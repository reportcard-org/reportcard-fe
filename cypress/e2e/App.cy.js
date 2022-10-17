describe('App', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'BE API WEB ADDRESS WILL BE ENTERED HERE', { fixture: 'WILL I NEED A FIXTURE HERE?' }),
      cy.visit('http://localhost:3000/')
  });

  
  it('user should receive a navigation bar at the top of the page', () => {
    cy.get('.App').within(() => {
      cy.get('.nav-bar')
    })
  });

  
  it('user should be able to log into the app on initial page load', () => {
    cy.get('.user-login-form-container').within(() => {
      // cy.get('user-login-form').should('be.visible')
      //need to build out user login to proceed with testing
    })
  })
  
  // it('if the user continues as guest, user should not have a favorites page', () => {
  //   code is not ready for this test, need to add error handling to code for fave page/disable button
  // });

});