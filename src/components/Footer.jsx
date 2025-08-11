import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-4 pb-2 mt-5">
            <div className="container text-center text-md-start">
                <div className="row d-flex justify-content-between p-5">
                    <div className="col-md-4 mb-3">
                        <h5>Toko Pupuk Organik</h5>
                        <p>Pupuk alami berkualitas tinggi untuk hasil pertanian yang lebih sehat dan subur.</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Kontak</h5>
                        <ul className="list-unstyled">
                            <li>Email: support@tokopupuk.com</li>
                            <li>Telp: +62 812 3456 7890</li>
                            <li>Alamat: Desa Kertagena Tengah, Kecamatan Kadur, Kabupaten Pamekasan, Indonesia</li>
                        </ul>
                    </div>
                    {/* <div className="col-md-4 mb-3">
                        <h5>Tautan</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Beranda</a></li>
                            <li><a href="/promotions" className="text-light text-decoration-none">Promo</a></li>
                            <li><a href="/reviews" className="text-light text-decoration-none">Ulasan</a></li>
                            <li><a href="/orders" className="text-light text-decoration-none">Pesanan</a></li>
                        </ul>
                    </div> */}
                </div>
                <div className="d-flex justify-content-center gap-4 mt-3 mb-4 fs-5">
                    <a href="#" className="text-light" aria-label="Facebook">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-light" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-light" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="#" className="text-light" aria-label="Tiktok">
                        <FaTiktok />
                    </a>
                    <a href="#" className="text-light" aria-label="YouTube">
                        <FaYoutube />
                    </a>
                </div>
                <div className="text-center pt-3 border-top border-light">
                    <small>&copy; {new Date().getFullYear()} Toko Pupuk Organik. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}
