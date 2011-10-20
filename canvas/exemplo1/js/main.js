$(function() {
    // Pegamos o canvas com jQuery
    var canvas = $('#c')[0]
    
    // Pegamos o contexto de desenho 2d
    var context = canvas.getContext('2d')
    
    // Definimos cor e largura das linhas
    context.strokeStyle = 'blue'
    context.lineWidth = 3;

    // Começamos um path novo
    context.beginPath()
    
    // Movemos o cursor e adicionamos uma linha
    context.moveTo(200, 25)    
    context.lineTo(320, 375)

    // Desenhamos o path
    context.stroke()
})