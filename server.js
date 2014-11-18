var express=require('express');
var app=express();


app.use(express.logger());
app.use(express.static(__dirname + '/build'));
app.listen(process.env.PORT || 5000);

