function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        return false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address";
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerHTML = "Please enter a valid email address";
            return false;
        } else {
            document.getElementById("emailError").innerHTML = "";
        }
    }

    if (location == "") {
        document.getElementById("locationError").innerHTML = "Please select your interest";
        return false;
    } else {
        document.getElementById("locationError").innerHTML = "";
    }

    window.location.href = "succes.html" ;
    return true;
}
