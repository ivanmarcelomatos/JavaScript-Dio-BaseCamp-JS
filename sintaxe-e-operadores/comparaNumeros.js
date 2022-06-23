function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'é menor ou igual a';
	let comparaVinte = 'é menor ou igual a';

	if (soma > 10) {
		comparaDez = 'é maior que';
	}

	if (soma > 20) {
		comparaVinte = 'é maior que';
	}

	return `Sua soma é ${soma}, que ${comparaDez} 10 e ${comparaVinte} 20.`;
}

console.log(comparaNumeros(10, 10));