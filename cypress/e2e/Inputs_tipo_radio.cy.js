/// <reference types="cypress" />

// import '..support/commands'
describe('Central de Atendimento ao cliente TAT', function () {

    beforeEach(() => {
        cy.visit('./src/index.html')
    }
    )
    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
    })
    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]').should('have.length', 3).each(function ($radio) {
            cy.wrap($radio).check().should('be.checked')
        })

    })
})

//wrap e each -> encapsular objeto.
//each encapsula o grupo de obj
//wrap encapsula somente o obj que vc quer interagir
cy.get('li').each(($el, index, $list) => {
    // $el é o elemento DOM atual
    // index é o índice do elemento na lista
    // $list é a lista completa de elementos
    cy.wrap($el).click() // Exemplo de ação em cada elemento
  })