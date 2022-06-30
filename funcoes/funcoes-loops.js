// videoaula relacionada na DIO - Funções - Loops - IF/Else e switch
// https://web.dio.me/course/funcoes/learning/b42a2926-2274-44df-9158-815a75d5af8c?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




// // If/Else

//_____________________________________________
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
//______________________________________________
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
//________________________________________________
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
//__________________________________________________
// function numeroPositivo(num) {
//     let resultado;

//     if (num < 0) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     return resultado;
// }

// console.log(numeroPositivo(2));

// console.log(numeroPositivo(-9));
//___________________________________________________




















// // If/Else {outra forma, armazenando a condicional dentro de uma constante}

//_________________________________________________
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
//___________________________________________________
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
//____________________________________________________
// function numeroPositivo(num) {
//     let resultado;

//     const ehNegativo = num < 0;

//     if(ehNegativo) {
//         resultado = false;
//     } else {
//         resultado = true;
//     }
//     return resultado;
// }

// console.log(numeroPositivo(50));

// console.log(numeroPositivo(-10));
//_____________________________________________________


















// // If/Else, Outra Forma, sem usar a variável resultado, reduzindo o uso da memória

//_________________________________________________
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
//_________________________________________________
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
//_________________________________________________
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
//_________________________________________________
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;

//     if (ehNegativo) {
//         return false;
//     }
//     return true;
// }

// console.log(numeroPositivo(-30));

// console.log(numeroPositivo(80));
//_______________________________________________
















// If/else
// JavaScript não tem elseif. é preciso separar else if 

//_____________________________________________________________
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;
//     const maiorQueDez = num > 10;

//     if(ehNegativo) {
//         console.log("Esse número é negativo!")
//         return "Esse número é negativo!";
//     } else if(!ehNegativo && maiorQueDez) {
//         console.log("Esse número é positivo e maior que 10!");
//         return "Esse número é positivo e maior que 10!"
//     }
//     console.log("Esse número é positivo!");
//     return "Esse número é positivo";
// }

// numeroPositivo(2); // Esse número é positivo

// numeroPositivo(-2); // Esse número é negativo

// numeroPositivo(40); // Esse número é positivo e maior que 10!

// numeroPositivo(0); // {mostra zero como positivo, mas matematicamente o zero é considerado um número neuro. nem é positivo nem é negativo}
//_______________________________________________________________
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;
//     const maiorQueDez = num > 10;

//     if (ehNegativo) {
//         return `${'esse número é negativo'}`;
//     } else if (!ehNegativo && maiorQueDez) {
//         return "Esse número é positivo e maior que 10";
//     }
//     return "Esse número é positivo";
// }

// console.log(numeroPositivo(-30));

// console.log(numeroPositivo(0));
//_________________________________________________________________
// function numeroPositivo(num) {
//     const ehNegativo = num < 0;
//     const maiorQueDez = num > 10;

//     if (ehNegativo) {
//         return `${'esse número é negativo'}`;
//     } else if (!ehNegativo && maiorQueDez) {
//         return `${'esse número é positivo e maior que dez'}`;
//     }
//     return `${'esse número é positivo'}`;
// }

// console.log(numeroPositivo(-30));
// console.log(numeroPositivo(0));
// console.log(numeroPositivo(40));
//___________________________________________________________________



















// // Switch/Case
// // compara sempre valor E TIPO {===}, sendo por isso uma comparação bem mais estrita que o if
// //sempre precisa de um valor default
// //ideal para se comparar muitos valores

//______________________________________________________________
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
//________________________________________________________________
// function getAnimal(id) {
//     switch(id) {
//         case 1:
//             return "cão";
//         case 2:
//             return "gato";
//         case 3:
//             return "pássaro";
//         case 4:
//             return "peixe";
//         default:
//             return "apenas são válidos inteiros de 1 a 4";
//     }
// }

// console.log(getAnimal(1));

// console.log(getAnimal(4));

// console.log(getAnimal(5));
//______________________________________________________________
// function getAnimal(id) {
//     switch(id) {
//         case 1:
//             return "cão";
//         case 2:
//             return "gato";
//         case 3:
//             return "pássaro";
//         case 4:
//             return "peixe";
//         default:
//             return "apenas são válidos inteiros de 1 a 4";
//     }
// }

// console.log(getAnimal(2));

// console.log(getAnimal(4));

// console.log(getAnimal(6));
//_____________________________________________________________


















// // For {exemplo com array}
// // loop dentro de elementos iteráveis (arrays, strings)

//__________________________________________________________
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
//___________________________________________________________











// // For {exemplo com string}
// // loop dentro de elementos iteráveis (arrays, strings)

//____________________________________________________________
// function stringParaArray(str) {
//     let arrayDaPalavra = [];

//     for (let i = 0; i < str.length; i++) {
//         arrayDaPalavra.push(str[i]);
//     }
//     return arrayDaPalavra;
// }

// console.log(stringParaArray("doméstico"));

// console.log(stringParaArray("animosidade"));
//____________________________________________________________





















// // For {aproveitando pra mostrar novamente técnica rest}
// // loop dentro de elementos iteráveis (arrays, strings)
//__________________________________________________________
// function multiplicaPorDois(...arr) { //usando técnica rest para juntar num array os valores recebidos em elementos separados
//     let multiplicados = [];

//     for (let i = 0; i < arr.length; i++) {
//         multiplicados.push(arr[i] * 2);
//     }
//     return multiplicados;
// }

// console.log(multiplicaPorDois(3,4,6));
//___________________________________________________________


















// for ... in
// loop entre propriedades enumeráveis de um objeto

//____________________________________________________________
// function forInExemplo(obj) {
//     for(aliasParaPropriedades in obj) {
//         console.log(aliasParaPropriedades);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador",
// }

// console.log(meuObjeto);

// forInExemplo(meuObjeto);
//____________________________________________________________
// function forInExemplo(obj) {
//     for(aliasParaPropriedades in obj) {
//         console.log(aliasParaPropriedades);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador",
// }

// console.log(meuObjeto);

// forInExemplo(meuObjeto);
//_____________________________________________________________














// for ... in {exemplo de outra forma com []}
// loop entre propriedades enumeráveis de um objeto

//______________________________________________________________
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
//______________________________________________________________
// function forInExemplo(obj) {
//     for (propriedades in obj) {
//         console.log(obj[propriedades]);
//     }
// }

// const meuObjeto = {
//     nome: "João",
//     idade: 20,
//     cidade: "Salvador",
// }

// console.log(meuObjeto);

// forInExemplo(meuObjeto);
//______________________________________________________________

















// // for ... of 
// // loop entre estruturas iteráveis (arrays, strings)


// // for ... of {exemplo com string}
//__________________________________________________
// function forOf(palavra) {
//     for (aliasDoConstituinte of palavra) {
//         console.log(aliasDoConstituinte);
//     }
// }

// const palavra = "tucunaré";
// forOf(palavra);
//__________________________________________________
// function forOf(palavra) {
//     for (aliasDoConstituinte of palavra) {
//         console.log(aliasDoConstituinte);
//     }
// }

// const palavra = "avião";
// forOf(palavra);
//__________________________________________________















// // for ... of {exemplo com array}
//____________________________________________________
// function forOf(arr) {
//     for (aliasDoConstituinte of arr) {
//         console.log(aliasDoConstituinte);
//     }
// }

// const vetor=[3,4,6,7,[66,55,44],9];
// forOf(vetor);
//____________________________________________________
// function forOf(arr) {
//     for (aliasDoConstituinte of arr) {
//         console.log(aliasDoConstituinte);
//     }
// }

// const vetor = [3,6,7,[44,44,55],2,33322,2];
// forOf(vetor);
//___________________________________________________


















// // While
// // executa até que a condição se torne falsa

//_______________________________________________________________
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
//________________________________________________________________
// function exemploWhile() {
//     let num = 0;

//     while(num<=5) {
//         console.log(num);
//         num++;
//     }
// }
// exemploWhile();
//_______________________________________________________________
// (function exemploWhile() {
//     let num = 0;

//     while(num <= 5) {
//         console.log(num);
//         num++;
//     }
// })(); //declarei como função autoexecutável dessa vez só pra fixar
//_______________________________________________________________



















// // Do While
// // também executa até que a condição se torne falsa
// // mas A PRIMEIRA EXECUÇÃO SEMPRE OCORRE

//________________________________________________________________
// function exemploDoWhile() {
//     let num = 6; // mesmo com o início fora da condição, é garantida uma execução

//     do {
//         console.log(num);
//         num++;
//     } while (num <=5);
// }

// exemploDoWhile();
// // 6
//_________________________________________________________________
// function exemploDoWhile() {
//     let num = 6;

//     do {
//         console.log(num);
//         num++;
//     } while (num <= 5);
// }

// exemploDoWhile();
//_________________________________________________________________


