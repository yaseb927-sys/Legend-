document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".glass-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("✅ Your whitelist application has been submitted successfully!");

            window.location.href = "success.html";

        });

    }

}
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();

        if (user === "owner" && pass === "123456") {
            window.location.href = "dashboard.html";
        } else {
            alert("Wrong Username or Password");
        }
    });
}