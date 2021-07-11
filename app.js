const livros = require('./dataBase');
// Entrada de usuario 
const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja buscar um livro? [S/N]');

// Se for sim exibe as categorias e pergunta qual delas usuario escolhe

if(entradaInicial.toLocaleUpperCase() == 'S')
{
    console.log("Essas são as categorias disponiveis: ");
    console.table(livros.map(categoria => categoria.categoria));
    const escolha = readline.question('Qual categoria você escolhe?')

    const retorno = livros.filter(livro => livro.categoria === escolha);
    console.table(retorno);

}
// Se escolher não exibe todos os livros por ordem crescente de paginas 
else
{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log("Estes são todos os Livros ordenados por paginas .")
    console.table(livrosOrdenados);
}

