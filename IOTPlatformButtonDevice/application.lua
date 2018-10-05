--application.lua
-- requires keys.lua and config.lua, which defines keys and configurations required.
dofile("keys.lua")
dofile("config.lua")

-- function to invoke a post request
send_request = function(T) 
  http.post(IOT_ENDPOINT_URL,
  'Content-Type: application/json\r\n',
  '{"id": 1,"type": ' .. T .. ',"location": "ground"}',
  function(code, data)
    if (code < 0) then
      print("HTTP request failed")
    else
      print(code, data)
    end
  end)
end

-- configure buttons
buttonPin = 1
gpio.mode(buttonPin,gpio.INT,gpio.PULLUP)

function debounce (func)
    local last = 0
    local delay = 200000

    return function (...)
        local now = tmr.now()
        if now - last < delay then return end

        last = now
        return func(...)
    end
end

function onChange()
    if gpio.read(buttonPin) == 0 then
        print("You boinked the button! ")
        send_request("biscuit")
        tmr.delay(500000)
    end
end

gpio.trig(buttonPin,"down", debounce(onChange))