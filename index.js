const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const { where } = require('sequelize');
const { error } = require('node:console');
const prisma = new PrismaClient();

app.listen(3005, ()=>{
      if(app)
      {
       console.log("Server open")
      }
      if(Error)
      {
        console.log("ERROR!!!!!")
      }
      
});


app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
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

app.get('/login', (req, res) =>{

      res.render("login")
})

app.post('/users', async () => {

   const email = req.body.email
   

   await prisma.users.create({
      data:{
            name: email,
            score: 0

      }

   })
})