describe('Eylem Methodlari - check() Methodu', () => {
    it('check() methodunun kullanimi', () => {
        //Check Box
        //Tümünü işaretle
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('[type="checkbox"][name="cars"]').check().should('be.checked')

        //Tüm işaretleri kaldır
        cy.get('[type="checkbox"][name="cars"]').uncheck().should('not.be.checked')

        //ilk seçeneği seç
        cy.get('[type="checkbox"][name="cars"]').first().check()

        //Value ile seç
        cy.get('[type="checkbox"][name="cars"]').check('benz')

        //valu ile seçimi kaldır
        cy.get('[type="checkbox"][name="cars"]').uncheck('benz')

        //Birden fazla seçim yapma
        cy.get('[type="checkbox"][name="cars"]').check(['benz','honda'])

        //Birden fazla seçim kaldır
        cy.get('[type="checkbox"][name="cars"]').uncheck(['benz','honda','bmw'])
    });
});