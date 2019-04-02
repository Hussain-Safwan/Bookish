
// var main_div = document.getElementById("the_nav");
// var desc = main_div.getElementsByTagName("*");

var Open = 0;
var bars = document.getElementsByClassName("bars");
function openNav() {
    if(Open == 0){
        document.getElementById("mySidenav").style.width = "350px";
        Open = 1;
        bars.style.color = 'red';
    }
    else{
        document.getElementById("mySidenav").style.width = "0";
        Open = 0;    
    }
  }

var header = document.getElementById("the_nav");
var btns = header.getElementsByClassName("nav_btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
       alert("Clicked a button!");
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
  });
}
