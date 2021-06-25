var mouseEvent= "empty";
var last_position_of_X,last_position_of_Y;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")
var color ="red";
var width_of_line= 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
     width_of_line = document.getElementById("width_of_line").value;
     mouseEvent="mouseDown";
}

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
     current_position_of_X=e.clientX- canvas.offsetLeft;
     current_position_of_Y=e.clientY- canvas.offsetTop;
     
     if (mouseEvent== "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width_of_line;

    console.log("Last Position ofx and y coordinates =");
    console.log("x=" + last_position_of_X+ "y =" + last_position_of_Y);
    ctx.moveTo(last_position_of_X,last_position_of_Y);

    console.log("current postion of x and y coordinates =");
    console.log("x=" + current_position_of_X + "y=" + current_position_of_Y);
    ctx.lineTo(current_position_of_X, current_position_of_Y);
    ctx.stroke();
}
 last_position_of_X=current_position_of_X;
 last_position_of_Y=current_position_of_Y;
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}