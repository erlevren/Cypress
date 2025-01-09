describe('Eylem Methodlari - click() Methodu', () => {
    it('click() methodunun kullanimi', () => {
        cy.visit('https://www.letskodeit.com/practice');

        //1- Butona tıkla yeni açılan pencereyi iptal et aynı pencerede devam et
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        //2- Yeni sayfada istediğiniz elementi tıklayın
        cy.get('h4.dynamic-heading').first().click() // İlk öğeyi tıklar
        // veya
        //cy.get('h4.dynamic-heading').eq(0).click(); // 0. indeksteki öğeyi tıklar

        cy.go('back')
        cy.go('back')

        //3- Birden çok elemente tıklama
        cy.get('[type="checkbox"][name="cars"]').click({multiple:true}); //Çoklu tıklama yapar

        //4- Elementi sayfada istediğimiz yere göre scroll yapma
        cy.get('#mousehover').click({scrollBehavior:'top'})
        cy.get('#mousehover').click({scrollBehavior:'center'})

        //5- type({force:true}) kullanımı
        cy.get('#disabled-button').click()
        cy.get('#enabled-example-input').type('Erol',{force:true}) //TextBox disable butonuna basmamıza ragmen force:true sayesinde yazdı
        cy.wait(3000);
        cy.get('#enabled-example-input').clear({force:true})
        //cy.get('#enabled-button').click()

        //cy.get('#enabled-example-input').clear()
        //cy.get('#enabled-example-input').type('{selectAll}{backspace}',{delay:1000});


    });
    //demoqa deki hata için visit() üzerine cy.on('uncaught:exception',(err,runnable)=>{return false})
 });