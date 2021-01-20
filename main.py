from system.system import System as system
import sys
from random import choice as random

class Game:
	def __init__(self):
		pass
	def start_game(self):
		print('Greetings, Player')
		print('Felix here for a bit of a mini game if you are up for it...')
		print('Are you up for it? (yes or no)')
		self.ready = input('> ').strip().lower()
		while True:
			if self.ready == 'yes' or self.ready == 'y':
				return self.continue_game_intro()
			elif self.ready == 'no' or self.ready == 'n':
				print('\nOkay, I guess you don\'t have time')
				print('Honesty, I have a very important collab I\'m working on with Clyde to get to')
				print('See you some other time')
				raise SystemExit
			else:
				print(f'\nI am not built to deal with the term "{self.ready}""')
				print('Please try again (yes or no)')
				self.ready = input('> ')

	def continue_game_intro(self):
		print('\nOH!! that\'s great to hear!')
		print('You don\'t understand how happy that makes me feel.')
		print('See, it\'s not normal for me to host a game,')
		print('But Clyde hosted the last event, so it\'s my turn.')
		print('However, I\'m sort of okay with it, since it\'s math related')
		print('Anyway, this is my Multiplication Quiz (NodeJS Version)')
		print('May I get your name player?')
		self.name = input('> ')
		print(f'Okay {self.name}.  Welcome, and here are the rules.')
		self.rules()
	def rules(self):
		print('')
		print('RULES')
		print('You will be quizzed on 10 multiplication questions')
		print('You can answer them, skip them, or quit')
		print('I hope you are not using any calculators to solve these, especially MY CALCULATOR')
		print('If you respond incorrectly, you would be given 3 more chances to answer correctly')
		print('Each question is worth 4 points, you will lose 1 point for each incorrect answer you give')
		print('Questions that you gave up on reward no points.')
		print('After all questions have been passed, you would get a report of you performance')
		print('And allowed to play again')
		print('Now that I think of it... This is more of a Test than a Game......')
		self.ask_level()
	def ask_level(self):
		print('\nOkay, pick your difficulty. (easy (e), medium (m), hard (h))')
		while True:
			level = input('> ').strip().lower().replace(' ', '')
			if level not in ['e', 'easy', 'm', 'medium', 'h', 'hard']:
				print(f'\n{level} is not a difficulty I accept')
				print('Try Again')
			else:
				self.level = level
				break
		self.quiz_part()
	def quiz_part(self, level):
		fl = list(level)[0]
		if fl == 'e':
			self.numbers = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]
			mode = 'EASY'
			message = 'Not too bad'
		elif fl == 'm':
			self.numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
			mode = 'MEDIUM'
			message = 'I think you can do it'
		elif fl == 'h':
			self.numbers = [-15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
			mode = 'HARD'
			message = 'I hope you\'re prepared'
		
		print(f'\n{mode} MODE')
		print(f'Okay, you opted for "{mode} MODE"')
		print(f'You would be quizzed on multiplication facts for numbers {self.numbers[0]} to {self.numbers[len(self.numbers) - 1]}')
		print(message)

		self.data = [{
			"f": 0,
			"s": 0
		}] * 3

		for i in range(len(self.data)):
			# while True:
			self.data[i]['f'] = random(self.numbers)
			self.data[i]['s'] = random(self.numbers)
		def prev(x):
			return f'{x["f"]} {x["s"]}'
		previous = map(prev, self.data)
		# print(self.data)
		# print(list(previous), self.data)


				# previous = self.



# game = Game()
# game.start_game()

# Game().start_game()
Game().quiz_part('e')

# import os
# os.system("cls")

'''Felix says "HI"
Felix says stuff about starting a G.
Something like Gstart
He would ask for how hard you want it to be {"Easy", "Medium", "Hard"}
He would take that and set a variable
Here, we are going to randomly generate a number from	'''