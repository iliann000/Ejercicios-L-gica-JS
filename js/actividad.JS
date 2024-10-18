//Simulacion de un sistema de estacionamiento

let Hrs_E = prompt("Ingresa el tiempo que ha estado estacionado");
console.log("El tiempo que ha estado estacionado es "+Hrs_E);

if(Hrs_E <=0.5){
    console.log("No debe pagar")
}else if(Hrs_E > 0.5 && Hrs_E <2){
    console.log("Debe pagar; "+Hrs_E*10)
}else if(Hrs_E >2 && Hrs_E <3){
    console.log("Debe pagar; "+Hrs_E*25)
}else{
    console.log("Debe pagar; "+Hrs_E*30)
}