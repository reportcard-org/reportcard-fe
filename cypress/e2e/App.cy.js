describe('App', () => {
  beforeEach(() => {
    // cy.intercept('GET', 'BE API WEB ADDRESS WILL BE ENTERED HERE', { fixture: 'WILL I NEED A FIXTURE HERE?' }),
      cy.visit('http://localhost:3000/')
  });

  it('user should see a navigation bar at the top of the page', () => {
   cy.get('.App').within(() => {
    cy.get('.nav-bar')
   })
  });

  it('user should receive a form for logging into the app', () => {
    cy.get('.user-login-form-container').within(() => {
      
    })
  })
});