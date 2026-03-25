// testeIntegracao.js
const bancoDeDadosStub = require('./bancoDeDadosStub');
const MotorDeBusca = require('./motorDeBusca');

function rodarTestes() {
  console.log("Iniciando testes de integração (Motor de Busca + BD)...\n"); // [cite: 169]

  // Instanciamos o motor passando o nosso Stub no lugar do banco real
  const motor = new MotorDeBusca(bancoDeDadosStub);

  // --- Cenário 1: Caminho Feliz ---
  const resultado1 = motor.pesquisar("Código Limpo");
  const passou1 = resultado1 === "Sucesso: Encontramos 'Código Limpo' no nosso acervo.";
  console.log(`[Cenário 1 - Sucesso] Teste ${passou1 ? "PASSOU ✅" : "FALHOU ❌"} -> Retorno: ${resultado1}`);

  // --- Cenário 2: Tratamento de livro não encontrado ---
  const resultado2 = motor.pesquisar("Livro Inexistente");
  const passou2 = resultado2 === "Nenhum livro encontrado para sua busca.";
  console.log(`[Cenário 2 - Sem dados] Teste ${passou2 ? "PASSOU ✅" : "FALHOU ❌"} -> Retorno: ${resultado2}`);

  // --- Cenário 3: Testando resiliência a erros de integração ---
  const resultado3 = motor.pesquisar("ForcarErroDB");
  const passou3 = resultado3 === "Sistema temporariamente indisponível. Tente novamente mais tarde.";
  console.log(`[Cenário 3 - Exceção]   Teste ${passou3 ? "PASSOU ✅" : "FALHOU ❌"} -> Retorno: ${resultado3}`);
}

rodarTestes(); // [cite: 169]
