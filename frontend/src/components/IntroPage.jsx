import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./IntroPage.css"; // Kita buat CSS-nya di langkah 2

const IntroPage = () => {
  const navigate = useNavigate();
  const [textVisible, setTextVisible] = useState(false);

  // Efek animasi teks muncul perlahan
  useEffect(() => {
    setTimeout(() => setTextVisible(true), 300);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-bg"></div>

      <div className={`intro-content ${textVisible ? "fade-in" : ""}`}>
        <div className="intro-logo">/// MUSEUM DIGITAL</div>

        <h1 className="intro-title">
          SELAMAT DATANG DI
          <br />
          ARSIP PRASEJARAH
        </h1>

        <div className="intro-text-box">
          <p>
            Anda akan memasuki gerbang waktu yang menyimpan data kehidupan bumi
            dari jutaan tahun lalu. Platform ini dirancang untuk
            memvisualisasikan makhluk purba, fosil langka, dan evolusi planet
            kita melalui teknologi <strong>3D Interaktif</strong> dan{" "}
            <strong>Data Ilmiah</strong>.
          </p>
          <p>
            Siapkan diri Anda untuk mengeksplorasi kembali masa lalu yang telah
            lama terkubur.
          </p>
        </div>

        <button
          className="explore-btn"
          onClick={() => navigate("/gallery")} // Masuk ke GalleryMain sesuai permintaan
        >
          MULAI JELAJAHI ➔
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
