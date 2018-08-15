#!/usr/bin/evn python
#coding:utf-8

B=[] #设置操作过程列表
def move(n, a, b, c):
	if n==1:
		buzhou=a+str(n)+'-->'+c+str(n) #一个圆盘需要从A到C操作步骤
		B.append(buzhou) #向列表中添加操作步骤
		return
	else:
		move(n-1,a,c,b) #将A柱的n-1个盘移到B柱
		buzhou=a+str(n)+'-->'+c+str(n) #将A柱的第n个盘移到C柱操作步骤
		B.append(buzhou) #向列表中添加操作步骤
		#以上这条语句：
		#B.append(buzhou) 对操作列表B进行加入会引起错误，举个简单的例子：
		#如运行move(2,'A','B','C')
		#运行结果为：共需操作4次 操作过程为 ['A1-->B1', 'A2-->C2', 'A1-->C1', 'B1-->C1']
		#由前文中对于汉诺塔解法的介绍可知，只有两个圆盘时仅需要2^2-1次操作，即3次
		#操作过程为 ['A1-->B1', 'A1-->C1', 'B1-->C1']
		#B.append(buzhou)对步骤列表进行增加时，多算了一次n=1的情况，出现错误
		#可见B.append(buzhou)在运行中进行了多余操作
		#所以需要删除B.append(buzhou)
		move(1,a,b,c) #将A柱上最后一个盘移到C柱
		move(n-1,b,a,c) #将过渡柱子B上n-1个圆盘B移动到目标柱子C

move(6, 'A','B','C') #2**64-1，64次太大，这里用6个盘子
print('共需操作'+str(len(B))+'次','操作过程为',B)#计算6个盘子的步骤数及操作过程