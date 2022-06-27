//Solução da comunidade
// https://web.dio.me/topics/explicacao-desafios-iniciais-js-impulso?back=%2Ftrack%2Fimpulso-javascript-evolution&order=oldest&page=1&search=&tab=forum

let ducksNumber = parseInt(gets());

while(ducksNumber != -1) { 
   if ( ducksNumber === 0 ) print( ducksNumber ); 
   else print( --ducksNumber );        
   ducksNumber = parseInt(gets()); 
}



