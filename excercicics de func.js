//3.1
let num = prompt(Number("Escriu un numero:"));
let resultat = "";
function parell (num){
if (num % 2 === 0){
    resultat = "parell";
    return resultat;
}else{
    resultat = "imparell";
    return resultat;
}
}
console.log(resultat);

//3.2
let any = prompt(Number("Introdueix un any:"));
let resultat = "";
funcion anyT (any){
if (any % 4 ===0 || any % 400 === 0){
    resultat = "any de traspàs";
    return resultat;
}else if (any % 100 ===0){
    resultat = "no és un any de traspàs"
    return resultat;
}else{
    resultat = "no és un any de traspàs"
    return resultat;
}
}
console.log(resultat);

//3.3 Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
let N = prompt(Number("Escriu un nombre enter:"));
//n?? n2??
function pipas(N){
    if(n > 0 && N >== n){
        resultat = 1/n2;
        return resultat;
    }
}
console.log(resultat);

//3.4
let resultat = "";
function calcularNota(notaAC, notaP, notaE){
    if (notaAC >== 5) {
        notaFinal= 0,2 * notaAC + 0,4 * notaP + 0,4 * notaE;
    }else{
        notaFinal = 0,4 * notaP + 0,6 * notaE;
    }
    if (notaFinal < 5){
        resultat = D;
        return resultat;
    }else if (notaFinal >== 5 || notaFinal < 6.5){
        resultat = C;
        return resultat;
    }else if (notaFinal >== 6.5 || notaFinal < 8){
        resultat = B;
        return resultat;
    }else if (notaFinal >== 8 || notaFinal < 10){
        resultat = A;
        return resultat;
    }else if (notaFinal ===10){
        resultat = H;
        return resultat;
    }
}
console.log (resultat);

//3.5
let numP5 =0;
function paraulesTwitter(tuit){
    t1 = tuit.split(",");
    t2 = tuit.split(" ");
    if (t1.length = 5 || t2.length = 5){
        numP5 ++1;
    }
    return numP5;
}
console.log("el numero de paraules amb 5 lletres es" + numP5);



