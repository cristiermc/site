function alerta(){
    console.log("Alerta");
}

setTimeout(alerta, 3000)
setTimeout(() => {
    console.log("alerta 2");},3000);

setInterval(() => {
    console.log("Alerta Interval");
}, 2000);