function signup_click(){

    window.alert("Clicked!");

    //get info
    console.log("Hello");
    var name = document.getElementById("name").value;
    console.log(name);
    var username = document.getElementById("username").value;
    console.log(username);
    var email = document.getElementById("email").value;
    console.log(email);
    var phone = document.getElementById("phone").value;
    console.log(phone);
    var password = document.getElementById("password").value;
    console.log(password);
    alert("Welcome, " + name);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        var user = firebase.auth().currentUser;
        var user_id = user.uid;

        user.updateProfile({
            displayName: name

        }).then(function(){
            //Successfull
        }).catch(function(error){
            //error :'-(
        });

        firebase.database().ref('user/' + user_id).set({
            Name: name,
            Email: email,
            Username: username,
            Password: password,
            Phone: phone
        })
        .then(function(){
            firebase.auth().signOut();
            window.location = "index.html";
            
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMsg = error.mesasage;
            window.alert("An error ocurred\n" + "Code: " + errorCode + "\n" + "Message: " + errorMsg);
        });
    }, function(error){
            var errorCode = error.code;
            var errorMsg = error.mesasage;
            window.alert("An error ocurred\n" + "Code: " + errorCode + "\n" + "Message: " + errorMsg);
            
    });
}