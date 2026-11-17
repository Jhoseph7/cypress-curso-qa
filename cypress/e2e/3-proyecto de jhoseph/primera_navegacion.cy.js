describe('Proyecto de Jhoseph navegacion', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.aceptarCookies()
  })

  it('TC-001 Buscar ordenador HP y añadirlo al carrito', () => {

    cy.log('Paso 1: buscar el producto')
    cy.get('#twotabsearchtextbox').clear().type('ordenador hp')
    cy.get('#nav-search-submit-button').click()

    cy.log('Paso 2: abrir el HP 15 de los resultados')
    cy.contains('[data-cy="title-recipe"] a', /HP 15 Ordenador portátil/i, { timeout: 10000 })
      .click()
    cy.url().should('include', '/dp/')
    cy.aceptarCookies()

    cy.log('Paso 3: añadir al carrito')
    cy.get('#add-to-cart-button', { timeout: 10000 }).click()
    cy.cerrarPopupSeguro()

    cy.log('Paso 4: validar el carrito')
    cy.get('#nav-cart-count', { timeout: 10000 }).should('have.tex
    t', '1')
    cy.screenshot('TC-001-carrito-con-producto')
  })
})