--------------------------------- GameMap.lua -----------------------------------------------------
--[[
 purpose :  	实现常量表功能, 　类功能，　继承功能，　多态功能
--]]

module("GameMap", package.seeall) -- "GameMap"为用户定义的包名，包名需与其所在的文件名同名。 调用本文件里语法： packMap = require"GameMap"


function newConst( const_table )	--生成常量表功能
	function Const( const_table )
		local mt =
		{
			__index = function (t,k)
				return const_table[k]
			end,
			__newindex = function (t,k,v)
				print("*can't update " .. tostring(const_table) .."[" .. tostring(k) .."] = " .. tostring(v))
			end
		}
		return mt
	end

	local t = {}
	setmetatable(t, Const(const_table))
	return t
end
--[[
常量表功能的使用举例：
function NEW_CONST_DEFINE() --生成自定义常量表
	local PAR_TABLE =
	{
		MAPNAME = "冰星",
		MONSTER = newConst({"哥斯拉", 1, 1}),	--表项为常量的也需声明为常量表
	}
	local t = newConst(PAR_TABLE)
	return t
end
--]]


function newBaseMap(mapName, mapID)
	local objMap =
	{
		m_pMap = mapName,             						--创建地图
		m_ID = mapID                    					--记录地图ID
	}
	function objMap:deleteMap()								--消毁地图
		self.m_pMap = nil
		self.m_ID = nil
	end
	function objMap:showMap()
		if nil ~= self.m_pMap and nil ~= self.m_ID then
			print(self.m_pMap, self.m_ID)
		end
	end
	return objMap
end

-- 怪物地图类
function newMonsterMap(mapName, mapID)
	local objMap = newBaseMap(mapName, mapID)							--继承
	objMap.m_Monsters = {}
	function objMap:buildMonster(monsterName, posX, posY)						--创建怪物
		self.m_Monsters[#self.m_Monsters+1] = { m_Name = monsterName, m_posX = posX, m_posY = posY }
	end
	function objMap:deleteMonsterMap()						--消毁地图
		self:deleteMap()
		objMap.m_Monsters = nil
	end
	local funTemp = objMap.showMap 						--多态函数
	function objMap:showMap()
		funTemp(self)
		if nil ~= self.m_Monsters then
			for i=1, #self.m_Monsters do
				print(self.m_Monsters[i].m_Name, self.m_Monsters[i].m_posX, self.m_Monsters[i].m_posY)
			end
		end
	end
	return objMap
end