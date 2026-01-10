import React, { Suspense, Component, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Html, Float } from "@react-three/drei";
import "../App.css";
import "./ModelViewer.css";

// --- 1. ERROR BOUNDARY ---
class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Gagal memuat model:", error);
  }
  render() {
    if (this.state.hasError) {
      return <PlaceholderModel color={this.props.color} />;
    }
    return this.props.children;
  }
}

// --- 2. PLACEHOLDER (WIREFRAME) ---
const PlaceholderModel = ({ color }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color || "#00ff88"}
          wireframe={true}
          transparent
          opacity={0.8}
          emissive={color || "#00ff88"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// --- 3. MODEL LOADER ---
const Model3D = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

// --- 4. LOADING ---
const Loader = () => {
  return (
    <Html center>
      <div className="loader-text">MEMUAT ASET...</div>
    </Html>
  );
};

// --- MAIN COMPONENT ---
const ModelViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("OVERVIEW");

  const data = location.state?.itemData;

  // --- 5. SMART DATA GENERATOR (LOGIKA PINTAR) ---
  // Fungsi ini melengkapi data yang kurang di database utama
  const extendedData = useMemo(() => {
    if (!data) return null;
    const name = data.name.toUpperCase();

    // Default Values
    let info = {
      scientificName:
        data.name.charAt(0) + data.name.slice(1).toLowerCase() + " sp.",
      location: "Tidak Diketahui",
      period: "Prasejarah",
      size: "Bervariasi",
      weight: "Tidak Diketahui",
      taxonomy: "Animalia > Chordata",
      funFact:
        "Spesimen ini merupakan bagian penting dari sejarah evolusi bumi.",
      diet: "Omnivora",
      sizeCompare: 50, // Persentase bar (relatif thd manusia)
    };

    // LOGIKA SPESIFIK (Bisa ditambah nanti)
    if (name.includes("REX")) {
      info = {
        scientificName: "Tyrannosaurus rex",
        location: "Amerika Utara (Hell Creek)",
        period: "Kapur Akhir (68-66 Juta Tahun Lalu)",
        size: "Panjang 12m, Tinggi 4m",
        weight: "8 - 9 Ton",
        taxonomy: "Theropoda > Tyrannosauridae",
        funFact:
          "Gigi T-Rex seukuran pisang dan bisa meremukkan tulang mangsanya dengan sekali gigitan.",
        diet: "Karnivora (Apex Predator)",
        sizeCompare: 100, // Sangat Besar
      };
    } else if (name.includes("TRILOBITE")) {
      info = {
        scientificName: "Trilobita classis",
        location: "Seluruh Dunia (Laut Purba)",
        period: "Kambrium - Permian (521-252 Juta Tahun Lalu)",
        size: "3 cm - 70 cm",
        weight: "< 1 kg",
        taxonomy: "Arthropoda > Trilobita",
        funFact:
          "Trilobite adalah salah satu hewan pertama yang mengembangkan mata kompleks yang terbuat dari kristal kalsit.",
        diet: "Detritivora (Pemakan sisa)",
        sizeCompare: 10, // Kecil
      };
    } else if (name.includes("VELOCIRAPTOR")) {
      info = {
        scientificName: "Velociraptor mongoliensis",
        location: "Mongolia (Gurun Gobi)",
        period: "Kapur Akhir (75-71 Juta Tahun Lalu)",
        size: "Panjang 2m, Tinggi 0.5m",
        weight: "15 kg (Seukuran Kalkun)",
        taxonomy: "Theropoda > Dromaeosauridae",
        funFact:
          "Tidak seperti di film, Velociraptor asli berbulu lebat dan ukurannya jauh lebih kecil, mirip burung buas.",
        diet: "Karnivora",
        sizeCompare: 30, // Seukuran anjing besar
      };
    } else if (name.includes("AMMONITE")) {
      info = {
        scientificName: "Ammonoidea",
        location: "Lautan Global",
        period: "Devonian - Kapur",
        size: "Diameter 10cm - 2m",
        weight: "Bervariasi",
        taxonomy: "Mollusca > Cephalopoda",
        funFact:
          "Mereka berenang mundur dengan menyemprotkan air, mirip cumi-cumi modern.",
        diet: "Karnivora (Plankton/Krustasea)",
        sizeCompare: 20,
      };
    }
    // ... Logika default fallback tetap jalan untuk hewan lain
    return info;
  }, [data]);

  if (!data) {
    return (
      <div className="viewer-error">
        <h1>AKSES DITOLAK</h1>
        <button onClick={() => navigate("/gallery")}>KEMBALI KE GALERI</button>
      </div>
    );
  }

  const themeColor = data.color || "#00ff88";

  return (
    <div className="viewer-container">
      {/* BACKGROUND 3D */}
      <div className="canvas-wrapper">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <Suspense fallback={<Loader />}>
            <Stage environment="city" intensity={0.5} contactShadow={false}>
              <ModelErrorBoundary color={themeColor}>
                <Model3D path={data.modelPath} />
              </ModelErrorBoundary>
            </Stage>
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={0.5} makeDefault />
        </Canvas>
      </div>

      {/* --- UI LAYER --- */}

      <div className="ui-top-left">
        <button onClick={() => navigate(-1)} className="back-btn">
          ← KEMBALI
        </button>
      </div>

      <div className="ui-bottom-left">
        <div className="item-id" style={{ color: themeColor }}>
          /// ID: {data.name.substring(0, 3)}-{Math.floor(Math.random() * 9999)}
        </div>
        <h1
          className="main-title"
          style={{ WebkitTextStroke: `1px ${themeColor}` }}
        >
          {data.name}
        </h1>
        <div
          style={{
            color: "#aaa",
            letterSpacing: "2px",
            marginTop: "10px",
            fontStyle: "italic",
            fontSize: "1.1rem",
          }}
        >
          {extendedData.scientificName}
        </div>
      </div>

      <div className="ui-right-panel">
        <div className="panel-tabs">
          <button
            className={activeTab === "OVERVIEW" ? "tab active" : "tab"}
            onClick={() => setActiveTab("OVERVIEW")}
            style={
              activeTab === "OVERVIEW"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            RINGKASAN
          </button>
          <button
            className={activeTab === "ANATOMY" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ANATOMY")}
            style={
              activeTab === "ANATOMY"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            DATA FISIK
          </button>
          <button
            className={activeTab === "FUNFACT" ? "tab active" : "tab"}
            onClick={() => setActiveTab("FUNFACT")}
            style={
              activeTab === "FUNFACT"
                ? { borderBottom: `2px solid ${themeColor}`, color: themeColor }
                : {}
            }
          >
            EDUKASI
          </button>
        </div>

        <div className="panel-content">
          {/* TAB 1: RINGKASAN (Ditambah Klasifikasi Ilmiah) */}
          {activeTab === "OVERVIEW" && (
            <>
              <h3 className="panel-heading">KLASIFIKASI & ASAL</h3>
              <p className="panel-desc">{data.desc}</p>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>KATEGORI</label>
                  <span>{data.category}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>TAKSONOMI</label>
                  <span style={{ fontSize: "0.8rem", textTransform: "none" }}>
                    {extendedData.taxonomy}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>LOKASI TEMUAN</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.location}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>STATUS</label>
                  <span style={{ color: "#ff3333" }}>PUNAH</span>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: DATA FISIK (Ditambah Perbandingan Ukuran) */}
          {activeTab === "ANATOMY" && (
            <>
              <h3 className="panel-heading">STATISTIK BIOLOGIS</h3>

              <div className="info-grid">
                <div className="info-item">
                  <label style={{ color: themeColor }}>MAKANAN</label>
                  <span>{extendedData.diet}</span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>DIMENSI</label>
                  <span style={{ fontSize: "0.9rem" }}>
                    {extendedData.size}
                  </span>
                </div>
                <div className="info-item">
                  <label style={{ color: themeColor }}>BERAT</label>
                  <span>{extendedData.weight}</span>
                </div>
              </div>

              {/* VISUALISASI PERBANDINGAN UKURAN (BARU) */}
              <div
                style={{
                  marginTop: "30px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: themeColor,
                    fontWeight: "bold",
                    marginBottom: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  PERBANDINGAN UKURAN
                </div>

                {/* Manusia (Standard 1.7m) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{ width: "60px", fontSize: "0.7rem", color: "#888" }}
                  >
                    MANUSIA
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#333",
                      height: "6px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: "20%",
                        height: "100%",
                        background: "#fff",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Spesimen */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      fontSize: "0.7rem",
                      color: themeColor,
                    }}
                  >
                    SPESIMEN
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#333",
                      height: "6px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: `${extendedData.sizeCompare}%`,
                        height: "100%",
                        background: themeColor,
                        borderRadius: "3px",
                        boxShadow: `0 0 10px ${themeColor}`,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#666",
                    marginTop: "5px",
                    fontStyle: "italic",
                  }}
                >
                  *Skala aproksimasi visual
                </div>
              </div>
            </>
          )}

          {/* TAB 3: EDUKASI (Timeline & Fakta) */}
          {activeTab === "FUNFACT" && (
            <>
              <h3 className="panel-heading">WAWASAN & SEJARAH</h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                {/* TIMELINE (BARU) */}
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: themeColor,
                      fontWeight: "bold",
                      marginBottom: "5px",
                      letterSpacing: "1px",
                    }}
                  >
                    PERIODE WAKTU
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      padding: "8px",
                      borderRadius: "4px",
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: "bold",
                      border: `1px solid ${themeColor}`,
                    }}
                  >
                    {extendedData.period}
                  </div>
                </div>

                {/* TRIVIA BOX */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    padding: "15px",
                    borderLeft: `3px solid ${themeColor}`,
                    marginTop: "5px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Tahukah Kamu?
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#ccc",
                      fontStyle: "italic",
                      lineHeight: "1.6",
                    }}
                  >
                    "{extendedData.funFact}"
                  </div>
                </div>

                {/* Info Teknis Kecil di Bawah */}
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "0.7rem",
                    color: "#555",
                  }}
                >
                  Database v2.4 // {data.modelPath || "No Asset"}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
