describe('Prueba de registro de usuario', () => {
    it('Debería permitir registrar un usuario nuevo', () => {
        cy.visit('http://localhost:8100'); // Visita la página principal donde está el formulario de registro

        // formulario de registro
        cy.get('#username').type('ashu');
        cy.get('#password').type('Am0$');

        
        cy.get('ion-button').contains('Regístrate').click({force: true});

        // se redirige a la página de inicio después de registrarse
        cy.url().should('include', '/home');
    });
});

//antes no funcionaba porque no estába incorporado el {force: true}... le dice que ignore las restricciones de visibilidad y que ejecute de todas formas
