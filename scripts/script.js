'use strict';

const sex = ['female', 'male'];

// eslint-disable-next-line no-unused-vars
const firstName = '';
let lastName = '';
let confirmedSex = '';
let confirmedAlignment = '';
let confirmedRace = '';

import {
	femaleNames,
	maleNames,
	humanNames,
	elfNames,
	dwarfNames,
	gnomeNames,
	halflingNames,
	orcNames,
	tieflingNames,
	dragonbornNames,
	dragonbornClans,
} from './names.js';

import {
	humanity,
	mainType,
	subType,
	races,
	adjs,
	jobs,
	aesth,
	alignments,
	moralsLG,
	moralsLN,
	moralsLE,
	moralsNG,
	moralsNN,
	moralsNE,
	moralsCG,
	moralsCN,
	moralsCE,
	personalityTraits,
} from './arrays.js';

import {
	about1,
	about2,
	about3,
	about1a,
	about2a,
	about3a,
	about1b,
	about2b,
	about3b,
	about1c,
	about2c,
	about3c,
} from './aboutarr.js'

// Function for getting randomized sex
function getRandomSex() {
	confirmedSex = sex[Math.floor(Math.random() * sex.length)];
	return confirmedSex;
}

// Function for getting randomized first name based on sex
function getRandomFirstName() {
	getRandomSex();
	return confirmedSex === 'female' ? femaleNames[Math.floor(Math.random() * femaleNames.length)] : maleNames[Math.floor(Math.random() * maleNames.length)];
}

function setRandomFirstName() {
	const firstName = getRandomFirstName();
	document.getElementById('firstName').innerText = firstName;
	return firstName;
}

// Function for getting randomized race and
// last name based on race

function getRandomRace() {
	confirmedRace = races[Math.floor(Math.random() * races.length)];
	return confirmedRace;
}

function getRandomLastName() {
	getRandomRace();
	if (
		confirmedRace === 'Elf'
    || confirmedRace === 'Half-Elf'
    || confirmedRace === 'High Elf'
    || confirmedRace === 'Wood Elf'
    || confirmedRace === 'Eladrin Elf'
	) {
		lastName = `${elfNames[Math.floor(Math.random() * elfNames.length)]}`;
	} else if (confirmedRace === 'Human') {
		lastName = `${humanNames[Math.floor(Math.random() * humanNames.length)]}`;
	} else if (
		confirmedRace === 'Dwarf'
    || confirmedRace === 'Hill Dwarf'
    || confirmedRace === 'Mountain Dwarf'
	) {
		lastName = `${dwarfNames[Math.floor(Math.random() * dwarfNames.length)]}`;
	} else if (
		confirmedRace === 'Gnome'
    || confirmedRace === 'Deep Gnome'
    || confirmedRace === 'Rock Gnome'
	) {
		lastName = `${gnomeNames[Math.floor(Math.random() * gnomeNames.length)]}`;
	} else if (
		confirmedRace === 'Halfling'
    || confirmedRace === 'Lightfoot Halfling'
    || confirmedRace === 'StoutHalfling'
	) {
		lastName = `${
			halflingNames[Math.floor(Math.random() * halflingNames.length)]
		}`;
	} else if (confirmedRace === 'Orc' || confirmedRace === 'Half-Orc') {
		lastName = `${orcNames[Math.floor(Math.random() * orcNames.length)]}`;
	} else if (confirmedRace === 'Tiefling') {
		lastName = `${
			tieflingNames[Math.floor(Math.random() * tieflingNames.length)]
		}`;
	} else if (confirmedRace === 'Dragonborn') {
		lastName = `${
			dragonbornNames[Math.floor(Math.random() * dragonbornNames.length)]
		}
     of the Clan ${
	dragonbornClans[Math.floor(Math.random() * dragonbornClans.length)]
}`;
	}

	return lastName;
}

function setRandomLastName() {
	getRandomLastName();
	document.getElementById('surname').innerText = lastName;
}

// Function for changing pronouns from she/he
function setPronoun() {
	const pronoun = document.getElementsByClassName('pronoun');
	for (let i = 0; i < pronoun.length; i++) {
		if (confirmedSex === 'female') {
			pronoun[i].innerText = 'She';
		} else {
			pronoun[i].innerText = 'He';
		}
	}
}

// Function for getting randomized humanity
function getRandomHumanity() {
	return humanity[Math.floor(Math.random() * humanity.length)];
}

function setRandomHumanity() {
	const randomHumanity = getRandomHumanity();
	document.getElementById('humanity').innerText = randomHumanity;
	return randomHumanity;
}

// Function for getting randomized mainType
function getRandomMainType() {
	return mainType[Math.floor(Math.random() * mainType.length)];
}

function setRandomMainType() {
	const randomType = getRandomMainType();
	document.getElementById('mainType').innerText = randomType;
	return randomType;
}

// Function for getting randomized subType
function getRandomSubType() {
	return subType[Math.floor(Math.random() * subType.length)];
}

function setRandomSubType() {
	const randomSubType = getRandomSubType();
	document.getElementById('subType').innerText = randomSubType;
	return randomSubType;
}

// Function for getting randomized adjs
function getRandomAdjs() {
	return adjs[
		Math.floor(Math.random() * adjs.length)
	];
}

function setRandomAdjs() {
	const randomAdjs = getRandomAdjs();
	document.getElementById('adjs').innerText = randomAdjs;
	return randomAdjs;
}

// Function for getting randomized aesth
function getRandomAesth() {
	return aesth[
		Math.floor(Math.random() * aesth.length)
	];
}

function setRandomAesth() {
	const randomAesth = getRandomAesth();
	document.getElementById('aesth').innerText = randomAesth;
	return randomAesth;
}

// Function for getting randomized job
function getRandomJob() {
	return jobs[Math.floor(Math.random() * jobs.length)];
}

function setRandomJob() {
	const randomJob = getRandomJob();
	document.getElementById('job').innerText = randomJob;
	return randomJob;
}

const groups = [
    [about1, about2, about3],
    [about1a, about2a, about3a],
    [about1b, about2b, about3b],
    [about1c, about2c, about3c],
  ];
  
  const generate = document.querySelector('.generate');
  generate.addEventListener('click', () => {
    // Pick a random group
    const group = groups[Math.floor(Math.random() * groups.length)];
  
    // Pick a random item from each array in the group
    const item1 = group[0][Math.floor(Math.random() * group[0].length)];
    const item2 = group[1][Math.floor(Math.random() * group[1].length)];
    const item3 = group[2][Math.floor(Math.random() * group[2].length)];
  
    const sentence = item1 + ' ' + item2 + ' ' + item3;
  
    console.log(sentence);
  
    const about = document.querySelector('#about');
    about.textContent = sentence;
  });

// Roll
function rollThreeDice() {
	return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 3;
}

function setRolls() {
	if (confirmedRace === 'Dragonborn') {
		document.getElementById('str').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = `${rollThreeDice() + 1} (+1)`;
	} else if (confirmedRace === 'Dwarf') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Hill Dwarf') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Mountain Dwarf') {
		document.getElementById('str').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Elf' || confirmedRace === 'Halfling') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Eladrin Elf' || confirmedRace === 'High Elf') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Wood Elf') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Half-Elf') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = `${rollThreeDice() + 2} (+2)`;
	} else if (confirmedRace === 'Gnome') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Deep Gnome') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Rock Gnome') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('int').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Lightfoot Halfling') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = `${rollThreeDice() + 1} (+1)`;
	} else if (confirmedRace === 'Stout Halfling') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('con').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Orc' || confirmedRace === 'Half-Orc') {
		document.getElementById('str').innerText = `${rollThreeDice() + 2} (+2)`;
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('int').innerText = rollThreeDice();
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = rollThreeDice();
	} else if (confirmedRace === 'Human') {
		document.getElementById('str').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('dex').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('con').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('int').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('wis').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('cha').innerText = `${rollThreeDice() + 1} (+1)`;
	} else if (confirmedRace === 'Tiefling') {
		document.getElementById('str').innerText = rollThreeDice();
		document.getElementById('dex').innerText = rollThreeDice();
		document.getElementById('con').innerText = rollThreeDice();
		document.getElementById('int').innerText = `${rollThreeDice() + 1} (+1)`;
		document.getElementById('wis').innerText = rollThreeDice();
		document.getElementById('cha').innerText = `${rollThreeDice() + 2} (+2)`;
	}
}

// Function for randomizing alignment and setting label
function getRandomAlignment() {
	confirmedAlignment
    = alignments[Math.floor(Math.random() * alignments.length)];
	return confirmedAlignment;
}

function setRandomAlignment() {
	const randomAlignment = getRandomAlignment();
	document.getElementById('alignment').innerText = randomAlignment;
	return randomAlignment;
}

// Function for getting morals LAWFUL GOOD
function getRandommoralLG() {
	return moralsLG[Math.floor(Math.random() * moralsLG.length)];
}

function setmoralsLG() {
	document.getElementById('firstmoral').innerText = getRandommoralLG();
	document.getElementById('secondmoral').innerText = getRandommoralLG();
	document.getElementById('thirdmoral').innerText = getRandommoralLG();
	document.getElementById('alignment').innerText = 'Lawful Good';
}

// Function for getting morals LAWFUL NEUTRAL
function getRandommoralLN() {
	return moralsLN[Math.floor(Math.random() * moralsLN.length)];
}

function setmoralsLN() {
	document.getElementById('firstmoral').innerText = getRandommoralLN();
	document.getElementById('secondmoral').innerText = getRandommoralLN();
	document.getElementById('thirdmoral').innerText = getRandommoralLN();
	document.getElementById('alignment').innerText = 'Lawful Neutral';
}

// Function for getting morals LAWFUL EVIL
function getRandommoralLE() {
	const confirmedmoralLE
    = moralsLE[Math.floor(Math.random() * moralsLE.length)];
	return confirmedmoralLE;
}

function setmoralsLE() {
	document.getElementById('firstmoral').innerText = getRandommoralLE();
	document.getElementById('secondmoral').innerText = getRandommoralLE();
	document.getElementById('thirdmoral').innerText = getRandommoralLE();
	document.getElementById('alignment').innerText = 'Lawful Evil';
}

// Function for getting morals NEUTRAL GOOD
function getRandommoralNG() {
	return moralsNG[Math.floor(Math.random() * moralsNG.length)];
}

function setmoralsNG() {
	document.getElementById('firstmoral').innerText = getRandommoralNG();
	document.getElementById('secondmoral').innerText = getRandommoralNG();
	document.getElementById('thirdmoral').innerText = getRandommoralNG();
	document.getElementById('alignment').innerText = 'Neutral Good';
}

// Function for getting morals NEUTRAL NEUTRAL
function getRandommoralNN() {
	return moralsNN[Math.floor(Math.random() * moralsNN.length)];
}

function setmoralsNN() {
	document.getElementById('firstmoral').innerText = getRandommoralNN();
	document.getElementById('secondmoral').innerText = getRandommoralNN();
	document.getElementById('thirdmoral').innerText = getRandommoralNN();
	document.getElementById('alignment').innerText = 'True Neutral';
}

// Function for getting morals NEUTRAL EVIL
function getRandommoralNE() {
	return moralsNE[Math.floor(Math.random() * moralsNE.length)];
}

function setmoralsNE() {
	document.getElementById('firstmoral').innerText = getRandommoralNE();
	document.getElementById('secondmoral').innerText = getRandommoralNE();
	document.getElementById('thirdmoral').innerText = getRandommoralNE();
	document.getElementById('alignment').innerText = 'Neutral Evil';
}

// Function for getting morals CHAOTIC GOOD
function getRandommoralCG() {
	return moralsCG[Math.floor(Math.random() * moralsCG.length)];
}

function setmoralsCG() {
	document.getElementById('firstmoral').innerText = getRandommoralCG();
	document.getElementById('secondmoral').innerText = getRandommoralCG();
	document.getElementById('thirdmoral').innerText = getRandommoralCG();
	document.getElementById('alignment').innerText = 'Chaotic Good';
}

// Function for getting morals CHAOTIC NEUTRAL
function getRandommoralCN() {
	return moralsCN[Math.floor(Math.random() * moralsCN.length)];
}

function setmoralsCN() {
	document.getElementById('firstmoral').innerText = getRandommoralCN();
	document.getElementById('secondmoral').innerText = getRandommoralCN();
	document.getElementById('thirdmoral').innerText = getRandommoralCN();
	document.getElementById('alignment').innerText = 'Chaotic Neutral';
}

// Function for getting morals CHAOTIC EVIL
function getRandommoralCE() {
	return moralsCE[Math.floor(Math.random() * moralsCE.length)];
}

function setmoralsCE() {
	document.getElementById('firstmoral').innerText = getRandommoralCE();
	document.getElementById('secondmoral').innerText = getRandommoralCE();
	document.getElementById('thirdmoral').innerText = getRandommoralCE();
	document.getElementById('alignment').innerText = 'Chaotic Evil';
}

// Function for randomizing morals on push of generate & randomize buttons
function randomizemorals() {
	getRandomAlignment();
	setRandomAlignment();
	if (confirmedAlignment === 'Lawful Good') {
		document.getElementById('firstmoral').innerText = getRandommoralLG();
		document.getElementById('secondmoral').innerText = getRandommoralLG();
		document.getElementById('alignment').innerText = 'Lawful Good';
	} else if (confirmedAlignment === 'Lawful Neutral') {
		document.getElementById('firstmoral').innerText = getRandommoralLN();
		document.getElementById('secondmoral').innerText = getRandommoralLN();
		document.getElementById('alignment').innerText = 'Lawful Neutral';
	} else if (confirmedAlignment === 'Lawful Evil') {
		document.getElementById('firstmoral').innerText = getRandommoralLE();
		document.getElementById('secondmoral').innerText = getRandommoralLE();
		document.getElementById('alignment').innerText = 'Lawful Evil';
	} else if (confirmedAlignment === 'Neutral Good') {
		document.getElementById('firstmoral').innerText = getRandommoralNG();
		document.getElementById('secondmoral').innerText = getRandommoralNG();
		document.getElementById('alignment').innerText = 'Neutral Good';
	} else if (confirmedAlignment === 'True Neutral') {
		document.getElementById('firstmoral').innerText = getRandommoralNN();
		document.getElementById('secondmoral').innerText = getRandommoralNN();
		document.getElementById('alignment').innerText = 'True Neutral';
	} else if (confirmedAlignment === 'Neutral Evil') {
		document.getElementById('firstmoral').innerText = getRandommoralNE();
		document.getElementById('secondmoral').innerText = getRandommoralNE();
		document.getElementById('alignment').innerText = 'Neutral Evil';
	} else if (confirmedAlignment === 'Chaotic Good') {
		document.getElementById('firstmoral').innerText = getRandommoralCG();
		document.getElementById('secondmoral').innerText = getRandommoralCG();
		document.getElementById('alignment').innerText = 'Chaotic Good';
	} else if (confirmedAlignment === 'Chaotic Neutral') {
		document.getElementById('firstmoral').innerText = getRandommoralCN();
		document.getElementById('secondmoral').innerText = getRandommoralCN();
		document.getElementById('alignment').innerText = 'Chaotic Neutral';
	} else if (confirmedAlignment === 'Chaotic Evil') {
		document.getElementById('firstmoral').innerText = getRandommoralCE();
		document.getElementById('secondmoral').innerText = getRandommoralCE();
		document.getElementById('alignment').innerText = 'Chaotic Evil';
	}
}

// Function for getting random personality traits
function getRandomTrait() {
	return personalityTraits[
		Math.floor(Math.random() * personalityTraits.length)
	];
}

function setTraits() {
	document.getElementById('firstTrait').innerText = getRandomTrait();
	document.getElementById('secondTrait').innerText = getRandomTrait();
}

// Changes left side information on click of 'generate' button
document.querySelector('.generate').addEventListener('click', function(){
  setRandomHumanity();
  setRandomMainType();
  setRandomSubType();
  setRandomAdjs();
  setRandomAesth();
  setRandomJob();
});

// Changes gender
document.querySelector('.generate').addEventListener('click', function(){
  setPronoun();
});

document.querySelector('.generate').addEventListener('click', function(){
  setRandomFirstName();
  setRandomLastName();
});

// Changes ability scores
document.querySelector('.generate').addEventListener('click', setRolls);

// Changes personality traits
document.querySelector('.generate').addEventListener('click', setTraits);

// Changes morals based on individual alignment buttons
document.getElementById('lawGood').addEventListener('click', setmoralsLG);
document.getElementById('lawNeu').addEventListener('click', setmoralsLN);
document.getElementById('lawEvil').addEventListener('click', setmoralsLE);
document.getElementById('neuGood').addEventListener('click', setmoralsNG);
document.getElementById('neu').addEventListener('click', setmoralsNN);
document.getElementById('neuEvil').addEventListener('click', setmoralsNE);
document.getElementById('chaGood').addEventListener('click', setmoralsCG);
document.getElementById('chaNeu').addEventListener('click', setmoralsCN);
document.getElementById('chaEvil').addEventListener('click', setmoralsCE);

// Randomizes alignment and morals on 'randomize' and 'generate' buttons
document.querySelector('.generate').addEventListener('click', randomizemorals);
document.querySelector('.randomize').addEventListener('click', randomizemorals);