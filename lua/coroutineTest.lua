-- 关于lua的协程

--[[local p = coroutine.create(function ( x )
	while true do
		x = x + 1
		send(x)
	end
end)

function receive( x )
	print(p, type(p))
	print(coroutine.status(p))
	local status, value = coroutine.resume(p, x)
	return value
end

function send( x )
	coroutine.yield(x)
end

function consumer( x )
	return receive(x)
end

print('result: ', consumer(0))
print(coroutine.status(p))
-- print('result: ', consumer(0))--]]

local co = coroutine.create(function ( a )
	coroutine.yield(a)
end)

-- coroutine.resume(co)
print(coroutine.resume(co, 1))