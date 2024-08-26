function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'ahmedkadi3108@gmail.com' && password === 'ahmed3108kadi') {
        return true; // Proceed to dashboard
    } else {
        document.getElementById('error-message').textContent = 'Invalid credentials. Please try again.';
        return false; // Prevent form submission
    }
}
