import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="signup">
            <h1>Create Account</h1>

            <p>Full Name</p>
            <input
                type="text"
                placeholder="Enter your full name"
            />

            <p>Email Address</p>
            <input
                type="email"
                placeholder="Enter your email"
            />

            <p>City</p>
            <input
                type="text"
                placeholder="Enter your city"
            />

            <p>Phone Number</p>
            <input
                type="tel"
                placeholder="Enter your phone number"
            />

            <p>Password</p>
            <input
                type="password"
                placeholder="Create a password"
            />

            <br />

            <button>Create Account</button>

            <h4>Already have an account?</h4>

            <Link to="/login">Login Here</Link>
        </div>
    );
}

export default SignUp;