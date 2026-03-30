const { Button } = require("bootstrap");
const { pathToFileURL } = require("node:url");

var endGame = false;

function Start(event)
{
    event.preventDefault();
    document.getElementById("reStart").disabled = true
    var PPT = ["pedra", "papel", "tesoura", "parazita", "Arma", "moeda"];
    var text = document.getElementById("msg").value.toLowerCase().trim();
    var res2 = document.getElementById("Emsg");
    var enemy = document.getElementById("oponent")

    if(text === "pedra" || text ==="papel" || text === "tesoura" 
        || text === "arma" || text === "parazita" || text === "moeda"){
        
        var computador = PPT[Math.floor(Math.random() * PPT.length)];
        
        if(text === computador)
            {
                res2.innerHTML = "Empate. Voces escolheram o mesmo item, tente novamente."
            }
        else if((text === "pedra" && computador === "tesoura") || (text === "tesoura" && computador === "papel") || (text === "papel" && computador === "pedra") || 
        (text === "Arma" && computador === "parasita") || (text === "moeda" && computador === "Arma") || (text === "parazita" && computador === "moeda") || 
        (text === "papel" && computador === "moeda") || (text === "Arma" && computador === "papel") || (text === "pedra" && computador === "Arma") || 
        (text === "parazita" && computador === "pedra") || (text === "tesoura" && computador === "parazita") || (text === "moeda" && computador === "tesoura"))
            {
                endGame = true
                var score = 0;
                score += 10
                res2.innerHTML = `Voce ganhou!!! Foi adicionado mais ${score} ao seu score. O computador escolheu:`
                enemy.innerHTML = `${computador}`
                document.getElementById("button").disabled = true
                
                if(document.getElementById("button").disabled = true)
                {
                    document.getElementById("reStart").disabled = false
                }
                
            }
            else
            {
                
                res2.innerHTML = `voce perdeu! Tente novamente. Computador escolheu:` 
                enemy.innerHTML = `${computador}`
        
            }
              if(endGame === true)
                {
                    
                fetch("/result", {
                   method: "PUT",
                   headers: {
                        "Content-Type": "application/json"
                    },
                        body: JSON.stringify({
                        endGame: true
                    })
                   
                })

                    
                }
          
    }
    else
    {
        res2.innerHTML = "ERROR!!!"
    }

   
}

function reStart()
{
   document.getElementById("button").disabled = false
}
    



