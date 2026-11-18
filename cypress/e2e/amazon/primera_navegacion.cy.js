import { sel } from '../../support/selectors/amazon'

// EA SPORTS FC 27 (el "FIFA" de este año). El patrón también cubre "FC™ 27"
const juego = /FC.{0,3}27/i

describe('Carrito en Amazon', () => {

  beforeEach(() => {
    cy.abrirAmazon()
  })

  it('TC-001 Buscar EA SPORTS FC 27 (PS5) y añadirlo al carrito', () => {

    cy.buscarProducto('fifa 27 ps5')
    cy.get(sel.enlaceProducto).first().should('be.visible')
    cy.screenshot('01-resultados', { capture: 'viewport' })

    cy.log('Paso 2: abrir la ficha del juego')
    cy.abrirResultado(juego)
    cy.get(sel.titulo).first().invoke('text').should('match', juego)
    cy.screenshot('02-ficha-producto', { capture: 'viewport' })

    cy.log('Paso 3: añadir al carrito')
    cy.get(sel.anadir).click()

    cy.log('Paso 4: validar el carrito')
    cy.validarContador(1)
    cy.screenshot('03-carrito', { capture: 'viewport' })
  })
})