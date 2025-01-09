describe('Test Aşamalari', () => {
  it('Temel Komutlar', () => {
    cy.visit('https://www.kitapyurdu.com') //Given --> Test için ön hazırlık aşaması
    cy.contains('Üye Ol').click(); //When --> Eylemi gerçekleştirme
    cy.url().should('contain','account/register') //Then --> Testi doğrulama
  })

})