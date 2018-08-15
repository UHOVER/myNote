#!/usr/bin/evn python
#coding:utf-8

import math

def my_abs(x):
	if not isinstance(x, (int, float)):
		raise TypeError('bad operand type')
	if x >= 0:
		return x
	else:
		return -x

print(my_abs(-100))
# print(my_abs('1'))

# 空函数
def a():
	pass
a()

def move(x, y, step, angle=0):
	nx = x + step * math.cos(angle)
	ny = y + step * math.sin(angle)
	return nx, ny
# print(move(1, 1, 2, math.pi / 4))
p1, p2 = move(100, 100, 60, math.pi/6)
# print('p1:', p1)
# print('p2:', p2)

p3 = move(100, 100, 60, math.pi/6)
# print('p3[0]:', p3[0])
# print('p3[1]:', p3[1])

#计算一元二次方程的两个解
def power(x, n=2):
	s = 1
	while n > 0:
		n = n - 1
		s = s * x
	return s

def quadratic(a, b, c):
	n = power(b) - 4*a*c
	if n < 0:
		return
	elif n == 0:
		return (-b)/(2*a)
	elif n > 0:
		return (-b+math.sqrt(power(b)-4*a*c))/(2*a), (-b-math.sqrt(power(b)-4*a*c))/(2*a)

# print(quadratic(2, 3, 1))
# print(quadratic(1, 3, -4))

# 默认参数
def enroll(name, gender, age=6, city='ChengDu'):
	print('name: %s, gender: %s, age: %d, city: %s' %(name, gender, age, city))

enroll('xiaohong', 'A')
enroll('xm', 'F', 8)
enroll('xl', 'E', city='BeiJing')

# 可变参数
def calc(*numbers):
	sum = 0
	for x in numbers:
		sum = sum + power(x)
	return sum

print('calc: ', calc(1, 2))

l1 = [1, 2, 3]
print('calc1: ', calc(*l1))

t1 = (1, 2, 3)
print('calc2: ', calc(*t1))

# 关键字参数
def person(name, age, **kw):
	print('name:', name, 'age:', age, 'other:', kw)

person('uhover', 10, city='ChengDu', sex='man')
msg = {'city':'ChengDu', 'sex':'man'}
person('uhover', 10, **msg)

# 参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数