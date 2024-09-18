const soma = (a,b) => a+b;
const subtrai = (a,b) => a - b;  
const mult = (a,b) => a*b;
const divide = (a,b) => a/b;

function resultado(a,b){
    console.log(`${a} + ${b} = `, soma(a,b));
    console.log(`${a} - ${b} = `, subtrai(a,b));
    console.log(`${a} * ${b} = `, mult(a,b));
    console.log(`${a} / ${b} = `, divide(a,b));
}

resultado(5,4);
