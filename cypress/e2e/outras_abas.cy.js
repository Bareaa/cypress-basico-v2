describe('Central de Atendimento ao cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    instanceof('Lidando com links que abrem em outra aba', () => {
        cy.get('a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'tat')
    })
})