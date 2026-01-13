import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TimelineVideo.css";

const TimelineVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef(null);

  // Menerima data video yang dikirim dari EraGeologi
  const videoSource = location.state?.videoSrc || "/timeline-dinasaurus.mp4";

  // Efek khusus untuk memastikan video mencoba memutar dengan suara
  useEffect(() => {
    if (videoRef.current) {
      // Set volume ke 100% (1.0)
      videoRef.current.volume = 1.0;

      // Coba play secara paksa
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay dengan suara diblokir browser:", error);
          // Jika diblokir, kita terpaksa mute agar tetap jalan videonya
          // videoRef.current.muted = true;
          // videoRef.current.play();
        });
      }
    }
  }, [videoSource]);

  return (
    <div className="video-page-container">
      {/* TOMBOL KEMBALI */}
      <button className="video-back-btn" onClick={() => navigate(-1)}>
        ← KEMBALI
      </button>

      <div className="timeline-wrapper">
        {/* HEADER */}
        <div className="video-header">
          <h1>TIMELINE EVOLUSI BUMI</h1>
          <p>SUMBER: ARSIP VISUAL /// DATABASE MUSEUM</p>
        </div>

        {/* FRAME VIDEO */}
        <div className="video-frame">
          {/* PERUBAHAN UTAMA DI SINI: */}
          {/* 1. Hapus prop 'muted' */}
          {/* 2. Tambahkan ref={videoRef} */}
          <video
            ref={videoRef}
            key={videoSource}
            className="main-video"
            controls
            autoPlay
            loop
            // muted <--- INI DIHAPUS AGAR ADA SUARA
          >
            <source src={videoSource} type="video/mp4" />
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
            <span>FILE: {videoSource.split("/").pop().toUpperCase()}</span>
            <span>AUDIO: ON / LOOP: ON</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVideo;
