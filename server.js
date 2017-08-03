var express = require("express");
var parser  = require("ua-parser-js");
var porty   = Number(process.env.PORT || 8080);
var app     = express();

app.get("/",function(req,res){
	var ua = parser(req.get("user-agent"));
	var software = ua["os"].name +" "+ua["os"].version;
	var language = req.get("accept-language").split(",")[0];
	var ip       = req.headers['x-forwarded-for'].split(",")[0];
	var obj      = {"ip-address":ip,"language":language,"software":software};
	res.send(obj);  
});

app.listen(porty);