const frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];

// Função para exibir as frutas no console
function exibirFrutas() {
    console.log(frutas);
}
console.log('Lista de frutas inicial:');
exibirFrutas(); // Exibindo a lista inicial de frutas

console.log('Terceira fruta da lista:', frutas[2]); // Acessando a terceira fruta (índice 2 porque os índices começam em 0)

frutas[1] = 'kiwi'; // Alterando a segunda fruta da lista
exibirFrutas(); // Exibindo a lista atualizada de frutas

// Adicionando duas novas frutas ao final da lista
frutas.push('manga', 'morango');
exibirFrutas();