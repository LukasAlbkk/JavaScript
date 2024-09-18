let livros = [
    {titulo:'livro1',autor: 'autor1', quantidade: 10},
    {titulo:'livro2',autor: 'autor2', quantidade: 1123},
    {titulo:'livro3',autor: 'autor3', quantidade: 1},
    {titulo:'livro4',autor: 'autor4', quantidade: 433},
    {titulo:'livro5',autor: 'autor5', quantidade: 323},
    {titulo:'livro6',autor: 'autor6', quantidade: 2},
    {titulo:'livro7',autor: 'autor7', quantidade: 42}
]

let temp = 0;

const adicionarLivro = (titulo, autor, quantidade) => {
    for(let livro of livros){
        if(livro.titulo == titulo){
            temp++;
        }
    }
    if(temp == 0){
        livros.push({titulo,autor,quantidade});
        console.log(`Livro ${titulo} adicionado com sucesso!`)
    }
    else{
        console.log('Erro: Livro já presente')
    }
}

const removerLivro = (titulo) => {
    let indice = livros.findIndex(livros => livros.titulo === titulo);
    if (indice !== -1) {
        livros.splice(indice, 1);
        console.log(`Livro ${titulo} removido com sucesso!`);
    }
    else{
        console.log('Erro ao remover: Livro pode não estar presente!');
    }
}

const atualizarQuantidade = (titulo, novaQuantidade) => {
    for(let livro of livros ){
        if(livro.titulo == titulo){
            livro.quantidade = novaQuantidade;
            console.log(`Quantidade do livro ${titulo} alterada com sucesso!`);
        }
    }
}

const listarLivros = () => {
    for(let livro of livros){
        console.log(livro);
    }
}

adicionarLivro('livro99', 'lucas', 10);
listarLivros();
console.log('--------------------------------');
removerLivro('livro3');
listarLivros();
console.log('--------------------------------');
atualizarQuantidade('livro2', 1000);
listarLivros();

