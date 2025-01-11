/*
https://www.bluerentalcars.com/ adresini ziyaret et 
    Login ol
*/
describe('Login Testi', () => {
    it('BlueRentalCars Login Testi', () => {
        cy.fixture('blueRentalCars').then((e)=>{
            cy.visit(e.url);
            cy.title().should('eq',e.title)
            cy.url().should('eq',e.url)
            cy.contains(' Login').click()
            cy.wait(1000);
            cy.get('#formBasicEmail').should('be.visible').should('be.enabled').type(e.email2)
            cy.wait(1000);
            cy.get('#formBasicPassword').should('be.visible').should('be.enabled').type(e.pass2)
            cy.get('[type="submit"]').should('be.visible').should('be.enabled').click()
            cy.reload()
        })
        
        

    });
});