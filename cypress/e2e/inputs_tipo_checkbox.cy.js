describe('Central de Atendimento ao cliente TAT', function() {
    beforeEach(() => {
        cy.visit('./src/index.html')
    }
    )
    it('marca ambos checkboxes, depois desmarca o último', () => {
        cy.get('input[type="checkbox"]').should('have.length', 2).each(function($checkbox){
            cy.wrap($checkbox).check().should('be.checked')
            cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
        })
    })
        it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
            cy.get('#firstName').type('Fulano')
            cy.get('#lastName').type('Teste')
            cy.get('#email').type('em@ailfulano@teste.com')
            cy.get('#phone').type('abcdefghijklm')
            cy.get('#product').select('YouTube')
            cy.get('#support-type > :nth-child(4)').click()
            cy.get('#phone-checkbox').check()  
            cy.get('#open-text-area').type('Teste de preenchimento do campo de texto')
            cy.get('.button').click()

            cy.get('.error').should('be.visible')
    })

})
