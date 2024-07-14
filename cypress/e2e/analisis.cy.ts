describe('analisis', () => {
    beforeEach(() => {
        
        cy.visit('http://localhost:8100'); 

        cy.get('#username').type('ashu');
        cy.get('#password').type('Am0$');
        cy.get('ion-button').contains('Regístrate').click({ force: true });

        
        cy.url().should('include', '/home');
    });

    it('Debería redirigir a la página de análisis al hacer clic en "Ingrese"', () => {
       
        cy.get('ion-button.botONE').contains('Ingrese').click();

        cy.url().should('include', '/analisis');
    });
});


//funciona el registro y del registro al home funciona la redirección al presionar el botón ingrese, el cual me lleva a la página análisis
