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
});
