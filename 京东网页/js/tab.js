var li1 = document.getElementById("navigte").getElementsByTagName("li");
var  div1= document.getElementById("non").getElementsByTagName("div");
var  non= document.getElementById("non")
for(var i=0;i<li1.length;i++){
    li1[i].onmouseover = function(){
        non.style.display = "block";
        for(var j=0;j<li1.length;j++){
            if(li1[j]==this){
                console.log(div1[j]);
                console.log(this);
                 this.className = "select";
                div1[j].style.display = "block";
            }else{
                 this.className = "";
                div1[j].style.display = "none";
            }
        }
    }
    li1[i].onmouseout =function(){
        non.style.display = "none";
    }
}