export const encyclopediaData = {
  BIO: {
    id: "BIO",
    title: "MAKHLUK HIDUP",
    desc: "Analisis struktur biologis organisme purba.",
    color: "#00ff88",
    image:
      "https://geoenviron.wordpress.com/wp-content/uploads/2011/11/d047d-dinosaurus-7-p.jpg",
    subCategories: [
      {
        title: "INVERTEBRATA",
        desc: "Organisme lunak tanpa tulang belakang.",
        image:
          "https://image.idntimes.com/post/20250608/0.%20Restorasi%20arthropleura.jpg",
        items: [
          {
            name: "AMMONITE",
            modelPath: "/models/hewan/invertebrata/ammonite.glb",
            image:
              "https://lovelymeregis.co.uk/images/gallery/ammonite-creature.jpg",
            desc: "Moluska laut purba bercangkang spiral, kerabat cumi-cumi modern.",
          },
          {
            name: "TURRITELLA",
            modelPath:
              "/models/hewan/invertebrata/gastropods_turritella_terebralis.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Turritella_duplicata_01.jpg",
            desc: "Siput laut bercangkang memanjang yang hidup di dasar laut.",
          },
          {
            name: "TRILOBITE",
            modelPath: "/models/hewan/invertebrata/trilobite_proetida.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/4/4d/Phacops_rana.jpg",
            desc: "Arthropoda laut ikonik yang mendominasi era Paleozoikum.",
          },
          {
            name: "SPONS LAUT",
            modelPath: "/models/hewan/invertebrata/sponge.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/d/d6/Porifera_01.jpg",
            desc: "Hewan multiseluler paling sederhana penyaring air laut.",
          },
          {
            name: "BINTANG LAUT",
            modelPath: "/models/hewan/invertebrata/starfish.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/2/26/Starfish_01.jpg",
            desc: "Echinodermata dengan kemampuan regenerasi luar biasa.",
          },
        ],
      },
      {
        title: "VERTEBRATA",
        desc: "Hewan bertulang belakang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAwvphvtkMHKKc2Wp0Biilz60lU6wLmH_IA&s",
        items: [
          {
            name: "KOMODO",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/18/Komodo-dragon-3.jpg",
            desc: "Kadal terbesar di dunia, endemik Indonesia.",
          },
          {
            name: "COELACANTH",
            modelPath: "/models/hewan/vertebrata/coelacanth.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/2/2a/Latimeria_chalumnae01.jpg",
            desc: "Ikan purba yang dijuluki fosil hidup.",
          },
          {
            name: "PTERANODON",
            modelPath: "/models/hewan/vertebrata/pteranodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/1/1d/Pteranodon.jpg",
            desc: "Reptil terbang besar dari zaman Kapur.",
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/hewan/vertebrata/spinosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f0/Spinosaurus_aegyptiacus_recon.jpg",
            desc: "Predator semi-akuatik terbesar sepanjang sejarah.",
          },
          {
            name: "ALLOSAURUS",
            modelPath: "/models/hewan/vertebrata/allosaurus.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/91/Allosaurus_SDNHM.jpg",
            desc: "Predator puncak zaman Jura.",
          },
        ],
      },
      {
        title: "MIKROFOSIL",
        desc: "Fosil organisme mikroskopis.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nanoplankton-fossil-sediment_hg.jpg/330px-Nanoplankton-fossil-sediment_hg.jpg",
        items: [
          {
            name: "FORAMINIFERA",
            modelPath:
              "/models/hewan/mikrofosil/foraminifera_-_globigerinella_calida.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3f/Foraminifera_hg.jpg",
            desc: "Plankton bercangkang kapur penunjuk iklim purba.",
          },
          {
            name: "RADIOLARIA",
            modelPath: "/models/hewan/mikrofosil/radiolarian_spumellaria.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/86/Haeckel_Radiolaria_31.jpg",
            desc: "Mikrofosil laut berkerangka silika rumit.",
          },
        ],
      },
    ],
  },

  FOSSIL: {
    id: "FOSSIL",
    title: "JENIS FOSIL",
    desc: "Klasifikasi fosil berdasarkan proses terbentuknya.",
    color: "#ff4d4d",
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjq5vbdeervf2s8bj452nz.jpg",
    subCategories: [
      {
        title: "FOSIL JEJAK",
        desc: "Sisa aktivitas organisme purba.",
        image:
          "https://cdn.grid.id//crop/0x0:0x0/360x240/photo/2018/09/21/1585206829.jpg",
        items: [
          {
            name: "JEJAK DINOSAURUS",
            modelPath: "/models/fosil/fosil_jejak/dinosaur_footprint.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/e4/Dinosaur_Footprint_-_geograph.org.uk_-_1018758.jpg",
            desc: "Jejak kaki dinosaurus yang membatu.",
          },
          {
            name: "JEJAK SAUROPODA",
            modelPath: "/models/fosil/fosil_jejak/sauropod_footprint.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Sauropod_tracks_plagne.jpg",
            desc: "Jejak dinosaurus raksasa leher panjang.",
          },
        ],
      },
      {
        title: "TERAWETKAN",
        desc: "Organisme terawetkan dalam es atau amber.",
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjwnnhdqartezvr6zbs9p6.jpg",
        items: [
          {
            name: "NYAMUK AMBER",
            modelPath:
              "/models/fosil/fosil_terawetkan/real-time_refraction_demo_mosquito_in_amber.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/02/Ancient_mosquito.jpg",
            desc: "Serangga purba terjebak dalam getah pohon.",
          },
          {
            name: "MUMI MAMMOTH",
            modelPath:
              "/models/fosil/fosil_terawetkan/lyuba_the_woolly_mammoth_calf.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lyuba_Mammoth_Museum.jpg",
            desc: "Bayi mammoth terawetkan oleh es Siberia.",
          },
          {
            name: "DAUN PAKIS",
            modelPath: "/models/fosil/fosil_terawetkan/eduf104_fern_leaves.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/8/8d/Neuropteris_ovata.jpg",
            desc: "Cetakan karbon daun tanaman purba.",
          },
          {
            name: "KAYU MEMBATU",
            modelPath:
              "/models/fosil/fosil_terawetkan/eduf407_petrified_wood.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/7/77/Petrified_forest_log_2.jpg",
            desc: "Batang pohon yang telah tergantikan mineral.",
          },
        ],
      },
      {
        title: "FOSIL TUBUH",
        desc: "Sisa bagian tubuh organisme.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZmQmivoRDpHKjtsx_1RgqVpFs_M2N3kwkg&s",
        items: [
          {
            name: "TENGKORAK T-REX",
            modelPath:
              "/models/fosil/fosil_tubuh/vertebrate_tyrannosaurus_rex_skull_mote.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/c/c2/Tyrannoskull.jpg",
            desc: "Tengkorak predator terbesar di darat.",
          },
          {
            name: "GIGI MEGALODON",
            modelPath: "/models/fosil/fosil_tubuh/megalodon_teeth_fossil.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3b/Megalodon_tooth_with_great_white_sharks_teeth-3-2.jpg",
            desc: "Gigi hiu purba raksasa.",
          },
          {
            name: "TENGKORAK SMILODON",
            modelPath:
              "/models/fosil/fosil_tubuh/saber-toothed_tiger_cat_-_ice_age_smilodon.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/5/53/Smilodon_fatalis.jpg",
            desc: "Tengkorak macan gigi pedang.",
          },
          {
            name: "TENGKORAK TRICERATOPS",
            modelPath: "/models/fosil/fosil_tubuh/triceratops_skull.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Tric1.JPG",
            desc: "Tengkorak dinosaurus bertanduk tiga.",
          },
          {
            name: "CAKAR RAPTOR",
            modelPath:
              "/models/fosil/fosil_tubuh/deinonychus_velociraptor_claw.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/a/a8/Deinonychus_claw.jpg",
            desc: "Cakar tajam predator kecil yang gesit.",
          },
        ],
      },
    ],
  },
};
