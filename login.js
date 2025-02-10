let isLogin = true;
function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "Login" : "Register";
    document.querySelector("button").innerText = isLogin ? "Login" : "Register";
}
function login() {
    let userType = document.getElementById("userType").value;
    if (userType === "student") {
        window.location.href = "index.html";
    }else if (userType === "organization") {
        window.location.href = "Organization_home.html";
    } else {
        alert("Please select the account type.");
    }
}