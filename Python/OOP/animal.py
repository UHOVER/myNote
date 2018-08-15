#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-07-13 17:41:11
# @Author  : uhover (unanswer@outlook.com)
# @Link    : http://www.baidu.com/
# @Version : $Id$

class Animal(object):
	"""docstring for Animal"""
	def __init__(self, arg):
		super(Animal, self).__init__()
		self.arg = arg

	def run(self):
		print '%s, Animal is running...' % self.arg

class Dog(Animal):
	"""docstring for Dog"""
	def __init__(self, arg):
		super(Dog, self).__init__(arg)
		self.arg = arg
	
	def run(self):
		print('Dog is Running...')	


class Cat(Animal):
	"""docstring for Cat"""
	def __init__(self, arg):
		super(Cat, self).__init__(arg)
		self.arg = arg
		
dog = Dog('dog')
dog.run()

cat = Cat('cat')
cat.run()

print(isinstance(cat, Dog))