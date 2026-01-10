import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./LandingPage.css";

// UBAH: Terima props onStart & onTimeline
const LandingPage = ({ onStart, onTimeline }) => {
  const observerRef = useRef(null);

  const featuredFossils = [
    {
      id: 1,
      title: "TYRANNOSAURUS REX",
      desc: "Predator puncak era Mesozoikum (Kapur). Fosil tubuh yang menunjukkan struktur rahang mematikan.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ53hI5D7wMRZ4jkuZBqC-AXLvzDL39rnNQ&s",
      accentColor: "#ff4d4d",
    },
    {
      id: 2,
      title: "TRILOBITE",
      desc: "Invertebrata laut ikonik dari era Paleozoikum. Salah satu bentuk kehidupan kompleks paling awal.",
      type: "INVERTEBRATA",
      era: "PALEOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljOpkz5Or31nutRIesJGJQ2ZB2uTjIOogDg&s",
      accentColor: "#00d2ff",
    },
    {
      id: 3,
      title: "WOOLLY MAMMOTH",
      desc: "Mamalia raksasa era Kenozoikum. Sering ditemukan sebagai fosil terawetkan dalam es (Permafrost).",
      type: "MAMALIA",
      era: "KENOZOIKUM",
      image:
        "https://media.sketchfab.com/models/58376e170c8b4507a636b5e45bcce999/thumbnails/ce3b02fdd7194d55b7afb8908312ad98/92491c00087e4d21aa7fb453582a759f.jpeg",
      accentColor: "#ffffff",
    },
    {
      id: 4,
      title: "AMMONITE",
      desc: "Moluska laut purba dengan cangkang spiral. Fosil indeks penting untuk penanggalan lapisan batuan.",
      type: "INVERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdaTwKETvJtqM8A-jfuCswx-cs-Z4QXx84w&s",
      accentColor: "#FF8C00",
    },
    {
      id: 5,
      title: "VELOCIRAPTOR",
      desc: "Dinosaurus teropoda kecil namun cerdas. Fosil jejak (Trace Fossil) sering menunjukkan perilaku berburu.",
      type: "VERTEBRATA",
      era: "MESOZOIKUM",
      image:
        "https://media.sketchfab.com/models/6de8fb7fb8ed4f26844a3556a491cd9c/thumbnails/ef2080f4692342d3aa0f7ef6d7cefd26/14354e2a4cb74e07b312891a5b66375c.jpeg",
      accentColor: "#00ff88",
    },
    {
      id: 6,
      title: "ARCHAEOPTERYX",
      desc: "Fosil transisi penting yang menghubungkan dinosaurus non-unggas dengan burung modern.",
      type: "TRANSISI",
      era: "JURA AKHIR",
      image:
        "https://preview.free3d.com/img/2020/07/2408255575549805854/0a4346v6.jpg",
      accentColor: "#A020F0",
    },
    {
      id: 7,
      title: "MEGALODON TOOTH",
      desc: "Gigi hiu raksasa prasejarah. Sisa fosil paling umum dari predator laut terbesar sepanjang masa.",
      type: "MIKRO/BAGIAN",
      era: "KENOZOIKUM",
      image:
        "https://media.sketchfab.com/models/6a36ac89561d44eb80e983bf2c213c50/thumbnails/ccb504b00fe54341ac36c1f361fb0028/ed63e9ebabec48b9a211982847318d49.jpeg",
      accentColor: "#00CED1",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".animate-hidden");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-symbol">N</div>
          <span className="logo-text">NEXUS PALEO</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <Link to="/era-geologi" className="nav-link">
            ERA GEOLOGI
          </Link>
          <Link to="/gallery" className="nav-link">
            GALLERY
          </Link>
          <Link to="/visual-3d" className="nav-link">
            VISUAL 3D
          </Link>
        </div>
      </nav>

      <main id="home" className="hero-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/background-kedua.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="floating-tag"></div>
          <h1 className="hero-title">
            JEJAK <br />
            <span className="outline-text">PRASEJARAH</span>
          </h1>
          <p className="hero-desc">
            Menghidupkan kembali raksasa masa lalu. Eksplorasi kehidupan dari
            era Paleozoikum hingga Kenozoikum melalui rekonstruksi digital
            presisi tinggi.
          </p>

          <div className="cta-container">
            {/* Tombol 1: Gunakan onClick={onStart} */}
            <button className="explore-btn" onClick={onStart}>
              MULAI EKSKAVASI
            </button>

            {/* Tombol 2: Tetap pakai DIV agar tampilan tidak berubah, tambah onClick & cursor */}
            <div
              className="play-btn-wrapper"
              onClick={onTimeline}
              style={{ cursor: "pointer" }}
            >
              <div className="play-icon">▶</div>
              <span>LIHAT TIMELINE BUMI</span>
            </div>
          </div>
        </div>
        <div className="decorative-line"></div>
        <div className="coordinate-text">
          LAT -6.2088 // LONG 106.8456 // ERA: HOLOCENE
        </div>
      </main>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-header animate-hidden slide-up">
            <h2 className="section-title">
              Klasifikasi <span className="accent">Kehidupan Purba</span>
            </h2>
            <div className="section-line"></div>
            <p className="section-desc">
              Database kami mengkategorikan spesimen berdasarkan{" "}
              <span className="highlight">Era Geologi</span>,
              <span className="highlight">Jenis Fosil</span>, dan{" "}
              <span className="highlight">Kelompok Biologis</span>.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-hidden slide-left">
              <div className="card-number">01</div>
              <h3>KELOMPOK HEWAN</h3>
              <p>
                Vertebrata (Dinosaurus, Mamalia), Invertebrata (Trilobite), dan
                Mikrofosil.
              </p>
              <Link
                to="/gallery"
                state={{ targetCategory: "BIO" }}
                className="read-more-link"
              >
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>

            <div className="feature-card animate-hidden slide-up">
              <div className="card-number">02</div>
              <h3>JENIS FOSIL</h3>
              <p>
                Fosil Tubuh (Tulang/Gigi), Fosil Jejak (Tapak Kaki), dan Fosil
                Terawetkan (Amber/Es).
              </p>
              <Link
                to="/gallery"
                state={{ targetCategory: "FOSSIL" }}
                className="read-more-link"
              >
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>

            <div className="feature-card animate-hidden slide-right">
              <div className="card-number">03</div>
              <h3>ERA GEOLOGI</h3>
              <p>
                Paleozoikum (Awal), Mesozoikum (Dinosaurus), hingga Kenozoikum
                (Mamalia).
              </p>
              <Link to="/era-geologi" className="read-more-link">
                LIHAT SELENGKAPNYA →
              </Link>
              <div className="card-decoration"></div>
            </div>
          </div>

          <div
            className="collection-preview-section animate-hidden slide-up"
            style={{ marginTop: "8rem" }}
          >
            <div className="preview-header">
              <h3>
                KOLEKSI <span className="accent">SPESIMEN</span>
              </h3>
              <div className="scroll-indicator">
                <span style={{ fontSize: "1.2rem" }}>←</span> GESER UNTUK
                MELIHAT
                <span style={{ fontSize: "1.2rem" }}>→</span>
              </div>
            </div>

            <div className="gallery-track manual-scroll">
              {featuredFossils.map((item) => (
                <div key={item.id} className="preview-card elegant-card">
                  <div
                    className="preview-visual"
                    style={{ "--item-color": item.accentColor }}
                  >
                    <div className="item-type-badge">{item.era}</div>
                    <div
                      className="visual-bg"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundColor: item.accentColor,
                      }}
                    ></div>
                    <div className="pattern-overlay"></div>
                    <div className="visual-overlay-gradient"></div>
                    <div className="visual-center-icon">
                      <span className="scan-line"></span>FSL
                    </div>
                  </div>
                  <div className="preview-info">
                    <h4>{item.title}</h4>
                    <small
                      style={{
                        color: item.accentColor,
                        letterSpacing: "1px",
                        marginBottom: "0.5rem",
                        display: "block",
                        fontWeight: "bold",
                      }}
                    >
                      {item.type}
                    </small>
                    <p>{item.desc}</p>
                    <button
                      className="view-detail-btn elegant-btn"
                      onClick={onStart} // Gunakan onStart di sini juga
                    >
                      ANALISIS DATA <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
