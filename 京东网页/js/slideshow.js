    var num = 0;
    var outer = document.getElementById("silider");
    var pics = document.getElementById("slideshow").getElementsByTagName("img");
    /* var btns = document.getElementById("btn").getElementsByTagName("li"); */
    var leftBtn = document.getElementById("s-left");
    var rightBtn = document.getElementById("s-right");
    var timerAuto = null;
    clock();
    function clock(){
        timerAuto = setInterval(autoMove,2000)
    }
    function autoMove(){
            num++
            if(num==8){
                num = 0;
            }
            
            if(num==-1){
                num=pics.length-1;
            }
            // changeBgcolor();
            // outer.scrollLeft = 590*num;
            move(outer.scrollLeft,590*num)     }
    
     function move(start,end){
       var step = 0;
         var maxStep = 10;
         var everyStep =(end-start)/maxStep;
         var time = setInterval(function(){
            step++;
            console.log(step);
             outer.scrollLeft=outer.scrollLeft+everyStep;
             if(step==maxStep){
                clearInterval(time);
             }
         },50)
     }
   
    rightBtn.onclick= function(){

        clearInterval(timerAuto);
        autoMove();
        clock();
    }
    leftBtn.onclick = function(){
     clearInterval(timerAuto);
        num-=2;
       autoMove();
        clock();
     }
