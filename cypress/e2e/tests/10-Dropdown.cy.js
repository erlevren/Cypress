describe('Eylem Methodlari - select() methodu', () => {
    it('select() kullanim', () => {
        cy.visit('https://www.letskodeit.com/practice')
        
        //Metin ile seçim
        cy.get('#carselect').select('Benz')
        cy.wait(2000);

        //Value ile seçim
        cy.get('#carselect').select('honda')
        cy.wait(2000);

        //İndex ile seçim
        cy.get('#carselect').select(0)
        cy.wait(2000);

        //seçili olanı bulma
        cy.get('#carselect option:selected').should('have.text','BMW')
        cy.wait(2000);
        
        //Ddm de metin ile çoklu seçim yapma
        cy.get('#multiple-select-example').select(['Apple','Orange'])

    });
});