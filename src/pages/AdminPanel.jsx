// src/pages/AdminPanel.js
import { useEffect, useState } from "react";
import { getOrders, saveOrders, getHargaPerSak, setHargaPerSak, getCurrentUser } from "../utils/storage";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@tokopupuk.com";

export default function AdminPanel() {
    const navigate = useNavigate();
    const user = getCurrentUser();
    const [orders, setOrders] = useState([]);
    const [hargaBaru, setHargaBaru] = useState(getHargaPerSak());

    useEffect(() => {
        if (!user || user.email !== ADMIN_EMAIL) {
            alert("Akses ditolak. Halaman hanya untuk admin.");
            navigate("/");
            return;
        }
        setOrders(getOrders());
    }, []);

    const handleStatusChange = (id, newStatus) => {
        const updated = orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        );
        setOrders(updated);
        saveOrders(updated);
    };

    const handleHargaChange = (e) => {
        setHargaBaru(parseInt(e.target.value));
    };

    const simpanHarga = () => {
        setHargaPerSak(hargaBaru);
        alert("Harga berhasil diperbarui!");
    };

    return (
        <div className="container py-5" style={{ maxWidth: 900 }}>
            <h2 className="text-center mb-4">Halaman Admin</h2>

            <div className="mb-5">
                <h5>Harga Pupuk per Sak</h5>
                <div className="input-group" style={{ maxWidth: 300 }}>
                    <span className="input-group-text">Rp</span>
                    <input type="number" value={hargaBaru} onChange={handleHargaChange} className="form-control" />
                    <button className="btn btn-primary" onClick={simpanHarga}>Simpan</button>
                </div>
            </div>

            <div>
                <h5>Daftar Pesanan</h5>
                {orders.length === 0 ? (
                    <div className="alert alert-info">Belum ada pesanan</div>
                ) : (
                    <div className="list-group">
                        {orders.map((order) => (
                            <div key={order.id} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <strong>{order.userEmail}</strong> - {order.quantity} sak
                                        <div>{order.metodePembayaran}</div>
                                        <div>{new Date(order.tanggal).toLocaleDateString()}</div>
                                    </div>
                                    <div>
                                        <select
                                            className="form-select"
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option>Diproses</option>
                                            <option>Dikirim</option>
                                            <option>Selesai</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
