const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

app.listen(3005);

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res){
   res.render('html');
})

app.post('/users', async () => {

   const users = await prisma.user.findMany()

   res.send(users)
})