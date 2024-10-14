/// <reference types ="Cypress"/>

describe( 'Realizar LogIn', () => {
    it('Realizar LogIn com sucesso', () => {
        cy.visit('https://erpdev.ascbrazil.com.br')
        cy.get('#login-user').type("teste.qa")
        cy.get('#login-password').type("Asc@Qa")
        cy.get(':nth-child(5) > .controls > .btn').click()
    });
});
