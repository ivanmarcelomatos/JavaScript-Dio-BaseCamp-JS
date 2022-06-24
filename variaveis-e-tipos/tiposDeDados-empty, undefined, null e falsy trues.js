// link aula relacionada na DIO - tipos de dados - conceitos de empty, undefined e null
// https://web.dio.me/course/variaveis-e-tipos/learning/16b92494-ab87-46b7-a72d-0f9aaba2f764?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




// tipos de dados - conceitos de empty, undefined e null

// console.log(abacaxi); // "abacaxi is not defined" {abacaxi não está definido = abacaxi é indefinido = undefined}


// console.log(typeof(abacaxi)); //undefined




// let abacaxi;
// console.log(abacaxi); //undefined {mas nesse caso, a variável já foi criada, por já ter sido declarada. Ela já existe mas não está definidade, mas ela já existe}
// console.log(typeof(abacaxi)); //undefined {mas já existe como demonstrado acima}




// let abacaxi = "";
// console.log(abacaxi); imprime o valor vazio empty
// console.log(typeof(abacaxi)); // retorna o tipo string. Aqui a variável existe e inclusive foi definido o seu tipo que é string e o seu valor foi definido como vazio = empty





// let abacaxi = null;
// console.log(abacaxi); // null demonstrando que o objeto é nulo
// console.log(typeof(abacaxi)); // apesar de ser nulo, tem tipo que é objeto = object. Agora ele é definido como objeto, ainda que seja nulo. Por isso o retorno não é undefined, mas sim object
// console.log(abacaxi === true); //false
// console.log(abacaxi === false); //false
// //ou seja, abacaxi não é true, nem o oposto de true {fase}, demonstrando que o que não é verdadeiro nem é falso, é porque é nulo. 
// console.log(!abacaxi); // true. Esse é um falsy true. ATENÇÃO!





// //Falsy Trues
// console.log(!undefined === true); // falsy true
// console.log(!null === true); // falsy true
// console.log(!"" === true); // falsy true



