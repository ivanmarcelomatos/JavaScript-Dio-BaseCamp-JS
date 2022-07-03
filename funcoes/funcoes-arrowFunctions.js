// // videoaula relacionada na DIO - Funções - Arrow Functions - Sintaxe e outras restrições
// https://web.dio.me/course/funcoes/learning/3d17fc75-49d9-4087-acb2-b20ba79ab349?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




// Arrow Functions
// a partir de uma constante que se refere a uma função anônima
// arrow function não faz Hoisting {isso é devido às arrow functions serem armazenadas dentro de constantes}
// o this será SEMPRE O DO OBJETO GLOBAL e métodos para modificar seu valor não irão funcionar {call, bind ou aplly}
// NÃO EXISTE O OBJETO ARGUMENTS
// O construtor onde se declara o new e o tipo da variável não pode ser utilizado. {new MeuObjeto()}
// NÃO FAÇA ARROW FUNCTIONS SEM SEREM MÉTODOS DE OBJETOS!




//_____________________________________________________
// const helloWorld = function() {
//     console.log("Hello, World!");
//     return "Hello, World!";
// }
// helloWorld();

// // o código acima equivale a:
// const helloWorld = () => {
//     console.log("Hello, World, da arrow function!");
//     return "Hello, World, da arrow function!";
// }
// helloWorld();

// // e se tratando de apenas 1 instrução não é preciso escrever return:
// const helloWorld = () => "Hello, World, da arrow function retornando sem precisar escrever return nem as chaves!";

// console.log(helloWorld());
//______________________________________________________
// const helloWorld = function() {
//     console.log("Hello, World!");
//     return "Hello, World!";
// }
// helloWorld();

// const helloWorld = () => {
//     console.log("Hello, World, da arrow function!");
//     return "Hello, World, da arrow function!";
// }
// helloWorld();

// const helloWorld = () => "Hello, world, da arrow function sem return e sem chaves";
// console.log(helloWorld());
//_______________________________________________________
// const helloWorld = function() {
//     return "Hello, World!";
// }
// console.log(helloWorld());

// const helloWorld = () => {
//     return "Hello, World!"
// }
// console.log(helloWorld());

// const helloWorld = () => "Hello, World!";
// console.log(helloWorld());
//_______________________________________________________
// const helloWorld = function() {
//     return "Hello, world!"
// }
// console.log(helloWorld());

// const helloWorld = () => {
//     return "Hello, world!";
// }
// console.log(helloWorld());

// const helloWorld = () => "Hello, World!";
// console.log(helloWorld());
//____________________________________________________
// const helloWorld = function() {
//     return "Hello, World!";
// }
// console.log(helloWorld());

// const helloWorld = () => {
//     return "Hello, World!";
// }
// console.log(helloWorld());

// const helloWorld = () => "Hello, World!";
// console.log(helloWorld());
//_____________________________________________________













// // arrow function - sintaxe

//______________________________________________________
// const soma = (a, b) => a + b;
// console.log(soma(4, 6));
// // 10
//______________________________________________________
// const soma = (a, b) => a + b;
// console.log(soma(4,6));
//_____________________________________________________
// const soma = (a, b) => a + b;
// console.log(soma(4,6));
//_____________________________________________________
// const soma = (a, b) => a + b;
// console.log(soma(4,6));
//_____________________________________________________















// arrow function - sintaxe - recebendo apenas um parâmetro é dispensável o uso dos parênteses

//________________________________________________________
// const elevaAoQuadrado = a => a ** 2;
// console.log(elevaAoQuadrado(6));
// //36
//________________________________________________________
// const elevaAoQuadrado = a => a ** 2;
// console.log(elevaAoQuadrado(7));
//________________________________________________________
// const elevaAoQuadrado = a => a ** 2;
// console.log(elevaAoQuadrado(8));
//_______________________________________________________
// const elevaAoQuadrado = a => a ** 2;
// console.log(elevaAoQuadrado(6));
//_______________________________________________________
