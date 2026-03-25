# 📚 Sistema de Biblioteca Digital - Testes de Integração

[cite_start]Este repositório contém a implementação prática de testes de integração para validar o fluxo central de uma biblioteca digital[cite: 245]. [cite_start]O foco é garantir a comunicação correta e os contratos entre os módulos durante o seguinte processo: **Buscar livro → Verificar estoque → Empréstimo**[cite: 260].

## 🚀 Tecnologias e Conceitos Aplicados
* **Ecossistema:** Node.js / JavaScript
* [cite_start]**Estratégia de Integração:** Top-Down [cite: 264]
* [cite_start]**Simulação de Dependências:** Uso de **Stubs** para isolar a regra de negócio e simular o comportamento do Banco de Dados[cite: 265].

## 📋 Cenários de Teste Automatizados
Os scripts cobrem não apenas o caminho feliz, mas também o tratamento de exceções para evitar falhas silenciosas no sistema:
1. **Caminho Feliz:** Livro encontrado, estoque disponível e fluxo concluído.
2. **Validação de Estoque:** Livro encontrado, mas sem unidades disponíveis no momento.
3. **Dados Inexistentes:** Busca por um título que não consta no acervo do banco.
4. **Tratamento de Exceções (Resiliência):** Simulação de queda de conexão com o banco de dados para testar a resposta do motor de busca.

## 💻 Como rodar o projeto localmente
1. Clone este repositório.
2. Certifique-se de ter o Node.js instalado na sua máquina.
3. Execute o script de testes no terminal:
   `node testeIntegracao.js`
