--class原型封装--

--在多个父类中查找字段
local function search(k, pList)
	for i=1,#pList do
		local v = pList[i][k]
		if v then
			return v
		end
	end
end

function createClass(...)
	local c = {} 			-- 新类
	local parents = {...} 	-- 父类列表

	-- 类在其元表中搜索方法
	setmetatable(c, {__index = function(t, k) return search(k, parents) end})

	-- 将c作为其实例的元表
	c.__index = c

	-- 为这个新类建立一个新的构造函数
	function c:new(o)
		o = o or {}
		setmetatable(o, self)

		-- self.__index = self 这里不用再设置，已经有c.__index = c
		return o
	end

	-- 返回新的类（原型）
	return c
end

--class原型封装--
