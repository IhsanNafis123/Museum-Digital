import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./EraGeologi.css";

const EraGeologi = () => {
  const [activeEra, setActiveEra] = useState(0);

  const eras = [
    {
      id: 0,
      name: "PALEOZOIKUM",
      period: "541 - 252 Juta Tahun Lalu",
      desc: "Era kehidupan purba (Ancient Life). Ini adalah masa di mana kehidupan meledak di lautan (Cambrian Explosion). Belum ada dinosaurus. Bumi didominasi oleh invertebrata laut bercangkang keras, ikan purba pertama, dan amfibi yang mulai naik ke darat.",
      creatures: ["Trilobite", "Anomalocaris", "Dunkleosteus", "Dimetrodon"],
      image: "/ImageModels/EraGeologi/foto-paleozoikum.jpg", // Background utama
      color: "#00d2ff",
      // DATA GALERI BARU
      gallery: [
        {
          title: "ANOMALOCARIS",
          img: "/ImageModels/EraGeologi/anomalocaris.jpg",
        },
        {
          title: "EARLY AMPHIBIAN",
          img: "/ImageModels/EraGeologi/amphibian.jpg",
        },
      ],
    },
    {
      id: 1,
      name: "MESOZOIKUM",
      period: "252 - 66 Juta Tahun Lalu",
      desc: "Zaman Kejayaan Reptil. Dinosaurus menguasai daratan, Pterosaurus di langit, dan Reptil Laut di samudra. Era ini terbagi menjadi Trias, Jura, dan Kapur. Berakhir dengan kepunahan massal akibat asteroid.",
      creatures: ["T-Rex", "Velociraptor", "Triceratops", "Pteranodon"],
      image: "/ImageModels/EraGeologi/foto-mesozoikum.jpg",
      color: "#ff4d4d",
      gallery: [
        { title: "TYRANNOSAURUS REX", img: "/ImageModels/EraGeologi/trex.jpg" },
        {
          title: "VELOCIRAPTOR CLAW",
          img: "/ImageModels/EraGeologi/velociraptor.webp",
        },
      ],
    },
    {
      id: 2,
      name: "KENOZOIKUM",
      period: "66 Juta Tahun Lalu - Sekarang",
      desc: "Zaman Kehidupan Baru. Setelah dinosaurus punah, mamalia bangkit menjadi penguasa bumi. Munculnya Megafauna seperti Mammoth dan Smilodon, serta evolusi primata menuju manusia.",
      creatures: ["Woolly Mammoth", "Smilodon", "Megalodon", "Human"],
      image: "/ImageModels/EraGeologi/foto-kenozoikum.jpg",
      color: "#00ff88",
      gallery: [
        { title: "WOOLLY MAMMOTH", img: "/ImageModels/EraGeologi/mammoth.jpg" },
        {
          title: "SABER TOOTH TIGER",
          img: "/ImageModels/EraGeologi/smilodon.webp",
        },
      ],
    },
  ];

  const currentData = eras[activeEra];

  return (
    <div className="era-container fade-in">
      {/* BACKGROUND */}
      <div
        className="era-bg-overlay"
        style={{ backgroundImage: `url(${currentData.image})` }}
      ></div>
      <div className="era-overlay-gradient"></div>

      {/* NAVBAR */}
      <nav className="era-navbar">
        <Link to="/" className="back-link">
          ← KEMBALI KE BERANDA
        </Link>
        <div className="system-status"></div>
      </nav>

      <main className="era-content-wrapper">
        {/* SIDEBAR */}
        <aside className="timeline-sidebar">
          {eras.map((era, index) => (
            <button
              key={era.id}
              className={`timeline-btn ${activeEra === index ? "active" : ""}`}
              onClick={() => setActiveEra(index)}
              style={{ "--era-color": era.color }}
            >
              <span className="dot"></span>
              <span className="label">{era.name}</span>
            </button>
          ))}
        </aside>

        {/* KONTEN UTAMA */}
        <section className="era-info-panel">
          <div className="era-header-text">
            <h4 style={{ color: currentData.color }}>{currentData.period}</h4>
            <h1>{currentData.name}</h1>
          </div>

          <div className="glass-card">
            <h3>DESKRIPSI ERA</h3>
            <p>{currentData.desc}</p>

            <div className="species-list">
              <span>DOMINANT SPECIES:</span>
              <div className="tags">
                {currentData.creatures.map((c, i) => (
                  <div
                    key={i}
                    className="creature-tag"
                    style={{ borderColor: currentData.color }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- BAGIAN GALERI FOTO GRID --- */}
          <div className="era-gallery-section">
            <h3 style={{ color: currentData.color }}>VISUALISASI EKOSISTEM</h3>

            <div className="gallery-grid">
              {/* Foto Utama (Besar) - Mengambil foto background/image utama */}
              <div className="gallery-item main-item">
                <div className="scan-line"></div>
                <img src={currentData.image} alt="Main Visual" />
                <div className="img-caption">SKETSA {currentData.name}</div>
              </div>

              {/* Foto-foto Detail dari Array Gallery */}
              {currentData.gallery.map((item, idx) => (
                <div key={idx} className="gallery-item sub-item">
                  <img src={item.img} alt={item.title} />
                  <div className="img-caption">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EraGeologi;
