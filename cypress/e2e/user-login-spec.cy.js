const postStub = {
  "city": "Littleton",
  "street": "6805 S Webster Street",
  "state": "Colorado"
}

describe('ReportCard login page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    //gql stub??  
  })
  
  it('loads the main page', () => {
    cy.get('.nav-bar').contains('ReportCard')
    .get('.logo').contains('✅')
    .get('.nav-button-container').contains("Favorites")
    .get('.nav-button-container').contains("Logout")
    .get('.guest-button').contains("Continue as Guest")
    .location('pathname').should('eq', '/')
    
  });
  
  it('user can continue as guest without logging in', () => {
    cy.get('.nav-bar').contains('ReportCard')
    .location('pathname').should('eq', '/')
    .get('.logo').contains('✅')
    .get('.nav-button-container').contains("Favorites")
    .get('.nav-button-container').contains("Logout")
    .get('.guest-button').contains("Continue as Guest")
    .get('.guest-button').contains('Continue as Guest').click()
    .location('pathname').should('eq', '/home')
  });
  
  
  // it('can continue as guest but cannot search for district unless user enters city, street, and state', () => {
  //   cy.get('.nav-bar').contains('ReportCard')
  //   .location('pathname').should('eq', '/')
  //   .get('.logo').contains('✅')
  //   .get('.nav-button-container').contains("Favorites")
  //   .get('.nav-button-container').contains("Logout")
  //   .get('.guest-button').contains("Continue as Guest")
  //   .get('.guest-button').contains('Continue as Guest').click()
  //   .location('pathname').should('eq', '/home')
  //   // 
  // });

  // it('can login', () => {
  //   cy.get('.nav-bar').contains('ReportCard')
  //     .location('pathname').should('eq', '/')
  //     .get('.logo').contains('✅')
  //     .get('.nav-button-container').contains("Favorites")
  //     .get('.nav-button-container').contains("Logout")
  //     .get('.guest-button').contains("Continue as Guest")
  //     .get('.guest-button').contains('Continue as Guest').click()
  //     .location('pathname').should('eq', '/home')
  // });

});