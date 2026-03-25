// bancoDeDadosStub.js

// O Stub possui os mesmos métodos que o banco real teria, mas com respostas falsas e controladas[cite: 86].
const bancoDeDadosStub = {
  buscarLivro: function(termoDeBusca) {
    // Simulamos o Caso 1: Caminho feliz (Livro existe) [cite: 161, 162]
    if (termoDeBusca === "Código Limpo") {
      return { id: 101, titulo: "Código Limpo", autor: "Robert C. Martin", estoque: 2 };
    }
    
    // Simulamos o Caso 4: Livro não existe
    if (termoDeBusca === "Livro Inexistente") {
      return null; 
    }
    
    // Simulamos o Caso 3: Banco de dados offline/Erro [cite: 165, 166]
    if (termoDeBusca === "ForcarErroDB") {
      throw new Error("ECONNREFUSED: Falha na conexão com o banco de dados");
    }
  }
};

module.exports = bancoDeDadosStub;
