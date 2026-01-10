import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "./ArtifactView.css";

const ArtifactView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State untuk menyimpan data spesies yang dikirim
  const [data, setData] = useState(null);

  useEffect(() => {
    // Cek apakah ada data yang dikirim lewat navigasi (state)
    if (location.state && location.state.itemData) {
      setData(location.state.itemData);
    } else {
      // Jika user membuka link langsung tanpa klik dari Hub, kembalikan ke Hub
      navigate("/visual-3d");
    }
  }, [location, navigate]);

  // Tampilan loading sementara
  if (!data)
    return <div className="loading-screen">INITIALIZING NEURAL LINK...</div>;

  return (
    <div className="artifact-container">
      {/* Background Grid Animasi */}
      <div className="grid-bg-anim"></div>

      {/* --- UI LAYER (HUD) --- */}
      <div className="hud-layer">
        {/* HEADER */}
        <header className="hud-header">
          <button
            onClick={() => navigate("/visual-3d")}
            className="back-btn-hud"
          >
            &lt; TERMINATE SESSION
          </button>
          <div className="header-info">
            <span className="blink-text">LIVE FEED</span>
            <h1 style={{ color: data.color || "#fff" }}>{data.name}</h1>
          </div>
          <div className="system-time">
            REC: {new Date().toLocaleTimeString()}
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="hud-main">
          {/* PANEL KIRI: DATA SPESIES */}
          <aside className="hud-left-panel">
            <div className="panel-box">
              <h3>TAXONOMY DATA</h3>
              <div className="data-row">
                <span>CATEGORY:</span> {data.category || "UNKNOWN"}
              </div>
              <div className="data-row">
                <span>SUB-TYPE:</span> {data.subCategory || "UNKNOWN"}
              </div>
              <div className="data-row">
                <span>ERA:</span>{" "}
                {data.categoryId === "ERA" ? data.name : "PREHISTORIC"}
              </div>
            </div>

            <div className="panel-box description-box">
              <h3>DESCRIPTION</h3>
              <p>{data.desc}</p>
            </div>
          </aside>

          {/* VISUAL CENTER (MODEL 3D SIMULATION) */}
          <section className="hud-center-view">
            <div className="model-frame" style={{ borderColor: data.color }}>
              {/* Simulasi Model 3D menggunakan Gambar */}
              <div className="scanner-line"></div>
              <img
                src={data.image}
                alt={data.name}
                className="model-proxy-img"
              />

              {/* Dekorasi Target */}
              <div className="target-reticle"></div>
              <div className="target-corner tr"></div>
              <div className="target-corner tl"></div>
              <div className="target-corner br"></div>
              <div className="target-corner bl"></div>
            </div>

            <div className="model-controls">
              <button>ROTATE X</button>
              <button>ROTATE Y</button>
              <button>ZOOM IN</button>
            </div>
          </section>

          {/* PANEL KANAN: STATISTIK */}
          <aside className="hud-right-panel">
            <div className="panel-box">
              <h3>STRUCTURAL ANALYSIS</h3>
              <div className="stat-bar">
                <label>INTEGRITY</label>
                <div className="progress">
                  <div style={{ width: "94%", background: data.color }}></div>
                </div>
              </div>
              <div className="stat-bar">
                <label>COMPLETENESS</label>
                <div className="progress">
                  <div style={{ width: "88%", background: data.color }}></div>
                </div>
              </div>
              <div className="stat-bar">
                <label>RARITY</label>
                <div className="progress">
                  <div style={{ width: "72%", background: data.color }}></div>
                </div>
              </div>
            </div>
            <div className="panel-box system-log">
              <p>System &gt; Loading asset: {data.name}...</p>
              <p>System &gt; Texture mapping... OK</p>
              <p>System &gt; Physics engine... ACTIVE</p>
              <p className="success" style={{ color: data.color }}>
                System &gt; READY.
              </p>
            </div>
          </aside>
        </main>

        {/* FOOTER */}
        <footer className="hud-footer">
          <div className="coord">X: 45.291 Y: 11.002 Z: 0.05</div>
          <div className="status-bar">RENDERING: VULKAN API // 120 FPS</div>
        </footer>
      </div>
    </div>
  );
};

export default ArtifactView;
