const   carros = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "McLaren"];

const conteudo = document.getElementById("conteudo");

var dados;
var i;

function criaSecaoCarros(titulo, dadosf) {
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>"+titulo+"</h2>"+dadosf;
  conteudo.appendChild(secao);
}


dados = "";
i = 0;

// Loop through the carros array and create a list item for each car
while (i < 5) {
  dados += "<p>"+carros[i]+"</p>";
  i++;
}

criaSecaoCarros("Loop com While",+dados); 

dados2 = "";
i2 = 0;

// Loop through the carros array and create a list item for each car
while (i2 < carros.length) {
  dados2 += "<p>"+carros[i2]+"</p>";
  i2++;
}

criaSecaoCarros("Loop com While melhorado",+dados2);

do{
  dados += "<p>"+carros[i]+"</p>";
  i++;
}while (i < carros.length)
  criaSecaoCarros("Loop com Do While",+dados);

dados = "";


for(i=0;i < carros.length; i++){
  dados += "<p>"+carros[i]+"</p>";
}

criaSecaoCarros("loop for", dados);

dados = "";
for(let carro of carros){
  //incrementando parada add break, para pular add continue
  if(carro === "Porsche")
    break;
  dados += "<p>"+carro+"</p>";
}

criaSecaoCarros("loop for OF", dados);

let carro1 = {marca: "Ford", modelo: "Ka", ano: "2015"};
let carro2 = {marca: "Fiat", modelo: "Uno", ano: "2000"};

let carros2 = [];
carros2.push(carro1);
carros2.push(carro2);

dados = "";

for(let carro of carros2){
  let propriedades = "";

  for(let prop in carro){
    propriedades += carro[prop]+" | ";
  }
  dados += "<p>"+propriedades+"</p>";
}

criaSecaoCarros("loop for in", dados);

dados = "";

carros.forEach((carro) => {
  dados += "<p>"+carro+"</p>";
})

criaSecaoCarros("Loop for each", dados);