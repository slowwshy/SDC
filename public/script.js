

function Start()
{
    
    var PPT = ["pedra", "papel", "tesoura"]
    var endGame = false;
    var score = 0
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
                score += 10
                
            }
            else
            {
                endGame = true
                res2.innerHTML = "vc perdeu acabou o jogo, seu score: " + score
                
                if(endGame = true)
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