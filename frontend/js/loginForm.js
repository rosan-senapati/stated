document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorMessage.textContent = "Email is required!";
        errorMessage.style.display = "block";
        return;
    } else if (!emailPattern.test(email)) {
        errorMessage.textContent = "Invalid email format!";
        errorMessage.style.display = "block";
        return;
    } else if (/\s/.test(email)) {
        errorMessage.textContent = "Email cannot contain spaces!";
        errorMessage.style.display = "block";
        return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
        errorMessage.textContent = "Password is required!";
        errorMessage.style.display = "block";
        return;
    } else if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long!";
        errorMessage.style.display = "block";
        return;
    } else if (/\s/.test(password)) {
        errorMessage.textContent = "Password cannot contain spaces!";
        errorMessage.style.display = "block";
        return;
    } else if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    $.ajax({
        url: "../../php/login.php",
        method: "POST",
        data: { email: email, password: password },
        success: function(data) {
            console.log(data);
            
            if (data === true) {
                alert("Login successful!");
                window.location.href = "./index.html";
            } else {
                alert("Login failed!");
            }
        },
        error: function() {
            alert("An error occurred. Please try again.");
        }
    });
});
