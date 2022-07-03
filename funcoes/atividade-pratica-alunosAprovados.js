// link videoaula relacionada na DIO - Funções - Atividade Prática - Alunos aprovados
// https://web.dio.me/course/funcoes/learning/0a54c71b-949d-4157-8509-6dbe68492dae?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined




//Criação de constante com os objetos que serão usados
//_______________________________________
// const alunos = [
// 	{
// 		nome: 'João',
// 		nota: 5,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
// ];
//__________________________________________
// const alunos = [
// 	{
// 	nome: 'João',
// 	nota: 5,
// 	turma: '1B',
// 	}, 
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
// ];
// console.log(alunos);
//__________________________________________
// const alunos = [
// 	{
// 		nome: 'João',
// 		nota: 5,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Sofia',
// 		nota: 9,
// 		turma: '1B',
// 	},
// 	{
// 		nome: 'Paulo',
// 		nota: 6,
// 		turma: '2C',
// 	},
// ];
// // console.log(alunos);
//_________________________________________
const alunos = [
	{
		nome: "João",
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];
// console.log(alunos);
//__________________________________________
















//Criação da Função alunosAprovados
//________________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//_________________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//________________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//_______________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//_______________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//______________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//______________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			aprovados.push(alunos[i].nome);
// 		}
// 	}
// 	return aprovados;
// }
//_______________________________________________
















//criação da função alunosAprovados - Utilizando Object Destructuring
//_____________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (let i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {

// 			const {nome, nota} = alunos[i];


// 			aprovados.push({nome, nota});
// 		}
// 	}
// 	return aprovados;
// }
//______________________________________________
// function alunosAprovados(alunos, media) {
// 	let aprovados = [];

// 	for (i = 0; i < alunos.length; i++) {
// 		if (alunos[i].nota >= media) {
// 			const {nome, nota} = alunos[i];
// 			aprovados.push({nome, nota});
// 		}
// 	}
// 	return aprovados;
// }
//______________________________________________
function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		if (alunos[i].nota >= media) {
			const {nome, turma} = alunos[i];
			aprovados.push({nome, turma});
		}
	}
	return aprovados;
}
//_______________________________________________














//Testando a Função
//____________________________________________
// console.log(alunosAprovados(alunos, 5));
// // [ 'João', 'Sofia', 'Paulo' ]

// console.log(alunosAprovados(alunos, 7));
// // [ 'Sofia ]
//____________________________________________
// console.log(alunosAprovados(alunos, 6));
//____________________________________________
// console.log(alunosAprovados(alunos, 6));
//____________________________________________
console.log(alunosAprovados(alunos, 8));