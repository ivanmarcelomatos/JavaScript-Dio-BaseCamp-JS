// // link videoaula relacionada na DIO - Variáveis e Tipos - Prática - Substituir números pares
// https://web.dio.me/course/variaveis-e-tipos/learning/4cd0a19a-b615-4335-b988-e61777251db8?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);
