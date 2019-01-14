//Selectors
const roll = document.getElementById('roll');
const img = document.getElementById('img');
const select = document.getElementById('select_your_method');
//Listeners
roll.addEventListener('click', diceRoll);
select.addEventListener('change', checkMethod);
roll.addEventListener('click', tossCoin);

//Validators
let isDice = false;
let isCoin = false;

let isRolling = false;
let isTossed = false;

function checkMethod() {
	if (select.value === 'Six-sided Dice') {
		isDice = true;
		isCoin = false;
		img.src = 'imgs/one.png';
		roll.innerHTML = 'Roll it!';
	} else if (select.value === 'Coin') {
		isCoin = true;
		isDice = false;
		img.src = 'imgs/heads.png';
		roll.innerHTML = 'Toss it!';
	}
}

//Dice roll function.
function diceRoll() {
	//Roll dice.
	if (!isDice) {
		return;
	}
	isRolling = true;
	//Dice rolling gif.
	img.src = 'imgs/dice-roll.gif';
	rolling();
}
function rolling() {
	if (isRolling) {
		//Dice currently rolling. Disable all inputs.
		roll.disabled = true;
		select.disabled = true;
		setTimeout(() => {
			//Generate a random floored num.
			diceLandedOn(Math.floor(Math.random() * 35));
			roll.disabled = false;
			select.disabled = false;
			isRolling = false;
		}, 1000);
	}
}
function diceLandedOn(genNum) {
	switch (genNum) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			img.src = 'imgs/one.png';
			break;

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			img.src = 'imgs/two.png';
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			img.src = 'imgs/three.png';
			break;

		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
			img.src = 'imgs/four.png';
			break;

		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
			img.src = 'imgs/five.png';
			break;

		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
			img.src = 'imgs/six.png';
			break;
	}
}

function tossCoin() {
	if (!isCoin) {
		return;
	}
	isTossed = true;
	img.src = 'imgs/coin.gif';
	inAir();
}
function inAir() {
	if (isTossed) {
		select.disabled = true;
		roll.disabled = true;
		setTimeout(() => {
			coinLanded(Math.floor(Math.random() * 9));
			roll.disabled = false;
			select.disabled = false;
			isTossed = false;
		}, 700);
	}
}

function coinLanded(genNum) {
	switch (genNum) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			img.src = 'imgs/heads.png';
			break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			img.src = 'imgs/tails.png';
			break;
	}
}
