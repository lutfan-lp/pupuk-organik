import { useState } from "react";
import { getUsers, setCurrentUser } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = getUsers();
        const user = users.find((u) => u.email === form.email && u.password === form.password);
        if (!user) {
            alert("Email atau password salah");
            return;
        }
        setCurrentUser(user);
        alert("Login berhasil!");
        navigate("/");
    };

    return (
        <div className="container py-5" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin} className="container py-5" style={{ maxWidth: 400 }}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="text-center mt-3">
                    Belum punya akun? <a href="/register">Daftar</a>
                </div>
            </form>

        </div>
    );
}
