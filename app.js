// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

const fromDollarToYen = function (valueInYen){
let valueInDollar = valueInYen *106.6;
return valueInDollar;
}

const fromEuroToDollar = function (valueInEuro){
let valueInDollar = valueInEuro * 1.2;
return valueInDollar;
}

const fromYenToPound = function (valueInPound){
let valueInYen = valueInPound * 159.9;
return valueInYen;
}


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromDollarToYen , fromEuroToDollar , fromYenToPound };