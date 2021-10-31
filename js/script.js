var letra = "X"


function joga(celula) {
    celulaClicada = document.getElementById(celula).innerHTML
    if (celulaClicada == "X" || celulaClicada == "O") {
        alert("Olá, essa casa já foi escolhida!")
    } else {
        document.getElementById(celula).innerHTML = letra
    if (letra == "X") {
        letra = "O"
    } else {
        letra = "X"
    }
}
ver()
}
/* Função ganhar */
function ver() {
    
    c11 = document.getElementById("celula11").innerHTML
    c12 = document.getElementById("celula12").innerHTML
    c13 = document.getElementById("celula13").innerHTML
    c21 = document.getElementById("celula21").innerHTML
    c22 = document.getElementById("celula22").innerHTML
    c23 = document.getElementById("celula23").innerHTML
    c31 = document.getElementById("celula31").innerHTML
    c32 = document.getElementById("celula32").innerHTML
    c33 = document.getElementById("celula33").innerHTML
    
    let hx1 = (c11 == "X" && c12 == "X" && c13 == "X")
    let hx2 = (c21 == "X" && c22 == "X" && c23 == "X")
    let hx3 = (c31 == "X" && c32 == "X" && c33 == "X")
    let vx1 = (c11 == "X" && c21 == "X" && c31 == "X")
    let vx2 = (c12 == "X" && c22 == "X" && c32 == "X")
    let vx3 = (c13 == "X" && c23 == "X" && c33 == "X")
    let dx1 = (c11 == "X" && c22 == "X" && c33 == "X")
    let dx2 = (c13 == "X" && c22 == "X" && c31 == "X")

    let h01 = (c11 == "O" && c12 == "O" && c13 == "O")
    let h02 = (c21 == "O" && c22 == "O" && c23 == "O")
    let h03 = (c31 == "O" && c32 == "O" && c33 == "O")
    let v01 = (c11 == "O" && c21 == "O" && c31 == "O")
    let v02 = (c12 == "O" && c22 == "O" && c32 == "O")
    let v03 = (c13 == "O" && c23 == "O" && c33 == "O")
    let d01 = (c11 == "O" && c22 == "O" && c33 == "O")
    let d02 = (c13 == "O" && c22 == "O" && c31 == "O")

   if(hx1 || hx2 || hx3 || vx1 || vx2 || vx3 || dx1 || dx2) {
        alert('O "X"ganhou. Parabéns!!')
        if (hx1) {
            linhaDaVitoriaLineH1()
        } if (hx2) {
            linhaDaVitoriaLineH2()
        } if (hx3) {
            linhaDaVitoriaLineH3()
        }
        
   } else if (h01 || h02 || h03 || v01 || v02 || v03 || d01 || d02) {
       alert('O "O" ganhou. Parabéns!!')
}
    
}

/* Cor das fontes */



/* Botão limpar */
function novoJogo() {
    let btnNewGame = document.getElementById('novoJogo')
    c11 = document.getElementById("celula11").innerHTML= " "
    c12 = document.getElementById("celula12").innerHTML= " "
    c13 = document.getElementById("celula13").innerHTML= " "
    c21 = document.getElementById("celula21").innerHTML= " "
    c22 = document.getElementById("celula22").innerHTML= " "
    c23 = document.getElementById("celula23").innerHTML= " "
    c31 = document.getElementById("celula31").innerHTML= " "
    c32 = document.getElementById("celula32").innerHTML= " "
    c33 = document.getElementById("celula33").innerHTML= " "
    btnNewGame.style.backgroundColor="#d81717"
    
    //Mudar de cor ao sair com o mouse de dentro
    function tirarMouse(){
         btnNewGame.style.backgroundColor="#51ff00"
    }
    //Ao tirar o mouse de cima do botão
    btnNewGame.addEventListener('mouseout', tirarMouse)

    //Chamar função que limpa linha
    limparLinha()
    
}

//Função mostrar 1º linha horizontal do ganhador
function linhaDaVitoriaLineH1() {
    var horizontalOne = document.getElementById('lineH1')
    horizontalOne.style.display = 'block'
}

//Função mostrar 2º linha horizontal do ganhador
function linhaDaVitoriaLineH2() {
    var horizontalTwo = document.getElementById('lineH2')
    horizontalTwo.style.display = 'block'
}

//Função mostrar 3º linha horizontal  do ganhador
function linhaDaVitoriaLineH3() {
    var horizontalThree = document.getElementById('lineH3')
    horizontalThree.style.display = 'block'
}






//Tirar linha do ganhador
function limparLinha() {
    var horizontalOne = document.getElementById('lineH1')
    horizontalOne.style.display = 'none'
}
