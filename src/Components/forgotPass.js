import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <div className="forgot-password">
            <h1>Forgot Password</h1>

            <p>Enter your email address</p>
            <input
                type="email"
                placeholder="Enter your email"
            />

            <button>Send Reset Link</button>

            <h4>Remember your password?</h4>
            <Link to="/login">Back to Login</Link>
        </div>
    );
}

export default ForgotPassword;