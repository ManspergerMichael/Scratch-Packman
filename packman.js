

var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],
    [1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,2,1],
    [1,2,1,1,1,2,2,2,2,1,0,0,0,0,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,1,0,0,0,0,2,1,1,1,2,1],
    [1,2,1,2,1,2,0,2,1,1,0,0,0,0,2,1,1,1,2,1],
    [1,2,1,1,1,1,1,2,2,2,2,2,2,0,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,0,0,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,2,1,1,1,0,0,0,0,1,0,2,2,1,1,2,1],
    [1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
var packman = {
    x: 1,
    y: 1
}

function displayWorld(){
    var output = "";
    for(var i=0; i<world.length; i++){
        output +="\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] ==1){
                output += "<div class='brick'></div>"
            }
            else if(world[i][j] ==2){
                output += "<div class='coin'></div>"
            }
            else if(world[i][j] ==0){
                output += "<div class='empty'></div>"
            }
        }
        output += "\n</div>";
    }
    //console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPackman(){
    document.getElementById('packman').style.left = packman.x*20+"px";
    document.getElementById('packman').style.top = packman.y*20+"px";
    document.getElementById('packman').style.visibility = "visible";

}
function playMusic(){
    var x = document.getElementById("intro");
    x.play();
}

//movement
document.onkeydown=function(e){
    //up: 38
    //down: 40
    //left:37
    //right:39
    if(e.keyCode == 40 && world[packman.y+1][packman.x] != 1){
        packman.y++;
    }
    if(e.keyCode == 38 && world[packman.y-1][packman.x] != 1){
        packman.y--;
    }
    if(e.keyCode == 37 && world[packman.y][packman.x-1] != 1){
        packman.x--;
    }
    if(e.keyCode == 39 && world[packman.y][packman.x+1] != 1){
        packman.x++;
    }
    if(world[packman.y][packman.x] == 2){
        world[packman.y][packman.x] = 0;
        //score +=20;
        displayWorld();
    }
    displayPackman();
    
}

function start(){
    document.getElementById("startScreen").style.visibility = "hidden";
    displayWorld();
    playMusic();
    displayPackman();
    
}