// src/pages/Login/LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/auth/login",
                { email, password }
            );

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            alert("Login berhasil!");
            navigate("/");
        } catch (error) {
            console.error("Login gagal:", error.response?.data);
            alert("Login gagal. Periksa kembali email dan password Anda.");
        }
    };

    // 1. Definisikan style objects yang sama seperti halaman lain
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        fontFamily: "sans-serif",
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        backgroundColor: "#3a3f47",
        borderRadius: "10px",
        width: "300px",
    };

    const inputStyle = {
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #555",
        backgroundColor: "#50555e",
        color: "white",
        fontSize: "1em",
    };

    const labelStyle = {
        marginBottom: "5px",
        textAlign: "left",
        width: "100%",
    };

    const buttonStyle = {
        padding: "12px 20px",
        fontSize: "1.1em",
        backgroundColor: "#61dafb",
        color: "#282c34",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        textDecoration: "none",
        marginTop: "10px",
    };

    const linkStyle = {
        color: "#61dafb",
        marginTop: "15px",
        textDecoration: "none",
    };

    // 2. Terapkan style ke elemen JSX
    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
                
                <label style={labelStyle}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                
                <label style={labelStyle}>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
                
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
            <p>
                Belum punya akun? <Link to="/register" style={linkStyle}>Daftar di sini</Link>
            </p>
        </div>
    );
}

export default LoginPage;