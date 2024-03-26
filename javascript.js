function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;

    if (username == "") {
        console.log("Error: Please enter your name");
        return false;
    }

    if (email == "") {
        console.log("Error: Please enter your email address");
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("Error: Please enter a valid email address");
            return false;
        }
    }

    if (location == "") {
        console.log("Error: Please select your interest");
        return false;
    }

    sendForm();{
        return true;
    }
 
}

