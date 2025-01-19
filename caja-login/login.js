paper.install(window);  // Instalar Paper.js en el entorno global
paper.setup(document.getElementById("canvas"));  // Configurar el canvas para usar Paper.js

$(document).ready(function(){
    // Verificar si el clic está siendo detectado
    $('#goRight').on('click', function(){
        console.log("Go Right clicked!");
        $('#slideBox').animate({
            'marginLeft' : '0'
        });
        $('.topLayer').animate({
            'marginLeft' : '100%'
        });
    });

    $('#goLeft').on('click', function(){
        console.log("Go Left clicked!");
        if (window.innerWidth > 769){
            $('#slideBox').animate({
                'marginLeft' : '50%'
            });
        }
        else {
            $('#slideBox').animate({
                'marginLeft' : '20%'
            });
        }
        $('.topLayer').animate({
            'marginLeft': '0'
        });
    });
  
    // Iniciar Canvas
    paper.install(window);
    paper.setup(document.getElementById("canvas"));
  
    var canvasWidth, 
        canvasHeight,
        canvasMiddleX,
        canvasMiddleY;
  
    var shapeGroup = new Group();
  
    var positionArray = [];
  
    function getCanvasBounds() {
        canvasWidth = view.size.width;
        canvasHeight = view.size.height;
        canvasMiddleX = canvasWidth / 2;
        canvasMiddleY = canvasHeight / 2;
        
        var position1 = { x: (canvasMiddleX / 2) + 100, y: 100 };
        var position2 = { x: 200, y: canvasMiddleY };
        var position3 = { x: (canvasMiddleX - 50) + (canvasMiddleX / 2), y: 150 };
        var position4 = { x: 0, y: canvasMiddleY + 100 };
        var position5 = { x: canvasWidth - 130, y: canvasHeight - 75 };
        var position6 = { x: canvasMiddleX + 80, y: canvasHeight - 50 };
        var position7 = { x: canvasWidth + 60, y: canvasMiddleY - 50 };
        var position8 = { x: canvasMiddleX + 100, y: canvasMiddleY + 100 };

        positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
    }

    function initializeShapes() {
        getCanvasBounds();

        var shapePathData = [
            'M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 
            'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 
            'M0,65l57,306L314,276l93-70l32,140L0,65z'
        ];

        for (var i = 0; i < positionArray.length; i++) {
            var newShape = new Path(shapePathData[i]);
            newShape.position = positionArray[i];
            shapeGroup.addChild(newShape);
        }
    }

    initializeShapes();

    function animateShapes(event) {
        if (shapeGroup.children.length) {
            for (var i = 0; i < shapeGroup.children.length; i++) {
                var item = shapeGroup.children[i];
                item.position.x += Math.sin(event.count / 100 + i) * 2;
                item.position.y += Math.cos(event.count / 100 + i) * 2;
            }
        }
    }

    view.onFrame = animateShapes;
});
