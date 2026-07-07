const listaDeCompras = ["arroz", "feijão", "macarrão", "carne", "frango"];
console.log(listaDeCompras);

listaDeCompras.push("leite");
console.log(listaDeCompras);

console.log(listaDeCompras.length);
console.log(listaDeCompras[listaDeCompras.length - 1]);

listaDeCompras[listaDeCompras.length] = "ovo";
console.log(listaDeCompras);