import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <p>Username,email or phone number</p>
            <input type="text"/>
            <p>Password</p>
            <input type="password"/><br></br>
            <button>Login</button><br></br>
            <Link to="/forgot-password">Forgot Password</Link>
            <h4>Do not have account?</h4>
            <Link to="/signup">Create One</Link>

        </div>
    );
};

export default Login;