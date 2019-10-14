const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height  = window.innerHeight + "px"

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

const context = canvasTag.getContext("2d")
context.scale(2,2)

const image = document.createElement("img")
image.src = "carta.png"

document.addEventListener("mousemove", function(event){
    aimX = event.pageX
    aimY = event.pageY

    if(currentX === null){
        currentX = event.pageX
        currentY = event.pageY
    }
    
   

})

const draw = function(){
    if(currentX){
        if(image.complete){
            context.drawImage(image,currentX -92 ,currentY -124 ,185.8,249.2)
        }
        currentX = currentX + (aimX -currentX) * 0.1
        currentY = currentY + (aimY -currentY) * 0.1
    }
    requestAnimationFrame(draw)
}
draw();