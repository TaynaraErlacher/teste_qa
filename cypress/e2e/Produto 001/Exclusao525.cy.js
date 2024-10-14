describe('E2E - Realizar cadastro do produto', () => {
    it('Realizar cadastro com sucesso', () => {
        // Acessa a URL
        cy.visit('https://erpdev.ascbrazil.com.br');
        
        // Realiza o login
        cy.get('#login-user').type('teste.qa');
        cy.get('#login-password').type('Asc@Qa');
        cy.get(':nth-child(5) > .controls > .btn').click();

        // Navegar até a seção de produtos
        cy.get(':nth-child(5) > .dropdown-toggle').click();
        cy.get('#side_produto > a').click();


         //exclusão nº 525
         cy.get(':nth-child(1) > :nth-child(1) > .btn-group > .btn-danger').click()
         //cy.get('#btnConfirmRemover').click()
        
          
    });
});