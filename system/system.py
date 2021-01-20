import sys
from time import sleep

class System:
	def __init__(self):
		pass
	def log(words, sleep_time=0.01):
		for char in (words + "\n"):
			sleep(sleep_time)
			sys.stdout.write(char)
			sys.stdout.flush()