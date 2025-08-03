// src/components/ProductCard.jsx
import React from "react";

const ProductCard = () => {
    return (
        <div className="card" style={{ width: "22rem" }}>
            <img src="/images/pupuk.jpg" className="card-img-top" alt="Pupuk Organik" />
            <div className="card-body">
                <h5 className="card-title">Pupuk Organik Alami</h5>
                <p className="card-text">
                    Tingkatkan kesuburan tanah dengan pupuk organik ramah lingkungan.
                </p>
                <h6 className="text-success">Rp 35.000</h6>
                <button className="btn btn-success w-100 mt-2">Pesan Sekarang</button>
            </div>
        </div>
    );
};

export default ProductCard;
