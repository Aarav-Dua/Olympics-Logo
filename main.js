canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var coaloar="blue";

//<--NEW SECTION!!!-->
//beginPath(): Begins a path, or resets the current path for drawing anything. It tells the canvas to start drawing the shape/object.
ctx.beginPath();
ctx.strokeStyle=coaloar;
ctx.lineWidth=5;
ctx.arc(100,300,50,0,2*Math.PI);
ctx.stroke();
//<--Without the 'ctx.stroke();' nothing will happen LEL-->
//ctx.rect(0,0,0,0,0,*Math.PI);

//<--NEW SECTION!!!-->
canvas.addEventListener("mousedown",my_MouseDown);

function my_MouseDown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+"y="+mouse_y);
    circle(mouse_x, mouse_y);
        
    }
    function circle(mouse_x, mouse_y){
        ctx.beginPath();
        ctx.strokeStyle=coaloar;
        ctx.lineWidth=5;
        ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
        ctx.stroke();
    }



