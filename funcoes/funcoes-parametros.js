// link videoaula na DIO relacionada - Funções - Valores Padrão e Objeto "arguments"
// https://web.dio.me/course/funcoes/learning/1af71d8f-7d70-4802-9f1e-ce396f1729ef?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



// // Valores Padrão {Pré-EC2015}

//___________________________________________
// function exponencial (array, num) {
//     if (num === undefined) {
//         num = 1;
//     }
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([1,2,3,4])); 
// //1, 2, 3, 4

// console.log(exponencial([1,2,3,4], 4)); 
// // 1, 16, 81, 256
//_____________________________________________
// function exponencial (array, num) {
//     if (num===undefined) {
//         num=1;
//     }
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([1,2,3,4], 4));
//_____________________________________________
// function exponencial (array, num) {
//     if (num===undefined) {
//         num=1;
//     }
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([2,3,4,5,6], 2));
//_____________________________________________
// function exponencial (array, num) {
//     if (num===undefined) {
//         num=1;
//     }
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([ 5,4,3,5,6 ], 3));
//_______________________________________________














// // Valores Padrão {Pós-EC2015}

//____________________________________________
// function exponencial(array, num=1) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([1,2,3,4])); // 1,2,3,4

// console.log(exponencial([1,2,3,4], 4)); // 1, 16, 81, 256
//________________________________________________
// function exponencial(array, num=1) {
//     const result = [];

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([ 1,3,4,5 ]));

// console.log(exponencial([ 1,3,4,5 ], 1));

// console.log(exponencial([ 1,3,4,5 ], 2));
//_________________________________________________
// function exponencial(array, num=2) {
//     const result=[];

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] ** num);
//     }
//     return result;
// }

// console.log(exponencial([2,3]));

// console.log(exponencial([2,3], 2));
//_________________________________________________














// // Objeto arguments
// // é um array com todos os parâmetros que foram passados quando a função foi invocada

//_________________________________________
// function findMax() {
//    let max = -Infinity;
   
//    for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//         max = arguments[i];
//     }
//    }
//    console.log(max);
//    return max;
   
// }

// findMax(1,2,3,6,90,1);
//__________________________________________
// function findMax() {
//     let max = -Infinity;

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(1,2,3, 33326, 90, 1));
//____________________________________________
// function findMax() {
//     let max = -Infinity;

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(1, 2,6, 777, 32));
//_______________________________________________
// function findMax() {
//     let max = -Infinity;

//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(1,55, 6643, 334));
//________________________________________________













// function showArgs() {
//     console.log(arguments);
//     return arguments;
// }

// showArgs(1,2,[2,3,4], "string");
//______________________________________
// function showArgs() {
//     return arguments;
// }

// console.log(showArgs(1, 4, 55, 53356, 33455, 2343));
//_______________________________________
// function showArgs() {
//     return arguments;
// }

// console.log(showArgs(1, 3, 4, 555, 33, 23, "string", [2, 3, 4,3]));
//_______________________________________















// Arrays e Objetos



// // técnica spread - para lidar separadamente com os elementos
// // o que era parte de um array se torna um elemento independete
// // é usado quando se está CHAMANDO a função

//_____________________________________________
// function sum(x, y, z) {
//     return x + y +z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers)); // ... => spread
//_____________________________________________
// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(...numbers);

// console.log(sum(...numbers));
//______________________________________________
// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 3, 4];

// console.log(...numbers);

// console.log(sum(...numbers));
//______________________________________________












// // Técnica Rest {é o contrário de spread}
// // junta elementos independentes em um array
// // é usado quando se está DECLARANDO a função

//_____________________________________________
// function confereTamanho(...args) { // rest
//     console.log(args.length);
// }

// confereTamanho(); // 0
// confereTamanho(1,2); // 2
// confereTamanho(3,4,5); // 3
//_____________________________________________
// function confereTamanho(...args) {
//     console.log(args.length);
// }

// confereTamanho();

// confereTamanho(1,2);

// confereTamanho(3,4,5);
//_____________________________________________

















// // Técnica - Object Destructuring

//_________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe"
//     }
// };

// function userId({id}) {
//     console.log(id);
//     return(id);
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     console.log(`${first} ${last}`);
//     return `${first} ${last}`;
// }

// userId(user); //42

// getFullName(user); // John Doe
//_____________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe"
//     }
// }

// function userId({id}) {
//     return(id);
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//_______________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John", 
//         lastName: "Doe"
//     },
// }

// function userId({id}) {
//     return (id);
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//___________________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// }

// function userId({id}) {
//     return id;
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//_____________________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// }

// function userId({id}) {
//     return id;
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//_____________________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// }

// function userId({id}) {
//     return id;
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//________________________________________________________
// const user = {
//     id: 42,
//     displayName: "Jade",
//     fullName: {
//         firstName: "John",
//         lastName: "Doe",
//     },
// }

// function userId({id}) {
//     return id;
// }

// function getFullName({fullName: {firstName: first, lastName: last}}) {
//     return `${first} ${last}`;
// }

// console.log(user);

// console.log(userId(user));

// console.log(getFullName(user));
//_______________________________________________________



