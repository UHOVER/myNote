#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-07-12 10:57:44
# @Author  : uhover (unanswer@outlook.com)
# @Link    : http://www.baidu.com/
# @Version : $Id$

from __future__ import division
import os
import sys
# import hello

# hello.test()

try:
	import hello as test
except ImportError:
	import test

test.test()
print test.__author__

print test.greeting('na')

print test._func1('name')

print sys.path


print 10 // 3