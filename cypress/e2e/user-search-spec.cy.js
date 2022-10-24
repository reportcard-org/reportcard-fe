const postStub = {
  "city": "Littleton",
  "street": "6805 S Webster Street",
  "state": "Colorado"
}

describe('ReportCard login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
    //gql stub??
  })

  it('can continue as guest and search for a district if user inputs a city, street, and state', () => {
    cy.get('.search-form-container').should('exist')
      .get('.search-input-city').type('Littleton')
      .get('.search-input-street').type('6805 S Webster Street')
      .get('.search-input-state-address').type('Colorado')
      // cy.intercept("POST", "https://reportcard-rails.herokuapp.com/api/v1/district_data", postStub)
      .get('.search-button').should('not.be.disabled')
      .get('.search-button').contains('Search').click()
  });

  it('can continue as guest but cannot search for district unless user enters city, street, and state', () => {
    cy.get('.search-button').should('be.disabled')
      .get('.search-form-container').should('exist')
      .get('.search-input-city').type('Littleton')
      .get('.search-button').should('be.disabled')
      .get('.search-input-street').type('6805 S Webster Street')
      .get('.search-button').should('be.disabled')
      .get('.search-input-state-address').type('Colorado')
      // cy.intercept("POST", "https://reportcard-rails.herokuapp.com/api/v1/district_data", postStub)
      .get('.search-button').should('not.be.disabled')
      .get('.search-button').contains('Search').click()
  });
});