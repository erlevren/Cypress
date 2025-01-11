
describe('Eylem Methodlari - doubleClick() Methodu', () => {
    it('doubleClick() methodunun kullanimi', () => {
        cy.on('uncaught:exception',(err,runnable)=>{return false})
        cy.visit('https://demoqa.com/');
        //İnteractions seçeneğine tıklaylım
        cy.get(':nth-child(5) > :nth-child(1) > .card-body > h5').click()
        
        //Elements seçeneğine tıklayalım
        cy.get(':nth-child(1) > .group-header > .header-wrapper').should('exist').and('be.visible').click()
        
        //Buttons seçeneğine tıklayalım
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').should('exist').and('be.visible').click()
        
        //Double click me buttonuna tıklayalım ve tıklandığını doğrulayalım
        cy.get('#doubleClickBtn').should('exist').and('be.visible').dblclick()
        cy.get('#doubleClickMessage').should('exist').and('be.visible').and('have.text','You have done a double click')
       

    });
});