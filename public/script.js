const { Button } = require("bootstrap");
const { pathToFileURL } = require("node:url");

var endGame = false;

function Start(event)
{
    event.preventDefault();
    document.getElementById("reStart").disabled = true
    var PPT = ["pedra", "papel", "tesoura"];
    var text = document.getElementById("msg").value.toLowerCase().trim();
    var res2 = document.getElementById("Emsg");

    

    

    if(text === "pedra" || text ==="papel" || text === "tesoura"){
        
        var computador = PPT[Math.floor(Math.random() * PPT.length)];
        
        if(text === computador)
            {
                res2.innerHTML = "Empate. Tente novamente."
            }
        else if((text === "pedra" && computador === "tesoura") || (text === "tesoura" && computador === "papel") || (text === "papel" && computador === "pedra"))
            {
                endGame = true
                var score = 0;
                score += 10
                res2.innerHTML = `Voce ganhou!!! foi adicionado mais ${score} ao seu score.`
                document.getElementById("button").disabled = true
                
                if(document.getElementById("button").disabled = true)
                {
                    document.getElementById("reStart").disabled = false
                }
                
            }
            else
            {
                
                res2.innerHTML = `voce perdeu! Tente novamente.` 

        
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
    



