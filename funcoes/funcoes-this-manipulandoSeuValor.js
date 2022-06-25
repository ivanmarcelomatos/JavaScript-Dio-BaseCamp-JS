// videoaula relacionada na DIO - Funções - this - manipulando seu valor
// https://web.dio.me/course/funcoes/learning/8b713d82-f56e-4cde-b10d-8552a0eac233?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined






// Call
// informa o objeto a quem a função deverá se referir


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







// // call - é possível passar parâmetros para essa função separando-os por vírgulas
// const myObj = {
//     num1: 2,
//     num2: 4,
// }

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// }

// soma.call(myObj, 1, 5);
// // 12 {ou seja: (myObj.num1=2  +  myObj.num2=4  + a=1  + b=5) = 12}









// //apply 
// // funcionamento muito parecido com call
// // difere da call pois com o apply é possível passar os argumentos dentro de um array

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








// // apply passando os dados dentro de um array
// const myObj = {
//     num1: 2,
//     num2: 4,
// };

// function soma(a, b) {
//     console.log(this.num1 + this.num2 + a + b);
// };

// soma.apply(myObj, [1,5]);
// // 12 {ou seja: (myObj.num1=2 + myObj.num2=4 + valoresDoArray [1 + 5])=12 }










//bind {vincular, ligar, encadernar}
// clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function() {
    console.log(this.nome);
    return this.nome;
};

let bruno = retornaNomes.bind({nome: "Bruno"});

bruno();
// Bruno

retornaNomes();
// undefined {porque aqui a função foi chamada mas sem receber o objeto}