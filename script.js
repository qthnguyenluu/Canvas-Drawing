const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'white'

function draw(x, y){
    const circle =  new Path2D();
    circle.arc(x, y, 10, 0, 2*Math.PI)
    ctx.fill(circle)
}
var rect = canvas.getBoundingClientRect();
var x = rect.left
var y = rect.top

var mousedown = false
canvas.addEventListener('mousedown', (e) => {
    mousedown = true
    draw(e.clientX - x, e.clientY - y)
})

canvas.addEventListener('mousemove', (e) => {
    if(mousedown) {
        draw(e.clientX - x, e.clientY - y)
    }
})

canvas.addEventListener('mouseup', () => {
    mousedown = false
})
canvas.addEventListener('mouseout', () => {
    mousedown = false
})

const colorpickers = [...document.querySelectorAll('.color-picker')]

colorpickers.forEach(colorpicker => {
    colorpicker.addEventListener('click', (e) => {
        ctx.fillStyle = e.target.style.backgroundColor
    })
})

const cleaner = document.querySelector('#ctx-clear')
cleaner.addEventListener('click', () => {
    ctx.clearRect(0,0,700,800)
})



