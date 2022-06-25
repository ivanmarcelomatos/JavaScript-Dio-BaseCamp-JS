// link videoaula relacionada na Dio - Funções - Estrutura e Função Anônima - JavaScript
// https://web.dio.me/course/funcoes/learning/3a696f71-bd28-494e-a27e-1b1ba73627c8?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined


// //funções
// function funcaoImprimeStringParametro (parametro) {
//     variavelDoEscopoLocalDaFuncao = parametro;
//     console.log(variavelDoEscopoLocalDaFuncao);
// }

// function funcaoRetornaStringParametro (parametro) {
//     variavelDoEscopoLocalDaFuncao = parametro;
//     return variavelDoEscopoLocalDaFuncao;
// }

// funcaoImprimeStringParametro("Ivan");

// console.log(funcaoRetornaStringParametro("Marcelo"));






// // //funções anônimas
// // https://web.dio.me/course/funcoes/learning/3a696f71-bd28-494e-a27e-1b1ba73627c8?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

// const soma = function (a, b) { //observe que não foi declarado o nome da função; e que uma variável pode armazenar uma função
//     return a + b;
// }

// console.log(soma(1, 2)); // 3
// console.log(soma(2, 4)); // 6








// //funções autoinvocáveis e callbacks - IIFE
// https://web.dio.me/course/funcoes/learning/80cd7e6d-5885-4095-afed-fb296b91a376?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

// (
//     function () {
//         let name = "Digital Innovation One";
//         return name;
//     }
// )();




// const soma3 = (
//     function(a, b) {
//         return a + b;
//     }
// )(1, 2); 









//Callbacks
//Funções passadas como argumentos para outras funções

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);


console.log(resultSoma); //3
console.log(resultSub); //-1