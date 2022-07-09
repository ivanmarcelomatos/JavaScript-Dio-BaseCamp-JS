
// videoaula relacionada na DIO - JavaScript Assíncrono - Atividade Prática
// https://web.dio.me/course/javascript-assincrono/learning/0ff9dcfc-720e-4d26-8052-ef45393e4fb8?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined

// aparentemente essa API deixou de funcionar. Tentarei substituí-la por outra e fazer voltar a funcionar

//_______________________________________________________
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
 
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
//_______________________________________________________