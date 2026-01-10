import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./TimelineVideo.css"; // Kita buat CSS-nya di langkah 4

const TimelineVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="video-page-container">
      {/* Tombol Kembali (Pocok Kiri Atas) */}
      <button className="video-back-btn" onClick={() => navigate("/")}>
        ← KEMBALI KE MENU
      </button>

      <div className="video-wrapper">
        <div className="video-header">
          <h1>TIMELINE EVOLUSI BUMI</h1>
          <p>DURASI: 06:39 /// ARSIP VISUAL</p>
        </div>

        {/* SLOT VIDEO */}
        <div className="video-frame">
          <video controls autoPlay className="main-video">
            {/* Pastikan nama file di folder public sesuai */}
            <source src="/timeline-dinasaurus.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>

          {/* Dekorasi Bingkai Futuristik */}
          <div className="frame-corner top-left"></div>
          <div className="frame-corner top-right"></div>
          <div className="frame-corner bottom-left"></div>
          <div className="frame-corner bottom-right"></div>
          <div className="scan-line"></div>
        </div>

        <div className="video-footer">
          <div className="footer-item">SUMBER: DATA GEOLOGI GLOBAL</div>
          <div className="footer-item">STATUS: MEMUTAR</div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVideo;
