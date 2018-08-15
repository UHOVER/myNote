#!/usr/bin/evn python
#coding:utf-8

L1 = list(range(100))
# print(L1)
# print('0-10: ', L1[:10])
# print('5-10: ', L1[5:10])
# print('后十个: ', L1[-10:])
# # 前10个数每2个取一个
# print('-->: ', L1[:10:2])
# # 每10个取1个
# print('-->: ', L1[::10])

# 迭代

d1 = {'a': 1, 'b': 2, 'c': 3}

for key in d1:
	print(key)

for value in d1.values():
	print(value)

for key, value in d1.items():
	print(key, value)

from collections import Iterable

# 判断是否可以迭代
print(isinstance('123', Iterable))
# print(range(10))

#列表生成式
import os

dirs = [d for d in os.listdir('.')]
print(dirs)

print([x*x for x in xrange(1,10) if x%2 == 0])

L1 = ['Hello', 'World', 18, 'Apple', None]
print(L1)
L2 = [s.lower() for s in L1 if isinstance(s, str)]
print(L2)

g = (x*x for x in xrange(1,10))
print(g)
# print(next(g))
# print(next(g))
# for x in g:
# 	print(x)

# 斐波拉契数列
def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		# print(b)
		yield b
		a, b = b, a+b
		n = n + 1
	return

# f = fib(4)
# print(f)
# for x in f:
# 	print(x)

def f(x):
	return x*3

print(map(f, [1, 2, 3]))

def f1(x, y):
	return x*y
r = reduce(f1, [1, 2, 3, 4])

print(r)

def is_odd(n):
	return n%2 == 1
print(filter(is_odd, [1, 2, 3, 4, 5]))

# 判断数字是否为回数
def is_palindrome(n):
	x = str(n)
	return x[::-1] == x

print(filter(is_palindrome, [1221, 12321, 101, 1122]))

print(sorted([1, 10, 5, 3, -20]))
print(sorted([1, -5, 3, -2, 20], key=abs))
print(sorted(['mm', 'ss', 'kk', 'aa', 'cc'], key=str.lower))
# 反向排序
print(sorted(['mm', 'ss', 'kk', 'aa', 'cc'], key=str.lower, reverse=True))

fl = lambda x : x * x
print(fl(5))

print(fl.__name__)

def test1():
	print('test1')

print(test1.__name__)

def log(func):
	def wrapper(*args, **kw):
		print 'call %s():' % func.__name__
		return func(*args, **kw)
	return wrapper

@log
def now():
	print '2018-7-12'

now()

# 偏函数
print(int('12', base=10))

def int2(x, base=2):
	return int(x, base)

print(int2('1000000'))

import functools
_int2 = functools.partial(int, base=2)
print(_int2('1010101'))