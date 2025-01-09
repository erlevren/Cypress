describe('Uygulama-02', () => {
    it('Temel Fonksiyonlar Kullanimi-Amazon Sayfasi', () => {
        //Amazon sayfasına gidiniz
        cy.visit('https://www.amazon.com');
        //Arama motorunda 'iphone' aratalım
        cy.get('#twotabsearchtextbox').type('iphone{enter}')
        //cy.get('#nav-search-submit-button').click()

        //Arama sonuc yazısında 'iphone' kelimesinin olduğunu doğrulayalım
        cy.get('.a-color-state').should('contain','iphone')
    });
});