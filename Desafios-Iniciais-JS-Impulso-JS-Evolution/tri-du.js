// link do desafio online na DIO 
// https://web.dio.me/coding/desafios-iniciais-js-impulso-javascript-evolution/algorithm/tri-du?back=/track/impulso-javascript-evolution












// //Instruções
// Tri-du é um jogo de cartas derivado do popular jogo de Truco. O jogo utiliza um baralho normal de 52 cartas, com treze cartas de cada naipe, mas os naipes são ignorados. Apenas o valor das cartas,considerados como inteiros de 1 a 13, são utilizados.

// No jogo, cada jogador recebe três cartas. As regras são simples:

 

//     Um trio (três cartas de mesmo valor) ganha de uma dupla (duas cartas de mesmo valor).
//     Um trio formado por cartas de maior valor ganha de um trio formado por cartas de menor valor.
//     Uma dupla formada por cartas de maior valor ganha de uma dupla formada por cartas de menor valor.

// Note que o jogo pode não ter ganhador em muitas situações; nesses casos, as cartas distribuídas são devolvidas ao baralho, que é embaralhado e uma nova partida é iniciada

// Um jogador já recebeu duas das cartas que deve receber, e conhece seus valores. Sua tarefa é escrever um programa para determinar qual o valor da terceira carta que maximiza a probabilidade de esse jogador ganhar o jogo.
// Entrada

// A entrada consiste de uma ´unica linha que contém dois inteiros, A (1 ≤ A ≤ 13) e B (1 ≤ B ≤ 13) indicando os valores das duas primeiras cartas recebidas.
// Saída

// Seu programa deve produzir uma única linha com um inteiro representando o valor da carta que maximiza a probabilidade de o jogador ganhar a partida.


// Exemplo de Entrada 	Exemplo de Saída

// 10 7
// 10


// 2 2                            
// 2            













// // Código Inicial sugerido para o desafio
// // a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// // Abaixo segue um exemplo de código que você pode ou não utilizar

// var s = gets().split(" ");
// let A = parseInt(s[0]);
// let B = parseInt(s[1]);
// let C;
//     if(           ){
//         C = A;
//     }
//     else if(             ){
//         C = A;
//     }
//     else{
//                        ;
//     }
//     print(      );













// //Solução da Comunidade
// https://web.dio.me/topics/explicacao-desafios-iniciais-tri-du?back=%2Ftrack%2Fimpulso-javascript-evolution&order=oldest&page=1&search=&tab=forum


var cards = gets().split(" ");
let cardOne = parseInt(cards[0]);
let cardTwo = parseInt(cards[1]);
let cardThree;
    
if( cardOne === cardTwo ) cardThree = cardOne;
else if(cardOne !== cardTwo && cardOne >= cardTwo) cardThree = cardOne;
else if(cardOne !== cardTwo && cardOne <= cardTwo) cardThree = cardTwo;

print(cardThree);



