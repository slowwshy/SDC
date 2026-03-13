const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const { where } = require('sequelize');
const { error } = require('node:console');
const { name } = require('ejs');
const prisma = new PrismaClient();

app.listen(3005, ()=>{
      if(app)
      {
       console.log("Server open")
      }
      if(Error)
      {
        console.error("ERROR!!!!!")
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

app.post('/users', async (req, res) => {

   const{ nome,  email } = req.body
   

   await prisma.usuarios.create({
      
      data:{
            email: email,
            Name: nome,
            score: 0

      } 
   })
    res.redirect('/')
})

app.put('/result', async (req, res) =>{
      
})