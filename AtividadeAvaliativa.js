let a = 15;
let b = 100;
let i = 0;

if ( a < 0) {
    console.log("Número Inválido.")
} else if ( a % 1 != 0) {
    console.log("Número Inválido.")
} else if ( a == 0) {
    console.log("Um dos números é zero. Tente outro número.")
} else if ( b < 0) {
    console.log("Número Inválido.")
} else if ( b % 1 != 0) {
    console.log("Número Inválido.")
} else if ( b == 0) {
    console.log("Um dos números é zero. Tente outro número.")
} else {
    console.log("Tabuada do " + a + " ao " + b + ":")
    for (let i = 0; i <= b; i++) {
    let resultado = a*i;
    console.log(a+" x "+i+" = "+resultado);
}
}