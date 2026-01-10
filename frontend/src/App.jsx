import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";

// IMPORT KOMPONEN
import LandingPage from "./components/LandingPage";
import EraGeologi from "./components/EraGeologi";
import GalleryMain from "./components/GalleryMain";
import Visual3DHub from "./components/Visual3DHub";
import ModelViewer from "./components/ModelViewer";
// IMPORT HALAMAN BARU
import IntroPage from "./components/IntroPage"; // <--- BARU
import TimelineVideo from "./components/TimelineVideo"; // <--- BARU

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Rute 1: Landing Page */}
          <Route path="/" element={<HomeWrapper />} />

          {/* Rute 2: Halaman Intro (Selamat Datang) */}
          <Route path="/intro" element={<IntroPage />} />

          {/* Rute 3: Halaman Video Timeline */}
          <Route path="/timeline-watch" element={<TimelineVideo />} />

          {/* Rute Lainnya... */}
          <Route path="/era-geologi" element={<EraGeologi />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/visual-3d" element={<Visual3DHub />} />
          <Route path="/model-viewer" element={<ModelViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

// Update HomeWrapper agar tombol di LandingPage mengarah ke tempat yang benar
const HomeWrapper = () => {
  const navigate = useNavigate();

  return (
    <LandingPage
      // Saat klik "Mulai Ekskavasi", arahkan ke /intro
      onStart={() => navigate("/intro")}
      // Saat klik "Lihat Timeline", arahkan ke /timeline-watch
      onTimeline={() => navigate("/timeline-watch")}
    />
  );
};

export default App;
