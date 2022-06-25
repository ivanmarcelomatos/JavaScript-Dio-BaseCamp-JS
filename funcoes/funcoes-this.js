// videoaula relacionada na DIO - Funções- O que é this
// https://web.dio.me/course/funcoes/learning/16bae178-fa0d-45f9-b178-d66cc22168ed?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



// this
// é uma referência de contexto
// this em um objeto (esse this é um método) - referencia o próprio objeto dono do método
// this sozinha - referencia objeto global (em navegadores, windows)
// this numa função - referencia objeto global
// this num evento - referencia o elemento que recebeu o evento 




// // this no contexto de um objeto
// const pessoa = {
//     firstName: "André",
//     lastName: "Soares",
//     id: 1,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     },
//     getId: function() {
//         return this.id;
//     }
// };

// console.log(pessoa.fullName());
// // André Soares

// console.log(pessoa.getId());
// // 1







// // this - outro exemplo no contexto de um objeto
// const pessoa = {
//     firstName: "Diego",
//     lastName: "Vieira",
//     getFullName: function() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// pessoa.getFullName();
// // Diego Viera










// // this fora de função
// console.log(this);
// // {} //esse retorno mostra que o objeto global é vazio




// // this no navegador
// this;
// // Window about:newtab {a window é o objeto global, o objeto pai nesse caso e é o que é retornado}








// // this dentro de uma função
// (function() {
//     console.log(this);
// })();

// //daqui pra baixo o retorno trazido no console:
// {/* <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 394.6644911766052,
//       nodeStart: 106.98392629623413,
//       v8Start: 136.66771030426025,
//       bootstrapComplete: 342.2926321029663,
//       environment: 208.81335020065308,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1656178247904.542
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// } */}







// this - no contexto de um botão no HTML
// demonstrado no arquivo "funcoes-this-emUmEventoNoHTML.html" que está na pasta de funções

