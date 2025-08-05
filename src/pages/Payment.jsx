// Payment.js
import { useState } from "react";
import { getCurrentUser, getOrders, saveOrders } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import qris_dummy from "../assets/Images/qris-dummy.png"
import { getHargaPerSak } from "../utils/storage";

export default function Payment() {
    const user = getCurrentUser();
    const navigate = useNavigate();

    const qris = qris_dummy;

    const [form, setForm] = useState({
        quantity: 1,
        metodePembayaran: "Transfer Bank",
    });

    const hargaPerSak = getHargaPerSak();
    const totalHarga = form.quantity * hargaPerSak;

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
                <div className="form-text text-end">
                    Total Harga: <strong>Rp {totalHarga.toLocaleString("id-ID")}</strong>
                </div>
            </div>

            <div className="mb-3">
                <label className="form-label">Metode Pembayaran:</label>
                <select
                    value={form.metodePembayaran}
                    onChange={(e) => setForm({ ...form, metodePembayaran: e.target.value })}
                    className="form-select"
                    required
                >
                    <option value="">-- Pilih --</option>
                    <option value="Transfer Bank">Transfer Bank</option>
                    <option value="QRIS">QRIS</option>
                    <option value="COD">COD</option>
                </select>
            </div>

            {/* Info berdasarkan metode pembayaran */}
            {form.metodePembayaran === "Transfer Bank" && (
                <div className="alert alert-info">
                    Silakan transfer ke rekening berikut sebelum pengiriman:<br />
                    <strong>BRI 1234-5678-9012 a.n. Toko Pupuk</strong>
                </div>
            )}

            {form.metodePembayaran === "QRIS" && (
                <div className="alert alert-info text-center">
                    Silakan scan QR di bawah ini setelah mengisi form:
                    <br /><br />
                    <img
                        src={qris}
                        alt="QRIS Dummy"
                        style={{ width: "200px" }}
                    />
                    <br />
                    <small>Contoh QRIS untuk simulasi pembayaran</small>
                </div>
            )}

            {form.metodePembayaran === "COD" && (
                <div className="alert alert-warning">
                    Pembayaran akan dilakukan saat barang tiba. Harap siapkan uang sesuai jumlah pesanan.
                </div>
            )}

            <button type="submit" className="btn btn-success w-100">Pesan Sekarang</button>
        </form>
    );
}
