describe('Method Zinciri', () => {
    it('Method Zinciri kullanimi', () => {
        //https://automationteststore.com sitesine gidelim
        cy.visit('https://automationteststore.com');

        //Contact Us bağlantısına tıklayalım
        cy.get('.info_links_footer').contains('Contact Us').click() //get() içinde belirttiğimiz element altındaki Contact Us text'ine tıkla
        
        //Kayıt formunu tamamlayalım
        cy.get('#ContactUsFrm').within(() => {
            cy.get('#ContactUsFrm_first_name').type('Erol')
            cy.get('#ContactUsFrm_email').type('erl@gmail.com')
            cy.get('#ContactUsFrm_enquiry').type('Selamlar')
            cy.get('.col-md-6 > .btn').click()

        }) //kayıt formu altındaki elemanlarda işlem yapıldı
        
        //Kaydın gerçekleştiğini doğrulayalım
        cy.get('.mb40').find('p').should('exist').and('be.visible').and('have.text','Your enquiry has been successfully sent to the store owner!');
        //find() ile seçilen elementin alt öğelerinde arama yapar
    });
});