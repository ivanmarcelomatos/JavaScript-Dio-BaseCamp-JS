
// // solução 1 {para palavras sem acentos e sem espaços, como: ana, ovo, ama, etc.} {do início até 8:45min do vídeo}
// function verificaPalindromo(string) {
// 	if (!string) return console.log("string inexistente"); //checagem da string recebida

// 	console.log(string === string.split('').reverse().join(''));
// 	//split('') //separa letra a letra e dá o retorno num array
// 	//.reverse reverte o aray
// 	//.join('') junta os elementos do array numa string
// }
// // verificaPalindromo('cat');
// verificaPalindromo("ovo");








// solução 2 {a partir de 8min45seg do vídeo}
function varificaPalindromo2(string) {
	if (!string) return console.log("string inexistente");
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('ovo');
