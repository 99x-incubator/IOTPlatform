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
        sendrequest("biscuit")
        tmr.delay(500000)
    end
end

gpio.trig(buttonPin,"down", debounce(onChange))