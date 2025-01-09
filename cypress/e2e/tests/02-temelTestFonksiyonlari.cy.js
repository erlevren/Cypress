describe('Temel Test Fonksiyonlari', () => {
    it('visit(), get(), click(), type(), should() fonksiyonlari ', () => {
        cy.visit('URL'); //girilen url'e gider

        cy.get('locator').should('be.visible').click(); //get() bir veya birden çok elementi seçmek için kullanılır

        cy.get('locator').should().type('Metin').should('Dogrulayici','Dogrulanacak Metin');
        //type() --> input alanına veri girmek için kullanılır


    });
});