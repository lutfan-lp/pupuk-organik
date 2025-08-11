import { useState } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Password dan konfirmasi tidak cocok!");
            return;
        }

        const users = getUsers();
        const exists = users.find((u) => u.email === form.email);
        if (exists) {
            alert("Email sudah terdaftar");
            return;
        }

        const { confirmPassword, ...newUser } = form; // Buang konfirmasi sebelum disimpan
        users.push(newUser);
        saveUsers(users);
        alert("Pendaftaran berhasil. Silakan login.");
        navigate("/login");
    };

    return (
        <div className="container py-5" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">Daftar</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Konfirmasi Password</label>
                    <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        id="togglePassword"
                    />
                    <label className="form-check-label" htmlFor="togglePassword">
                        Tampilkan Password
                    </label>
                </div>
                <button className="btn btn-success w-100" type="submit">Daftar</button>
            </form>
        </div>
    );
}
