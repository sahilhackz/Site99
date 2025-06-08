
const validEmail = "sahilhackz@gmail.com";
const validPassword = "PASS7870";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === validEmail && password === validPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-content").style.display = "block";
    } else {
        alert("Invalid credentials!");
    }
}

function showSection(id) {
    const sections = document.querySelectorAll(".admin-section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(id).style.display = "block";
}
