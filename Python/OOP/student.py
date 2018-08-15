#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-07-12 18:09:58
# @Author  : uhover (unanswer@outlook.com)
# @Link    : http://www.baidu.com/
# @Version : $Id$


class Student(object):
    """docstring for Student"""

    def __init__(self, name, score):
        super(Student, self).__init__()
        self.__name = name
        self.__score = score

    def print_score(self):
        print '%s: %s' % (self.__name, self.__score)

    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name


xiao = Student('xiao', 60)
xiao.print_score()

xiao.sex = 1
print xiao.sex
