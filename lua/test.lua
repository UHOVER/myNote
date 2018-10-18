function number_format(num,deperator)
    local str1 =""
    local str = tostring(num)
    local strLen = string.len(str)
        
    if deperator == nil then
        deperator = ","
    end
    deperator = tostring(deperator)
        
    for i=1,strLen do
        str1 = string.char(string.byte(str,strLen+1 - i)) .. str1
        if math.mod(i,3) == 0 then
            --下一个数 还有
            if strLen - i ~= 0 then
                str1 = ","..str1
            end
        end
    end
    return str1
end



function checknumber(value, base)
	return tonumber(value, base) or 0
end
function formatnumberthousands(num)
	local formatted = tostring(checknumber(num))
	local k
	while true do
		formatted, k = string.gsub(formatted, "^(-?%d+)(%d%d%d)", '%1,%2')
		if k == 0 then break end
	end
	return formatted
end--]]

-- print(formatnumberthousands('1'))

-- 记录开始时间
-- local starttime = os.clock();                           --> os.clock()用法
-- print(string.format("start time : %.4f", starttime));
 
-- -- 进行耗时操作
-- local sum = 0;
-- for i = 1, 100000000 do
--       sum = sum + i;
-- end

-- -- 记录结束时间
-- local endtime = os.clock();                           --> os.clock()用法
-- print(string.format("end time   : %.4f", endtime));
-- print(string.format("cost time  : %.4f", endtime - starttime));


local tableInsert = table.insert

function serializeCoins( value )
	local Coins = {}
	if value == nil or value <= 0 then
		return Coins
	end
	-- 100 500 1000 2000 5000
	local curValue = value
	local tab = {5000, 2000, 1000, 500, 100}

	for i,v in ipairs(tab) do
		local iStep = curValue/v
		for i=1,iStep do
			tableInsert(Coins, v)
		end
		curValue = curValue%v
		if i==5 and curValue>0 then
			tableInsert(Coins, curValue)
		end
	end
	return Coins
end

-- local coins = serializeCoins(11155222300)
-- for i,v in ipairs(coins) do
-- 	print(i,v)
-- end
function a(  )
	return 1
end

function b(  )
	return 33
end
local a, b = a(), b()
print(a,b)