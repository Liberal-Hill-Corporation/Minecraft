canvas = new fabric.Canvas("myCanvas");

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

player_object ="";

function player_update(){

    fabric.Image.fromURL("player.png",function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x

    });

    canvas.add(player_object);

    });
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img) {
        block_object = Img;
    
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x
    
        });
    
        canvas.add(block_object);
    
        });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed =e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == "187"){

        console.log("The Shift Key and the Plus key was pressed")
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if(e.shiftKey == true && keyPressed == "189"){

        console.log("The Shift Key and the Minus key was pressed")
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }

    if (keyPressed == '38'){ 
    up();
    console.log ("up");
    }

    if (keyPressed == '38'){ 
        up();
        console.log ("up");
        }

        if (keyPressed == '40'){ 
            down();
            console.log ("down");
            }

            if (keyPressed == '37'){ 
                left();
                console.log ("left");
                }

                if (keyPressed == '39'){ 
                    right();
                    console.log ("right");
                    }


if(keyPressed == "66"){
    new_image("Wall.jpg");
    console.log("Brick was added");
}

if(keyPressed == "78"){
    new_image("Netherite.png");
    console.log("Netherite was added");
}

if(keyPressed == "84"){
    new_image("TNT.jpg");
    console.log("TNT was added");
}

if(keyPressed == "83"){
    new_image("Sapphire.jpg");
    console.log("Sapphire was added");
}

if(keyPressed == "67"){
    new_image("Cobblestone.jpg");
    console.log("Cobblestone was added");
}

if(keyPressed == "82"){
    new_image("Ruby.jpg");
    console.log("Ruby was added");
}

if(keyPressed == "79"){
    new_image("Obsidian.png");
    console.log("Obsidian was added");
}

if(keyPressed == "73"){
    new_image("Iron.jpeg");
    console.log("Iron was added");
}

if(keyPressed == "69"){
    new_image("Emerald.jpg");
    console.log("Emerald was added");
}

if(keyPressed == "83"){
    new_image("Ancient Debris.jpg");
    console.log("Ancient Debris was added");
}

if(e.shiftKey == true && keyPressed == "71"){
    new_image("Gold.jpg");
    console.log("Gold was added");
}

if(keyPressed == "71"){
    new_image("Ground.png");
    console.log("Ground was added");
}

if(keyPressed == "68"){
    new_image("Diamond.jpg");
    console.log("Diamond was added");
}

if(e.shiftKey == true && keyPressed == "68"){
    new_image("Dirt.png");
    console.log("Dirt was added");
}

}

function up(){
    if(player_y > 5){
        player_y = player_y - block_image_height;
        console.log("player x =" + player_x + "player y =" + player_y + "block height =" + block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y < 425){
        player_y = player_y + block_image_height;
        console.log("player x =" + player_x + "player y =" +player_y + "block height =" + block_image_height);
        canvas.remove(player_object);
        player_update()
    }
}

function left(){
    if(player_x > 5){
        player_x = player_x - block_image_width;
        console.log("player x =" + player_x + "player y =" +player_y + "block width =" + block_image_width);
        canvas.remove(player_object);
        player_update()
    }
}

function right(){
    if(player_x < 975){
        player_x = player_x + block_image_width;
        console.log("player x =" + player_x + "player y =" +player_y + "block width =" + block_image_width);
        canvas.remove(player_object);
        player_update()
    }
}