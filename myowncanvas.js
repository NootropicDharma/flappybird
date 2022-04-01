



const myObstacles = []

const myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,
    start: function(){
        this.canvas.width = 500
        this.canvas.height = 270
        this.context = this.canvas.getContext("2d")
        document.body.appendChild(this.canvas)
        //Establecer el motor
        this.interval = setInterval(updateGameArea, 20)
    
    },

    clear: function(){
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
    },

    stop: function (){
        clearInterval(this.interval)
    }
}

const updateGameArea = () => {
    console.log("Ejecutando motor...")
    myGameArea.clear()
    player.newPos()
    player.update()
    updateObstacles()
    checkGameOver()
}
// aqui si no entiendo ni papas 
const updateObstacles = () => {
    for(i = 0; i < myObstacles.length; i++){
        myObstacles[i].x += -1
        myObstacles[i].update()
    }

    myGameArea.frames += 1 
   //here i lost track of everything 
    // si los frames si son divisibles entre 120 y el residuo es cero...
    if(myGameArea.frames % 120 === 0){
        console.log("Divisible entre 120")
        // necesito crear obstaculos 
        let x = myGameArea.canvas.width
        let minHeight = 20
        let maxHeight = 200
        // 20             #      200
        // minHeight < height < maxHeight
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        console.log(height)

        let minGap = 50
        let maxGap = 200
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

        myObstacles.push(new Component(10, height, "green", x, 0))
        myObstacles.push(new Component(10, x - height - gap, "green", x, height + gap))
    }
    // si los frames no son dividisbles entre 120 (tener residuo de cero)
}

//2. componentes 
class Component {
    constructor(width, height, color, x, y){
        this.width = width
        this.height = height
        this.color = color
        this.x = x 
        this.y = y
        // speed properties 
        this.speedX = 0
        this.speedY = 0
    }
    
    update() {
        const ctx = myGameArea.context
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height) 
    }

    newPos() {
        this.x += this.speedX
        this.y += this.speedY
    }

    left() {
        return this.x
    }

    right() {
        return this.x + this.width
    }

    top(){
        return this.y
    }

    bottom(){
        return this.y + this.height
    }

    // this is what allows target to crash into object 
    crashWith(obstacle){
        return !(
            this.bottom() < obstacle.top()||
            this.top() > obstacle.bottom()||
            this.right() < obstacle.left()||
            this.left() > obstacle.right()
        )
    }
}

const checkGameOver = () => {
// i need to ask mike if this creates obstacles? or if that has to be created by a class, if so where is the class? 
    const crashed = myObstacles.some((element) => {
        return player.crashWith(element)
    })

    if(crashed){
        myGameArea.stop()
    }

    return 


}

// ejecuciones 


myGameArea.start()

const player = new Component(30,30, "purple", 0, 110)

//events, event 1

document.addEventListener("keydown", (e) => {

    switch(e.key) {
        case "ArrowUp":
            player.speedY -= 1
            break;
        case "ArrowDown":
            player.speedY += 1
            break;
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
// another event, event 2
document.addEventListener("keyup", (e) => {
    player.speedX = 0
    player.speedY = 0

})