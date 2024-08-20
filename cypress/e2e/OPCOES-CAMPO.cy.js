beforeEach(() => {
    cy.visit('./src/index.html')
})
it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('email@fulano.com')
    cy.get('#phone').type('11999999999')
    cy.get('#product').select('YouTube').should('have.value', 'youtube')//estava errando o valu, pondo letras iniciais maiusculas.

})

it('seleciona um produto (Mentoria) por seu texto', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('email@fulano.com')
    cy.get('#phone').type('11999999999')
    cy.contains('select', 'Selecione').select('Mentoria')
    cy.get('select#product').should('have.value', 'mentoria');

})


it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#firstName').type('Fulano')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('email@fulano.com')
    cy.get('#phone').type('11999999999')
    cy.contains('select', 'Selecione').select([1]).should('have.value', 'blog')

})