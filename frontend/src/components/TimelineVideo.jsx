import React from "react";
import { useNavigate } from "react-router-dom";
import "./TimelineVideo.css";

const TimelineVideo = () => {
  const navigate = useNavigate();

  return (
    <div className="video-page-container">
      {/* TOMBOL KEMBALI */}
      <button className="video-back-btn" onClick={() => navigate("/")}>
        ← KEMBALI KE MENU
      </button>

      <div className="timeline-wrapper">
        {/* HEADER */}
        <div className="video-header">
          <h1>TIMELINE EVOLUSI BUMI</h1>
          <p>SUMBER: KOMPAS.com /// ARSIP VISUAL</p>
        </div>

        {/* FRAME VIDEO */}
        <div className="video-frame">
          <video className="main-video" controls autoPlay>
            <source src="/timeline-dinasaurus.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>

          {/* GARIS SCAN */}
          <div className="scan-line"></div>

          {/* CORNER HUD */}
          <span className="frame-corner top-left"></span>
          <span className="frame-corner top-right"></span>
          <span className="frame-corner bottom-left"></span>
          <span className="frame-corner bottom-right"></span>

          {/* FOOTER DI DALAM FRAME */}
          <div className="video-footer">
            <span>SUMBER: KOMPAS.com</span>
            <span>STATUS: MEMUTAR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVideo;
