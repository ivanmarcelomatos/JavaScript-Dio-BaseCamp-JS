// link videoaula relacionada na DIO - JavaScript Assíncrono
// https://web.dio.me/course/javascript-assincrono/learning/cb0f4799-9865-496a-a94a-7236ff842f6b?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined


//____________________________________________________________
// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida!'));
//     }, 2000);
// });

// console.log(myPromise); //rodar no browser pois retorna erro dizendo que windows não foi definido se rodar no prompt. 
//___________________________________________________________
// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida'));
//     }, 2000);
// });
//___________________________________________________________
// const myPromise = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida'));
//     }, 2000);
// });
//__________________________________________________________
// const myPromise = new Promise ((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida'));
//     }, 2000);
// });
//________________________________________________________
// const myPromise = new Promise ((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida'));
//     }, 3000);
// });
//_______________________________________________________















// escrevendo o mesmo código acima com outras identações afim de melhor visualizar os processos
//________________________________________________________
// const myPromise = new Promise(
//         (resolve, reject) => {
//             window.setTimeout(() => {
//                 resolve(console.log('Resolvida'));
//             }, 2000);
//         }
//     )
//________________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => resolve(console.log('Resolvida')), 2000);
//     }
// )
//_______________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => console.log('resolvida'), 2000);
//     }

// )
//________________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {console.log('resolvida')}, 2000);
//     }
// );
//_______________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {console.log('Resolvida')}, 2000);
//     }
// );
//______________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {console.log('Resolvida')}, 3000);
//     }
// )
//_____________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {
//             console.log('Resolvida');
//         }, 3000);
//     }
// );
//____________________________________________________















//_______________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(()=>{console.log('resolvida')}, 10000);
//     }
// )
// console.log(myPromise); //retornará a promessa como pendente
// //depois dos 10s do setTimeout retornará o resolvida
//______________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {console.log('resolvida')}, 5000);
//     }
// );

// console.log(myPromise);
//_____________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {console.log('resolvida BBB')}, 5000);
//     }
// );

// console.log(myPromise);
//____________________________________________________
// const myPromise = new Promise(
//     (resolve, reject) => {
//         window.setTimeout(() => {
//             console.log('resolvida');
//         }, 3000);
//     }
// );

// console.log(myPromise);
//____________________________________________________















// exemplo
//______________________________________________________________
// async function resolvePromise() {
//     const myPromise = new Promise(
//         (resolve, reject) => {
//             window.setTimeout(() => {resolve(console.log('resolvida'))}, 3000);
//         }
//     );

//     // const resolved =  myPromise //assim o fluxo não aguarda a promisse e o retorno é [object Promise]
//     const resolved =  await myPromise // assim o fluxo aguarda pela promisse antes de dar seguimento á modificação do HTML
//             .then((result) => result + ' passou pelo 1o then,')
//             .then((result) => result + ' e passou pelo 2o then.')
//             .catch((err) => console.log(err.message));

//     pExemplo.innerHTML =resolved;

//     return resolved;
    
// }

// resolvePromise();
//_____________________________________________________________














// O que são APIs e fetch - videoaula relacionada na DIO
// https://web.dio.me/course/javascript-assincrono/learning/e2af7212-05e0-47e1-891e-d2fdad6e0249?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

















// Videoaula EXCELENTE Relacionada no Youtube - Entenda de uma vez por todas o que são promises em uma aplicação web com JavaScript puro (19min)
// https://www.youtube.com/watch?v=6V10HRsNXXU


// exemplo 01 de Operação assíncrona
//________________________________________________________________
// let randomNumber = 9;

// setTimeout(() => {
//     randomNumber += 100;
//     console.log(randomNumber);
// }, 3000);

// console.log(randomNumber);
//________________________________________________________________
// let randomNumber = 9;

// setTimeout(() => {
//     randomNumber += 100;
//     console.log(randomNumber);
// }, 3000);

// console.log(randomNumber);
//_________________________________________________














// exemplo 02 de operação assíncrona
//______________________________________________________________
// const aPromise = new Promise (
//         (resolve, reject) => {
//             const aNumber = 37;
//             resolve(aNumber);
//         }
//     )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value); //37
//     })
//______________________________________________________________
// const aPromise = new Promise(
//     (resolve, reject) => {
//         const aNumber = 37;
//         resolve(aNumber);
//     }
// )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value);
//     }
// )
//______________________________________________
// const aPromise = new Promise(
//     (resolve, reject) => {
//         const aNumber = 37;
//         resolve(aNumber);
//     }
// )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value)
//     }
// )
//_______________________________________________


















// exemplo 02 de operação ˜assíncrona˜ - com uso do Catch
// sintaxe de uma Promise
// como é criada e como pode ser usada
// MAS OBSERVE QUE NESSE EXEMPLO INTRODUTÓRIO A OPERAÇÃO É SÍNCRONA, OU SEJA, AINDA NÃO FOI APLICADO O CONCEITO DE ASSINCRONO. É UM EXEMPLO INTRODUTÓRIO PARA ENTENDER SOBRE A SINTAXE DAS PROMISES
//______________________________________________________________
// const aPromise = new Promise (
//         (resolve, reject) => {
//             const aNumber = 38;
//             // resolve(aNumber);
//             reject(aNumber)
//         }
//     )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value); //38
//     })
//     .catch((rejectValue) => {
//         console.log({rejectValue});
//     }) 
//______________________________________________________________
// const aPromise = new Promise (
//     (resolve, reject) => {
//         const aNumber = 38;
//         // resolve(aNumber);
//         reject(aNumber);
//     }
// )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value); //38
//     })
//     .catch((rejectValue) => {
//         console.log({rejectValue});
//     })
//__________________________________________________
// const aPromise = new Promise (
//     (resolve, reject) => {
//         const aNumber = 38;
//         // resolve(aNumber);
//         reject(aNumber);
//     }
// )

// aPromise
//     .then((value) => value)
//     .then((value) => {
//         console.log(value); //38
//     })
//     .catch((rejectValue) => {
//         console.log({rejectValue});
//     })
//____________________________________________________




















// exemplo 03 de operação assíncrona
// requisição para uma API que traz uma imagem aleatória de um cachorro a cada request
//___________________________________________________
// const url = 'https://dog.ceo/api/breeds/image/random';
// const dogImg = document.querySelector('[data-js="dog-img"]');
// // console.log(dogImg);

// fetch(url) 
// //o método fetch faz uma requisição http e traz os dados da url que foi especificada como argumento.
// //o retorno do fetch inclusive eh uma promise. O que poe ser confirmado abaixo:
// // console.log(fetch(url));

//     .then((dogData) => {
//         if (!dogData.ok) { // será retornado um boolean indicando se o http status code da resposta dogDAta está entre 200 e 299 e se tiver significa que a requisição foi bem sucedida
//             throw new Error(`HTTP error, status ${dogData.status}`); 
//         }
//         // console.log(dogData); //o retorno dessa forma será um objeto Response() e esse é o tipo de objeto que  se obtêm no retorno de uma API
//         return dogData.json() //assim o retorno será parseado para json, retornando uma promisse
//     })
//     .then(({ message }) => {
//         // console.log(message)
//         dogImg.setAttribute('src', message)
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
//________________________________________________________
// const url = 'https://dog.ceo/api/breeds/image/random';
// const dogImg = document.querySelector('[data-js="dog-img"]');

// fetch(url) 
//     .then((dogData) => {
//         if (!dogData.ok) { 
//             throw new Error(`HTTP error, status ${dogData.status}`); 
//         }
//         return dogData.json()
//     })
//     .then(({ message }) => {
//         dogImg.setAttribute('src', message)
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
//__________________________________________________________
// const url = 'https://dog.ceo/api/breeds/image/random';
// const dogImg = document.querySelector('[data-js="dog-img"]');

// fetch(url)
//     .then((dogData) => {
//         if (!dogData.ok) {
//             throw new Error(`HTTP error, status ${dogData.status}`);
//         }
//         return dogData.json();
//     })
//     .then(({ message }) => {
//         dogImg.setAttribute('src', message)
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
//_________________________________________________________


















// exemplo 03 - MESMO CÓDIGO REESCRITO DE MELHOR FORMA - desacoplando através de pequenas funções que tenham apenas uma responsabilidade
//__________________________________________________________
// const url = 'https://dog.ceo/api/breeds/image/random';
// const dogImg = document.querySelector('[data-js="dog-img"]');

// const validadeHTTPStatus = (dogData) => {
//     if (!dogData.ok) {
//         throw new Error(`HTTP error, status ${dogData.status}`);
//     }
//     return dogData.json();
// }

// const setDogImg = ({ message: url }) => {
//     dogImg.setAttribute('src', url)
// }

// const handleRequestError = (error) => {
//     console.log(error.message)
// }

// fetch(url)
//     .then(validadeHTTPStatus)
//     .then(setDogImg)
//     .catch(handleRequestError)
//_________________________________________________________
// const url = 'https://dog.ceo/api/breeds/image/random';
// const dogImg = document.querySelector('[data-js="dog-img"]');

// const validadeHTTPStatus = (dogData) => {
//     if(!dogData.ok) {
//         throw new Error(`HTTP error, status ${dogData.status}`);
//     }
//     return dogData.json();
// }

// const setDogImg = ({ message: url }) => {
//     dogImg.setAttribute('src', url)
// }

// const handleRequestError = (error) => {
//     console.log(error.message)
// }

// fetch(url)
//     .then(validadeHTTPStatus)
//     .then(setDogImg)
//     .catch(handleRequestError)
//___________________________________________________________



















// Videoaula Relacionada -  Async/await: o que é e como funciona | JavaScript puro (6min)
//https://www.youtube.com/watch?v=Zl_jF7umgcs

// exemplo
// observe que Toda Função async retorna implicitamente uma promisse
//__________________________________________________
// let page = 1;

// const getPosts = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    
//     // const data = await response.json();
//     //console.log(data)
//     // return data
    
//     return await response.json();

//     //return 'oi';

// }

// console.log(getPosts()); //retorna uma Promisse no console

// // getPosts().then(value => {
// //     console.log(value);  // retorna 'oi' no console
// // })

// // getPosts();
//___________________________________________________
// let page = 1;

// const getPosts = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
//     return await response.json();
// }

// console.log(getPosts());
//__________________________________________________




















// Documentação Relacionada - JavaScript Async
// https://www.w3schools.com/js/js_async.asp
// async makes a function retun a promise;
// await makes a function wait for a promise;

// exemplo 01 - async
//______________________________________________________
// async function myFunction() {
//     return "Hello";
// }

// // console.log(myFunction()); //retorna uma promise

// myFunction().then(
//     function (value) {console.log(value);},
//     function (error) {console.log(error);}
// );
//______________________________________________________

















// exemplo 02 {adaptado Ivan} - The keyword await before a function makes the function wait for a promise;
// The await keyword can only be used inside an async function;
//__________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love you!");
//         }
//     );

//     const retornoPromise = await myPromise;
//     const titulo = document.getElementById("demo")

//     titulo.innerHTML = retornoPromise;
// }

// myDisplay();
//____________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love you!");
//         }
//     );

//     const retornoPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoPromise;
// }

// myDisplay();
//__________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love you, sugar!");
//         }
//     )

//     const retornoPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoPromise;
// }

// myDisplay();
//__________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love you, babe");
//         }
//     )

//     const retornoPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoPromise;
// }

// myDisplay();
//__________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love you too!");
//         }
//     );

//     const retornoDaPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoDaPromise;
// }

// myDisplay();
//_________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve, reject) => {
//             resolve("I love yout so much!");
//         }
//     );

//     const retornoDaPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoDaPromise;
// }

// myDisplay();
//_________________________________

















// exemplo 03 - async function somente com resolve, dispensando o reject
//_________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve) => {
//             resolve("essa async function apenas tem resolve");
//         }
//     )

//     const retornoDaPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoDaPromise;
// }

// myDisplay();
//__________________________________














// exemplo 04 - Waiting for a Timeout
//_____________________________________
// async function myDisplay() {
//     let myPromise = new Promise(
//         (resolve) => {
//             setTimeout(() => {resolve("Mensagem após o tempo do setTimeout")}, 3000);
//         }
//     );

//     const retornoDaPromise = await myPromise;
//     const titulo = document.getElementById("demo");

//     titulo.innerHTML = retornoDaPromise;
// }

// myDisplay();
//____________________________________














// exemplo 05 - Waiting for a file

// // esse exemplo retornou o erro abaixo. depoistentarei resolver
// Access to XMLHttpRequest at 'LOCAL DO ARQUIVO/promises-ivan/mycar.html' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
// promises-ivan.js:805          GET file:LOCADO DO ARQUIVO/promises-ivan/mycar.html net::ERR_FAILED

//_____________________________________
// async function getFile() {
//     let myPromise = new Promise(
//         (resolve) => {
//             let req = new XMLHttpRequest();
//             req.open('GET', "mycar.html");
//             req.onload = () => {
//                 if (req.status == 200) {
//                     resolve(req.response);
//                 }else{
//                     resolve("File Not Found");
//                 }
//             };
//             req.send();
//         }
//     );        

//     const pExemplo = document.getElementById("pExemplo");
//     pExemplo.innerHTML = await myPromise;
// }

// getFile();
//_______________________________________________








