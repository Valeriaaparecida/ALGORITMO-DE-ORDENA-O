const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)  // AQUI SE GUARDA O VALOR DO INDICE DO ARRAY DE OBJETO DE LIVROS

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);
    
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
