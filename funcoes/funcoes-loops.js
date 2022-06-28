// videoaula relacionada na DIO - Funções - Loops - IF/Else e switch
// https://web.dio.me/course/funcoes/learning/b42a2926-2274-44df-9158-815a75d5af8c?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




// // If/Else
// function numeroPositivo(num) {
//     let resultado;

//     if (num < 0) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado;
// }

// numeroPositivo(2);// true

// numeroPositivo(-9); // false
// function numeroPositivo(num) {
//     let resultado;
//     if(num < 0) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado;
// }

// numeroPositivo(2); // true

// numeroPositivo(-9); // false
// function numeroPositivo(num) {
//     let resultado;

//     if (num < 0) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado
// }

// numeroPositivo(2);// true

// numeroPositivo(-9); // false
// function numeroPositivo(num) {
//     let resultado;

//     if (num < 0) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado
// }














// // If/Else {outra forma, armazenando a condicional dentro de uma constante}
// function numeroPositivo(num) {
//     let resultado;

//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado;
// }

// numeroPositivo(50); //true
// numeroPositivo(-10); //false
// function numeroPositivo(num) {
//     let resultado;

//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     console.log(resultado);
//     return resultado;
// }

// numeroPositivo(50); // true;
// numeroPositivo(-10); // false;














// // If/Else, Outra Forma, sem usar a variável resultado, reduzindo o uso da memória
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         console.log(false);
//         return false;
//     }
//     console.log(true);
//     return true;
// }

// numeroPositivo(-30); // false

// numeroPositivo(80); // true
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         console.log(false);
//         return false;
//     }
//     console.log(true);
//     return true;
// }

// numeroPositivo(-30); // false

// numeroPositivo(80); // true
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         console.log(false);
//         return false;
//     }
//     console.log(true);
//     return true;
// }

// numeroPositivo(-30); // false

// numeroPositivo(80); // true












// If/else
// JavaScript não tem elseif. é preciso separar else if 
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        console.log("Esse número é negativo!")
        return "Esse número é negativo!";
    } else if(!ehNegativo && maiorQueDez) {
        console.log("Esse número é positivo e maior que 10!");
        return "Esse número é positivo e maior que 10!"
    }
    console.log("Esse número é positivo!");
    return "Esse número é positivo";
}

numeroPositivo(2); // Esse número é positivo

numeroPositivo(-2); // Esse número é negativo

numeroPositivo(40); // Esse número é positivo e maior que 10!

numeroPositivo(0); // {mostra zero como positivo, mas matematicamente o zero é considerado um número neuro. nem é positivo nem é negativo}















// // Switch/Case
// // compara sempre valor E TIPO {===}, sendo por isso uma comparação bem mais estrita que o if
// //sempre precisa de um valor default
// //ideal para se comparar muitos valores

// function getAnimal(id) {
//     switch(id) {
//         case 1:
//             console.log("cão");
//             return "cão";
//         case 2:
//             console.log("gato");
//             return "gato";
//         case 3:
//             console.log("pássaro");
//             return "pássaro";
//         default:
//             console.log("peixe");
//             return "peixe";
//     }
// }

// getAnimal(1); // cão

// getAnimal(4); // default => peixe

// getAnimal("1"); // default => peixe










// // For
// // loop dentro de elementos iteráveis (arrays, strings)
// function multiplicaPorDois(arr) {
//     let multiplicados = [];

//     for(let i = 0; i < arr.length; i++) {
//         multiplicados.push(arr[i] * 2);
//     }
    
//     console.log(multiplicados);
//     return multiplicados;
// }

// const meusNumeros = [2, 33, 456, 356, 40];

// multiplicaPorDois(meusNumeros); // 4, 66, 912, 712, 80











// for ... in
// loop entre propriedades enumeráveis de um objeto


// function forInExemplo(obj) {
//     for (prop in obj) { // o prop se refere a cada propriedade no objeto
//         console.log(prop);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador"
// }

// forInExemplo(meuObjeto);
// // nome
// // idade
// // cidade







// function forInExemplo(obj) {
//     for (prop in obj) {
//         console.log(obj[prop]);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador"
// }

// forInExemplo(meuObjeto);
// //João
// //20
// //Salvador











// // for of
// // loop entre estruturas iteráveis (arrays, strings)

// function logLetras(palavra) {
//     for (letra of palavra) {
//         console.log(letra);
//     }
// }

// const palavra = "abacaxi";
// logLetras(palavra);
// //a
// //b
// //a
// //c
// //a
// //x
// //i









// function logNumeros(nums) {
//     for (num of nums) {
//         console.log(num);
//     }
// }

// const nums = [30, 20, 233, 2];

// logNumeros(nums);
// //30
// //20
// //233
// //2










// // While
// // executa até que a condição se torne falsa

// function exemploWhile() {
//     let num = 0;

//     while(num <=5) {
//         console.log(num);
//         num++;
//     }
// }

// exemploWhile();
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5









// // Do While
// // também executa até que a condição se torne falsa
// // mas A PRIMEIRA EXECUÇÃO SEMPRE OCORRE

// function exemploDoWhile() {
//     let num = 6; // mesmo com o início fora da condição, é garantida uma execução

//     do {
//         console.log(num);
//         num++;
//     } while (num <=5);
// }

// exemploDoWhile();
// // 6


