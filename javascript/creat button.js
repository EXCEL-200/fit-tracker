const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", function(e){

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    if(
        fullname === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ){
        alert("Please fill all fields");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const user = {
        fullname,
        email,
        password
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Account created successfully");

    window.location.href = "login.html";

});


const user = {
    fullname,
    email,
    password
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);