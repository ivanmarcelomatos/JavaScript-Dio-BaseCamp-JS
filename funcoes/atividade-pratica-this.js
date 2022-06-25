function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
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

console.log(calculaIdade.call(pessoa3, 40));
//Daqui a 40 anos, Jonas terá 53 anos de idade.
console.log(calculaIdade.apply(pessoa2, [24]));
//Daqui a 24 anos, Márcia terá 44 anos de idade. {observe que com o método .apply o parâmetro é passado por meio de um array, necessitando por isso ser informado entre colchetes}
