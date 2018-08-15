#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-07-12 16:53:50
# @Author  : uhover (unanswer@outlook.com)
# @Link    : http://www.baidu.com/
# @Version : $Id$

import os
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

if __name__ == '__main__':
	test()