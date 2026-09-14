const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    const savedUser =
    JSON.parse(localStorage.getItem("user"));

    if(!savedUser){

        alert(
            "No account found. Please create an account first."
        );

        window.location.href =
        "creat button.html";

        return;
    }

    if(
        email === savedUser.email &&
        password === savedUser.password
    ){

        alert("Login Successful");

        window.location.href =
        "dashboard.html";

    }else{

        alert(
            "Incorrect Email or Password"
        );

    }

});


const showPassword =
document.getElementById("showPassword");

const passwordInput =
document.getElementById("password");

showPassword.addEventListener("change", () => {

    if(showPassword.checked){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }

});