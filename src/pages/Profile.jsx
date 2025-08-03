// src/pages/Profile.jsx
import React from "react";
import { getCurrentUser } from "../utils/storage";

const Profile = () => {
  const user = getCurrentUser();

  return (
    <div className="container mt-4">
      <h3>Profil Pengguna</h3>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      {/* Tambahkan info lainnya di sini jika dibutuhkan */}
    </div>
  );
};

export default Profile;
