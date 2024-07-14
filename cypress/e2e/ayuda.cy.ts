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
        // Haz clic en el botón "Ingrese" en la página de análisis
        cy.get('ion-button.botONE').contains('Ingrese').click();

        // Verifica que se haya redirigido a la página de análisis
        cy.url().should('include', '/analisis');

        // Haz clic en la imagen para los trastornos en la página de análisis
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(0).click({ force: true });

        // Verifica que se haya redirigido correctamente a la página de trastornos
        cy.url().should('include', '/transtornos');

        // Haz clic en el botón "Volver atrás" en la página de ayuda
        cy.get('ion-button.botONE').contains('Volver atrás').click();

        // Verifica que se haya redirigido correctamente de vuelta a la página de análisis
        cy.url().should('include', '/analisis');

        // Ahora, haz clic en la imagen para la página de ayuda desde la página de análisis
        cy.get('ion-img[alt="Descripción de la imagen"]').eq(1).click({ force: true });

        // Verifica que se haya redirigido correctamente a la página de ayuda
        cy.url().should('include', '/ayuda');
    });
});
