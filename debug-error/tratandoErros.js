// videoaula relacionada na DIO - Tratando Erros - throw, try/catch, finally
// https://web.dio.me/course/debugging-e-error-handling/learning/d98f9b27-bd6c-4f33-bc22-82bee03e5591?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined


// throw x return
// o return usado para erros apenas retorna os elementos sem o tratamento de erros do próprio de erros do JavaScript
// o throw xxx {lance xxx} ele usa os alertas e demais tratamentos de erros do JavaScript


// //exemplo - início
// function verificaPalindromo(string) {
// 	if (!string) return console.log("string inexistente"); //checagem da string recebida

// 	console.log(string === string.split('').reverse().join(''));
// 	//split('') //separa letra a letra e dá o retorno num array
// 	//.reverse reverte o aray
// 	//.join('') junta os elementos do array numa string
// }
// verificaPalindromo('cat');
// verificaPalindromo("ovo");








// //exemplo - usando o throw
// function verificaPalindromo(string) {
// 	if (!string) throw console.log("string inexistente"); //checagem da string recebida

// 	console.log(string === string.split('').reverse().join(''));
// }
// verificaPalindromo('cat'); // false
// verificaPalindromo("ovo"); // true
// verificaPalindromo(''); // string inexistente
// verificaPalindromo(""); // string inexistente

// // os retornos mostram que o o throw não foi tratado/








// // try ... catch - mesmo exemplo de cima, mas agora tratando o erro com try...catch
// function verificaPalindromo(string) {
// 	if (!string) throw console.log("string inexistente"); //checagem da string recebida

// 	console.log(string === string.split('').reverse().join(''));
// }

// function tryCatchExemplo(string) {
//     try {
//         verificaPalindromo(string);
//     }
//     catch(e) {
//         console.log(e);

//         // throw e; // no navegador, com essa outra forma de tratar, o navegador exibe um X vermelho chamando atenção pro erro e também vai contabilizar o erro nas estatísticas
//     }
// }

// tryCatchExemplo('');










// finally
// é uma instrução que vai ser chamada independente de haver ou não erro
// não é um bloco obrigatório não


// // mesmo exemplo acima, mas agora tratando com try..catch e finally
function verificaPalindromo(string) {
	if (!string) throw console.log("string inexistente"); //checagem da string recebida

	console.log(string === string.split('').reverse().join(''));
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string);
    }
    catch(e) {
        console.log(e);

        // throw e; // no navegador, com essa outra forma de tratar, o navegador exibe um X vermelho chamando atenção pro erro e também vai contabilizar o erro nas estatísticas
    }
    finally {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('ovo');

tryCatchExemplo('');