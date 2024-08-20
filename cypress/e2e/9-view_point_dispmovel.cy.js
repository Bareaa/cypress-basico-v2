beforeEach(() => {
    cy.visit('./src/index.html')
})
it('Verifica o tamanho atual da viewport', () => {
    // Acesse a janela atual e obtenha as dimensões da viewport
    cy.window().then((win) => {
      const largura = win.innerWidth;
      const altura = win.innerHeight;
      console.log('Largura da viewport:', largura);
      console.log('Altura da viewport:', altura);
  
      // Opcionalmente, você pode fazer asserções com esses valores
      expect(largura).to.be.a('number');
      expect(altura).to.be.a('number');
    })
    })