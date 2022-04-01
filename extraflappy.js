// index.js

const canvas = document.getElementById("flappy")
const ctx = canvas.getContext("2d")


/* const img = new Image()
img.src ="https://sonarlearning.co.uk/images/icons/courseIcons/cocos2d-x-flappy-bird.png"
img.onload = function(){
    ctx.drawImage(img, 50, 50, 100, 100)
}
 */

class Flappy {
    constructor(x, y, w, h, imgs){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imgs1 = new Image();
        this.imgs1.src = "https://sonarlearning.co.uk/images/icons/courseIcons/cocos2d-x-flappy-bird.png"
        this.image = this.imgs1
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
}

const flappy = new Flappy (50, 50, 100, 100)
flappy.draw()
