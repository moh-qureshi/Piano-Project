const pianoKey1Sound = new Audio()
const pianoKey2Sound = new Audio()
const pianoKey3Sound = new Audio()
const pianoKey4Sound = new Audio()
const pianoKey5Sound = new Audio()
const pianoKey6Sound = new Audio()
const pianoKey7Sound = new Audio()
const pianoKey8Sound = new Audio()
const pianoKey9Sound = new Audio()
const pianoKey0Sound = new Audio()
const pianoKeyQSound = new Audio()
const pianoKeyWSound = new Audio()
const pianoKeyESound = new Audio()
const pianoKeyRSound = new Audio()
const pianoKeyTSound = new Audio()
const pianoKeyYSound = new Audio()
const pianoKeyUSound = new Audio()
const pianoKeyISound = new Audio()
const pianoKeyOSound = new Audio()
const pianoKeyPSound = new Audio()
const pianoKeyASound = new Audio()
const pianoKeySSound = new Audio()
const pianoKeyDSound = new Audio()
const pianoKeyFSound = new Audio()
const pianoKeyGSound = new Audio()
const pianoKeyHSound = new Audio()
const pianoKeyJSound = new Audio()
const pianoKeyKSound = new Audio()
const pianoKeyLSound = new Audio()
const pianoKeyZSound = new Audio()
const pianoKeyXSound = new Audio()
const pianoKeyCSound = new Audio()
const pianoKeyVSound = new Audio()

pianoKey1Sound.src="sounds/a3.mp3"
pianoKey2Sound.src="sounds/a-3.mp3"
pianoKey3Sound.src="sounds/a4.mp3"
pianoKey4Sound.src="sounds/a-4.mp3"
pianoKey5Sound.src="sounds/a5.mp3"
pianoKey6Sound.src="sounds/a-5.mp3"
pianoKey7Sound.src="sounds/b3.mp3"
pianoKey8Sound.src="sounds/b4.mp3"
pianoKey9Sound.src="sounds/b5.mp3"
pianoKey0Sound.src="sounds/c3.mp3"
pianoKeyQSound.src="sounds/c-3.mp3"
pianoKeyWSound.src="sounds/c4.mp3"
pianoKeyESound.src="sounds/c-4.mp3"
pianoKeyRSound.src="sounds/c5.mp3"
pianoKeyTSound.src="sounds/c-5.mp3"
pianoKeyYSound.src="sounds/c6.mp3"
pianoKeyUSound.src="sounds/d3.mp3"
pianoKeyISound.src="sounds/d-3.mp3"
pianoKeyOSound.src="sounds/d4.mp3"
pianoKeyPSound.src="sounds/d-4.mp3"
pianoKeyASound.src="sounds/d5.mp3"
pianoKeySSound.src="sounds/d-5.mp3"
pianoKeyDSound.src="sounds/e3.mp3"
pianoKeyFSound.src="sounds/e4.mp3"
pianoKeyGSound.src="sounds/e5.mp3"
pianoKeyHSound.src="sounds/f3.mp3"
pianoKeyJSound.src="sounds/f-3.mp3"
pianoKeyKSound.src="sounds/f4.mp3"
pianoKeyLSound.src="sounds/f-4.mp3"
pianoKeyZSound.src="sounds/f5.mp3"
pianoKeyXSound.src="sounds/f-5.mp3"
pianoKeyCSound.src="sounds/g3.mp3"
pianoKeyVSound.src="sounds/g-3.mp3"

const key1 = document.getElementById("pianokey-1")
const key2 = document.getElementById("pianokey-2")
const key3 = document.getElementById("pianokey-3")
const key4 = document.getElementById("pianokey-4")
const key5 = document.getElementById("pianokey-5")
const key6 = document.getElementById("pianokey-6")
const key7 = document.getElementById("pianokey-7")
const key8 = document.getElementById("pianokey-8")
const key9 = document.getElementById("pianokey-9")
const key0 = document.getElementById("pianokey-0")
const keyQ = document.getElementById("pianokey-q")
const keyW = document.getElementById("pianokey-w")
const keyE = document.getElementById("pianokey-e")
const keyR = document.getElementById("pianokey-r")
const keyT = document.getElementById("pianokey-t")
const keyY = document.getElementById("pianokey-y")
const keyU = document.getElementById("pianokey-u")
const keyI = document.getElementById("pianokey-i")
const keyO = document.getElementById("pianokey-o")
const keyP = document.getElementById("pianokey-p")
const keyA = document.getElementById("pianokey-a")
const keyS = document.getElementById("pianokey-s")
const keyD = document.getElementById("pianokey-d")
const keyF = document.getElementById("pianokey-f")
const keyG = document.getElementById("pianokey-g")
const keyH = document.getElementById("pianokey-h")
const keyJ = document.getElementById("pianokey-j")
const keyK = document.getElementById("pianokey-k")
const keyL = document.getElementById("pianokey-l")
const keyZ = document.getElementById("pianokey-z")
const keyX = document.getElementById("pianokey-x")
const keyC = document.getElementById("pianokey-c")
const keyV = document.getElementById("pianokey-v")

function pianoKey(url){
    new Audio(url).play();
}

document.addEventListener("keydown", (event) => {
    if(event.keyCode === 49){
        pianoKey1Sound.currentTime = 0
        pianoKey1Sound.play()
        key1.classList.add("pressed")
    } else if(event.keyCode === 50){
        pianoKey2Sound.currentTime = 0
        pianoKey2Sound.play()
        key2.classList.add("pressed")
    }else if(event.keyCode === 51){
        pianoKey3Sound.currentTime = 0
        pianoKey3Sound.play()
        key3.classList.add("pressed")
    }else if(event.keyCode === 52){
        pianoKey4Sound.currentTime = 0
        pianoKey4Sound.play()
        key4.classList.add("pressed")
    }else if(event.keyCode === 53){
        pianoKey5Sound.currentTime = 0
        pianoKey5Sound.play()
        key5.classList.add("pressed")
    }else if(event.keyCode === 54){
        pianoKey6Sound.currentTime = 0
        pianoKey6Sound.play()
        key6.classList.add("pressed")
    }else if(event.keyCode === 55){
        pianoKey7Sound.currentTime = 0
        pianoKey7Sound.play()
        key7.classList.add("pressed")
    }else if(event.keyCode === 56){
        pianoKey8Sound.currentTime = 0
        pianoKey8Sound.play()
        key8.classList.add("pressed")
    }else if(event.keyCode === 57){
        pianoKey9Sound.currentTime = 0
        pianoKey9Sound.play()
        key9.classList.add("pressed")
    }else if(event.keyCode === 48){
        pianoKey0Sound.currentTime = 0
        pianoKey0Sound.play()
        key0.classList.add("pressed")
    }else if(event.keyCode === 81){
        pianoKeyQSound.currentTime = 0
        pianoKeyQSound.play()
        keyQ.classList.add("pressed")
    }else if(event.keyCode === 87){
        pianoKeyWSound.currentTime = 0
        pianoKeyWSound.play()
        keyW.classList.add("pressed")
    }else if(event.keyCode === 69){
        pianoKeyESound.currentTime = 0
        pianoKeyESound.play()
        keyE.classList.add("pressed")
    }else if(event.keyCode === 82){
        pianoKeyRSound.currentTime = 0
        pianoKeyRSound.play()
        keyR.classList.add("pressed")
    }else if(event.keyCode === 84){
        pianoKeyTSound.currentTime = 0
        pianoKeyTSound.play()
        keyT.classList.add("pressed")
    }else if(event.keyCode === 89){
        pianoKeyYSound.currentTime = 0
        pianoKeyYSound.play()
        keyY.classList.add("pressed")
    }else if(event.keyCode === 85){
        pianoKeyUSound.currentTime = 0
        pianoKeyUSound.play()
        keyU.classList.add("pressed")
    }else if(event.keyCode === 73){
        pianoKeyISound.currentTime = 0
        pianoKeyISound.play()
        keyI.classList.add("pressed")
    }else if(event.keyCode === 79){
        pianoKeyOSound.currentTime = 0
        pianoKeyOSound.play()
        keyO.classList.add("pressed")
    }else if(event.keyCode === 80){
        pianoKeyPSound.currentTime = 0
        pianoKeyPSound.play()
        keyP.classList.add("pressed")
    }else if(event.keyCode === 65){
        pianoKeyASound.currentTime = 0
        pianoKeyASound.play()
        keyA.classList.add("pressed")
    }else if(event.keyCode === 83){
        pianoKeySSound.currentTime = 0
        pianoKeySSound.play()
        keyS.classList.add("pressed-black")
    }else if(event.keyCode === 68){
        pianoKeyDSound.currentTime = 0
        pianoKeyDSound.play()
        keyD.classList.add("pressed-black")
    }else if(event.keyCode === 70){
        pianoKeyFSound.currentTime = 0
        pianoKeyFSound.play()
        keyF.classList.add("pressed-black")
    }else if(event.keyCode === 71){
        pianoKeyGSound.currentTime = 0
        pianoKeyGSound.play()
        keyG.classList.add("pressed-black")
    }else if(event.keyCode === 72){
        pianoKeyHSound.currentTime = 0
        pianoKeyHSound.play()
        keyH.classList.add("pressed-black")
    }else if(event.keyCode === 74){
        pianoKeyJSound.currentTime = 0
        pianoKeyJSound.play()
        keyJ.classList.add("pressed-black")
    }else if(event.keyCode === 75){
        pianoKeyKSound.currentTime = 0
        pianoKeyKSound.play()
        keyK.classList.add("pressed-black")
    }else if(event.keyCode === 76){
        pianoKeyLSound.currentTime = 0
        pianoKeyLSound.play()
        keyL.classList.add("pressed-black")
    }else if(event.keyCode === 90){
        pianoKeyZSound.currentTime = 0
        pianoKeyZSound.play()
        keyZ.classList.add("pressed-black")
    }else if(event.keyCode === 88){
        pianoKeyXSound.currentTime = 0
        pianoKeyXSound.play()
        keyX.classList.add("pressed-black")
    }else if(event.keyCode === 67){
        pianoKeyCSound.currentTime = 0
        pianoKeyCSound.play()
        keyC.classList.add("pressed-black")
    }else if(event.keyCode === 86){
        pianoKeyVSound.currentTime = 0
        pianoKeyVSound.play()
        keyV.classList.add("pressed-black")
    }
})

document.addEventListener("keyup", (event) =>{
    if(event.keyCode === 49){
        key1.classList.remove("pressed")
    } else if(event.keyCode === 50){
        key2.classList.remove("pressed")
    }else if(event.keyCode === 51){
        key3.classList.remove("pressed")
    }else if(event.keyCode === 52){
        key4.classList.remove("pressed")
    }else if(event.keyCode === 53){
        key5.classList.remove("pressed")
    }else if(event.keyCode === 54){
        key6.classList.remove("pressed")
    }else if(event.keyCode === 55){
        key7.classList.remove("pressed")
    }else if(event.keyCode === 56){
        key8.classList.remove("pressed")
    }else if(event.keyCode === 57){
        key9.classList.remove("pressed")
    }else if(event.keyCode === 48){
        key0.classList.remove("pressed")
    }else if(event.keyCode === 81){
        keyQ.classList.remove("pressed")
    }else if(event.keyCode === 87){
        keyW.classList.remove("pressed")
    }else if(event.keyCode === 69){
        keyE.classList.remove("pressed")
    }else if(event.keyCode === 82){
        keyR.classList.remove("pressed")
    }else if(event.keyCode === 84){
        keyT.classList.remove("pressed")
    }else if(event.keyCode === 89){
        keyY.classList.remove("pressed")
    }else if(event.keyCode === 85){
        keyU.classList.remove("pressed")
    }else if(event.keyCode === 73){
        keyI.classList.remove("pressed")
    }else if(event.keyCode === 79){
        keyO.classList.remove("pressed")
    }else if(event.keyCode === 80){
        keyP.classList.remove("pressed")
    }else if(event.keyCode === 65){
        keyA.classList.remove("pressed")
    }else if(event.keyCode === 83){
        keyS.classList.remove("pressed-black")
    }else if(event.keyCode === 68){
        keyD.classList.remove("pressed-black")
    }else if(event.keyCode === 70){
        keyF.classList.remove("pressed-black")
    }else if(event.keyCode === 71){
        keyG.classList.remove("pressed-black")
    }else if(event.keyCode === 72){
        keyH.classList.remove("pressed-black")
    }else if(event.keyCode === 74){
        keyJ.classList.remove("pressed-black")
    }else if(event.keyCode === 75){
        keyK.classList.remove("pressed-black")
    }else if(event.keyCode === 76){
        keyL.classList.remove("pressed-black")
    }else if(event.keyCode === 90){
        keyZ.classList.remove("pressed-black")
    }else if(event.keyCode === 88){
        keyX.classList.remove("pressed-black")
    }else if(event.keyCode === 67){
        keyC.classList.remove("pressed-black")
    }else if(event.keyCode === 86){
        keyV.classList.remove("pressed-black")
    }
})