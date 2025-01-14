describe('Alert', () => {
    it('Alert Mesajini dogrulama', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert',(mesaj) => {
            expect(mesaj).to.equal('I am a JS Alert')
        })
    });
    it('Alertte iptal basmak', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',() => {
            return false
            //false --> Alert'teki iptal butonuna basar
            //true --> Alert'teki tamam butonuna basar
        })
    });
    it.only('Alert prompt alanina metin girmek ', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((AlertPenceresi) => {
            cy.stub(AlertPenceresi,'prompt').returns('Cypress')
            cy.get('[onclick="jsPrompt()"]').click();    
        })
    });

});