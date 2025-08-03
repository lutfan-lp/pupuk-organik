// src/pages/Review.jsx
import React, { useState } from "react";
import { getCurrentUser, getReviews, saveReviews } from "../utils/storage";

const Review = () => {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(0);
    const user = getCurrentUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || rating === 0) {
            alert("Lengkapi ulasan dan rating.");
            return;
        }

        const newReview = {
            username: user?.username || "Anonim",
            text,
            rating: parseInt(rating),
        };

        const allReviews = getReviews();
        saveReviews([...allReviews, newReview]);

        alert("Ulasan disimpan!");
        setText("");
        setRating(0);
    };

    return (
        <div className="container mt-4">
            <h3>Ulasan Produk</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Tulis ulasan..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="mb-3">
                    <label className="form-label me-2">Rating:</label>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <i
                            key={num}
                            className={`fa-star me-1 ${rating >= num ? "fas text-warning" : "far text-muted"}`}
                            onClick={() => setRating(num)}
                            style={{ cursor: "pointer" }}
                        ></i>
                    ))}
                </div>
                <button className="btn btn-primary">Kirim</button>
            </form>
        </div>
    );
};

export default Review;
