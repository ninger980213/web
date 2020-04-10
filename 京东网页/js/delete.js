/* var delte = document.getElementById("delete");
var top = document.getElementById("top"); */
window.onload=function(){
    var delte = document.getElementById("delete");
    var top = document.getElementById("top");
    delte.onclick =function(){
        top.style.display= "none";
        console.log(this);
    }
}
