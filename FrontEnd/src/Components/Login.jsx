import './Login.css';

function Login({ email, onBack }) {
    function handleLogin(event) {   
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value; 
        
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Handle successful login
                console.log("Login successful:");
            } else {
                // Handle failed login
                console.log("Login failed:", data.message);
            }
        })
        .catch(error => {
            console.error("Error during login:", error);
        });
    }

    return (
        <div id="Login-container">
            <h1 id="login-title">Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" id="username" placeholder="email" name="username" required />
                <input type="password" id="password" placeholder="password" name="password" required />
                <button type="submit" id="login-button">Login</button>
                <button type="button" id="go-back" onClick={onBack}>Back</button>
            </form>
        </div>
    );
}

export default Login;