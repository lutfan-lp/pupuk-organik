import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/storage";

export default function Navbar() {
    const user = getCurrentUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">🧪 Pupuk Organik</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Beranda</Link>
                        </li>

                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/payment">Pesan</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders">Riwayat</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/promotions">Promosi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reviews">Komentar</Link>
                                </li>

                                {/* Dropdown User Profile */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-user-circle me-1"></i>{user.username}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/profile">Profil</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
