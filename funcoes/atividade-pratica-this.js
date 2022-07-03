// Link videoaula relacionada na DIO - Funções - Atividade Prática {this}
// https://web.dio.me/course/funcoes/learning/0a54c71b-949d-4157-8509-6dbe68492dae?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined





//________________________________________________
// const pessoa1 = {
// 	nome: 'Amélia',
// 	idade: 23,
// };

// const pessoa2 = {
// 	nome: 'Márcia',
// 	idade: 20,
// };

// const pessoa3 = {
// 	nome: 'Jonas',
// 	idade: 13,
// };
//_____________________________________________
// const pessoa = {
// 	nome: 'Amélia',
// 	idade: 23,
// };
// const pessoa2 = {
// 	nome: 'Márcia',
// 	idade: 20,
// };
// const pessoa3 = {
// 	nome: 'Jonas',
// 	idade: 13,
// };
//______________________________________________
const pessoa = {
	nome: 'Amélia',
	idade: 23,
};
const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};
const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};
//_______________________________________________















//________________________________________________
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
// }
//________________________________________________
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
// }
//________________________________________________
// function calculaIdade(anos) {
// 	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
// }
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}













//_____________________________________________
// console.log(calculaIdade.call(pessoa3, 40));
// //Daqui a 40 anos, Jonas terá 53 anos de idade.
// console.log(calculaIdade.apply(pessoa2, [24]));
// //Daqui a 24 anos, Márcia terá 44 anos de idade. {observe que com o método .apply o parâmetro é passado por meio de um array, necessitando por isso ser informado entre colchetes}
//____________________________________________
// console.log(calculaIdade.call(pessoa3, 40));
// console.log(calculaIdade.apply(pessoa2, [24]));
//____________________________________________
// console.log(calculaIdade.call(pessoa3, 40));
// console.log(calculaIdade.apply(pessoa2, [24]));
//____________________________________________
// console.log(calculaIdade.call(pessoa3, 40));
// console.log(calculaIdade.apply(pessoa2, [24]));
//____________________________________________
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));