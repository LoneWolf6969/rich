const express = require('express');
const app = express();
const { port } = require('./config.json');


app.use(express.static('public')); 

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/dashboard', function(req, res){
  res.sendFile(__dirname + '/public/dashboard.html');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/404.html');
});

/////////
app.get('/', (request, response) => {
	return response.sendFile('/public/index.html', { root: '.' });
});
/////////

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

