// // Link Videoaula da Atividade Prática Relacionada na DIO - 
// https://web.dio.me/course/manipulando-dom-com-javascript/learning/e84c6e17-6a14-4e5d-9916-87600aa4e9aa?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined


function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //esse método ele retorna uma array

// obs quando se usa o método getElementsByClassName ele também retorna um array


const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);
