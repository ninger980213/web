    var topBox = document.getElementById("topBox");
    var timer = null;
    topBox.onclick = function(){
        timer = setInterval(function(){
            var scrT = document.body.scrollTop||document.documentElement.scrollTop;
            // scrT-=100
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100
            console.log(scrT);
            if(scrT==0){
                clearInterval(timer);
            }
        },20);
    }
window.onscroll = function(){
    var scrT = document.body.scrollTop||document.documentElement.scrollTop;
    if(scrT>document.documentElement.clientHeight){
        topBox.style.display = "block";
    }else {
        topBox.style.display = "none";
    }
}