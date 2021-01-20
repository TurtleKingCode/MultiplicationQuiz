const system = require('./system/system');
const readlineSync = require('readline-sync');
const input = readlineSync.question;

class Game {
	constructor() { }
	startGame() {
		console.log('Greetings, Player');
		console.log('Felix here for a bit of a mini game if you are up for it...');
		console.log('Are you up for it? (yes or no)');
		this.ready = input('> ').trim().toLowerCase();
		while (true) {
			if (this.ready == 'yes' || this.ready == 'y') {
				return this.continueGameIntro();
			} else if (this.ready == 'no' || this.ready == 'n') {
				console.log('\nOkay, I guess you don\'t have time');
				console.log('Honesty, I have a very important collab I\'m working on with Clyde to get to');
				console.log('See you some other time');
				process.exit();
			} else {
				console.log(`\nI am not built to deal with the term "${this.ready}"`);
				console.log('Please try again (yes or no)');
				this.ready = input('> ')
			}
		}
	}
	continueGameIntro() {
		console.log('\nOH!! that\'s great to hear!');
		console.log('You don\'t understand how happy that makes me feel.');
		console.log('See, it\'s not normal for me to host a game,');
		console.log('But Clyde hosted the last event, so it\'s my turn.');
		console.log('However, I\'m sort of okay with it, since it\'s math related');
		console.log('');
		console.log('Anyway, this is my Multiplication Quiz (NodeJS Version)');
		console.log('May I get your name player?');
		this.name = input('> ');
		console.log(`Okay ${this.name}.  Welcome, and here are the rules.`)
		this.rules();
	}
	rules() {
		console.log('');
		console.log('RULES');
		console.log('You will be quizzed on 10 multiplication questions');
		console.log('You can answer them, skip them, or quit');
		console.log('I hope you are not using any calculators to solve these, especially MY CALCULATOR');
		console.log('If you respond incorrectly, you would be given 3 more chances to answer correctly');
		console.log('Each question is worth 4 points, you will lose 1 point for each incorrect answer you give');
		console.log('Questions that you gave up on reward no points.');
		console.log('After all questions have been passed, you would get a report of you performance');
		console.log('And allowed to play again');
		console.log('Now that I think of it... This is more of a Test than a Game......');
		this.askLevel();
	}
	askLevel() {
		console.log('\nOkay, pick your difficulty. (easy (e), medium (m), hard (h))');
		while (true) {
			var level = input('> ').trim().toLowerCase().replace(/ /g, '');
			if (!['e', 'easy', 'm', 'medium', 'h', 'hard'].includes(level)) {
				console.log(`\n${level} is not a difficulty I accept`);
				console.log('Try Again');
			} else {
				this.level = level;
				break;
			}
		}
		this.quizPart(this.level);
	}
	quizPart() {
		var mode;
		var message;
		switch(this.level.split('')[0]) {
			case 'e':
				this.numbers = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
				mode = 'EASY';
				message = 'Not too bad';
				break;
			case 'm':
				this.numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
				mode = 'MEDIUM';
				message = 'I think you can do it';
				break;
			case 'h':
				this.numbers = [-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
				mode = 'HARD';
				message = 'I hope you\'re prepared';
				break;
		}
		console.log(`\n${mode} MODE`);
		console.log(`Okay, you opted for "${mode} Mode"`);
		console.log(`You would be quizzed on multiplication facts for numbers ${this.numbers[0]} to ${this.numbers[this.numbers.length - 1]}`);
		console.log(message);

		this.data = new Array(10);
		for (var i = 0; i < this.data.length; i++) {
			this.data[i] = {};
			var question = this.data[i];
			while (true) {
				question.f = random(this.numbers);
				question.s = random(this.numbers);
				var previous = this.data.map(x => `${x.f} ${x.s}`).splice(0, i);
				if (previous.includes(`${question.f} ${question.s}`)) continue
				else break;
			}
			question.answer = question.f * question.s;
			question.points = 4;
			question.correct = true;
			question.corrects = 0;
			question.responces = [];
			while (question.points > 0) {
				console.log(`\nWhat is ${question.f} x ${question.s}`);
				var ask = input('> ');
				question.responces.push(ask);
				if (ask == question.answer) {
					switch (question.points) {
						case 4:
							console.log('\nCORRECT');
							question.corrects++;
							break;
						case 2:
							console.log('\nGreat Job');
							break;
						case 1:
							console.log('\nI knew You\'d get it');
							break;
					}
					break;
				} else {
					question.points--;
					question.correct = false;
					switch (question.points) {
						case 3:
							console.log('\nThat\'s not quite right');
							console.log('Try Again');
							break;
						case 2:
							console.log('\nWrong Again');
							console.log('You have 2 more tries');
							break;
						case 1:
							console.log('\nIncorrect');
							console.log('You have only one try left');
							console.log('Don\'t worry, I believe in you');
							break;
						case 0:
							console.log('\nWelp, At Least you tried');
							break;
					}
					continue;
				}
				// question.responces.push(ask);
			}
		}
		console.log(`\nGreat... We went through all ${this.data.length}`);
		console.log('Let\'s see how you did');
		this.viewResults();
	}
	viewResults() {
		console.log('\nRESULTS\n');

		var score = 0;
		var corrects = 0;
		var bestScore = this.data.length * 4;
		for (var i in this.data) {score += this.data[i].points; corrects += this.data[i].correct ? 1 : 0;}

		var questCent = Math.round((corrects * 100 / this.data.length) * 100) / 100;
		var pointCent = Math.round((score * 100 / bestScore) * 100) / 100;

		console.log(`Out of ${this.data.length} questions, you got ${corrects} correct on your first try. => ${questCent}%`);
		console.log(`Out of ${bestScore} possible points, you earned ${score}. => ${pointCent}%`);

		for (var i in this.data) {
			var q = this.data[i];
			var responces = '';
			switch (q.points) {
				case 4:
					responces = `Correct => ${q.responces[0]}`;
					break;
				default:
					responces = `Responces:`;
					var last = `Correct`;
					if (q.points == 0) last = 'Incorrect';
					for (var j = 0; j < q.responces.length - 1; j++) {
						responces += `\n\t\tIncorrect => ${q.responces[j]}`;
					}
					responces += `\n\t\t${last} => ${q.responces[q.responces.length - 1]}`;
					break;
			}
			console.log(`\nQ-${i+1}: ${q.f} x ${q.s} = ${q.answer}`);
			console.log(`\t${responces}`)
			console.log(`\tPoints Earned: ${q.points}`)
		}
		console.log('');
		if (questCent <= 60) {
			console.log(`You did pretty badly on this... You might want to practice`);
			console.log('I can help you with that!! (yes, no)');
		} else if (questCent > 60 && questCent < 90) {
			console.log('You didn\'t do that bad...');
			console.log('But you can practice to get better (yes, no)');
		} else if (questCent >= 90 && questCent < 100) {
			console.log('You got almost a perfect score...');
			console.log('You can still practice if you want (yes, no)');
		} else if (questCent) {
			console.log('You literally got a perfect score');
			console.log('I\'d say you don\'t neeed to practice, but that\'s up to you (yes, no)');
		}
		var again = input('> ').trim().replace(/ /g, '').toLowerCase();
		switch (again.split('')[0]) {
			case 'y':
				console.log('\nGreat Let\'s go!!!');
				this.askLevel();
				break;
			case 'n':
				console.log('That\'s Fine.  See ya at my collab with Clyde!!!');
				process.exit();
				break;
		}
	}
}

game = new Game();
game.startGame();

/*Felix says "HI"
Felix says stuff about starting a G.
Something like Gstart
He would ask for how hard you want it to be {"Easy", "Medium", "Hard"}
He would take that and set a variable
Here, we are going to randomly generate a number from	*/

// for (var i = 0; i < 50; i++) {
// 	console.log(`\u001b[${i}mHello World ==> ${i}\u001b[0m`);
// }
// https://www.npmjs.com/package/terminal-kit
// http://blog.soulserv.net/tag/terminal/
// https://www.npmjs.com/package/readline-sync
// https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html

function random(array) {
	return array[Math.floor(Math.random() * array.length)];
}
