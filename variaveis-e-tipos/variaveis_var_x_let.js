//Hoisting


// // de uma var
// numberOne = 1; //observe que aqui temos uma atribuição e não uma declaração
// console.log(numberOne + 2);
// // var numberOne; //aqui temos a declaração. Mas observe que declarando ou não essa linha, o resultado 3 será exibido no console




// // de uma let => não é possível hoisting de uma let, sendo necessário sempre declarar antes
// numberOne = 1; // aqui também temos apenas uma atribuição e não uma declaração
// console.log(numberOne + 2); 
// let numberOne;
// //o código retorna erro dizendo que não pode acessar numberOne antes da inicialização




// //correto uso de let
// let numberOne;
// numberOne = 1; //atribuição
// console.log(numberOne + 2);





var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';

    console.log('dentro do IF, firstName, lastName: '+ firstName, lastName); //Pedro, Silva
}

console.log('fora do IF, firstName, lastName: ' + firstName, lastName); //Pedro, Souza