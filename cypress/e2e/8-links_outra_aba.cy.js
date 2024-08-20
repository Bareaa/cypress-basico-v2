describe('Links em outra aba', () => {

    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('a').should('have.attr', 'target', '_blank').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'privacy')
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('a').should('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target').click()
        cy.url().should('include', 'privacy')
    })
})