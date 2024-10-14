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

        //checagem dos itens para edição 
        cy.get('#tblBody > :nth-child(1) > :nth-child(2)').should('contain', '526')
        cy.get('#tblBody > :nth-child(2) > :nth-child(2)').should('contain', '525')
        cy.get('#tblBody > :nth-child(3) > :nth-child(2)').should('contain', '524')

        //edição nº 526
        cy.get('[href="https://erpdev.ascbrazil.com.br/produto/view/cod_produto/526"]').click()
        cy.get('#dsc_produto').type('ASC SaKey Pro - REALIZADO A EDICAO DOS COMPONENTE 526');
        cy.get('.btn-info').click()

        //edição nº 525
        cy.get('[href="https://erpdev.ascbrazil.com.br/produto/view/cod_produto/525"]').click()
        cy.get('#dsc_produto').type('ASC SaKey Pro - REALIZADO A EDICAO DOS COMPONENTE 525');
        cy.get('.btn-info').click()

        //edição nº 524
        cy.get('[href="https://erpdev.ascbrazil.com.br/produto/view/cod_produto/524"]').click()
        cy.get('#dsc_produto').type('ASC SaKey Pro - REALIZADO A EDICAO DOS COMPONENTE 524');
        cy.get('.btn-info').click()
    });
});