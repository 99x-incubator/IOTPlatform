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
buttonPin1 = 1
buttonPin2 = 2
buttonPin3 = 3 
buttonPin4 = 4

gpio.mode(buttonPin1,gpio.INT,gpio.PULLUP)
gpio.mode(buttonPin2,gpio.INT,gpio.PULLUP)
gpio.mode(buttonPin3,gpio.INT,gpio.PULLUP)
gpio.mode(buttonPin4,gpio.INT,gpio.PULLUP)

function debounce (func)
    local last = 0
    local delay = 2000

    return function (...)
        local now = tmr.now()
        if now - last < delay then return end

        last = now
        return func(...)
    end
end

function onChangeButton1()
    if gpio.read(buttonPin1) == 0 then
        print("You boinked the button 1! ")
        send_request("biscuit")
        tmr.delay(500000)
    end
end
function onChangeButton2()
    if gpio.read(buttonPin2) == 0 then
        print("You boinked the button 2! ")
        -- send_request("biscuit")
        -- tmr.delay(500000)
    end
end
function onChangeButton3()
    if gpio.read(buttonPin3) == 0 then
        print("You boinked the button 3! ")
        -- send_request("biscuit")
        -- tmr.delay(500000)
    end
end
function onChangeButton4()
    if gpio.read(buttonPin4) == 0 then
        print("You boinked the button 4! ")
        -- send_request("biscuit")
        -- tmr.delay(500000)
    end
end

gpio.trig(buttonPin1,"down", debounce(onChangeButton1))
gpio.trig(buttonPin2,"down", debounce(onChangeButton2))
gpio.trig(buttonPin3,"down", debounce(onChangeButton3))
gpio.trig(buttonPin4,"down", debounce(onChangeButton4))