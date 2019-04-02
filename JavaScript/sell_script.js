console.log("Entered");

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

var help = 0;
function showHelp(){
   if(help == 0){
       document.getElementById("help_sec").style.height = "200px";
       help = 1;
    }

    else{
        document.getElementById("help_sec").style.height = "0px";
        help = 0;
    }
}

function demo(){
    var warning = document.getElementById("Error");
    var warn = "Oops! You're missing an (*) marked field";
    var Empty = "";
    var name = document.getElementById("Header").value;
    var author = document.getElementById("Author").value;
    var topic = document.getElementById("Topic").value;
    var price = document.getElementById("Price").value;
    var img = document.getElementById("img").value;
    var mask = document.getElementById("Mask");

    if (name == "" || author == "" || topic == "" || price ==""){
        warning.innerHTML = warn;
    }

    else{
        document.getElementById("demo_Header").innerHTML = name;
        document.getElementById("demo_Author").innerHTML = author;
        document.getElementById("demo_Topic").innerHTML = topic;
        document.getElementById("demo_Price").innerHTML = price;
        warning.innerHTML = Empty;
        document.getElementById("demo_Img").src = "Images/smiley.jpeg";
        mask.style.width = "0px";
        // document.body.style.overlflowY = 'hidden';
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
        window.scrollBy(0, 500);
    }
}

function post(){
    console.log("Post entered");

    // var rootRef = firebase.database().ref();
    // var postRef = rootRef.child('/Posts');

    var name = document.getElementById("Header").value;
    var author = document.getElementById("Author").value;
    var topic = document.getElementById("Topic").value;
    var price = document.getElementById("Price").value;
    var img = document.getElementById("img").value;
    //var user = firebase.auth().currentUser.displayName;
    var posting_time = new Date().toString();
    var newPostKey = firebase.database().ref().child('UserPost').push().key;
    // var newPostKey = "saf";
    firebase.database().ref('/Posts/' + newPostKey).set({
        Name: name,
        Author: author,
        Topic: topic,
        Price: price,
        User: user,
        Posting_time: posting_time
    }).then(function(){
        window.location("index.html");
    });
    console.log("Post created");

}