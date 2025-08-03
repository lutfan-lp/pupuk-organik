// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { getReviews } from "../utils/storage";
import { Carousel } from "react-bootstrap";
import pupukImage from "../assets/pupuk.jpg"
// import gambar untuk galeri
import pupuk from "../assets/pupuk.jpg"
import pupuk1 from "../assets/pupuk1.jpg";
import pupuk2 from "../assets/pupuk2.jpg";
import pupuk3 from "../assets/pupuk3.jpg";
import pupuk4 from "../assets/pupuk4.jpg";
import pupuk5 from "../assets/pupuk5.jpg";

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const data = getReviews();
        const sorted = data.slice(-5).reverse(); // Ambil 5 terakhir, urut terbaru
        setReviews(sorted);
    }, []);

    const pupukImages = [pupuk, pupuk1, pupuk2, pupuk3, pupuk4, pupuk5];

    return (
        <div>
            <section className="py-5 bg-dark text-white" style={{ minHeight: "85vh", display: "flex", alignItems: "center", padding: "40px" }}>
                <div className="container">
                    <div className="row align-items-center">

                        {/* Kiri: Teks */}
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold">Let's bring it home.</h1>
                            <p className="lead">
                                Mengenalkan <strong>Pupuk Organik</strong> — solusi alami yang memberi hasil panen maksimal tanpa mencemari tanah.
                            </p>
                            <h4 className="fw-semibold mb-3">Rp69.000</h4>
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                                <a href="/payment" className="btn btn-primary px-4">Pesan Sekarang</a>
                                <a href="#galeri" className="btn btn-outline-light px-4">Lihat Galeri</a>
                            </div>
                        </div>

                        {/* Kanan: Gambar */}
                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <img
                                src={pupuk}
                                alt="Pupuk Organik"
                                className="img-fluid"
                                style={{ maxHeight: "300px", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))" }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* DETAIL PRODUK */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Tentang Produk Kami</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src={pupukImage}
                            alt="Pupuk Organik"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6">
                        <p>
                            Pupuk organik kami terbuat dari bahan alami pilihan, kaya nutrisi, dan bebas bahan kimia berbahaya.
                            Sangat cocok untuk semua jenis tanaman dan aman untuk lingkungan.
                        </p>
                        <ul>
                            <li>100% alami</li>
                            <li>Meningkatkan kesuburan tanah</li>
                            <li>Ramah lingkungan</li>
                            <li>Terbukti meningkatkan hasil panen</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* REVIEW SLIDESHOW */}
            <section className="bg-light py-5">
                <div className="container">
                    <h3 className="text-center mb-4">Ulasan Pelanggan</h3>
                    {reviews.length > 0 ? (
                        <Carousel indicators={false} interval={5000}>
                            {reviews.map((review, idx) => (
                                <Carousel.Item key={idx}>
                                    <div className="text-center">
                                        <p className="fs-5 fst-italic text-dark">"{review.text}"</p>
                                        <div>
                                            {[1, 2, 3, 4, 5].map((n) => (
                                                <i
                                                    key={n}
                                                    className={`fa-star me-1 ${review.rating >= n ? "fas text-warning" : "far text-muted"}`}
                                                ></i>
                                            ))}
                                        </div>
                                        <small className="text-muted">— {review.username}</small>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <p className="text-center text-muted">Belum ada ulasan.</p>
                    )}
                </div>
            </section>

            {/* GALERI PUPUK (MARQUEE) */}
            <section id = "galeri" className="py-5 bg-light">
                <div className="container">
                    <h3 className="text-center mb-4">Galeri Pupuk</h3>
                    <div className="overflow-hidden">
                        <div className="gallery-scroll">
                            {[...pupukImages, ...pupukImages].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`galeri-${idx}`}
                                    style={{
                                        width: "250px",
                                        height: "auto",
                                        objectFit: "cover",
                                        marginRight: "1rem",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                                        flexShrink: 0,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* KONTAK */}
            <section className="bg-success text-white text-center py-4">
                <div className="container">
                    <h5>Kontak Kami</h5>
                    <p>
                        WhatsApp: 0812-3456-7890 | Email: pupuk@organik.id
                    </p>
                </div>
            </section>

            {/* CSS ANIMASI */}
            <style>
                {`
                    @keyframes scrollX {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    @media (max-width: 768px) {
                        .scroll-gallery img {
                            width: 80vw !important;
                        }
                    }

                `}
            </style>
        </div>
    );
};

export default Home;
