// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add(
    "interceptGQL",
    (
        uri,
        operation,
        data,
        alias
    ) => {
        // Retrieve any previously registered interceptions.
        const previous = Cypress.config("interceptions");
        const alreadyRegistered = uri in previous;

        const next = {
            ...(previous[uri] || {}),
            [operation]: { alias, data },
        };

        // Merge in the new interception.
        Cypress.config("interceptions", {
            ...previous,
            [uri]: next,
        });

        // No need to register handler more than once per URL. Operation data is
        // dynamically chosen within the handler.
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