canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car1_width=100;
car1_height=90;


car1_x=10;
car1_y=10;

car2_width=100;
car2_height=90;


car2_x=10;
car2_y=100;

background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";


function add(){
background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=background_image;


car1_imgtag=new Image();
car1_imgtag.onload=uploadrover;
car1_imgtag.src=car1_image;

car2_imgtag=new Image();
car2_imgtag.onload=uploadrover;
car2_imgtag.src=car2_image;
}


function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);


    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="38"){
        up();
        console.log("up")
    }
    if(keypressed=="39"){
right();
console.log("right")
    }
    if(keypressed=="40"){
        down();
        console.log("down")
    }
    if(keypressed=="65"){
        a();
        console.log("a")
    }
    if(keypressed=="66"){
        b();
        console.log("b")
    }
    if(keypressed=="67"){
        c();
        console.log("c")
    }
    if(keypressed=="68"){
        d();
        console.log("d")
    }
    if(keypressed=="69"){
        e();
        console.log("e")
    }
    if(keypressed=="70"){
        f();
        console.log("f")
    }
    if(keypressed=="71"){
        g();
        console.log("g")
    }
    if(keypressed=="72"){
        h();
        console.log("h")
    }
    if(keypressed=="73"){
        i();
        console.log("i")
    }
    if(keypressed=="47"){
        j();
        console.log("j")
    }
    if(keypressed=="48"){
        k();
        console.log("k")
    }
    if(keypressed=="49"){
        l();
        console.log("l")
    }
    if(keypressed=="50"){
        m();
        console.log("m")
    }
    if(keypressed=="51"){
        n();
        console.log("n")
    }
    if(keypressed=="52"){
        0();
        console.log("o")
    }
    if(keypressed=="53"){
        p();
        console.log("p")
    }
    if(keypressed=="54"){
        q();
        console.log("q")
    }
    if(keypressed=="55"){
        r();
        console.log("r")
    }
    if(keypressed=="56"){
        s();
        console.log("s")
    }
    if(keypressed=="57"){
        t();
        console.log("t")
    }
    if(keypressed=="58"){
        u();
        console.log("u")
    }
    if(keypressed=="59"){
        v();
        console.log("v")
    }
    if(keypressed=="60"){
        w();
        console.log("w")
    }
    if(keypressed=="61"){
        x();
        console.log("x")
    }
    if(keypressed=="62"){
        y();
        console.log("y")
    }if(keypressed=="63"){
        z();
        console.log("z")
    }
    if(keypressed=="18"){
        Alt();
        console.log("Alt")
    }
    if(keypressed=="91"){
        Ctl();
        console.log("Ctl")
    }
    if(keypressed=="27"){
        Esc();
        console.log("Esc")
    }
    if(car1_x>700){
        console.log("Car 1 won");
        document.getElementById("game_status").innerHTML="Car 1 won";
    }
else if(car2_x>700){
    console.log("Car 2 won");
    document.getElementById("game_status").innerHTML="Car 2 won";
}
}
function up(){
    if(car1_y>0){
        car1_y=car1_y-10;
        console.log("when up arrow is presed,x="+car1_x+" ,y = "+car1_y);
       uploadbackground();
    uploadrover();
    }
    }
    function down(){
        if(car1_y<500){
            car1_y=car1_y+10
            console.log("when down arrow is pressed,x= "+car1_x+" ,y= "+car1_y);
            uploadbackground();
            uploadrover();
        }
    }
    function left(){
        if(car1_x>0){
            car1_x=car1_x-10;
            console.log("when left arrow is pressed,x= "+car1_x+" ,y= "+car1_y);
            uploadbackground();
            uploadrover();
        }
    }
    function right(){
        if(car1_x<710){
            car1_x=car1_x+10
            console.log("when right arrow is pressed,x= "+car1_x +" ,y= "+car1_y);
            uploadbackground();
            uploadrover();
        }
    }
    function a(){
        if(car2_y>0){
            car2_y=car2_y-10;
            console.log("when up arrow is presed,x="+car2_x+" ,y = "+car2_y);
           uploadbackground();
        uploadrover();
        }
        }
        function b(){
            if(car2_y<500){
                car2_y=car2_y+10
                console.log("when down arrow is pressed,x= "+car2_x+" ,y= "+car2_y);
                uploadbackground();
                uploadrover();
            }
        }
        function c(){
            if(car2_x>0){
                car2_x=car2_x-10;
                console.log("when left arrow is pressed,x= "+car2_x+" ,y= "+car2_y);
                uploadbackground();
                uploadrover();
            }
        }
        function d(){
            if(car2_x<710){
                car2_x=car2_x+10
                console.log("when right arrow is pressed,x= "+car2_x +" ,y= "+car2_y);
                uploadbackground();
                uploadrover();
            }
        }  