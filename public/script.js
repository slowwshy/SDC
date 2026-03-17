const { pathToFileURL } = require("node:url");

var score = 0
function Start()
{
    
    var PPT = ["pedra", "papel", "tesoura"]
    var endGame = false;
    
    var text = document.getElementById("msg").value.toLowerCase().trim();
    var res2 = document.getElementById("Emsg")

    if(text === "pedra" || text ==="papel" || text === "tesoura"){
       
        var computador = PPT[Math.floor(Math.random() * PPT.length)];

        if(text === computador)
            {
                res2.innerHTML = "Empate"
            }
        else if((text === "pedra" && computador === "tesoura") || (text === "tesoura" && computador === "papel") || (text === "papel" && computador === "pedra"))
            {

                res2.innerHTML = "vc ganhou"
                
                score++
                
            }
            else
            {
                endGame = true
                res2.innerHTML = 'voce perdeu seu, seu score: '+ score

                fetch("/result", {
                   method: "PUT",
                   headers: {
                        "Content-Type": "application/json"
                    },
                        body: JSON.stringify({
                        endGame: true
                    })
                   
                })
                
                if(endGame === true)
                {

                    document.getElementById("button").disabled = true
                    finalGame()
                }
        
            }
            
          
    }
    else
    {
        res2.innerHTML = "ERROR!!!"
    }

   
}
    

function finalGame(){
    
}