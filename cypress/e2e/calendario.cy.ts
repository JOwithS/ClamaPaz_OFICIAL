describe('prueba transtornos', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100');
        cy.get('#username').type('ashu');
        cy.get('#password').type('Am0$');
        cy.get('ion-button').contains('Regístrate').click({ force: true });
        
        cy.url().should('include', '/home');
    });

    it('Debería redirigir a la página de trastornos al hacer clic en la imagen desde la página de análisis', () => {
        cy.get('ion-button.botONE').contains('Ingrese').click();
        cy.url().should('include', '/analisis');
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(0).click({ force: true });
        cy.url().should('include', '/transtornos');
    }); 

    it('Debería volver a la página de análisis desde la página de ayuda', () => {
        
        cy.get('ion-button.botONE').contains('Ingrese').click();
        cy.url().should('include', '/analisis');
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(0).click({ force: true });
        cy.url().should('include', '/transtornos');
        cy.get('ion-button.botONE').contains('Volver atrás').click();
        cy.url().should('include', '/analisis');
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(1).click({ force: true });
        cy.url().should('include', '/ayuda');
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(2).click({ force: true });
        cy.url().should('include', '/salud');
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(3).click({ force: true });
        cy.url().should('include', '/calendario');
    });
});
