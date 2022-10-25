// cy.intercept("POST", "https://reportcard-rails.herokuapp.com/api/v1/district_data", postStub)

describe('ReportCard search page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  Cypress.Commands.add('interceptGQL', (uri, operation, data, alias) => {
    const previous = Cypress.config('interceptions');
    const alreadyRegistered = uri in previous;

    const next = {
      ...(previous[uri] || {}),
      [operation]: { alias, data },
    };

    Cypress.config('interceptions', {
      ...previous,
      [uri]: next,
    });

    if (alreadyRegistered) {
      return;
    }

    cy.intercept('POST', uri, (req) => {
      const interceptions = Cypress.config('interceptions');
      const match = interceptions[uri]?.[req.body.operationName];

      if (match) {
        req.alias = match.alias;
        req.reply({ body: match.data });
      }
    });
  });

  beforeEach(() => {
    Cypress.config("interceptions", {});
    const districtInfo = {
      data: {
        attributes: [
          {
            0: {
              district_expense_total: 1024274000,
              district_name: "Jefferson County School District No. R-1",
              elementary_teachers: 2176,
              enrollment: 84646,
              expenses_for_instruction: 492227000,
              guidance_counselors: 283,
              instruction_salary_percent_of_total: 59.39,
              instructional_aides: 1662,
              kindergarten_teachers: 294,
              latitude: "+39.5875372",
              lea_id: 804800,
              librarian_total: 122,
              longitude: "-105.2499612",
              number_of_schools_in_district: 165,
              per_student_expenditure: 12100.68,
              per_teacher_salary_expenses: 73400.51,
              pre_k_teachers: 50,
              salaries_instruction: 343808000,
              salaries_total: 578940000,
              secondary_teachers: 2162,
              student_guidance_counselor_ratio: 299.1,
              student_librarian_ratio: 693.82,
              student_teacher_ratio: 18.07,
              total_staff: 10622,
              total_teachers: 4684,
              urban_centric_locale: "Large Suburb"
            }
          }
        ],
        id: null,
        type: "school district"
      }
    };
    cy.interceptGQL(
      "https://reportcard-rails.herokuapp.com/graphql",
      "getDistrict",
      districtInfo
    );
    cy.visit('http://localhost:3000/district-info')
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

});