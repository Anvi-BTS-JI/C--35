var ball, pos, dataBase;

function setup(){
    dataBase = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballPos = dataBase.ref("Ball/Position")
ballPos.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    pos = data.val()
    ball.x = pos.x 
    ball.y = pos.y
}
function changePosition(x,y){

    dataBase.ref("Ball/Position").set({
        x:pos.x + x, y:pos.y + y
    })

}
