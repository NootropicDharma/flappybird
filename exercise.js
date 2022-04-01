//index.js

//DESAROLLO DE VIDEOJUEGO
//1. INSTANCIAMIENTO DEL AREA DE JUEGO

const myGameArea = {
    canvas: document.createElement("canvas"),

    start: function(){
        this.canvas.width = 480
        this.canvas.height = 270
        this.context = this.canvas.getContext("2d")
        document.body.appendChild(this.canvas)

        //establecer el motor 
        this.interval = setInterval(updateGameArea, 20)
    },

    clear: function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
    }
}


const updateGameArea = () => {
   
    myGameArea.clear()
    player.newPos()
    player.update()
}
// 2.componentes 

class Component {
    constructor(width, height, color, x, y){
        this.width = width
        this.height = height
        this.color = color
        this.x = x
        this.y = y 
        //speed properties 
        this.speedX= 0
        this.speedY= 0
    }

    update(){
        const ctx = myGameArea.context
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    newPos(){
        this.x += this.speedX
        this.y += this.speedY
    }


}

//ejecuciones 



myGameArea.start()

const player = new Component(30,30, "blue", 0, 110)

//Eventos 
document.addEventListener("keydown", (e) => {

    switch(e.key) {
        case "ArrowUp":
            player.speedY -= 1
            break;
        case "ArrowDown":
            player.speedY += 1
        case "ArrowLeft":
            player.speedX -= 1
            break;
        case "ArrowRight":
            player.speedX += 1
            break;
        default:
            break
    }
})

document.addEventListener(("keyup"), (e) => {
    player.speedX = 0
    player.speedY = 0
})

