--application.lua
-- requires keys.lua and config.lua, which defines keys and configurations required.
dofile("keys.lua")
dofile("config.lua")

-- function to invoke a post request
sendrequest = function(T) 
    conn = nil
    conn=net.createConnection(net.TCP, 0) 

    conn:on("receive", function(conn, payload) 
         print(payload) 
         end) 
         
    conn:on("connection", function(conn, payload) 
         print('\nConnected') 
         conn:send("GET /trigger/biscuit_oni/with/key/"
          ..IFTTT_KEY
          .." HTTP/1.1\r\n" 
          .."Host: maker.ifttt.com\r\n"
          .."Accept: */*\r\n" 
          .."User-Agent: Mozilla/4.0 (compatible; esp8266 Lua; Windows NT 5.1)\r\n" 
          .."\r\n")
         end) 
         
    conn:on("disconnection", function(conn, payload) 
          print('\nDisconnected') 
          end)
          
    print('Posting to ifttt.com')                                    
    conn:connect(80,'maker.ifttt.com')
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