const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const { where } = require('sequelize');
const { error } = require('node:console');
const { name } = require('ejs');
const prisma = new PrismaClient();

const points = prisma.usuarios.score;

app.listen(3005, ()=>{
      
       console.log("Server open")
      
});


app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', async (req, res) => { //read

      var users = await prisma.usuarios.findMany({

         where: {Name: "joao",
                 age: 32,
                 score: 0
         }
      })

      res.render("html", {users})
   
 
})

app.get('/login', (req, res) =>{  //read

      res.render("login")
})

app.post('/users', async (req, res) => {  //create

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

app.put('/result', async (req, res) =>{ //update

      let urPoints = req.body.endGame

      if(urPoints)
            {
                  await prisma.usuarios.update({
                        where: {id: 1},  
                              data: {
                                    score:{
                                                increment: 10
                                          }
                                    }
                  })
            }

})