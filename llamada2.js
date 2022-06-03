let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1.00;

let operador=prompt(`¿A que operador llamaste?\n1) Fijo \n2) Claro \n3) Movistar \n4) Entel`);
let minhablado=parseInt(prompt(`¿Cuantos minutos duro la llamada?`));

let cfijo=parseFloat(minhablado*fijo);
let cclaro=parseFloat(minhablado*claro);
let cmovistar=parseFloat(minhablado*movistar);
let centel=parseFloat(minhablado*entel);

if(operador=="Fijo"){
    alert(`El costo de la llamada a Fijo es S/ ${cfijo}`);
}else if(operador=="Claro"){
    alert(`El costo de la llamada a Claro es S/ ${cclaro}`);
}else if(operador=="Movistar"){
    alert(`El costo de la llamada a Movistar es S/ ${cmovistar}`);
}else if(operador=="Entel"){
    alert(`El costo de la llamada a Entel es S/ ${centel}`);
}else{
    alert("Marcaste mal papi")
}