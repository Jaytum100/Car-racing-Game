canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;

car2_width = 120;
car1_height = 70;
car1_image = "car1.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground;
    backgroud_imgTag.src = background_image;


    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, )
}
window.addEventListener("keydown", my_keydown);