$(function() {  
    var canvas = $('#c')[0]
    var context = canvas.getContext('2d')
    
    context.strokeStyle = 'blue'
    context.lineWidth = 3;
    
    context.fillStyle = 'white'

    context.beginPath()
    
    context.moveTo(200, 25)
    context.lineTo(320, 375)

    context.stroke()
})