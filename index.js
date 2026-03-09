const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const { where } = require('sequelize');
const prisma = new PrismaClient();

app.listen(3005);

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json())

app.get('/', async (req, res) => {

      var users = await prisma.usuarios.findMany({

         where: {Name: "joao",
                 age: 32,
                 score: 0
         }
      })

      res.render("html", {users})
   
 
})

app.post('/users', async () => {

  
})