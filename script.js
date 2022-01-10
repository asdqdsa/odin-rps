const options = [
'rock',
'paper',
'scissors'
];

const rock = {
	name:'rock',
	win:'scissors',
	lose: 'paper',
};

const paper = {
	name:'paper',
	win:'rock',
	lose: 'scissors',
};

const scissors = {
	name:'scissors',
	win:'paper',
	lose: 'rock',
};

const map = new Map([['rock', rock], ['paper', paper], ['scissors', scissors]])
function humanPlayer() {
	let inputRPS = prompt('RPS?', 'rock').toLocaleLowerCase();
	return inputRPS;
}

function cpuPlayer() {
	let random = Math.floor(Math.random() * options.length);
	return options[random];
}

function fight(obj1, obj2) {
	return map.get(obj1).win === map.get(obj2).name ? map.get(obj1) : map.get(obj2);
}

function game(humanPlayer, cpuPlayer) {
	let scoreHuman = 0;
	let scoreCPU = 0;
	for (let i = 0; i < options.length; i++) {
		let arrComp = [humanPlayer(), cpuPlayer()];
		if (arrComp[0] === arrComp[1]) {
			console.log(arrComp[0], 'even',arrComp[1]);
			i--;
		} else {
			console.log(arrComp[0], 'X',arrComp[1]);
			let win = fight(arrComp[0], arrComp[1]);
			arrComp[0] === win.name ? scoreHuman++ : scoreCPU++;
		}
		console.log(scoreHuman, scoreCPU)
	}
	return scoreHuman > scoreCPU ? console.log('You won') : console.log('You lost');
}
game(humanPlayer, cpuPlayer);
