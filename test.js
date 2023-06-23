// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('One euro should be 1.206 dollars', function() {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    // let total = sum(14, 9);
const {fromEuroToDollar} = require("./app.js")

    // esperamos que la suma de esos 2 números sea 23
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test('One dollar should be 106.6 yenes', function() {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    // let total = sum(14, 9);
const {fromDollarToYen} = require("./app.js")

    // esperamos que la suma de esos 2 números sea 23
    expect(fromDollarToYen(3.5)).toBe(373.09999999999997);
});

test('One yen should be 159.9 pounds', function() {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    // let total = sum(14, 9);
const {fromYenToPound} = require("./app.js")

    // esperamos que la suma de esos 2 números sea 23
    expect(fromYenToPound(3.5)).toBe(559.65);
});