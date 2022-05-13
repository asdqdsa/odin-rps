'use strict';

const options = [
'rock',
'paper',
'scissors'
];

function Rps(name, win, lose) {
	this.name = name;
	this.win = win;
	this.lose = lose;
}
const rock = new Rps('rock', 'scissors', 'paper');
const paper = new Rps('paper', 'rock', 'scissors');
const scissors = new Rps('scissors', 'paper', 'rock');

const map = new Map([['rock', rock], ['paper', paper], ['scissors', scissors]])
function humanPlayer() {
	let inputRPS = prompt('RPS?', 'rock');
	if (inputRPS === null) return inputRPS;
	return inputRPS.toLocaleLowerCase();
}

function cpuPlayer() {
	let random = Math.floor(Math.random() * options.length);
	return options[random];
}

function fight(playerOne, playerTwo) {
	return map.get(playerOne).win === map.get(playerTwo).name ? map.get(playerOne) : map.get(playerTwo);
}

function fightObj(enemyObj) {
	return map.get(this).win === map.get(enemyObj).name ? map.get(this) : map.get(enemyObj);
}
// [Post a Reply][Return] [Catalo]

function game(humanPlayer, cpuPlayer) {
	let scoreHuman = 0;
	let scoreCPU = 0;
	while ( (scoreHuman < 3) && (scoreCPU < 3) ) {
		let arrComp = [humanPlayer(), cpuPlayer()];
		if (arrComp[0] === null) {
			console.log('povide RPS');
		} else if (arrComp[0] === arrComp[1]) {
			console.log(arrComp[0], 'even',arrComp[1]);
		} else {
			console.log(arrComp[0], 'X',arrComp[1]);
			let win = fight(arrComp[0], arrComp[1]);
			// let win = arrComp[0].fightObj(arrComp[1]);
			arrComp[0] === win.name ? scoreHuman++ : scoreCPU++;
		}
		console.log(scoreHuman, scoreCPU)
	}
	return scoreHuman > scoreCPU ? console.log('You won') : console.log('You lost');
}
game(humanPlayer, cpuPlayer);


// const container = document.querySelector('#container')
// const contentP = document.createElement('p')
// const contentH3 = document.createElement('h3')
// const contentD = document.createElement('div')
// const contentDivH1 = document.createElement('h1')
// const contentDivP =  document.createElement('p')
// const btn = document.createElement('button')



// contentP.classList.add('contentP')
// contentP.style.color = 'red'
// contentP.textContent = 'Hello, I\'m read!'
// contentH3.style.color = 'Blue'
// contentH3.textContent = 'Hello, I\'m blue'
// contentD.style.backgroundColor = 'pink'
// contentD.style.borderColor = 'black'
// contentD.style.borderWidth = '1px'
// contentD.style.borderStyle = 'solid'
// contentDivH1.textContent = 'I\'m in a div'
// contentDivP.textContent = 'ME TOO!'
// btn.textContent = 'Click me!'
// btn.id = 'btn'

// container.appendChild(contentP)
// container.appendChild(contentH3)
// container.appendChild(contentD)
// contentD.appendChild(contentDivH1)
// contentD.appendChild(contentDivP)
// container.appendChild(btn)


// // btn.onclick = () => alert('hi')
// btn.addEventListener('click', (e) => e.target.style.background = 'blue')
// const btnsAll = document.querySelectorAll('button')
// btnsAll.forEach((e) => {
// 	e.addEventListener('click', () => alert(e.id))
// })
