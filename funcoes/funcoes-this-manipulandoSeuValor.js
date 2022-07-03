// videoaula relacionada na DIO - Funções - this - manipulando seu valor
// https://web.dio.me/course/funcoes/learning/8b713d82-f56e-4cde-b10d-8552a0eac233?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined






// Call
// informa o objeto a quem a função deverá se referir {o objeto que a função deverá chamar}

//________________________________________________________
// const pessoa = {
//     nome: "Miguel"
// };

// const animal = {
//     nome: "Murphy",
// };

// function getSomething() {
//     console.log(this.nome);
// };

// getSomething.call(pessoa);
// // Miguel
// getSomething.call(animal);
// // Murphy
//_________________________________________________________
// const pessoa = {
//     nome: "Miguel",
// };

// const animal = {
//     nome: "Murphy",
// };

// function getSomething() {
//     console.log(this.nome);
// };

// getSomething.call(pessoa);

// getSomething.call(animal);
//________________________________________________________
// const pessoa = {
//     nome: "Miguel",
// };

// const animal = {
//     nome: "Murphy",
// };

// function getSomething() {
//     console.log(this.nome);
// };

// getSomething.call(pessoa);

// getSomething.call(animal);
//__________________________________________________________
// const pessoa = {
//     nome: "Miguel",
// };

// const animal = {
//     nome: "Murphy",
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.call(pessoa);

// getSomething.call(animal);
//__________________________________________________________
// const pessoa = {
//     nome: 'Miguel',
// };

// const animal = {
//     nome: 'Murphy',
// };

// function getSomething() {
//     console.log(this.nome);
// };

// getSomething.call(pessoa);

// getSomething.call(animal);
//__________________________________________________________
// const pessoa = {
//     nome: 'Miguel',
// }

// const animal = {
//     nome: 'Murphy',
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.call(pessoa);

// getSomething.call(animal);
//___________________________________________________________














// // call - é possível passar parâmetros para essa função separando-os por vírgulas

//______________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
// // 12 {ou seja: (myObj.num1=2  +  myObj.num2=4  + a=1  + b=5) = 12}
//_______________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
//______________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
//______________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
//_____________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
//_____________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
//_____________________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 5, 1);
//___________________________________________________________
















// //apply 
// // funcionamento muito parecido com call
// // difere da call pois com o apply é possível passar os argumentos dentro de um array

//______________________________________________________
// const pessoa = {
//     nome: "Miguel",
// };

// const animal = {
//     nome: "Godi",
// };

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.apply(pessoa);
// // Miguel

// getSomething.apply(animal);
// // Godi
//________________________________________________________
// const pessoa = {
//     nome: "Miguel",
// }

// const animal = {
//     nome: "Godi",
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.apply(pessoa);

// getSomething.apply(animal);
//_________________________________________________________
// const pessoa = {
//     nome: "Miguel",
// }

// const animal = {
//     nome: "Godi",
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.apply(pessoa);

// getSomething.apply(animal);
//__________________________________________________________
// const pessoa = {
//     nome: 'Miguel',
// }

// const animal = {
//     nome: 'Godi',
// }

// function getSomething() {
//     console.log(this.nome);
// }

// getSomething.apply(pessoa);

// getSomething.apply(animal);
//________________________________________________________


















// // apply passando os dados dentro de um array

//___________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// };

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// };

// soma.apply(myObj, [1,5]);
// // 12 {ou seja: (myObj.num1=2 + myObj.num2=4 + valoresDoArray [1 + 5])=12 }
//_____________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// };

// soma.apply(myObj, [1, 5]);
//_____________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b)
// }

// soma.apply(myObj, [1,5]);
//____________________________________________________
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     return this.num1 + this.num2 + a + b;
// }

// console.log(soma.apply(myObj, [4,6]));
//___________________________________________________
















//bind {vincular, ligar, encadernar}
// clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

//________________________________________________________
// const retornaNomes = function() {
//     console.log(this.nome);
//     return this.nome;
// };

// let bruno = retornaNomes.bind({nome: "Bruno"});

// bruno();
// // Bruno

// retornaNomes();
// // undefined {porque aqui a função foi chamada mas sem receber o objeto}
//_________________________________________________________
// const retornaNomes = function() {
//     return this.nome;
// }

// let bruno = retornaNomes.bind({nome: "Bruno"});

// console.log(bruno());

// console.log(retornaNomes());
//_________________________________________________________
// const retornaNomes = function() {
//     return this.nome;
// }

// let bruno = retornaNomes.bind({nome: "Bruno"});

// console.log(bruno());
//__________________________________________________________
// const retornaValores = function() {
//     return this.nome;
// }

// let bruno = retornaValores.bind({nome: "Bruno"});

// console.log(bruno());

// console.log(retornaValores());
//___________________________________________________________
// const retornaValores = function() {
//     return this.nome;
// }

// let bruno = retornaValores.bind({nome: 'Bruno'});

// console.log(bruno());

// console.log(retornaValores());
//____________________________________________________________
// const retornaValores = function() {
//     return this.nome;
// }

// let bruno = retornaValores.bind({nome: 'Bruno'});

// console.log(bruno());

// console.log(retornaValores());
//__________________________________________________________

