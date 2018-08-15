-----------------------------
--类的原型（基类）部分---------

local Account = {balance = 0}

function Account:new(o)
	o = o or {}
	setmetatable(o, self)
	self.__index = self
	return o
end

function Account:deposit()
	self.balance = self.balance + 100
	print('====balance: ', self.balance)
end

--类的原型（基类）部分---------
-----------------------------


--[[
--子类a---------------
local a = Account:new() 	-- 类的实例a
a:deposit() 	-- 调用父类的方法（继承来的方法）
a:deposit()


--子类b----------------
local b = Account:new() 	-- 类的实例b

function b:deposit() 	-- 在子类中重构方法
	print('子类 >>> b: ', self.balance)
end

b:deposit() 	-- 调用子类重构过的方法
--]]

require('functionTest')

-- classA
local classA = createClass()
-- local classA = {}
-- function classA:new(o)
-- 	o = o or {}
-- 	setmetatable(o, {__index = self})
-- 	self.__index = self
-- 	return o
-- end

function classA:setName(name)
	self.name = name
end

-- classB
local classB = createClass()
-- local classB = {}
-- function classB:new(o)
-- 	o = o or {}
-- 	setmetatable(o, {__index = self})
-- 	self.__index = self
-- 	return o
-- end

function classB:getName()
	return self.name
end

-- 新建一个类c1，继承自classA， classB
local c1 = createClass(classA, classB)

-- function c1:newObject(defaultName)
-- 	self = {name = defaultName or ''}
-- end

-- 创建一个c1的对象
local obj = c1:new({name='object'})

obj:setName('hello')
-- obj.name = 'world'

local _name = obj:getName()
print(_name)