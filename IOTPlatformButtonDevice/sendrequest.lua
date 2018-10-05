--sendrequest.lua
-- requires keys.lua not included in git repo, which defines keys required.
dofile("keys.lua")

http.post('http://172.20.30.49:3000/posts',
  'Content-Type: application/json\r\n',
  '{"id": 7,"title": "from-button","author": "boinker"}',
  function(code, data)
    if (code < 0) then
      print("HTTP request failed")
    else
      print(code, data)
    end
  end)