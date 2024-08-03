const livros = require('./listaLivros');


function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
    //LEMBRE QUE A VARIÁVEL ATUAL E MAISBARATO ESTÁ GUARDANDO O VALOR DO INDICE DE CADA PRECO
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor;
