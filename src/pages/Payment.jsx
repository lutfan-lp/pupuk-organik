import { useState } from "react";
import { getCurrentUser, getOrders, saveOrders } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const user = getCurrentUser();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        quantity: 1,
        metodePembayaran: "Transfer Bank",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            alert("Harap login terlebih dahulu");
            navigate("/login");
            return;
        }

        const newOrder = {
            id: Date.now().toString(),
            userEmail: user.email,
            quantity: form.quantity,
            metodePembayaran: form.metodePembayaran,
            tanggal: new Date().toISOString(),
            status: "Diproses",
        };

        const allOrders = getOrders();
        allOrders.push(newOrder);
        saveOrders(allOrders);

        alert("Pesanan berhasil dibuat!");
        navigate("/orders");
    };

    return (
        <form onSubmit={handleSubmit} className="container py-5" style={{ maxWidth: 500 }}>
            <h2 className="mb-4 text-center">Pemesanan Pupuk Organik</h2>

            <div className="mb-3">
                <label className="form-label">Jumlah (sak):</label>
                <input
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: parseInt(e.target.value) })}
                    className="form-control"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Metode Pembayaran:</label>
                <select
                    value={form.metodePembayaran}
                    onChange={(e) => setForm({ ...form, metodePembayaran: e.target.value })}
                    className="form-select"
                >
                    <option>Transfer Bank</option>
                    <option>QRIS</option>
                    <option>COD</option>
                </select>
            </div>

            <button type="submit" className="btn btn-success w-100">Pesan Sekarang</button>
        </form>

    );
}
