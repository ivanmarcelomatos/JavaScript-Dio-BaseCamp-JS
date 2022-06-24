# Funções

Projetos referentes ao curso "Funções" que ministrei pela [Digital Innovation One](https://digitalinnovation.one/).

https://web.dio.me/course/funcoes/learning/183f95d6-d7cc-4ccb-84d7-f2ecc6f3aa01?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



## Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```
