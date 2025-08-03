import { getCurrentUser, getOrders } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function Orders() {
    const user = getCurrentUser();
    const navigate = useNavigate();

    if (!user) {
        alert("Harap login terlebih dahulu");
        navigate("/login");
        return null;
    }

    const allOrders = getOrders();
    const userOrders = allOrders.filter((order) => order.userEmail === user.email);

    return (
        <div className="container py-5" style={{ maxWidth: 800 }}>
            <h2 className="mb-4 text-center">Riwayat Pesanan Anda</h2>

            {userOrders.length === 0 ? (
                <div className="alert alert-info text-center">Belum ada pesanan.</div>
            ) : (
                <div className="list-group">
                    {userOrders.map((order) => (
                        <div key={order.id} className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <strong>{order.tanggal.slice(0, 10)}</strong>
                                <span>Status: <span className="badge bg-warning text-dark">{order.status}</span></span>
                            </div>
                            <div>{order.quantity} sak - {order.metodePembayaran}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}
