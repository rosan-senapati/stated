document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userType = document.getElementById("type").value;
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("cpassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!name) {
        errorMessage.textContent = "Name is required!";
        errorMessage.style.display = "block";
        return;
    }

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

    if (!userType) {
        errorMessage.textContent = "Please select a user type!";
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

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    $.ajax({
        url: "../../php/register.php",
        method: "POST",
        data: { email: email, password: password, type: userType, name: name},
        success: function(data) {
            console.log(data);
            
            if (data === true) {
                alert("Signup successful!");
                window.location.href = "./index.html";
            } else {
                alert("Signup failed!");
            }
        },
        error: function() {
            alert("An error occurred. Please try again.");
        }
    }); 
});