print("Hello World")

LED_PIN = 0

gpio.mode(LED_PIN, gpio.OUTPUT)
value = true

tmr.alarm(0, 500, 1, function ()
    gpio.write(LED_PIN, value and gpio.HIGH or gpio.LOW)
    value = not value
end)