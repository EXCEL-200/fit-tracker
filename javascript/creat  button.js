const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const user = {
        fullname: fullname,
        email: email,
        password: password
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Account Created Successfully");

    window.location.href = "login.html";

});