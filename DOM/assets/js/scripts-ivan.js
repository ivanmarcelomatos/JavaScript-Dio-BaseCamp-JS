// Manipulando a DOM com JavaScript - Apresentação do Curso 
// https://web.dio.me/course/manipulando-dom-com-javascript/learning/71efe9d7-2b50-42b4-b501-4503750c3701?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined














// // Selecionando Elementos

// document.getElementById("titulo"); 
// // <h1 id="titulo">Minha Página</h1>


// document.getElementsByTagName("li"); // o retorno aqui é na forma de um array, ainda que seja de 1 objeto
// // HTMLCollection(3) [li, li, li]


// document.getElementsByClassName("textos"); // o retorno aqui também é na forma de um array, ainda que seja 1 objetdo
// // HTMLCollection(2) [section.textos, section.textos]


// document.querySelectorAll('.primeira-classe .opcao');
// // NodeList(3) [li.opcao, li.opcao, li.opcao]

















// // Adicionar e Deletar Elementos

// document.createElement(element); //cria um novo elemento HTML
// document.createElement("p"); // <p></p>
// document.createElement("div"); // <div></div>


// document.removeChild(element); //remove um elemento HTML filho a partir de um elemento HTML pai


// document.appendChild(element); //adiciona um elemento


// document.replaceChild(new, old); //substitui um elemento












// // Trabalhando com Estilos

// const meuElemento = document.getElementById("meu-elemento");

// meuElemento.classList.add("novo-estilo");

// meuElemento.classList.remove("classe");

// meuElemento.classList.toggle("dark-mode"); // alternar














// // Acessando Diretamente o CSS de um elemento
// document.getElementsByTagName("h1").titulo.style.color="green";
// // document.getElementsByTagName("h1").titulo.style.color="blue";

// document.getElementsByTagName("h1").titulo.style.border="red solid 2px";


















// Eventos
// são qualquer tipo de ação que o usuário faz numa página web

// mouseover

// mouseout


// click 

// dbclick 


// change 

// load 



// Função Event Listener

function avisaClicou() {
    alert("clicou!");
}

const botao = document.getElementById("meuBotao");

//observe que a funcão eh chamada pelo EventListener e por isso não se coloca os parênteses
// //relacionado - addEventListener executa uma função antes mesmo de ser chamada
// https://pt.stackoverflow.com/questions/374278/addeventlistener-executa-uma-fun%C3%A7%C3%A3o-antes-mesmo-de-ser-chamada
botao.addEventListener("click", avisaClicou); 


