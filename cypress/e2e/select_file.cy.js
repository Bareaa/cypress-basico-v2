describe('Central de Atendimento ao cliente TAT', function () {
    this.beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/arquivo.txt').should(function($input){
            expect($input[0].files[0].name).to.eq('arquivo.txt')
        })
    
    })
    it('seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('input[type="file"]')
        .should('not.have.value')
            .selectFile('cypress/fixtures/arquivo.txt', { action: 'drag-drop' })//drag-drop é arrastar e soltar
            .should(function($input){
            expect($input[0].files[0].name).to.eq('arquivo.txt')
        })
    
    })
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('arquivo.txt').as('aliasArquivo')
        cy.get('input[type="file"]').selectFile('@aliasArquivo').should(function($input){
            expect($input[0].files[0].name).to.eq('arquivo.txt')
        })
    
    })

})
