$(function() {  
    // Pegamos o canvas
    var canvas = $('#c')[0]
    
    // Acessamos o contexto de desenho 2d
    var context = canvas.getContext('2d')
    
    // cor e largura da linha
    context.strokeStyle = 'blue'
    context.lineWidth = 3;
    
    // Posição x e y inicial
    var x = 200
    var y = 200
        
    // Chamar função a cada 10 milisegundos
    setInterval(function(){
        
        // Começa a desenhar um novo caminho
        context.beginPath()

        // Movemos cursor para posição atual
        context.moveTo(x,y)

        // Atualizamos a posição
        x += (Math.random() - 0.5) * 50
        y += (Math.random() - 0.5) * 50

        // Movemos para a nova posição
        context.lineTo(x,y)

        // Desenhamos
        context.stroke()

    }, 10)
})