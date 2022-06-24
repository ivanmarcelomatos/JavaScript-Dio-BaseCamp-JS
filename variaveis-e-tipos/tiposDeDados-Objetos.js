// // link da aula relacionada na DIO - tipos de dados Objetos
// https://web.dio.me/course/variaveis-e-tipos/learning/5d10e230-21b3-41f2-9d4d-8e988505d3cd?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



// Objetos

// let ojb = {};

// let obj = new Object();
// console.log(typeof(obj));
// obj.name = "Julia";
// console.log(obj.name);
// console.log(obj);
// obj.age = 20;
// console.log("marcador 0500");
// console.log(obj);
// console.log(Object.values(obj));
// console.log(Object.keys(obj));





// let person = {
//     name: "Júlia",
//     age: 20,
//     adress: "rua 2"
// }
// console.log(person);
// console.log(person.name);
// console.log(person["name"]);






// let person = {
//     name: "Júlia",
//     age: 20,
//     adress: "rua 2"
// }
// console.log("\n\n\n msg: início numberOfSiblings");
// person["numberOfSiblings"] = 3;
// console.log(person.numberOfSiblings);
// console.log(person);







// let person = {
//     name: "Júlia",
//     age: 20,
//     adress: "rua 2"
// }
// console.log("\n\n\n\n\n msg: início mom");
// let mom = "Marta"; // variável mom que guarda o valor StringComNomeDaMãe
// console.log(mom); // "Marta"
// //criar uma chave no objeto com o valor armazenado na variável mom
// person.mom = "Teste"; // cria uma chave mom no objeto e grava o valor "Teste" nela, mas não pega o valor da variável mom criada acima e joga no objeto não. Conforme demonstrado aqui:
// console.log(person.mom); //"Teste"
// console.log(person);









// let person = {
//     name: "Júlia",
//     age: 20,
//     adress: "rua 2"
// }
// let mom = "NameOfMom";
// console.log("\n\n\n msg: Forma correta do mom");
// console.log(person);
// console.log(mom); //"NameOfMom"
// //para colocar o valor da variável mom no objeto dentro de uma chave mom, devemos proceder assim:
// person[mom] = "marta"; // aqui, será criada uma chave no objeto person, onde essa chave vai ser o valor da variável mom. Este valor é NameOfMom. E a essa chave NameOfMom criada será abribuído o valor "marta"
// console.log(person);







// let person = {
//     name: "Júlia",
//     age: 20,
//     adress: "rua 2"
// }
// let mom = "NameOfMom";
// console.log("\n\n\n msg: Outra Forma correta do mom");
// console.log(person);
// console.log(mom); //"NameOfMom"
// //para colocar o valor da variável mom no objeto dentro de uma chave mom, devemos proceder assim:
// person.mom = mom; //aqui é criada uma nova chave mom e atribuído a essa chava no objeto o valor na variável mom que é NameOfMom
// console.log(person);
// console.log(person.mom); // "NameOfMom"
// console.log(person['mom']); // "NameOfMom"