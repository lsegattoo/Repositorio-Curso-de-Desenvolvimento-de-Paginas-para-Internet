var marioImg = document.querySelector(".mario")
var tuboImg = document.querySelector(".pipe")
var nuvemImg = document.querySelector(".cloud")

function pular(){

  marioImg.classList.add("pulo")

  setTimeout(() =>{
    marioImg.classList.remove("pulo")
  }, 500)

}

const VerificarJogo = setInterval(() =>{

  var posicaoTubo = tuboImg.offsetLeft
  var posicaoNuvem = nuvemImg.offsetLeft
  var posicaoMario = +window.getComputedStyle(marioImg).bottom.replace("px", "")

  if (posicaoTubo <= 120 && posicaoTubo >0 && posicaoMario < 80){

    marioImg.src = "./assets/imgs/game-over.png"    
    marioImg.style.bottom = posicaoMario + "px"
    marioImg.style.animation = "none"
    marioImg.style.width = '75px'
    marioImg.style.marginLeft = '50px'

    tuboImg.style.animation = 'none'
    tuboImg.style.left = posicaoTubo + "px"

    nuvemImg.style.animation = 'none'
    nuvemImg.style.left = posicaoNuvem + 'px'

    clearInterval(VerificarJogo)

  }

}, 10)

document.addEventListener("keydown", pular)