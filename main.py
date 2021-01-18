class Game():
	def __init__(self):
		pass
	def startGame(self):
		print('Greetings, Player')
		print('Felix here for a bit of a mini game if you are up for it...')
		self.ready = input('Are you up for it? (yes or no)\n> ').strip().lower()
		while True:
			# self.ready = input('Are you up for it? (yes or no)\n> ').strip().lower()
			if self.ready == 'yes' or self.ready == 'y':
				return self.continueGame()
			elif self.ready == 'no' or self.ready == 'n':
				print('\nOkay, I guess you don\'t have time')
				print('Honesty, I have a very important collab I\'m working on with Clyde to get to')
				print('See you some other time')
				raise SystemExit
			else:
				print(f'\nI am not built to deal with the term "{self.ready}""')
				print('Please try again (yes or no)')
				self.ready = input('> ')

	def clydeTalking(self):
		print('OH!! that\'s great to hear!')
		print('You don\'t understand how happy that makes me feel.')
		print('See, it\'s not normal for me to host a game,')
		print('But Clyde hosted the last event, so it\'s my turn.')
		print('However, I\'m sort of okay with it, since it\'s math related')
game = Game()
game.startGame()




'''Felix says "HI"
Felix says stuff about starting a G.
Something like Gstart
He would ask for how hard you want it to be {"Easy", "Medium", "Hard"}
He would take that and set a variable
Here, we are going to randomly generate a number from	'''