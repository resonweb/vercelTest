// var util = require("util")
// var url = require('url')

export default function handler(request, response) {
    var message = 'Hello world!'


    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(message);
    if(request.query && request.query.name){
        var name = request.query.name;
        response.write("name: " + name);
    };
    if (request.body){
        var body = request.body
        response.write("body: " + body);
    };
    
    response.end();

    // response.status(200).json(query);
    // response.json()
    // response.send("Everything is ok! 请求文件： " + request.url);
  }