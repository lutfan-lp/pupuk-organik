import { useState } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = getUsers();
        const exists = users.find((u) => u.email === form.email);
        if (exists) {
            alert("Email sudah terdaftar");
            return;
        }
        users.push(form);
        saveUsers(users);
        alert("Pendaftaran berhasil. Silakan login.");
        navigate("/login");
    };

    return (
        <div className="container py-5" style={{ maxWidth: "500px"}}>
            <h2 className="text-center mb-4">Daftar</h2>
            <form onSubmit={handleSubmit} className="container py-5" style={{ maxWidth: 400 }}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input className="form-control" 
                        type="text" 
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" 
                        type="email"  
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" 
                        type="password" 
                        onChange={(e) => setForm({ ...form, password: e.target.value })} 
                        required
                    />
                </div>
                <button className="btn btn-success w-100" type="submit">Daftar</button>
            </form>
        </div>
    );
}
