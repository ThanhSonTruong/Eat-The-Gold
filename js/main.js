// JavaScript source code (Eat the Gold)


mouse = { x: 0, y: 0 };
alert("Please hold your device in Landscape orientation!");
load = 0;
ready = 0;

//window.onload = function () {
//    // your code 
//    document.getElementById("mute").onclick = function () {
//        // img clicked
//        alert("clicked");
//    };

//    document.getElementById("mute2").onclick = function () {
//        // img clicked
//        alert("clicked");

//    };
//};


function show(shown, hidden, hidden2, hidden3, hidden4) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hidden).style.display = 'none';
    document.getElementById(hidden2).style.display = 'none';
    document.getElementById(hidden3).style.display = 'none';
    document.getElementById(hidden4).style.display = 'none';
    return false;
}

function declare(){
    Arrow = document.createElement("img");
    Arrow.src = "images/Arrow.png";

    Star = document.createElement("img");
    Star.src = "images/Star.png";

    mutes = diagonal / 40;

    Mute1 = document.getElementById("mute1");
    Mute1.src = "images/SoundOn.png";
    Mute1.style.width = mutes + "px";
    Mute1.style.height = mutes + "px";

    Mute2 = document.getElementById("mute2");
    Mute2.src = "images/SoundOn.png";
    Mute2.style.width = mutes + "px";
    Mute2.style.height = mutes + "px";

    Mute3 = document.getElementById("mute3");
    Mute3.src = "images/SoundOn.png";
    Mute3.style.width = mutes + "px";
    Mute3.style.height = mutes + "px";

    Mute4 = document.getElementById("mute4");
    Mute4.src = "images/SoundOn.png";
    Mute4.style.width = mutes + "px";
    Mute4.style.height = mutes + "px";

    Pause = document.getElementById("pause");
    Pause.src = "images/Pause2.png";
    Pause.style.width = mutes + "px";
    Pause.style.height = mutes + "px";


    //Mute.style.left = mutes + "px";
    //Mute.style.top = hei - 2 * mutes + "px";

    //Mute2 = document.createElement("img")
    //Mute2.src = "images/SoundOff.png";
    
    ////document.getElementById("mute").src = "images/SoundOn.png";

    //another way
    //document.getElementById("mute").style.width = mutes;
    //document.getElementById("mute").style.height = mutes;
    document.getElementById("Sound1").style.left = mutes + "px";
    document.getElementById("Sound1").style.top = hei - 2 * mutes + "px";

    document.getElementById("Sound2").style.left = mutes + "px";
    document.getElementById("Sound2").style.top = hei - 2 * mutes + "px";

    document.getElementById("Sound3").style.left = mutes + "px";
    document.getElementById("Sound3").style.top = hei - 2 * mutes + "px";

    document.getElementById("Sound4").style.left = mutes + "px";
    document.getElementById("Sound4").style.top = hei - 2 * mutes + "px";


    document.getElementById("Pause").style.left = wid - 2 * mutes + "px";
    document.getElementById("Pause").style.top = hei - 2 * mutes + "px";

    muteN = 0;
    pauseN = 0;

    Arroww = 0.08 * diagonal;
    Arrowh = 0.05 * diagonal;
    Arrowx = wid / 2;
    Arrowy = hei / 2;

    tx = 0;
    ty = 0;

    vx = 0;
    vy = 0;

    handle = 0;

    circleN = 0;

    //robot
    radian2 = 0;
    rN = 0;
    rcx = 0;
    rcy = 0;
    k = 0;
    j = 0;
    g = 0;
    rH = 0;
    rpx2 = 0;
    rpy2 = 0;
    rs2 = 0;
    ex = 0;
    radian3 = 0;

    //robot laser
    RlaserN = 0;
    k6 = 0;
    jrl = 0;

    //health points
    HP = wid / 2;
    HPC = "Purple";

    //score
    score = 0;
    win = 0;

    //arrays
    cmx = new Array();
    cmy = new Array();

    xtr = new Array();
    ytr = new Array();

    posx = new Array();
    posy = new Array();

    ra = new Array();

    cr = new Array();
    cg = new Array();
    cb = new Array();

    bx = new Array();
    by = new Array();

    starx = new Array();
    stary = new Array();

    stars = new Array();

    //position of lasers
    xl1 = new Array();
    yl1 = new Array();
    xl2 = new Array();
    yl2 = new Array();

    laserN = 0;

    //color of laser
    lr = new Array();
    lg = new Array();
    lb = new Array();

    //laser move
    lmx = new Array();
    lmy = new Array();

    //laser travel
    ltx = new Array();
    lty = new Array();

    // vx/vy when laser was shot
    vxl = new Array();
    vyl = new Array();

    //robot
    Rcolor = new Array();
    rf = new Array();
    rr = new Array();
    rg = new Array();
    rb = new Array();

    rpx = new Array();
    rpy = new Array();

    rv = new Array();
    go = new Array();

    //robot laser
    rlmx = new Array();
    rlmy = new Array();
    rxl1 = new Array();
    ryl1 = new Array();
    rxl2 = new Array();
    ryl2 = new Array();
    rlxn1 = new Array();
    rlyn1 = new Array();
    rlxn2 = new Array();
    rlyn2 = new Array();
    rlr = new Array();
    rlg = new Array();
    rlb = new Array();
    rxlp = new Array();
    rylp = new Array();
    bb = new Array();




    j2 = 0;
    m = 1;

    
}

function preLoad() {
    
    //preventing scrolling on touchh devices...
    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false); 

    ready = 1;

        if (window.innerHeight > window.innerWidth) {
            alert("Please put your Device in Landscape Mode!");
        } else if (ready === 1 && window.innerHeight < window.innerWidth && load === 0) {
            wid = window.innerWidth;
            hei = window.innerHeight;
            diagonal = Math.sqrt(Math.pow(wid, 2) + Math.pow(hei, 2));
            Load();
            load = 1;
        }
}

function Load() {

    show("pageone", "pagezero", "pagetwo", "pagethree", "pagefour");

    declare();

    wid = window.innerWidth;
    hei = window.innerHeight;
    canvas.width = wid;
    canvas.height = hei;
    canvas2.width = wid;
    canvas2.height = hei;

    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.globalAlpha = 0.5;
    ctx.fillRect(wid * 0.2, hei * 0.1, wid * 0.6, hei * 0.7);
    ctx.closePath();

    document.getElementById("load").style.width = wid + "px";
    document.getElementById("load").style.height = hei + "px";
    document.getElementById("Rock1").style.width = wid + "px";
    document.getElementById("Rock1").style.height = hei + "px";

    document.getElementById("Rock2").style.width = wid + "px";
    document.getElementById("Rock2").style.height = hei + "px";

    document.getElementById("Title").style.width = 0.5 * wid + "px";
    document.getElementById("Title").style.height = 0.4 * hei + "px";

    document.getElementById("Title").style.left = (wid/2 - 0.5*wid/2) + "px";
    document.getElementById("Title").style.top = 0.5 * hei - 0.4 * hei + "px";

    document.getElementById("div").style.left = (wid / 2 - wid * 0.1) + "px";
    document.getElementById("div").style.top = (hei * 0.7) + "px";

    document.getElementById("Start").style.width = wid * 0.2 + "px";
    document.getElementById("Start").style.height = wid * 0.06 + "px";
    document.getElementById("Start").style.fontSize = wid * 0.05 + "px";

    //ad1
    //document.getElementById("ad1").style.top = hei - 90 + "px";
    //document.getElementById("ad1").style.left = wid / 2 - 728 / 2 + "px";

    document.getElementById("instructions").style.width = wid * 0.6 + "px";
    document.getElementById("instructions").style.height = hei * 0.7 + "px";
    document.getElementById("instructions").style.top = hei * 0.1 + "px";
    document.getElementById("instructions").style.left = wid * 0.2 + "px";
    document.getElementById("instructions").style.fontSize = wid * 0.03 + "px";
    document.getElementById("instructions").style.color = "White";

    //pagetwo buttons
    document.getElementById("Go").style.width = wid * 0.1 + "px";
    document.getElementById("Go").style.height = wid * 0.05 + "px";
    document.getElementById("Go").style.fontSize = wid * 0.04 + "px";

    document.getElementById("div2").style.left = (wid / 2 - wid * 0.1 / 2) + "px";
    document.getElementById("div2").style.top = (hei * 0.85) + "px";

    document.getElementById("Back").style.width = wid * 0.1 + "px";
    document.getElementById("Back").style.height = wid * 0.05 + "px";
    document.getElementById("Back").style.fontSize = wid * 0.04 + "px";

    document.getElementById("div3").style.left = (wid * 0.02) + "px";
    document.getElementById("div3").style.top = (hei * 0.05) + "px";
    //

    //page three buttons
    document.getElementById("Back2").style.width = wid * 0.1 + "px";
    document.getElementById("Back2").style.height = wid * 0.05 + "px";
    document.getElementById("Back2").style.fontSize = wid * 0.038 + "px";

    document.getElementById("div4").style.left = (wid * 0.01) + "px";
    document.getElementById("div4").style.top = (hei * 0.01) + "px";
    //

    //page four buttons
    //play again button
    document.getElementById("replay").style.width = wid * 0.25 + "px";
    document.getElementById("replay").style.height = wid * 0.05 + "px";
    document.getElementById("replay").style.fontSize = wid * 0.04 + "px";
    
    //position
    document.getElementById("Again").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("Again").style.top = (hei * 0.65) + "px";
    
    //link to home page
    document.getElementById("tohomepage").style.width = wid * 0.25 + "px";
    document.getElementById("tohomepage").style.height = wid * 0.05 + "px";
    document.getElementById("tohomepage").style.fontSize = wid * 0.035 + "px";

    //position
    document.getElementById("ToHomePage").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("ToHomePage").style.top = (hei * 0.52) + "px";


    //ad2
    //document.getElementById("ad2").style.top = (hei * 0.05) + "px";

    // Post Score
    /* document.getElementById("PostScore").style.width = wid * 0.25 + "px";
    document.getElementById("PostScore").style.height = wid * 0.03 + "px";
    document.getElementById("PostScore").style.fontSize = wid * 0.025 + "px";
 */
/*     document.getElementById("Post").style.left = (wid / 2 - wid * 0.12) + "px";
    document.getElementById("Post").style.top = (hei * 0.56) + "px";
 */

    audio.oncanplay = function () {
        audio.setAttribute("autoplay", "autoplay");
        audio.setAttribute("loop", "loop");
        audio.play();
    };
}

function StartGame() {
    declare();

    show("pagethree", "pagezero", "pagetwo", "pageone", "pagefour");

    c = document.getElementById("canvas2");
    ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(0, 0, wid, hei);
    ctx.closePath();

    //Create Stars
    createStars();

    //create robot
    createRobot();

    //robot fire laser timer
    timer4 = setInterval(function () { RobotFireLaser(); }, 4000);

    listen();

    //normal timer
    timer = setInterval(function () { timedEvents(); }, 30);
    
    //slow timer
    timer2 = setInterval(function () { timedEvents2(); }, 50);


    //audio2.setAttribute("autoplay", "autoplay");
    //audio2.setAttribute("loop", "loop");

    //creates Gold
    createGold();
/* 
    audio2.onended = function () {
        m = 3;
        audio2.pause();
        audio3.play();
    };

    audio3.onended = function () {
        m = 4;
        audio3.pause();
        audio4.play();
    };

    audio4.onended = function () {
        m = 5;
        audio4.pause();
        audio5.play();
    };

    audio5.onended = function () {
        m = 2;
        audio5.pause();
        audio2.play();
    };

    audio2.play();
    m = 2; */

    //plays random song...(out of 7 songs)
    ran = Math.floor(Math.random() * 6);
    //alert(ran);
    if (ran === 0){
        audio2.play();
        m = 2;
        //console.log("ran is " + ran)
    }
    else if (ran === 1){
        audio3.play();
        //console.log("ran is " + ran)
        m = 3;
    }
    else if (ran === 2){
        audio4.play();
        m = 4;
        //console.log("ran is " + ran)
        
    }
    else if (ran === 3){
        audio5.play();
        m = 5;
        //console.log("ran is " + ran)
        
    }
    else if (ran === 4){
        audio6.play();
        m = 6;
       //console.log("ran is " + ran)
        
    }
    else if (ran === 5){
        audio7.play();
        //console.log("ran is " + ran)
        m = 7;
        
    }
    else if (ran === 6){
        audio8.play();
        //console.log("x is " + ran)
        m = 8;
    }
    audio.pause();
    //audio.currentTime = 0;

}

function listen() {
    
    //window.addEventListener("touchstart", handleStart(e));
    //window.addEventListener("touchend", handleEnd(e));
    //window.addEventListener("touchmove", handleMove(e));

    var obj = document.getElementById('canvas2');


    obj.addEventListener('touchstart',  function(e){
        touchhandleStart(e)
    });
    obj.addEventListener('touchend', function(e){
        touchhandleEnd(e)
    });
    obj.addEventListener('touchmove', function(e){
        touchhandleMove(e)
    });


/*     window.ontouchstart = touchhandleStart;
    window.ontouchend = touchhandleEnd;
    window.ontouchmove = touchhandleMove; */

    window.onmousedown = handleStart;
    window.onmouseup = handleEnd;
    window.onmousemove = handleMove;
}

function touchhandleStart(e) {

    if (e.targetTouches.length == 1){
        var touch = e.targetTouches[0];    
    }


    mouse.x = touch.pageX;
    mouse.y = touch.pageY;

    handle = 1;



}

function handleStart(e) {




    mouse.x = e.clientX || e.pageX || e.changedTouches[0].pageX;
    mouse.y = e.clientY || e.pageY || e.changedTouches[0].pageY;

    handle = 1;



}



function handleEnd(e) {

    //mouse.x = e.clientX || e.pageX;
    //mouse.y = e.clientY || e.pageY;

    handle = 0;
    
    fireLaser();

    //thrust = 0;
}

function touchhandleEnd(e) {

    //mouse.x = e.clientX || e.pageX;
    //mouse.y = e.clientY || e.pageY;

    handle = 0;
    
    fireLaser();

    //thrust = 0;
}

function handleMove(e) {

    mouse.x = e.clientX || e.pageX || e.changedTouches[0].pageX;
    mouse.y = e.clientY || e.pageY || e.changedTouches[0].pageY;

}

function touchhandleMove(e) {

    if (e.targetTouches.length == 1){
        var touch = e.targetTouches[0];    
    }
    
    mouse.x = touch.pageX;
    mouse.y = touch.pageY;

}

function timedEvents() {
    Draw();
    eatGold();
    Limits();
}

function Draw() {
    c = document.getElementById("canvas2");
    ctx = c.getContext("2d");

    

    //calculate thrust
    if (handle === 1) {
        dh = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        thrust = dh * 0.001 * ((diagonal) / (1567));
        Accelerate();
    }
    Arrowx += vx;
    Arrowy += vy;
    //

    //friction
    vx = 0.999 * vx;
    vy = 0.999 * vy;
    //

    //background
    ctx.beginPath();
    ctx.fillStyle = "Black";
    ctx.fillRect(0, 0, wid, hei);
    //stars
    for (i = 0; i < (1366 / 10) * ((diagonal) / (1567)) ; i++) {
        ctx.save()
        ctx.translate(starx[i], stary[i]);
        ctx.drawImage(Star, -stars[i] / 2, -stars[i] / 2, stars[i], stars[i]);
        ctx.restore();
    }
    //
    ctx.closePath();
    //

    //Arrow angle
    dx = mouse.x - Arrowx;
    dy = mouse.y - Arrowy;
    radian = Math.atan2(dy, dx);
    //

    //gold
    if (gN === 1) {
        ctx.beginPath();
        ctx.arc(goldx, goldy, Gsize, 0, 2 * Math.PI);
        ctx.fillStyle = Gcolor;
        ctx.fill();
        ctx.closePath();
    }
    

    //string

    if (handle === 1) {

    ctx.beginPath();

    // Create gradient
    var grd = ctx.createLinearGradient(0, hei, wid, hei);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    ctx.moveTo(Arrowx, Arrowy);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.strokeStyle = grd;
    ctx.lineWidth = hei / 200;
    ctx.stroke();
    ctx.closePath();
    }
    //

    //drawing player
    ctx.save()
    ctx.translate(Arrowx, Arrowy);
    ctx.rotate(radian);
    ctx.drawImage(Arrow, -Arroww / 2, -Arrowh / 2, Arroww, Arrowh);
    ctx.restore();
    //

    //Measuring variable
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "White";
    //ctx.fillText(Math.round(rN) + ',' + Math.round(0) + ',' + Math.round(0) + ',' + Math.round(0) + ',' + Math.round(0), 200 / 1366 * wid, 50 / 1366 * wid);
    ctx.closePath();
    //

    //tracers move
    if (k === 1) {
        for (i = 0; i < j; i++) {
            ctx.beginPath();

            
            //delete oversized circles
            if (ra[i] > hei / 8) {

            } else {
                ra[i] = ra[i] + 0.5 * ((diagonal) / (1567));
                ctx.lineWidth = 768 / 200 * ((diagonal) / (1567));

                //movement of circle
                cmx[i] += bx[i];
                cmy[i] += by[i];

                ctx.arc(posx[i] + cmx[i], posy[i] + cmy[i], ra[i], 0, 2 * Math.PI);
                //color
                ctx.strokeStyle = "rgb(" + cr[i] + "," + cg[i] + "," + cb[i] + ")";
                ctx.stroke();
            }

            ctx.closePath();
        }
    }
    //

    /*
    //robo tracers move
    if (k === 1) {
        for (i = 0; i < j; i++) {
            ctx.beginPath();

            
            //delete oversized circles
            if (ra[i] > hei / 8) {

            } else {
                ra[i] = ra[i] + 0.5 * ((diagonal) / (1567));
                ctx.lineWidth = 768 / 200 * ((diagonal) / (1567));

                //movement of circle
                cmx[i] += bx[i];
                cmy[i] += by[i];

                ctx.arc(posx[i] + cmx[i], posy[i] + cmy[i], ra[i], 0, 2 * Math.PI);
                //color
                ctx.strokeStyle = "rgb(" + cr[i] + "," + cg[i] + "," + cb[i] + ")";
                ctx.stroke();
            }

            ctx.closePath();
        }
    }
    // */

    //laser
    if (g === 1) {
    for (i = 0; i < j2; i++) {

        ctx.beginPath();

        lmx[i] += ltx[i] * 0.2 + vxl[i];
        lmy[i] += lty[i] * 0.2 + vyl[i];


        ctx.strokeStyle = "rgb(" + lr[i] + "," + lg[i] + "," + lb[i] + ")";

        ctx.lineWidth = 1366 / 200 * ((diagonal) / (1567));
        ctx.moveTo(xl1[i] + lmx[i], yl1[i] + lmy[i]);
        ctx.lineTo(xl2[i] + lmx[i], yl2[i] + lmy[i]);
        ctx.stroke();
        ctx.closePath();

        //robot damage
        if ((xl1[i] + lmx[i] < rpx + rs) &&
            (xl1[i] + lmx[i] > rpx - rs) &&
            (yl2[i] + lmy[i] < rpy + rs) &&
            (yl2[i] + lmy[i] > rpy - rs)) {

            Rcolor[rN] = "Gold";
            

            robotDamage();
            score += 5 * rN;
            //rexN = i;
            xl1[i] = null;
            xl2[i] = null;
            yl1[i] = null;
            yl2[i] = null;
            lmx[i] = null;
            lmy[i] = null;
        }


    }
    }

    //move robot laser

    if (k6 === 1) {

        for (i = 0; i < jrl; i++) {

            ctx.beginPath();

            rlmx[i] += (rxl1[i] * 0.2);
            rlmy[i] += (ryl1[i] * 0.2);


            ctx.strokeStyle = Rcolor[rN];

            ctx.lineWidth = wid / 200;
            ctx.moveTo(rlxn1[i] + rlmx[i], rlyn1[i] + rlmy[i]);
            ctx.lineTo(rlxn2[i] + rlmx[i], rlyn2[i] + rlmy[i]);
            ctx.stroke();
            ctx.closePath();


        }
    }


    //robot
    //for (i = 0; i < rN; i++) {
        if (k4 === 1) {

            //gets angle
            rdx = rpx - Arrowx;
            rdy = rpy - Arrowy;
            radian2 = Math.atan2(rdy, rdx);

            

            
            //robot move (acceleration)
            rmax = -(Math.cos(radian2)) * diagonal*0.00005;
            rmay = -(Math.sin(radian2)) * diagonal*0.00005;
            //console.log(rmay);
            //canon size
            rcx = -(Math.cos(radian2)) * rs * 1;
            rcy = -(Math.sin(radian2)) * rs * 1;

            //robot fall/dies
            if (rf[i] === 1) {
                createRobot();
                k4 = 0;

                //rv[i] += 0.05;
                //rpy[i] += rv[i] / timeShift;

                //rpx[i] += -((playerx - wid / 8) / 40) / timeShift;

            } else {
                rmx += rmax;
                rmy += rmay;
                rmx = rmx * 0.99;
                rmy = rmy * 0.99;
                rpx += rmx;
                rpy += rmy;
            }

            //create new robot
            //if (rpy[i] > hei + rs && go[i] === 0) {
            //    
            //    go[i] = 1;
            //}


            //canon
            ctx.beginPath();

            ctx.strokeStyle = "Gray";
            ctx.lineWidth = wid / 120;
            ctx.moveTo(rpx, rpy);
            ctx.lineTo(rcx + rpx, rcy + rpy);
            ctx.stroke();
            //

            ctx.closePath();

            ctx.beginPath();

            ctx.rect(rpx - 0.5 * rs, rpy - 0.5 * rs, rs, rs);
            ctx.fillStyle = Rcolor[rN];
            ctx.fill();
            ctx.strokeStyle = "Gray";
            ctx.lineWidth = wid / 400;

            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            //ctx.fillText("Score: " + Math.round(123), 1200 / 1366 * wid, 50 / 1366 * wid);
            //ctx.fillText(Math.round(rpx2) + ',' + Math.round(rpx) + ',' + Math.round(rpy) + ',' + Math.round(rmx) + ',' + Math.round(rmy), 200 / 1366 * wid, 50 / 1366 * wid);
            ctx.closePath();

            //color reset
            Rcolor[10] = "red";
            Rcolor[9] = "blue";
            Rcolor[8] = "pink";
            Rcolor[7] = "green";
            Rcolor[6] = "brown";
            Rcolor[5] = "black";
            Rcolor[4] = "purple";
            Rcolor[3] = "lightblue";
            Rcolor[2] = "orange";
            Rcolor[1] = "silver";

        //}
    }




    //player recieve robot laser
        for (i4 = 0; i4 < jrl; i4++) {

            if ((rlxn1[i4] + rlmx[i4] < Arrowx + Arroww / 2) &&
                (rlxn2[i4] + rlmx[i4] > Arrowx - Arroww / 2) &&
                (rlyn2[i4] + rlmy[i4] < Arrowy + Arrowh / 2) &&
                (rlyn2[i4] + rlmy[i4] > Arrowy - Arrowh / 2)) {


                HP -= (2 * rN) / 1366 * wid;
                HPC = "Yellow";


                rlxn1[i4] = null;
                rlxn2[i4] = null;
                rlyn1[i4] = null;
                rlyn2[i4] = null;
                rlmx[i4] = null;
                rlmy[i4] = null;
            } else {
                //HPC = "Red";
            }

        }

    //health bar
        font = hei / 30;
        pc = HP / (wid / 2) * 100;
        ctx.beginPath();
        ctx.font = font + "px Arial";
        ctx.fillStyle = "Purple";
        //ctx.fillText("E", wid/4 - 150 / 1366 * wid, hei * 0.98);
        ctx.fillText(Math.round(pc) + "%", wid/4 + 10 / 1366 * wid + HP, hei * 0.98);
        
        ctx.strokeStyle = HPC;
        HPC = "Purple";
        ctx.lineWidth = wid / 80;
        ctx.moveTo(wid/4, hei * 0.97);
        
        if (HP > wid / 2) {
            HP = wid / 2; 
        } else {
            HP += 0.5 / 1366 * wid;
        }
        
        ctx.lineTo(wid/4 + HP, hei * 0.97);
        ctx.stroke();
        ctx.closePath();
    //

        if (HP <= 0) {
            endGame();
        }

    //the score
        ctx.beginPath();
        ctx.font = diagonal / 40 + "px Arial";
        ctx.fillStyle = "Orange";
        ctx.fillText("Score: " + Math.round(score), wid - 0.15 * wid, hei * 0.1);
        ctx.closePath();

    //explosion
        if (ex === 1) {

        ctx.beginPath();
        ctx.save();

        ctx.translate(rpx2, rpy2);

            radian3 += 1 * (Math.PI / 180);

        ctx.rotate(radian3);



        ctx.rect(-0.5 * rs2, - 0.5 * rs2, rs2, rs2);
        ctx.strokeStyle = Rcolor[rN];
        ctx.lineWidth = wid / 200;
        ctx.stroke();
        rs2 += 10 * wid / 1366;
        
        ctx.restore();
        ctx.closePath();
        }

    //
}

function Accelerate() {

    tx = Math.cos(radian) * (thrust);
    ty = Math.sin(radian) * (thrust);
    vx += tx;
    vy += ty

}

function Tracers() {
    //indicating Tracer on
    k = 1;

    //circle number
    circleN++;

    //circleN copy
    j++;

    //circle move X, Y
    cmx[circleN] = 0;
    cmy[circleN] = 0;

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    //circle position in relation to image
    xtr[circleN] = Math.cos(radian + 180 / (180 / Math.PI)) * Arroww/2;
    ytr[circleN] = Math.sin(radian + 180 / (180 / Math.PI)) * Arrowh/2;

    //position
    posx[circleN] = xtr[circleN] + Arrowx;
    posy[circleN] = ytr[circleN] + Arrowy;

    //radius of circle
    ra[circleN] = Math.random() * (1366 / 50) * ((diagonal) / (1567));

    cr[circleN] = Math.round(Math.random() * 255);
    cg[circleN] = Math.round(Math.random() * 255);
    cb[circleN] = Math.round(Math.random() * 255);

    bx[circleN] = -20*tx;
    by[circleN] = -20*ty;

    if (circleN > 200) {
        circleN = 0;
    }

    if (j >= 200) {
        j = 200;
    }
}

function createStars() {

    for (i = 0; i < 1366 / 10 * ((diagonal) / (1567)) ; i++) {
        //star size
        stars[i] = Math.round(Math.random() * (1366 / 200) * ((diagonal) / (1567)));
        
        //star position
        starx[i] = Math.round(Math.random() * wid);
        stary[i] = Math.round(Math.random() * hei);

    }

}

function Sound() {
    if (muteN === 0){
        muteN = 1;
        Mute1.src = "images/SoundOff.png";
        Mute2.src = "images/SoundOff.png";
        Mute3.src = "images/SoundOff.png";
        Mute4.src = "images/SoundOff.png";
        if (m === 1) {
            audio.pause();
        }
        if (m === 2) {
            audio2.pause();
        }
        if (m === 3) {
            audio3.pause();
        }
        if (m === 4) {
            audio4.pause();
        }
        if (m === 5) {
            audio5.pause();
        }
        if (m === 6) {
            audio6.pause();
        }
        if (m === 7) {
            audio7.pause();
        }
        if (m === 8) {
            audio8.pause();
        }
    } else {
        muteN = 0;
        Mute1.src = "images/SoundOn.png";
        Mute2.src = "images/SoundOn.png";
        Mute3.src = "images/SoundOn.png";
        Mute4.src = "images/SoundOn.png";
        if (m === 1) {
            audio.play();
        }
        if (m === 2) {
            audio2.play();
        }
        if (m === 3) {
            audio3.play();
        }
        if (m === 4) {
            audio4.play();
        }
        if (m === 5) {
            audio5.play();
        }
        if (m === 6) {
            audio6.play();
        }
        if (m === 7) {
            audio7.play();
        }
        if (m === 8) {
            audio8.play();
        }
    }
}

function fireLaser() {
    g = 1;

    lmx[laserN] = 0;
    lmy[laserN] = 0;

    vxl[laserN] = vx;
    vyl[laserN] = vy;


    //laser travel
    ltx[laserN] = Math.cos(radian) * ((1366 / 20) * ((diagonal) / (1567)));
    lty[laserN] = Math.sin(radian) * ((1366 / 20) * ((diagonal) / (1567)));

    xl1[laserN] = Math.cos(radian) * ((1366 / 20) * ((diagonal) / (1567))) + Math.cos(radian) * Arroww / 2 + Arrowx;
    yl1[laserN] = Math.sin(radian) * ((1366 / 20) * ((diagonal) / (1567))) + Math.sin(radian) * Arroww / 2 + Arrowy;

    xl2[laserN] = Math.cos(radian) * Arroww / 2 + Arrowx;
    yl2[laserN] = Math.sin(radian) * Arroww / 2 + Arrowy;

    lr[laserN] = Math.round(Math.random() * 255);
    lg[laserN] = Math.round(Math.random() * 255);
    lb[laserN] = Math.round(Math.random() * 255);

    if (laserN > 100) {
        laserN = 0;
    }

    if (j2 >= 100) {
        j2 = 100;
    }

    j2++;
    laserN++;
    HP -= 5 / 1366 * wid;

}
function createRobot() {

    rN++;
    rf[rN] = 0;

    rmx = -(Math.cos(radian2)) * (1);
    rmy = -(Math.sin(radian2)) * (1);

    Rcolor[10] = "red";
    Rcolor[9] = "blue";
    Rcolor[8] = "pink";
    Rcolor[7] = "green";
    Rcolor[6] = "brown";
    Rcolor[5] = "black";
    Rcolor[4] = "purple";
    Rcolor[3] = "lightblue";
    Rcolor[2] = "orange";
    Rcolor[1] = "silver";


    rr[rN] = Math.round(Math.random() * 255);
    rg[rN] = Math.round(Math.random() * 255);
    rb[rN] = Math.round(Math.random() * 255);

    rs = wid / 40;

    rpx = -5 * rs;
    rpy = hei / 2;

    rv[rN] = 0;
    go[rN] = 0;
    k4 = 1;
}


function RobotFireLaser() {
    k6 = 1;


    rdx = rpx - Arrowx;
    rdy = rpy - Arrowy;

    radian2 = Math.atan2(rdy, rdx);

    //laser move
    rlmx[RlaserN] = 0;
    rlmy[RlaserN] = 0;

    //laser color
    rlr[RlaserN] = Math.round(Math.random() * 255);
    rlg[RlaserN] = Math.round(Math.random() * 255);
    rlb[RlaserN] = Math.round(Math.random() * 255);

    //canon position
    rxlp[RlaserN] = Math.cos(radian2 + Math.PI) * 0;
    rylp[RlaserN] = Math.sin(radian2 + Math.PI) * 0;

    //laser position
    rxl1[RlaserN] = Math.cos(radian2 + Math.PI) * (wid / 20);
    ryl1[RlaserN] = Math.sin(radian2 + Math.PI) * (wid / 20);
    rxl2[RlaserN] = 0;
    ryl2[RlaserN] = 0;

    //net positions
    rlxn1[RlaserN] = rxl1[RlaserN] + rxlp[RlaserN] + rpx;
    rlyn1[RlaserN] = ryl1[RlaserN] + rylp[RlaserN] + rpy;
    rlxn2[RlaserN] = rxl2[RlaserN] + rxlp[RlaserN] + rpx;
    rlyn2[RlaserN] = ryl2[RlaserN] + rylp[RlaserN] + rpy;

    if (RlaserN > 100) {
        RlaserN = 0;
    }
    if (jrl >= 100) {
        jrl = 100;
    }


    jrl++;
    RlaserN++;
}

function timedEvents2() {

    if (handle === 1) {


        HP -= 10 * thrust * 1366 / wid;
        //HPC = "YellowGreen";
        Tracers();
    }

}

function Stop() {

    if (pauseN === 0){
        pauseN = 1;
        Pause.src = "images/Pause.png";
        clearInterval(timer);
        clearInterval(timer2);
        clearInterval(timer4);
         muteN = 1;
        Mute3.src = "images/SoundOff.png";
        if (m === 1) {
            audio.pause();
        }
        if (m === 2) {
            audio2.pause();
        }
        if (m === 3) {
            audio3.pause();
        }
        if (m === 4) {
            audio4.pause();
        }
        if (m === 5) {
            audio5.pause();
        }
        if (m === 6) {
            audio6.play();
        }
        if (m === 7) {
            audio7.play();
        }
        if (m === 8) {
            audio8.play();
        }  
    } else {
        pauseN = 0;
        Pause.src = "images/Pause2.png";
        timer = setInterval(function () { timedEvents(); }, 30);
        timer2 = setInterval(function () { timedEvents2(); }, 50);
        timer4 = setInterval(function () { RobotFireLaser(); }, 4000);
       muteN = 0;
        Mute3.src = "images/SoundOn.png";
        if (m === 1) {
            audio.play();
        }
        if (m === 2) {
            audio2.play();
        }
        if (m === 3) {
            audio3.play();
        }
        if (m === 4) {
            audio4.play();
        }
        if (m === 5) {
            audio5.play();
        }
        if (m === 6) {
            audio6.play();
        }
        if (m === 7) {
            audio7.play();
        }
        if (m === 8) {
            audio8.play();
        }
    }

}

function createGold() {
    gN = 1;
    Gcolor = "Gold";

    Gsize = Math.round(Math.random() * diagonal/20) + diagonal/50;

    goldx = Math.round(Math.random() * wid);
    goldy = Math.round(Math.random() * hei);

}

function eatGold() {

if ((goldx - Gsize < Arrowx + Arroww / 4) &&
    (goldx + Gsize > Arrowx - Arroww / 4) &&
    (goldy - Gsize < Arrowy + Arrowh / 4) &&
    (goldy + Gsize > Arrowy - Arrowh / 4)) {

    //add score here
    score += 1 * Gsize * 1366 / wid;
    HP += 1 * Gsize * 1366 / wid;
    createGold();

    }

}

function endGame() {

    //stops any game audio
    if (m === 2) {
        audio2.pause();
        audio2.currentTime = 0;
    }
    if (m === 3) {
        audio3.pause();
        audio3.currentTime = 0;
    }
    if (m === 4) {
        audio4.pause();
        audio4.currentTime = 0;
    }
    if (m === 5) {
        audio5.pause();
        audio5.currentTime = 0;
    }
    if (m === 6) {
        audio6.pause();
        audio6.currentTime = 0;
    }
    if (m === 7) {
        audio7.pause();
        audio7.currentTime = 0;
    }
    if (m === 8) {
        audio8.pause();
        audio8.currentTime = 0;
    }

    clearInterval(timer);
    clearInterval(timer2);
    clearInterval(timer4);

    show('pagefour', 'pagetwo', 'pagethree', 'pageone', 'pagezero');


    var c2 = document.getElementById("canvas3");
    var ctx2 = c2.getContext("2d");
    canvas3.width = wid;
    canvas3.height = hei;

    m = 1;
    audio.play();

    ctx2.beginPath();
    ctx2.fillStyle = "Black";
    ctx2.globalAlpha = 0.5;
    ctx2.fillRect(wid * 0.3, hei * 0.1, wid * 0.4, hei * 0.7);
    ctx2.closePath();

    ctx2.beginPath();
    font2 = wid / 25;
    ctx2.globalAlpha = 1;
    ctx2.font = font2 + "px Arial";
    ctx2.fillStyle = "Red";
    ctx2.fillText(" Game Over!", wid * 0.375, 130 / 1366 * wid);
    if (win === 1) {
        ctx2.fillText("You Won!", wid * 0.375, 180 / 1366 * wid);
    } else { ctx2.fillText("You Crashed!", wid * 0.375, 180 / 1366 * wid); }
    //ctx2.fillText("Here is your score!", wid * 0.375, 180 / 1366 * wid);
    ctx2.font = font2 / 1.5 + "px Arial";
    ctx2.fillStyle = "White";
    ctx2.fillText("Score: " + Math.round(score), wid * 0.44, 298 / 1366 * wid);
    ctx2.closePath();

    

}

function Limits() {

    //collision limit
    if ((rpx - rs / 2 < Arrowx + Arroww / 4) &&
        (rpx + rs / 2 > Arrowx - Arroww / 4) &&
        (rpy - rs / 2 < Arrowy + Arrowh / 4) &&
        (rpy + rs / 2 > Arrowy - Arrowh / 4)) {

        endGame();

    }

    //border limits
    if (0 > Arrowx - Arroww / 2){
        vx = 1 * 1366 / wid;
        HP -= 1 * 1366 / wid;
        HPC = "Yellow";
    }
   
    if (wid < Arrowx + Arroww / 2) {
        vx = -1 * 1366 / wid;
        HP -= 1 * 1366 / wid;
        HPC = "Yellow";
    }

    if (0 > Arrowy - Arrowh / 2) {
        vy = 1 * 1366 / wid;
        HP -= 1 * 1366 / wid;
        HPC = "Yellow";
    }

    if (hei < Arrowy + Arrowh / 2) {
        vy = -1 * 1366 / wid;
        HP -= 1 * 1366 / wid;
        HPC = "Yellow";
    }

}

function robotDamage() {
    rH++;
    Rcolor[rN] = "Yellow";
    if (rH >= rN * 2) {

        //rf[rN] = 1;
        rpx2 = rpx;
        rpy2 = rpy;
        rs2 = 0;
        ex = 1;
        radian3 = 0;
        createRobot();

        rH = 0;
        if (rN === 10) {
            win = 1;
            endGame();
        }
    }
}