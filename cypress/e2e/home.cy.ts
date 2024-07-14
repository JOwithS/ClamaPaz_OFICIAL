describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:8100/home')
    })
  })


  /*funciona el auth.guard y el approuting modules, pq no he iniciado sesión y me negó la entrada
   con la alerta:
   acceso denegado

  */