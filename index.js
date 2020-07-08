// Подключение всех модулей к программе
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Отслеживание порта
server.listen(3000);

// Отслеживание url адреса и отображение нужной HTML страницы
app.get('/', function(request, respons) {
    respons.sendFile(__dirname + '/index.html');
});