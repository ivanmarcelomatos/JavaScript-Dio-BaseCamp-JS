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



// relacionado
// https://www.w3schools.com/jsref/met_node_removechild.asp

// document.removeChild(element); //remove um elemento HTML filho a partir de um elemento HTML pai
// const listaDeProjetos = document.getElementsByTagName('ul')[0];
// listaDeProjetos.removeChild(listaDeProjetos.firstElementChild);




// relacionado
// https://www.w3schools.com/jsref/met_node_appendchild.asp

// exemplo 01
// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("myList").appendChild(node);


// //exemplo 02
// //Move an item from one list to another:
// const node = document.getElementById("myList2").lastElementChild;
// document.getElementById("myList1").appendChild(node); 


// // exemplo 03
// // Create a <p> element and append it to a <div> element:
// const para = document.createElement("p");
// const node = document.createTextNode("This is a paragraph.");
// para.appendChild(node);
// document.getElementById("myDIV").appendChild(para);





// {terminar de fazer os exemplos do w3schools}
// relacionados:
// https://www.w3schools.com/jsref/met_node_replacechild.asp
// JavaScript HTML DOM Node Lists
// https://www.w3schools.com/js/js_htmldom_nodelist.asp
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/replaceChild
// document.replaceChild(new, old); //substitui um elemento

// // exemplo01
// // Replace a text node in an <li> element with a new text node:
// const newNode = document.createTextNode("Projeto Substituto");
// const element = document.getElementById("listaDeProjetos").children[0];

// element.replaceChild(newNode, element.childNodes[0]);




// exemplo02
//Replace an <li> element with a new <li> element:
//_____________________________________________________
// const element = document.createElement("li");
// const textNode = document.createTextNode("Water");
// element.appendChild(textNode);
// const list = document.getElementById("listaDeOpcoes");
// list.replaceChild(element, list.childNodes[0]);
//_____________________________________________________














// // Trabalhando com Estilos
// link videoaula relacionada na DIO - Trabalhando com Estilos
// https://web.dio.me/course/manipulando-dom-com-javascript/learning/25149635-89e3-43da-be0f-681be1c58459?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




//_________________________________________________
// const meuElemento = document.getElementById("meu-elemento");
// meuElemento.classList.add("novo-estilo");
// meuElemento.classList.remove("classe");
// meuElemento.classList.toggle("dark-mode"); // alternar
//________________________________________________
// const meuElemento = document.getElementById("meu-elemento");
// meuElemento.classList;
// meuElemento.classList.add("novo-estilo");
// meuElemento.classList.remove("classe");
// meuElemento.classList.toggle("dark-mode");
//________________________________________________

















// // Acessando Diretamente o CSS de um elemento

//_______________________________________________
// document.getElementsByTagName("h1").titulo.style.color="green";
//_______________________________________________
// document.getElementsByTagName("h1").titulo.style.color="green";
//______________________________________________
// document.getElementsByTagName("h1").titulo.style.color="blue";
//______________________________________________
// document.getElementsByTagName("h1").titulo1.style.color="red";
//______________________________________________
document.getElementsByTagName("h1").titulo1.style.color="red";





















// Link Videoaula Relacionada na DIO - Eventos Tipos e Acionando Eventoshttps://web.dio.me/course/manipulando-dom-com-javascript/learning/2a57984c-d99d-4262-bccb-f706f1d56b24?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined


// Eventos
// são qualquer tipo de ação que o usuário faz numa página web

// mouseover

// mouseout


// click 

// dbclick 


// change 

// load 








// Função Event Listener

//_______________________________________________
// function avisaClicou() {
//     alert("clicou!");
// }

// const botao = document.getElementById("meuBotao");

// //observe que a funcão eh chamada pelo EventListener e por isso não se coloca os parênteses
// // //relacionado - addEventListener executa uma função antes mesmo de ser chamada
// // https://pt.stackoverflow.com/questions/374278/addeventlistener-executa-uma-fun%C3%A7%C3%A3o-antes-mesmo-de-ser-chamada
// botao.addEventListener("click", avisaClicou); 
//_______________________________________________
// function avisaClicou() {
//     alert("clicou!");
// }

// const botao = document.getElementById("meuBotao");
// botao.addEventListener("click", avisaClicou);
//______________________________________________
// function avisaClicou() {
//     alert("clicou!");
// }

// const meuBotao = document.getElementById("meuBotao");
// meuBotao.addEventListener("click", avisaClicou);
//_______________________________________________
function avisaClicou() {
    alert("clicou!");
}

const meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", avisaClicou);
//_______________________________________________















// Mudar diretamente no HTML demonstrado no arquivo index




