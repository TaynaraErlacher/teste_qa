Processo Seletivo de QA - Gerenciamento de Produtos 
1. Objetivo dos Testes
Este documento tem como objetivo validar as funcionalidades relacionadas ao gerenciamento de produtos, incluindo cadastro, edição, exclusão e listagem de produtos. O foco dos testes é garantir que todas essas operações funcionem corretamente, observando as restrições necessárias, como a edição e exclusão de produtos apenas pelo usuário que os cadastrou.

2. Funcionalidades Testadas
Cadastro de Produtos e Listagem




Edição de Produtos (restrito a itens cadastrados pelo usuário)
- Protocolo Nº 526 Editado

- Protocolo Nº 525 Editado

- Protocolo Nº 524 Editado



Exclusão de Produtos (restrito a itens cadastrados pelo usuário)


3. Casos de Teste
3.1 Cadastro de Produtos
ID do Caso de Teste: CT-001 
Título: Cadastro de um novo produto/processo
Descrição: Verificar se o sistema permite o cadastro de um novo produto com todas as informações necessárias e se ele é listado corretamente.
Pré-condições: O usuário deve estar logado no sistema.

Execução:
Navegar até a página de cadastro de produtos.
Preencher todos os campos obrigatórios (nome do produto, SKU, preço, categoria, etc.).
Clicar no botão "Cadastrar".
Verificar se o produto é exibido na lista de produtos.
Resultado Esperado: O produto deve ser cadastrado com sucesso e exibido corretamente na lista.
Resultado Obtido: Sucesso.
Problemas Identificados: N/A.
	Necessidade de preenchimento dos campos principais com mensagem direcionando o usuário conforme ilustração.


3.2 Edição de Produtos
ID do Caso de Teste: CT-002
Título: Edição de um produto cadastrado pelo usuário
Descrição: Testar se o sistema permite que o usuário edite os produtos/processos cadastrados.
Pré-condições: O produto deve estar cadastrado pelo usuário.
Passos para Execução:
Navegar até a lista de produtos.
Selecionar um produto cadastrado pelo próprio usuário.
Alterar os dados desejados.
Clicar em "Salvar" para confirmar a edição.
Verificar se as alterações aparecem corretamente na lista de produtos.
Resultado Esperado: O sistema deve permitir a edição dos produtos cadastrados e refletir as alterações na lista de produtos.
Resultado Obtido: Sucesso.
Problemas Identificados: As edições podem ser realizadas por qualquer usuário do sistema.

3.3 Exclusão de Produtos
ID do Caso de Teste: CT-003
Título: Exclusão de um produto cadastrado pelo usuário
Descrição: Verificar se o sistema permite que o usuário exclua os produtos/processos cadastrados.
Pré-condições: O usuário deve estar logado e o produto deve estar cadastrado.
Passos para Execução:
Navegar até a lista de produtos.
Selecionar um produto cadastrado.
Clicar no botão "Excluir".
Confirmar a exclusão.
Verifique se o produto foi removido corretamente da lista.
Resultado Esperado: O sistema deve permitir excluir o produto e removê-lo da lista de produtos.
Resultado Obtido: Sucesso.
Problemas Identificados: As exclusões podem ser realizadas por qualquer usuário do sistema.

3.4 Listagem de Produtos
ID do Caso de Teste: CT-004
Título: Visualização da lista de produtos
Descrição: Testar se o sistema exibe corretamente todos os produtos cadastrados, tanto pelo próprio usuário quanto por outros usuários, com suas respectivas informações (nome, descrição, SKU).
Pré-condições: Produtos devem estar cadastrados no sistema.
Passos para Execução:
Navegar até a página de listagem de produtos.
Verificar se todos os produtos estão sendo exibidos corretamente.
Checar se os produtos cadastrados pelo usuário são destacados ou separados corretamente dos produtos de outros usuários (se aplicável).
Resultado Esperado: A lista de produtos deve exibir corretamente todos os produtos cadastrados com suas informações.
Resultado Obtido: Sucesso.
Problemas Identificados: N/A.

4. Resultados Gerais dos Testes
Caso de Teste
Resultado Esperado
Resultado Obtido
Problemas Identificados
CT-001
Produto cadastrado com sucesso
[Sucesso/Erro]
[N/A]
CT-002
Produto editado com sucesso
[Sucesso/Erro]
[N/A]
CT-003
Produto excluído com sucesso
[Sucesso/Erro]
[N/A]
CT-004
Lista exibida corretamente
[Sucesso/Erro]
[N/A]


5. Problemas Identificados
CT-001: A função de criação dos produtos ou processos apresentou erro no código ao ser executada. O comando de itens cadastrados pelo usuário pode ser exibida ao utilizar o comando (cypress/support/e2e.js)


Todo código estará disponível no Github - https://github.com/TaynaraErlacher 
Link de acesso: https://github.com/TaynaraErlacher/teste_qa




	

6. Considerações Finais
Com base nos testes realizados, o sistema de gerenciamento de produtos apresenta um desempenho geral satisfatório, com exceção de [caso de teste com erro]. Recomendamos [medidas corretivas] para garantir que [problema] seja resolvido.

