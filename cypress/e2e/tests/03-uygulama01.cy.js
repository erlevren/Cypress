/*
    -Kitapyurdu sayfasına gidelim
    -Üye ol bağlantısına tıkla
    -Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/
describe('KitapYurdu Uye Ol', () => {
    it('Temel Fonksiyonlarin Kullanimi', () => {
        //Kitapyurdu sayfasına gidelim
        cy.visit('https://www.kitapyurdu.com');
        //Çıkan çerezi reddet diyerek kapatalım
        cy.get('#cookiescript_description > span > a').click()
        //üye ol butonuna tıklayalım
        cy.get('.register > a').click()
        //Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
        cy.get('#register-name').type('Erol').should('have.value','Erol')
    });
});