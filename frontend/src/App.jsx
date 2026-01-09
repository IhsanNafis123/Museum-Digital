import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  // Logic untuk animasi scroll (Intersection Observer)
  const observerRef = useRef(null);

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
    ); // Animasi mulai saat 10% elemen terlihat

    const hiddenElements = document.querySelectorAll(".animate-hidden");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* 3. MENU BAR LENGKAP */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-symbol">N</div>
          <span className="logo-text">SHOW MUSEUM</span>
        </div>

        <div className="nav-links">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT SYSTEM
          </a>
          <a href="#gallery" className="nav-link">
            GALLERY
          </a>
          <a href="#virtual-tour" className="nav-link">
            VIRTUAL TOUR
          </a>
        </div>
      </nav>

      {/* 2. VIDEO BRAND & HERO SECTION */}
      <main id="home" className="hero-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/video-background-awal.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="floating-tag">/// SYSTEM READY</div>

          <h1 className="hero-title">
            SELAMAT <br />
            <span className="outline-text">BERKUNJUNG</span>
          </h1>

          <p className="hero-desc">
            Melampaui batas waktu. Rasakan pengalaman sejarah yang hidup kembali
            melalui arsip digital dan rekonstruksi neural. Masa lalu kini
            memiliki masa depan.
          </p>

          <div className="cta-container">
            <button className="explore-btn">MULAI PENJELAJAHAN</button>
            <div className="play-btn-wrapper">
              <div className="play-icon">▶</div>
              <span>WATCH BRAND STORY</span>
            </div>
          </div>
        </div>

        <div className="decorative-line"></div>
        <div className="coordinate-text">LAT -6.2088 // LONG 106.8456</div>
      </main>

      {/* --- BAGIAN BARU: ABOUT SECTION DENGAN ANIMASI --- */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Header Section */}
          <div className="about-header animate-hidden slide-up">
            <h2 className="section-title">
              THE <span className="accent">CORE</span> ARCHITECTURE
            </h2>
            <div className="section-line"></div>
            <p className="section-desc">
              Platform ini bukan sekadar museum. Ini adalah{" "}
              <span className="highlight">Neural Archive</span> yang
              menggabungkan data arkeologi presisi tinggi dengan visualisasi
              imersif.
            </p>
          </div>

          {/* Grid Cards Unik */}
          <div className="features-grid">
            {/* Card 1 */}
            <div
              className="feature-card animate-hidden slide-left"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="card-number">01</div>
              <h3>DIGITAL ARTIFACTS</h3>
              <p>
                Objek sejarah di-scan menggunakan LIDAR resolusi tinggi untuk
                detail tingkat mikroskopik.
              </p>
              <div className="card-decoration"></div>
            </div>

            {/* Card 2 */}
            <div
              className="feature-card animate-hidden slide-up"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="card-number">02</div>
              <h3>IMMERSIVE TIME</h3>
              <p>
                Simulasi lingkungan yang merekonstruksi atmosfer masa lalu
                secara real-time.
              </p>
              <div className="card-decoration"></div>
            </div>

            {/* Card 3 */}
            <div
              className="feature-card animate-hidden slide-right"
              style={{ transitionDelay: "500ms" }}
            >
              <div className="card-number">03</div>
              <h3>GLOBAL ACCESS</h3>
              <p>
                Akses tanpa batas ruang. Terhubung ke database sejarah dari
                seluruh penjuru dunia.
              </p>
              <div className="card-decoration"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
