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

// Cierra el banner de cookies solo si aparece
Cypress.Commands.add('aceptarCookies', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#sp-cc-accept').length > 0) {
      cy.get('#sp-cc-accept').click()
    }
  })
})

// Cierra el popup de seguro/garantía solo si aparece
Cypress.Commands.add('cerrarPopupSeguro', () => {
  cy.get('body').then(($body) => {
    if ($body.text().includes('No, gracias')) {
      cy.contains('No, gracias').click()
    }
  })
})
