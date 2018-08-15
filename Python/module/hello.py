#!/usr/bin/env python
# -*- coding: utf-8 -*-

'a test module'

__author__ = 'Uhover'

import sys

def test():
	args = sys.argv
	if len(args) == 1 :
		print 'Hello World!'
	elif len(args) == 2 :
		print 'Hello, %s!' % args[1]
	else:
		print 'Too many arguments!'

# 私有函数（可以调用。但不应该调用）
def _func1(name):
	return 'Hello, %s' % name

def _func2(name):
	return 'Hi, %s' % name

def greeting(name):
	if len(name) > 3 :
		return _func1(name)
	else:
		return _func2(name)

if __name__ == '__main__':
	test()
