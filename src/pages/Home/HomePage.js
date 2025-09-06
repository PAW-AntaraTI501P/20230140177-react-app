// src/pages/Home/HomePage.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  // Ambil data pengguna dari localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Hapus token dan data pengguna dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Arahkan kembali ke halaman login
    navigate("/login");
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.2em",
    margin: "10px", // Mengubah margin agar tombol tidak terlalu rapat
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
  };

  // Gaya untuk tombol Logout agar berbeda
  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: "salmon",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1>Selamat Datang di Aplikasi Todo List</h1>

      {user ? (
        // Tampilan jika pengguna sudah login
        <>
          <p>Selamat Datang, {user.email}!</p>
          <p>Kelola semua tugas Anda dengan mudah dan efisien.</p>
          <div>
            <Link to="/todos" style={buttonStyle}>
              Lihat Daftar Todo
            </Link>
            <button onClick={handleLogout} style={logoutButtonStyle}>
              Logout
            </button>
          </div>
        </>
      ) : (
        // Tampilan jika pengguna belum login
        <>
          <p>Silakan masuk untuk mengelola tugas Anda.</p>
          <div>
            <Link to="/login" style={buttonStyle}>
              Login
            </Link>
            <Link to="/register" style={buttonStyle}>
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;