class Veiculo{
    constructor(fabricante,marca,ano,tipo,qtdPortas){
        this.fabricante = fabricante;
        this.marca = marca;
        this.ano = ano;
        this.tipo = tipo;
        this.qtdPortas = qtdPortas;
    }
    mostrarDadosDoVeiculo(){
        console.log(`${this.fabricante} ${this.marca} ${this.ano} ${this.tipo} ${this.qtdPortas} portas`);
    }
}

class Moto extends Veiculo{
    constructor(fabricante,marca,ano){
        super(fabricante,marca,ano);
    }
    mostrarDadosDoVeiculo(){
        console.log(`${this.fabricante} ${this.marca} ${this.ano}`)
    }

}

class Carro extends Veiculo{
    constructor(fabricante,marca,ano,tipo,qtdPortas){
        super(fabricante,marca,ano,tipo,qtdPortas);
    }
    mostrarDadosDoVeiculo(){
        console.log(`${this.fabricante} ${this.marca} ${this.ano} ${this.tipo} ${this.qtdPortas} portas`);
    }
}

// class Carro{
//     constructor(fabricante, marca,ano,tipo,qtdPortas){
//         this.fabricante = fabricante; //propriedade da classe
//         this.marca = marca;
//         this.qtdPortas = qtdPortas;
//         this.tipo = tipo;
//         this.ano = ano;
//     }
//     mostrarDadosDoCarro(){
//         console.log(this.fabricante+' '+this.marca+' '+this.qtdPortas+' '+this.tipo+' '+this.ano);
//         console.log(`${this.fabricante} ${this.marca} ${this.qtdPortas} ${this.tipo} ${this.ano}`);

//     }

//     mostrarMarca(){
//         console.log(`O modelo do carro é ${this.marca}`);
//     }
//     acelerar(){
//         console.log('Acelerando...');
//     }
// }
 const meuCarro = new Veiculo("Ford", "ka", "2000", "sedan", 4);
 const minhaMoto = new Moto("");
 
 meuCarro.mostrarDadosDoVeiculo();
//  meuCarro.mostrarMarca();
//  meuCarro.acelerar();