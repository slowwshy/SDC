const { Button } = require("bootstrap");
const { pathToFileURL } = require("node:url");

 fetch("/result", {
                   method: "PUT",
                   headers: {
                        "Content-Type": "application/json"
                    },
                        body: JSON.stringify({
                        endGame: true
                    })
                   
                })


var endGame = false;
var score = 0
function Start()
{
    require = (score)
    
    var PPT = ["pedra", "papel", "tesoura"];
    var text = document.getElementById("msg").value.toLowerCase().trim();
    var res2 = document.getElementById("Emsg");
    console.log(score)

    

    if(text === "pedra" || text ==="papel" || text === "tesoura"){
        
        var computador = PPT[Math.floor(Math.random() * PPT.length)];

        if(text === computador)
            {
                res2.innerHTML = "Empate"
            }
        else if((text === "pedra" && computador === "tesoura") || (text === "tesoura" && computador === "papel") || (text === "papel" && computador === "pedra"))
            {

                res2.innerHTML = "vc ganhou"
                
                score += 1
                
            }
            else
            {
                endGame = true
                
                res2.innerHTML = `voce perdeu seu, seu score: ${score}` 

               
                
                if(endGame === true)
                {

                    document.getElementById("button").disabled = true
                    
                }
        
            }
            
          
    }
    else
    {
        res2.innerHTML = "ERROR!!!"
    }

   
}
    

