describe('Eylem Methodlari - trigger() methodu', () => {
    it('trigger() kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        //Mause'u elementin üzerine taşıyalım
        cy.get('#mousehover').trigger('mouseover') //Açmamasının sebebi css kullanılmasından kaynaklanıyor
                                                   //Açılmadığı için alt elementlere tıklayamadık
                                                   //ama tıklamada force:true kullanırsak tıklar
        cy.get('[href="#top"]').click({force:true});                                             

    });
    it.only('trigger() kullanimi', () => {
        cy.visit('https://amazon.com');
        cy.reload()
        cy.wait(2000);
        
        //Account-List elementi üzerine mause'u götürelim
        cy.get('#nav-link-accountList > .nav-line-2').trigger('mouseover')
        
    });
});