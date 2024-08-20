/// <reference types="cypress" />

// import '..support/commands'
describe('Central de Atendimento ao cliente TAT', function() {
    this.beforeEach(() => {
        cy.visit('./src/index.html')
    })
    
    it('Verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })

    // it('Preenche os campos obrigatórios e envia o formulário', function() {
    //     cy.get('#firstName').type('Fulano')
    //     cy.get('#lastName').type('Teste')
    //     cy.get('#email').type('emailfulano@teste.com')
    //     cy.get('#phone').type('11999999999')
    //     cy.get('#product').select('YouTube')
    //     cy.get('#support-type > :nth-child(4)').click()
    //     cy.get('#check > [for="phone"]').click()
    //     cy.get('#open-text-area').type('Teste de preenchimento do campo de texto')
    //     cy.get('.button').click()

    //     cy.get('.success').should('be.visible')
    // })

    // it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    //     cy.get('#firstName').type('Fulano')
    //     cy.get('#lastName').type('Teste')
    //     cy.get('#email').type('em@ailfulano@teste.com')
    //     cy.get('#phone').type('abcdefghijklm')
    //     cy.get('#product').select('YouTube')
    //     cy.get('#support-type > :nth-child(4)').click()
    //     cy.get('#check > [for="phone"]').click()
    //     cy.get('#open-text-area').type('Teste de preenchimento do campo de texto')
    //     cy.get('.button').click()

    //     cy.get('.error > strong').should('be.visible')
    // })

    // it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    //     cy.get('#firstName').type('Fulano')
    //     cy.get('#lastName').type('Teste')
    //     cy.get('#email').type('em@ailfulano@teste.com')
    //     cy.get('#phone').type('abcdefghijklm')
    //     cy.get('#product').select('YouTube')
    //     cy.get('#support-type > :nth-child(4)').click()
    //     cy.get('#phone-checkbox').click()
    //     cy.get('#open-text-area').type('Teste de preenchimento do campo de texto')
    //     cy.get('.button').click()

    //     cy.get('.error').should('be.visible')
    // })

    //     it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    //     cy.get('#firstName').type('Fulano')
    //     cy.get('#lastName').type('Teste')
    //     cy.get('#email').type('emailfulano@teste.com')
    //     cy.get('#phone').type('11999999999')
        
    //     cy.get('#firstName').clear().should('have.value', '')
    //     cy.get('#lastName').clear().should('have.value', '')
    //     cy.get('#email').clear().should('have.value', '')
    //     cy.get('#phone').clear().should('have.value', '')

    // })

    // it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    //     cy.get('.button').click()

    //     cy.get('.error').should('be.visible')
    // })

    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmitForm()
        cy.get('.success').should('be.visible')
    })



        it('usando o cy.contains no lugar do get', function() {
            const longText = 'Teste de preenchimento do campo de texto'
            cy.get('#firstName').type('Fulano')
            cy.get('#lastName').type('Teste')
            cy.get('#email').type('emails@fulanis.com.br')
            cy.get('#phone').type('11999999999')
            cy.get('#open-text-area').type(longText), {delay: 0}
            cy.contains('button', 'Enviar').click()
            cy.get('.success').should('be.visible')
    })
})
