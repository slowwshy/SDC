const express = require('express');
const app = express();

app.listen(3005);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
   res.render('html');
})