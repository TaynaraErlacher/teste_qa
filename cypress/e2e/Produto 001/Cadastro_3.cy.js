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
        cy.get('.btn-to-success').click();
        
        // Cadastrar informações básicas
        cy.get('#nom_produto').type('003 - TESTE ASC SaKey Pro');
        cy.get('#cod_asc_empresa').select('ASC INTERNACIONAL');
        cy.get('#dsc_produto').type('ASC SaKey Pro baseia-se em uma solução digital desenvolvida para proteger dados pessoais e corporativos em diferentes dispositivos.');
        cy.get('#sig_produto').type('F-IOS-v1.0');

       // Cadastrar Financeiro
       cy.get('#tabs > :nth-child(5) > a').click()
       cy.get('#cod_asc_categoria').select("08.00 INFRAESTRUTURA");
       cy.get('.btn-info').click()

       

    });
});
