// videoaula relacionada - Debugging e Error Handling - O objeto Error
// https://web.dio.me/course/debugging-e-error-handling/learning/345e4ebc-9020-49f6-9c56-c199c27ff60b?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



//Objeto Error
//todos os parâmetros são opicionais

// new Error(message, fileName, lineNumber);
const MeuErro = new Error('Mensagem inválida');

// throw MeuErro;

// é possível dar nome ao erro
MeuErro.name = "InvalidMessage";

throw MeuErro;