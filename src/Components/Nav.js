import logo from './assets/logo.png';
import {Link} from 'react-router-dom';
function Nav({ searchTerm, setSearchTerm }) {
    return (
        <>
        <nav className="main-nav">
            <div className="logo">
                <img src={logo} alt="ZA Mart Logo" />
            </div>

            <div className="search-box">
                <input  type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={() => {
                        document.getElementById("products").scrollIntoView({
                        behavior: "smooth",
                         });
                            }}>
                            Search</button>
            </div>

            <ul>
                 <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart">🛒 Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;