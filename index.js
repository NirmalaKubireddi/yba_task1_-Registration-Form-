function validation() {
    var username = document.Formfill.Username.value;
    var email = document.Formfill.Email.value;
    var password = document.Formfill.Password.value;
    var confirmPassword = document.Formfill.CPassword.value;
    var result = document.getElementById("result");

    if (username === "") {
        result.innerHTML = "Enter Username*";
        return false;
    } else if (username.length < 6) {
        result.innerHTML = "At least six characters*";
        return false;
    } else if (email === "") {
        result.innerHTML = "Enter your Email*";
        return false;
    } else if (password === "") {
        result.innerHTML = "Enter your Password*";
        return false;
    } else if (password.length < 6) {
        result.innerHTML = "Password must be at least 6 characters";
        return false;
    } else if (confirmPassword === "") {
        result.innerHTML = "Enter confirm password";
        return false;
    } else if (password !== confirmPassword) {
        result.innerHTML = "Passwords don't match";
        return false;
    } else {
        var popup = document.getElementById("popup");
        popup.classList.add("open-slide");
        return false; 
    }
}

function CloseSlide() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-slide");
}