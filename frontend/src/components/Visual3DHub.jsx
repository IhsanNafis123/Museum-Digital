import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { encyclopediaData } from "../data/encyclopediaData";
import "../App.css";
import "./Visual3DHub.css";

const Visual3DHub = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);

  const allItems = useMemo(() => {
    let collected = [];
    Object.keys(encyclopediaData).forEach((mainKey) => {
      const mainCategory = encyclopediaData[mainKey];
      mainCategory.subCategories.forEach((sub) => {
        if (sub.items) {
          sub.items.forEach((item) => {
            collected.push({
              ...item,
              category: mainCategory.title,
              categoryId: mainKey,
              subCategory: sub.title,
              color: mainCategory.color,
            });
          });
        }
      });
    });
    return collected;
  }, []);

  const filteredItems =
    filter === "ALL"
      ? allItems
      : allItems.filter((item) => item.categoryId === filter);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleProceed = () => {
    if (selectedItem) {
      navigate("/model-viewer", { state: { itemData: selectedItem } });
    }
  };

  return (
    <div className="hub-container">
      <div className="hub-grid-bg"></div>

      <nav className="hub-nav">
        <Link to="/" className="hub-back-btn">
          ← KEMBALI KE MENU UTAMA
        </Link>
        <div className="hub-title">KOLEKSI MODEL 3D</div>
        <div className="hub-status">SISTEM: ONLINE</div>
      </nav>

      <main className="hub-content">
        <div className="hub-header">
          <h1>PILIH SPESIMEN</h1>
          <div className="filter-bar">
            {["ALL", "BIO", "FOSSIL", "ERA"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "BIO"
                  ? "MAKHLUK HIDUP"
                  : f === "ERA"
                  ? "ERA ZAMAN"
                  : f === "FOSSIL"
                  ? "JENIS FOSIL"
                  : "SEMUA DATA"}
              </button>
            ))}
          </div>
        </div>

        <div className="hub-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="data-chip"
              onClick={() => handleItemClick(item)}
              style={{ "--accent": item.color }}
            >
              <div className="chip-img-box">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="chip-overlay"></div>
              </div>
              <div className="chip-info">
                <div className="chip-cat">{item.subCategory}</div>
                <h3>{item.name}</h3>
                <div className="chip-decor-line"></div>
              </div>
              <div className="corner-decor"></div>
            </div>
          ))}
        </div>
      </main>

      {/* --- MODAL KONFIRMASI (SUDAH BAHASA INDONESIA) --- */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div
              className="modal-header"
              style={{ background: selectedItem.color }}
            >
              Konfirmasi Visualisasi 3D
            </div>
            <div className="modal-body">
              <div className="modal-img">
                <img src={selectedItem.image} alt={selectedItem.name} />
                <div className="scan-anim"></div>
              </div>
              <div className="modal-text">
                <h2>BUKA SIMULASI 3D?</h2>
                <h4>OBJEK: {selectedItem.name}</h4>
                <p>{selectedItem.desc}</p>
                <div className="modal-stats">
                  <span>Status: Siap Ditampilkan</span>
                  {/* Kita sembunyikan path file agar tidak membingungkan orang awam */}
                  <span>Tipe: Model Digital</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setSelectedItem(null)}
              >
                BATAL
              </button>
              <button
                className="launch-btn"
                style={{
                  border: `1px solid ${selectedItem.color}`,
                  color: selectedItem.color,
                }}
                onClick={handleProceed}
              >
                MULAI SIMULASI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visual3DHub;
