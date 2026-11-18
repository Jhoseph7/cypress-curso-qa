import { sel } from './selectors/amazon'

// Acepta el banner de cookies solo si está visible
Cypress.Commands.add('aceptarCookies', () => {
  const botonAceptar = '#sp-cc-accept:visible, input[value="Aceptar"]:visible'

  cy.get('body').then(($body) => {
    if ($body.find(botonAceptar).length > 0) {
      cy.get(botonAceptar).first().click()
      cy.get('body').should(($b) => {
        expect($b.find(botonAceptar).length).to.eq(0)
      })
    }
  })
})

// Tras pulsar "Añadir": espera a que aparezca el popup de seguro o a que el
// producto ya esté en el carrito, y cierra el popup si salió
Cypress.Commands.add('cerrarPopupSeguro', () => {
  const hayPopup = ($b) =>
    $b
      .find('button, input, span, a')
      .filter(':visible')
      .filter((_, el) => (el.textContent || el.value || '').trim() === 'No, gracias')
      .length > 0
  const hayProducto = ($b) => $b.find(sel.contador).text().trim() !== '0'

  cy.get('body', { timeout: 10000 }).should(($b) => {
    expect(hayPopup($b) || hayProducto($b), 'popup de seguro o producto en el carrito').to.be.true
  })

  cy.get('body').then(($b) => {
    if (hayPopup($b)) {
      cy.contains('No, gracias').click()
    }
  })
})

// Abre Amazon y espera a que la página esté lista antes de tocar cookies
Cypress.Commands.add('abrirAmazon', () => {
  cy.visit('/')
  cy.get(sel.buscador).should('be.visible')
  cy.aceptarCookies()
})

// Escribe en el buscador y lanza la búsqueda con Enter
Cypress.Commands.add('buscarProducto', (texto) => {
  cy.get(sel.buscador).clear().type(`${texto}{enter}`)
  cy.get(sel.enlaceProducto).should('have.length.greaterThan', 0)
})

// Abre el primer resultado cuyo texto coincida con el patrón
Cypress.Commands.add('abrirResultado', (patron) => {
  cy.contains(sel.enlaceProducto, patron).click()
  cy.url().should('include', '/dp/')
  cy.get(sel.titulo).first().should('exist')   // ← añade esta línea
  cy.aceptarCookies()
})

// Comprueba el número que muestra el contador del carrito
Cypress.Commands.add('validarContador', (n) => {
  cy.get(sel.contador, { timeout: 10000 }).should(($el) => {
    expect($el.text().trim()).to.eq(String(n))
  })
})