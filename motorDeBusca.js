// motorDeBusca.js

class MotorDeBusca {
  // Injetamos a dependência do banco para facilitar a troca do real pelo stub durante o teste
  constructor(bancoDeDados) {
    this.db = bancoDeDados; 
  }

  pesquisar(termo) {
    try {
      const resultado = this.db.buscarLivro(termo);
      
      if (!resultado) {
        return "Nenhum livro encontrado para sua busca.";
      }
      
      return `Sucesso: Encontramos '${resultado.titulo}' no nosso acervo.`;
      
    } catch (erro) {
      // Garantindo que a interface receba uma mensagem amigável em caso de falha do banco [cite: 166]
      return "Sistema temporariamente indisponível. Tente novamente mais tarde."; 
    }
  }
}

module.exports = MotorDeBusca;
