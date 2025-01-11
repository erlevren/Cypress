describe('Eylem Methodlari - scrolintoview() ve SelectFile() methodu', () => {
    it('scrollintoview(),selectFile() kullanimi', () => {
        cy.visit('https://webdriveruniversity.com/');

        //Hızlı scroll
        cy.get('#actions').scrollIntoView()

        //Yavaş scroll
        cy.get('#contact-us').scrollIntoView({duration:2000})

        //file-upload seçeneğine scroll yap ve tıkla
        cy.get('#file-upload').scrollIntoView({duration:2000}).invoke('removeAttr', 'target').click()

        //dosyaseç kısmına dosya yükleyelim (package.json dosyasını yükleyelim)
        //cy.get('#myFile').selectFile('package.json')

        //Sürükle bırak ile dosya yükleme
        cy.get('#myFile').selectFile('package.json',{action:"drag-drop"})

    });
});