// File: src/data/encyclopedia.js

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
            period: "Mesozoikum (Devon - Kapur Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Kerabat purba cumi-cumi dan gurita dengan cangkang spiral yang hidup di laut sekitar 400 hingga 66 juta tahun lalu.",
              full: "Amonit (Ammonite) adalah kelompok moluska laut predator dari kelas Cephalopoda yang telah punah. Mereka memiliki cangkang eksternal berpilin (spiral) yang terbagi menjadi bilik-bilik udara, memungkinkan mereka mengatur daya apung di dalam air.",
              key: "Cangkang Amonit bekerja persis seperti kapal selam! Mereka memompa udara masuk dan keluar dari bilik-bilik cangkangnya.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "1 - 4 Tahun",
              weight: "10g - 100kg",
              size: "Diameter 2cm - 2m",
              discoveryYear: "Zaman Kuno",
              taxonomy: "Mollusca > Cephalopoda",
              stats: { completeness: 95, rarity: 30, value: 80 },
            },
          },
          {
            name: "TURRITELLA",
            modelPath:
              "/models/hewan/invertebrata/gastropods_turritella_terebralis.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/f/f2/Turritella_duplicata_01.jpg",
            period: "Kenozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Siput laut dengan cangkang berbentuk menara runcing yang hidup berkelompok di dasar laut berlumpur.",
              full: "Turritella adalah genus siput laut (gastropoda) berukuran sedang yang memiliki cangkang sangat khas berbentuk kerucut memanjang. Hewan ini hidup dengan membenamkan diri di substrat lunak.",
              key: "Jutaan cangkang Turritella yang mati bisa menumpuk, memadat, dan berubah menjadi batuan permata cantik.",
            },
            details: {
              diet: "Filter Feeder",
              lifespan: "3 - 10 Tahun",
              weight: "< 50 gram",
              size: "Panjang 3 - 15 cm",
              discoveryYear: "1799 (Lamarck)",
              taxonomy: "Mollusca > Gastropoda",
              stats: { completeness: 100, rarity: 20, value: 60 },
            },
          },
          {
            name: "BRACHIOPODA",
            modelPath:
              "/models/hewan/invertebrata/modern_brachiopod_animation.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/e/ea/Liospiriferina_rostrata_Noir.jpg",
            period: "Paleozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Hewan laut bercangkang tangkup atas-bawah yang menempel di dasar laut menggunakan tangkai.",
              full: "Brakiopoda adalah filum hewan laut yang memiliki cangkang keras terdiri dari dua katup (atas dan bawah). Di dalam cangkangnya, terdapat organ khusus bernama lofofor untuk menyaring makanan.",
              key: "Meskipun sekilas mirip kerang, mereka sebenarnya memiliki 'tentakel' khusus bernama lofofor.",
            },
            details: {
              diet: "Filter Feeder",
              lifespan: "3 - 30 Tahun",
              weight: "< 50 gram",
              size: "2 - 10 cm",
              discoveryYear: "1806 (Duméril)",
              taxonomy: "Animalia > Brachiopoda",
              stats: { completeness: 90, rarity: 20, value: 70 },
            },
          },
          {
            name: "PORIFERA",
            modelPath: "/models/hewan/invertebrata/sponge.glb",
            image:
              "https://unsir.ac.id/wp-content/uploads/2024/01/WhatsApp-Image-2023-09-01-at-132835-2748392327.webp",
            period: "Prekambrium - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Hewan multiseluler paling sederhana yang dikenal sebagai spons laut, tubuhnya penuh pori-pori.",
              full: "Porifera (hewan berpori) adalah filum hewan invertebrata yang hidup menetap di dasar perairan. Tubuh mereka terdiri dari jaringan saluran air yang kompleks namun tidak memiliki sistem saraf sejati.",
              key: "Jika tubuh Spons Laut dihancurkan menjadi sel-sel terpisah, sel-sel tersebut bisa menyatu kembali!",
            },
            details: {
              diet: "Filter Feeder",
              lifespan: "Puluhan - Ribuan Tahun",
              weight: "Bervariasi",
              size: "1 cm - 2 meter",
              discoveryYear: "1836 (Grant)",
              taxonomy: "Animalia > Porifera",
              stats: { completeness: 60, rarity: 40, value: 75 },
            },
          },
          {
            name: "STAR FISH",
            modelPath: "/models/hewan/invertebrata/starfish.glb",
            image:
              "https://www.thoughtco.com/thmb/PHXqLrrhvo1wVZGne0ddMCef9E0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg",
            period: "Paleozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Hewan laut berbentuk bintang dengan kulit berduri dan kemampuan regenerasi luar biasa.",
              full: "Bintang laut adalah echinodermata yang memiliki tubuh simetri radial, umumnya dengan lima lengan. Mereka bergerak menggunakan sistem vaskular air.",
              key: "Bintang laut tidak punya otak maupun darah! Mereka memompa air laut ke seluruh tubuhnya.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "Hingga 35 Tahun",
              weight: "0.1 - 5 kg",
              size: "10 - 25 cm",
              discoveryYear: "1758 (Linnaeus)",
              taxonomy: "Echinodermata",
              stats: { completeness: 85, rarity: 25, value: 65 },
            },
          },
          {
            name: "TRILOBITE PROETIDA",
            modelPath: "/models/hewan/invertebrata/trilobite_proetida.glb",
            image:
              "https://alchetron.com/cdn/proetida-95e7880c-345a-4c53-98e4-3039e8fd566-resize-750.jpeg",
            period: "Paleozoikum (Ordovisium - Permian)",
            status: "PUNAH",
            description: {
              short:
                "Kelompok artropoda laut purba terakhir yang bertahan hidup, memiliki tubuh bersegmen tiga lobus.",
              full: "Proetida adalah ordo dari kelas Trilobita yang memiliki rentang hidup paling panjang secara geologis. Mereka memiliki eksoskeleton kalsit yang keras dan mata majemuk yang canggih.",
              key: "Saat merasa terancam bahaya, Trilobita bisa menggulung tubuhnya menjadi bola keras.",
            },
            details: {
              diet: "Detritivora",
              lifespan: "3 - 5 Tahun",
              weight: "< 50 gram",
              size: "2 - 5 cm",
              discoveryYear: "1843",
              taxonomy: "Arthropoda",
              stats: { completeness: 98, rarity: 40, value: 85 },
            },
          },
        ],
      },
      {
        title: "MIKROFOSIL",
        desc: "Sisa-sisa fosil kecil organisme purba.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nanoplankton-fossil-sediment_hg.jpg/330px-Nanoplankton-fossil-sediment_hg.jpg",
        items: [
          {
            name: "GLOBIGERINELLA BULLODES",
            modelPath: "/models/hewan/mikrofosil/globigerina_bulloides.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/39/Gbulloides.jpg",
            period: "Kenozoikum (Miosen - Sekarang)",
            status: "MASIH HIDUP",
            description: {
              short:
                "Plankton mikroskopis bersel tunggal dengan cangkang kapur berpori.",
              full: "Globigerina bulloides adalah spesies foraminifera planktonik yang hidup di zona fotik lautan dunia. Organisme ini membangun cangkang dari kalsium karbonat.",
              key: "Cangkang makhluk mikroskopis ini adalah 'termometer purba' untuk mengetahui suhu laut masa lalu.",
            },
            details: {
              diet: "Omnivora",
              lifespan: "2 - 4 Minggu",
              weight: "Mikroskopis",
              size: "< 1 mm",
              discoveryYear: "1826 (d'Orbigny)",
              taxonomy: "Foraminifera",
              stats: { completeness: 100, rarity: 10, value: 90 },
            },
          },
          {
            name: "GLOBIGERINELLA CALIDA",
            modelPath:
              "/models/hewan/mikrofosil/foraminifera_-_globigerinella_calida.glb",
            image:
              "https://www.mikrotax.org/images/pf_cenozoic/Globigerinidae/Globigerinella/Globigerinella%20calida/Lam%20&%20Leckie%202020%20pl04%2006-7.jpg",
            period: "Kenozoikum (Pleistosen - Sekarang)",
            status: "MASIH HIDUP",
            description: {
              short:
                "Mikroorganisme laut dengan cangkang spiral longgar yang hidup di perairan tropis hangat.",
              full: "Globigerinella calida adalah spesies foraminifera planktonik dengan cangkang yang tersusun secara trochospiral rendah. Kehadiran fosilnya berguna untuk menentukan umur batuan sedimen.",
              key: "Bagi ahli geologi, menemukan fosil ini seperti menemukan peta harta karun menuju cadangan minyak!",
            },
            details: {
              diet: "Heterotrof",
              lifespan: "Beberapa hari",
              weight: "Mikroskopis",
              size: "< 1 mm",
              discoveryYear: "1962 (Parker)",
              taxonomy: "Foraminifera",
              stats: { completeness: 100, rarity: 15, value: 85 },
            },
          },
          {
            name: "RADIOLARIA",
            modelPath: "/models/hewan/mikrofosil/radiolarian_spumellaria.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkP0QwHGroMqOdmKi2audGutfkxosskEjhgA&s",
            period: "Paleozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Protozoa laut mikroskopis yang memiliki kerangka rumit dari kaca (silika).",
              full: "Radiolaria adalah kelompok protozoa (zooplankton) yang memproduksi kerangka mineral rumit dari silika. Kerangkanya menumpuk membentuk 'lumpur radiolaria' di dasar samudra.",
              key: "Kerangka tubuh Radiolaria terbuat dari bahan yang sama dengan kaca jendela rumahmu!",
            },
            details: {
              diet: "Heterotrof",
              lifespan: "2 - 4 Minggu",
              weight: "Mikroskopis",
              size: "0.1 - 0.2 mm",
              discoveryYear: "1834 (Meyen)",
              taxonomy: "Rhizaria",
              stats: { completeness: 95, rarity: 20, value: 80 },
            },
          },
          {
            name: "COCCOLITHOPHORE",
            modelPath: "/models/hewan/mikrofosil/coccolithophore.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Gephyrocapsa_oceanica.jpg/330px-Gephyrocapsa_oceanica.jpg",
            period: "Mesozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Ganggang mikroskopis penghasil kapur yang menutupi tubuhnya dengan lempengan bulat.",
              full: "Coccolithophore adalah fitoplankton uniseluler yang mengelilingi dirinya dengan pelat kalsium karbonat. Mereka adalah produsen utama oksigen di lautan.",
              key: "Tebing kapur raksasa berwarna putih di Inggris terbentuk dari tumpukan miliaran kerangka makhluk ini!",
            },
            details: {
              diet: "Fotosintesis",
              lifespan: "Beberapa hari",
              weight: "Mikroskopis",
              size: "< 0.02 mm",
              discoveryYear: "Abad ke-19",
              taxonomy: "Haptophyta",
              stats: { completeness: 100, rarity: 5, value: 90 },
            },
          },
        ],
      },
      {
        title: "VERTEBRATA",
        desc: "Hewan dengan struktur tulang belakang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAwvphvtkMHKKc2Wp0Biilz60lU6wLmH_IA&s",
        items: [
          {
            name: "ALLOSAURUS",
            modelPath: "/models/hewan/vertebrata/allosaurus.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2015/12/Allosaurus-Images.jpg",
            period: "Mesozoikum (Jura Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Dinosaurus karnivora puncak pada zaman Jura yang berburu mangsa besar.",
              full: "Allosaurus adalah predator theropoda dominan di Amerika Utara selama periode Jura Akhir. Ia memiliki rahang kuat yang bisa membuka lebar dan gigi bergerigi.",
              key: "Allosaurus bisa membuka mulutnya sangat lebar seperti ular untuk menghantam mangsanya!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "25 - 30 Tahun",
              weight: "1.5 - 2 Ton",
              size: "Panjang 8.5 m",
              discoveryYear: "1877 (Marsh)",
              taxonomy: "Dinosauria",
              stats: { completeness: 60, rarity: 70, value: 85 },
            },
          },
          {
            name: "COELACANTH",
            modelPath: "/models/hewan/vertebrata/coelacanth.glb",
            image:
              "https://cdn.grid.id/crop/0x0:0x0/x/photo/2022/12/07/3jpg-20221207021026.jpg",
            period: "Paleozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Ikan purba legendaris yang memiliki sirip berdaging mirip kaki.",
              full: "Coelacanth adalah ikan purba yang memiliki ciri fisik unik tak berubah selama ratusan juta tahun. Penemuan kembali ikan ini pada tahun 1938 menggemparkan dunia sains.",
              key: "Ikan ini punya keunikan aneh: ia memiliki ekor kecil tambahan di tengah ekor utamanya!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "60 - 100 Tahun",
              weight: "90 kg",
              size: "Panjang 2 m",
              discoveryYear: "1938 (Hidup)",
              taxonomy: "Sarcopterygii",
              stats: { completeness: 90, rarity: 95, value: 100 },
            },
          },
          {
            name: "LATIMERIA",
            modelPath: "/models/hewan/vertebrata/dinorauls_latimeria_2.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/9/96/Latimeria_Paris.jpg",
            period: "Kenozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Genus modern dari ikan purba Coelacanth yang masih hidup hingga saat ini.",
              full: "Latimeria adalah satu-satunya genus Coelacanth yang masih bertahan hidup. Struktur tubuhnya mempertahankan ciri-ciri primitif dari nenek moyang ikan.",
              key: "Spesies ini secara mengejutkan ditemukan hidup dan berenang di perairan Manado, Indonesia!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "60 - 100 Tahun",
              weight: "95 kg",
              size: "Panjang 1.8 m",
              discoveryYear: "1997 (Manado)",
              taxonomy: "Sarcopterygii",
              stats: { completeness: 100, rarity: 100, value: 100 },
            },
          },
          {
            name: "KOMODO",
            modelPath: "/models/hewan/vertebrata/komodo_dragon_lizard-v2.glb",
            image:
              "https://samaraliveaboard.com/wp-content/uploads/2025/03/komodo-1-1024x683.jpg",
            period: "Kenozoikum - Sekarang",
            status: "MASIH HIDUP",
            description: {
              short:
                "Kadal terbesar di dunia yang hanya hidup di beberapa pulau di Indonesia.",
              full: "Komodo adalah spesies biawak raksasa endemik Indonesia. Air liur komodo mengandung bakteri dan racun antikoagulan yang mematikan.",
              key: "Komodo bisa melahap mangsa hingga 80% dari berat tubuhnya sendiri dalam sekali makan!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 - 50 Tahun",
              weight: "70 - 90 kg",
              size: "Panjang 3 m",
              discoveryYear: "1910 (Ouwens)",
              taxonomy: "Squamata",
              stats: { completeness: 100, rarity: 80, value: 90 },
            },
          },
          {
            name: "PTERANODON",
            modelPath: "/models/hewan/vertebrata/pteranodon.glb",
            image:
              "https://cdn.mos.cms.futurecdn.net/6vA8wWskCkUgffN9dbQhvh-1200-80.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Reptil terbang raksasa dari zaman Kapur dengan bentang sayap lebar.",
              full: "Pteranodon adalah reptil terbang (Pterosaurus) yang hidup pada periode Kapur Akhir. Mereka tidak memiliki gigi dan menangkap ikan dengan cara menyambar permukaan air.",
              key: "Meskipun bentang sayapnya mencapai 7 meter, Pteranodon sama sekali tidak punya gigi!",
            },
            details: {
              diet: "Piscivora",
              lifespan: "20 - 30 Tahun",
              weight: "20 - 90 kg",
              size: "Sayap 7 m",
              discoveryYear: "1876 (Marsh)",
              taxonomy: "Pterosauria",
              stats: { completeness: 50, rarity: 60, value: 85 },
            },
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/hewan/vertebrata/spinosaurus.glb",
            image:
              "https://st2.depositphotos.com/1042659/6280/i/450/depositphotos_62803335-stock-photo-dinosaur-spinosaurus.jpg",
            period: "Mesozoikum (Kapur Awal)",
            status: "PUNAH",
            description: {
              short:
                "Dinosaurus karnivora terbesar yang pernah ada, hidup semi-akuatik.",
              full: "Spinosaurus adalah predator raksasa yang lebih panjang dari T-Rex, diadaptasi untuk hidup di air. Struktur layar di punggungnya dibentuk oleh duri tulang vertebra yang panjang.",
              key: "Duri-duri tulang di punggung Spinosaurus tingginya bisa mencapai 1,6 meter!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30+ Tahun",
              weight: "7 - 20 Ton",
              size: "Panjang 15 m",
              discoveryYear: "1912 (Stromer)",
              taxonomy: "Dinosauria",
              stats: { completeness: 40, rarity: 85, value: 95 },
            },
          },
          {
            name: "TRICERATOPS",
            modelPath: "/models/hewan/vertebrata/triceratop.glb",
            image:
              "https://cdn.grid.id/crop/0x127:1024x741/x/photo/2025/08/11/triceratops_-_jurapark_baltowjp-20250811114312.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Dinosaurus herbivora berbadan besar dengan tiga tanduk di wajah.",
              full: "Triceratops adalah dinosaurus ceratopsid paling terkenal. Kepalanya dihiasi dua tanduk panjang dan satu tanduk pendek, serta jumbai tulang lebar untuk perlindungan.",
              key: "Triceratops punya sekitar 800 gigi di rahangnya untuk mengunyah tanaman keras!",
            },
            details: {
              diet: "Herbivora",
              lifespan: "40 - 50 Tahun",
              weight: "6 - 12 Ton",
              size: "Panjang 9 m",
              discoveryYear: "1889 (Marsh)",
              taxonomy: "Ceratopsia",
              stats: { completeness: 75, rarity: 40, value: 90 },
            },
          },
          {
            name: "VELOCIRAPTOR",
            modelPath: "/models/geologi/era_mesozoikum/velociraptor.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2015/08/Velociraptor.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus pemangsa kecil, lincah, cerdas, dan berbulu.",
              full: "Velociraptor aslinya jauh lebih kecil daripada di film dan berbulu lebat. Mereka menggunakan cakar sabit di kaki kedua untuk menusuk mangsa.",
              key: "Velociraptor sebenarnya berukuran kecil seperti kalkun dan tubuhnya tertutup bulu.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "10 - 15 Tahun",
              weight: "15 kg",
              size: "Panjang 2 m",
              discoveryYear: "1924 (Osborn)",
              taxonomy: "Dromaeosauridae",
              stats: { completeness: 80, rarity: 60, value: 85 },
            },
          },
        ],
      },
    ],
  },
  FOSSIL: {
    id: "FOSSIL",
    title: "JENIS FOSIL",
    desc: "Klasifikasi batuan & mineral.",
    color: "#ff4d4d",
    image:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjq5vbdeervf2s8bj452nz.jpg",
    subCategories: [
      {
        title: "FOSIL JEJAK",
        desc: "Sisa aktivitas (Trace Fossils).",
        image:
          "https://cdn.grid.id//crop/0x0:0x0/360x240/photo/2018/09/21/1585206829.jpg",
        items: [
          {
            name: "JEJAK T-REX",
            modelPath: "/models/fosil/fosil_jejak/dinosaur_Trex_footprint.glb",
            image:
              "https://www.theprehistoricstore.com/cdn/shop/files/20250117-131441_683x700.jpg?v=1737288879",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short:
                "Cetakan kaki raksasa berjarak tiga dari Tyrannosaurus Rex.",
              full: "Fosil jejak kaki T-Rex memberikan informasi tentang kecepatan dan biomekanik pergerakan. Jejak ini menunjukkan kaki berjari tiga dengan bantalan tumit tebal.",
              key: "Jejak kaki T-Rex menunjukkan ukuran tubuhnya yang masif dan cara berjalannya.",
            },
            details: {
              diet: "N/A",
              lifespan: "N/A",
              weight: "N/A",
              size: "Panjang 1m",
              discoveryYear: "N/A",
              taxonomy: "Ichnofossil",
              stats: { completeness: 80, rarity: 60, value: 70 },
            },
          },
          {
            name: "JEJAK VELOCIRAPTOR",
            modelPath: "/models/fosil/fosil_jejak/footprint_raptor.glb",
            image:
              "https://media.sciencephoto.com/c0/59/74/79/c0597479-800px-wm.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short:
                "Jejak kaki unik dinosaurus raptor yang hanya menampakkan dua jari.",
              full: "Jejak ini mengkonfirmasi bahwa Raptor berjalan hanya menggunakan jari ketiga dan keempat, sementara jari kedua yang memiliki cakar sabit diangkat.",
              key: "Jejak Velociraptor hanya dua jari karena jari bercakarnya selalu diangkat agar tetap tajam.",
            },
            details: {
              diet: "N/A",
              lifespan: "N/A",
              weight: "N/A",
              size: "15 cm",
              discoveryYear: "N/A",
              taxonomy: "Ichnofossil",
              stats: { completeness: 70, rarity: 75, value: 80 },
            },
          },
          {
            name: "JEJAK SAUROPODA",
            modelPath: "/models/fosil/fosil_jejak/sauropod_footprint.glb",
            image:
              "https://cdn.mos.cms.futurecdn.net/G7CKGktH2mtEQbdo7qDsGE-1200-80.jpg",
            period: "Mesozoikum (Jura)",
            status: "PUNAH",
            description: {
              short: "Jejak kaki bulat besar dari dinosaurus leher panjang.",
              full: "Jalur jejak sauropoda sering ditemukan membentang panjang, menunjukkan perilaku sosial hidup berkelompok. Jejak kaki belakang berbentuk bulat lonjong besar.",
              key: "Jejak ini membuktikan bahwa dinosaurus raksasa ini hidup dan bermigrasi secara berkelompok.",
            },
            details: {
              diet: "N/A",
              lifespan: "N/A",
              weight: "N/A",
              size: "Diameter 1m",
              discoveryYear: "N/A",
              taxonomy: "Ichnofossil",
              stats: { completeness: 90, rarity: 50, value: 75 },
            },
          },
        ],
      },
      {
        title: "TERAWETKAN",
        desc: "Organisme utuh dalam amber/es.",
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01jatjwnnhdqartezvr6zbs9p6.jpg",
        items: [
          {
            name: "DAUN PAKIS",
            modelPath: "/models/fosil/fosil_terawetkan/eduf104_fern_leaves.glb",
            image:
              "https://media.istockphoto.com/id/1449549945/id/foto/fosil-daun-pakis-membatu-dan-disorot-di-permukaan-batu.jpg?s=170667a&w=0&k=20&c=jZ_D3VaG8-J2TNJj9yORAvqj6u3BlCZahtxuh-qaNKQ=",
            period: "Paleozoikum (Karbon)",
            status: "PUNAH",
            description: {
              short: "Cetakan karbon daun tumbuhan paku dari zaman Karbon.",
              full: "Fosil daun pakis ini terbentuk melalui karbonisasi. Tumbuhan ini mendominasi hutan rawa purba dan menjadi sumber batu bara saat ini.",
              key: "Bentuk daunnya terawetkan sangat detail hingga pola uratnya masih terlihat jelas.",
            },
            details: {
              diet: "Fotosintesis",
              lifespan: "Musiman",
              weight: "N/A",
              size: "10 - 50 cm",
              discoveryYear: "N/A",
              taxonomy: "Pteridophyta",
              stats: { completeness: 85, rarity: 20, value: 60 },
            },
          },
          {
            name: "KAYU MEMBATU",
            modelPath:
              "/models/fosil/fosil_terawetkan/eduf407_petrified_wood.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatFnYn9XFV7fWOKtr62uj5FpKpRF3nXvU9A&s",
            period: "Zaman Prasejarah",
            status: "PUNAH",
            description: {
              short: "Batang pohon purba yang berubah menjadi batu mineral.",
              full: "Kayu membatu terbentuk ketika materi organik pohon digantikan oleh mineral (silika). Fosil ini sekeras batu namun tetap mempertahankan struktur serat kayu aslinya.",
              key: "Meski telah menjadi batu padat, struktur serat kayunya masih terlihat sangat jelas.",
            },
            details: {
              diet: "N/A",
              lifespan: "Ratusan Tahun",
              weight: "Berat Batu",
              size: "Bervariasi",
              discoveryYear: "N/A",
              taxonomy: "Plantae",
              stats: { completeness: 95, rarity: 40, value: 70 },
            },
          },
          {
            name: "BAYI MAMMOTH LYUBA",
            modelPath:
              "/models/fosil/fosil_terawetkan/lyuba_the_woolly_mammoth_calf.glb",
            image:
              "https://historyofinformation.com/images/Screen_Shot_2020-10-05_at_6.16.10_PM.png",
            period: "Kenozoikum (Pleistosen)",
            status: "PUNAH",
            description: {
              short:
                "Mumi bayi Mammoth berbulu yang terawetkan sempurna di dalam es.",
              full: "Lyuba adalah bayi Mammoth yang meninggal tenggelam di lumpur dan membeku. Kulit, daging, dan organ dalamnya masih utuh setelah 40.000 tahun.",
              key: "Lyuba ditemukan membeku hampir sempurna, bahkan sisa susu ibu masih ada di perutnya!",
            },
            details: {
              diet: "Susu",
              lifespan: "1 Bulan",
              weight: "50 kg",
              size: "85 cm",
              discoveryYear: "2007 (Siberia)",
              taxonomy: "Proboscidea",
              stats: { completeness: 100, rarity: 100, value: 100 },
            },
          },
          {
            name: "NYAMUK AMBER",
            modelPath:
              "/models/fosil/fosil_terawetkan/real-time_refraction_demo_mosquito_in_amber.glb",
            image:
              "https://img.freepik.com/foto-premium/amber-dengan-serangga-prasejarah-yang-diawetkan-nyamuk-dengan-darah-atau-dna-yang-diawetkan-dalam-amber_72932-3415.jpg?w=360",
            period: "Mesozoikum - Kenozoikum",
            status: "PUNAH",
            description: {
              short:
                "Serangga kecil yang terperangkap dalam getah pohon yang mengeras.",
              full: "Amber adalah getah pohon purba yang memfosil. Serangga yang terjebak di dalamnya terawetkan secara 3D dengan sangat sempurna selama jutaan tahun.",
              key: "Fosil ini populer karena teori ekstraksi DNA, meski sangat sulit dilakukan di dunia nyata.",
            },
            details: {
              diet: "Darah",
              lifespan: "Singkat",
              weight: "Mikro",
              size: "1 cm",
              discoveryYear: "N/A",
              taxonomy: "Insecta",
              stats: { completeness: 100, rarity: 80, value: 90 },
            },
          },
        ],
      },
      {
        title: "FOSIL TUBUH",
        desc: "Sisa tulang, gigi, dan cangkang.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZmQmivoRDpHKjtsx_1RgqVpFs_M2N3kwkg&s",
        items: [
          {
            name: "CAKAR VELOCIRAPTOR",
            modelPath:
              "/models/fosil/fosil_tubuh/deinonychus_velociraptor_claw.glb",
            image:
              "https://c02.purpledshub.com/uploads/sites/41/2021/05/GettyImages-589152322-c7ec34e.jpg?webp=1&w=1200",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Fosil cakar kaki melengkung tajam berbentuk sabit.",
              full: "Ini adalah 'Terrible Claw' dari dinosaurus raptor. Cakar ini terletak di jari kaki kedua dan bisa ditarik ke atas saat berjalan agar tetap tajam.",
              key: "Cakar ini digunakan untuk mengunci dan mencabik mangsa, bukan sekadar untuk berjalan.",
            },
            details: {
              diet: "N/A",
              lifespan: "N/A",
              weight: "N/A",
              size: "10 cm",
              discoveryYear: "N/A",
              taxonomy: "Theropoda",
              stats: { completeness: 80, rarity: 70, value: 75 },
            },
          },
          {
            name: "BELEMNITE",
            modelPath:
              "/models/fosil/fosil_tubuh/eduf32_belemnite_phragmacone.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT578NeCt-YGMQs3s-wKKmemcjs75ZXxMLM6g&s",
            period: "Mesozoikum (Jura - Kapur)",
            status: "PUNAH",
            description: {
              short:
                "Bagian dalam cangkang keras berbentuk peluru dari hewan mirip cumi-cumi.",
              full: "Belemnite adalah cephalopoda punah. Fosil 'rostrum' berbentuk peluru ini berfungsi sebagai penyeimbang berat tubuh agar mereka bisa berenang lurus.",
              key: "Fosil ini sangat umum ditemukan dan sering dijadikan petunjuk suhu laut purba.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "2 - 4 Tahun",
              weight: "< 1 kg",
              size: "10 - 50 cm",
              discoveryYear: "Kuno",
              taxonomy: "Cephalopoda",
              stats: { completeness: 90, rarity: 30, value: 65 },
            },
          },
          {
            name: "GIGI MEGALODON",
            modelPath: "/models/fosil/fosil_tubuh/megalodon_teeth_fossil.glb",
            image:
              "https://images-cdn.ubuy.co.id/653fefa96b30650eee069979-genuine-megalodon-shark-tooth-66-8.jpg",
            period: "Kenozoikum (Miosen)",
            status: "PUNAH",
            description: {
              short:
                "Gigi fosil berukuran raksasa, berbentuk segitiga dan bergerigi tajam.",
              full: "Gigi adalah satu-satunya bagian tubuh Megalodon yang umum memfosil karena kerangkanya tulang rawan. Ukurannya bisa mencapai 18 cm.",
              key: "Gigi ini menunjukkan bahwa Megalodon adalah predator dengan gigitan terkuat dalam sejarah.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "N/A",
              weight: "N/A",
              size: "18 cm",
              discoveryYear: "Renaissance",
              taxonomy: "Chondrichthyes",
              stats: { completeness: 95, rarity: 70, value: 90 },
            },
          },
          {
            name: "TENGKORAK SMILODON",
            modelPath:
              "/models/fosil/fosil_tubuh/saber-toothed_tiger_cat_-_ice_age_smilodon.glb",
            image:
              "https://www.activewild.com/wp-content/uploads/2018/11/Smilodon_populator_skull.jpg",
            period: "Kenozoikum (Pleistosen)",
            status: "PUNAH",
            description: {
              short:
                "Tengkorak macan purba dengan gigi taring panjang seperti pedang.",
              full: "Smilodon memiliki rahang yang bisa membuka sangat lebar untuk menancapkan taring panjangnya ke leher mangsa besar.",
              key: "Taring panjangnya digunakan untuk memutus pembuluh darah mangsa dengan presisi.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "N/A",
              weight: "N/A",
              size: "40 cm",
              discoveryYear: "N/A",
              taxonomy: "Mammalia",
              stats: { completeness: 80, rarity: 50, value: 70 },
            },
          },
          {
            name: "TENGKORAK T-REX",
            modelPath:
              "/models/fosil/fosil_tubuh/vertebrate_tyrannosaurus_rex_skull_mote.glb",
            image:
              "https://pict.sindonews.net/dyn/850/pena/news/2022/12/09/768/964301/tengkorak-kepala-trex-dilelang-harga-diperkirakan-tembus-rp311-miliar-zvi.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Tengkorak kokoh dengan rahang kuat dan gigi tebal penghancur tulang.",
              full: "Tengkorak T-Rex sangat lebar di bagian belakang untuk penglihatan binokular. Giginya tebal seperti pasak besi untuk menghancurkan tulang.",
              key: "Struktur tengkorak ini memberikan T-Rex kekuatan gigitan terkuat di daratan.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "N/A",
              weight: "N/A",
              size: "1.5 m",
              discoveryYear: "N/A",
              taxonomy: "Theropoda",
              stats: { completeness: 70, rarity: 80, value: 95 },
            },
          },
          {
            name: "GIGI RUSA RAKSASA",
            modelPath:
              "/models/fosil/fosil_tubuh/giant_deer_teeth_115000_years_old.glb",
            image:
              "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/32/2024/09/25/News-20240919-Czech-Republic-Reindeer-Teeth-565674170.jpg",
            period: "Kenozoikum (Pleistosen)",
            status: "PUNAH",
            description: {
              short: "Fosil gigi geraham besar dari Megaloceros.",
              full: "Gigi ini memiliki permukaan kasar untuk mengunyah rumput keras di padang stepa Zaman Es.",
              key: "Gigi ini menopang tubuh rusa terbesar yang pernah hidup di bumi.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "20 Tahun",
              weight: "N/A",
              size: "8 cm",
              discoveryYear: "N/A",
              taxonomy: "Mammalia",
              stats: { completeness: 90, rarity: 60, value: 70 },
            },
          },
          {
            name: "TENGKORAK TRICERATOPS",
            modelPath: "/models/fosil/fosil_tubuh/triceratops_skull.glb",
            image:
              "https://media.istockphoto.com/id/501154807/id/foto/tengkorak-fosil-triceratops-di-atas-latar-belakang-terisolasi-putih.jpg?s=612x612&w=0&k=20&c=QsPjw2eXUU3bWdahhpITi7TY6dSpYgv7c0ZywCCZLaI=",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short:
                "Tengkorak besar dengan tiga tanduk dan tameng leher lebar.",
              full: "Tengkorak Triceratops adalah salah satu yang terbesar di dunia hewan darat, mencapai panjang 2,5 meter. Tameng lehernya terbuat dari tulang padat.",
              key: "Tengkorak ini sering ditemukan utuh karena strukturnya yang sangat keras.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "N/A",
              weight: "N/A",
              size: "2.5 m",
              discoveryYear: "N/A",
              taxonomy: "Ceratopsia",
              stats: { completeness: 85, rarity: 60, value: 80 },
            },
          },
        ],
      },
    ],
  },
  ERA: {
    id: "ERA",
    title: "ERA ZAMAN",
    desc: "Timeline sejarah bumi.",
    color: "#00d2ff",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKJcJ0g7RSOhIRdbYDMswwF5OvWVdV9MFMVxn4LTqCJWu0DRMCdq1hS7q1VtiNc-YEN6B2FZIr5QI5jUwC-uFlbWqziccpYeI3-XlFge3XoNeqdJE7T_wRoYk1510uvHrQMNmrzDzU6z8/w1200-h630-p-k-no-nu/Deinosuchus+dinoanimals+com.jpg",
    subCategories: [
      {
        title: "PALEOZOIKUM",
        desc: "Ledakan kehidupan laut purba.",
        image:
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1608281832/sp4i8vlqmegorxozvxce.jpg",
        items: [
          {
            name: "ANOMALOCARIS",
            modelPath:
              "/models/geologi/era_paleozoikum/anomalocaris_3d_model.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKirad74kBrQZ5awp0RCliWJ2WObwA64JpA&s",
            period: "Paleozoikum (Kambrium)",
            status: "PUNAH",
            description: {
              short: "Predator laut raksasa pertama di bumi.",
              full: "Anomalocaris ('Udang Aneh') adalah penguasa lautan Kambrium. Memiliki lengan berduri untuk menangkap mangsa.",
              key: "Merupakan predator puncak pertama yang diketahui dalam sejarah evolusi.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "2 - 5 Tahun",
              weight: "5 kg",
              size: "1 m",
              discoveryYear: "1892",
              taxonomy: "Radiodonta",
              stats: { completeness: 40, rarity: 90, value: 100 },
            },
          },
          {
            name: "DIMETRODON",
            modelPath: "/models/geologi/era_paleozoikum/dimetrodon.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Om1KbpIjtaEVrAfucbh-LepeHUcPK6i_Ng&s",
            period: "Paleozoikum (Permian)",
            status: "PUNAH",
            description: {
              short:
                "Reptil purba berkaki empat dengan layar besar di punggungnya.",
              full: "Dimetrodon bukan dinosaurus, melainkan kerabat awal mamalia (Synapsida). Layar punggungnya digunakan untuk mengatur suhu tubuh.",
              key: "Layar besar di punggungnya berfungsi seperti panel surya untuk memanaskan tubuh.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "250 kg",
              size: "4.6 m",
              discoveryYear: "1878",
              taxonomy: "Synapsida",
              stats: { completeness: 85, rarity: 40, value: 85 },
            },
          },
          {
            name: "ARTHROPLEURA",
            modelPath:
              "/models/geologi/era_paleozoikum/dinorauls_arthropleura.glb",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Arthropleura_Reconstruction.jpg/250px-Arthropleura_Reconstruction.jpg",
            period: "Paleozoikum (Karbon)",
            status: "PUNAH",
            description: {
              short:
                "Kelabang raksasa seukuran mobil yang hidup di hutan rawa.",
              full: "Arthropleura adalah artropoda darat terbesar yang pernah ada, mencapai panjang 2,5 meter. Ukurannya dimungkinkan oleh kadar oksigen tinggi masa itu.",
              key: "Invertebrata darat terbesar sepanjang masa!",
            },
            details: {
              diet: "Herbivora",
              lifespan: "10 Tahun",
              weight: "50 kg",
              size: "2.5 m",
              discoveryYear: "1854",
              taxonomy: "Arthropoda",
              stats: { completeness: 50, rarity: 85, value: 90 },
            },
          },
          {
            name: "DUNKLEOSTEUS",
            modelPath:
              "/models/geologi/era_paleozoikum/dinorauls_dunkleosteus_2.glb",
            image:
              "https://it.schleich-s.com/cdn/shop/files/14575_main_v16_TP.jpg?v=1707493289",
            period: "Paleozoikum (Devon)",
            status: "PUNAH",
            description: {
              short:
                "Ikan purba raksasa dengan pelat tulang keras sebagai pengganti gigi.",
              full: "Dunkleosteus adalah ikan berahang perisai. Ia tidak punya gigi, tapi lempengan tulang rahangnya setajam gunting baja.",
              key: "Kekuatan gigitannya setara dengan T-Rex!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "4 Ton",
              size: "6 m",
              discoveryYear: "1873",
              taxonomy: "Placodermi",
              stats: { completeness: 70, rarity: 60, value: 90 },
            },
          },
          {
            name: "MEGANEURA",
            modelPath: "/models/geologi/era_paleozoikum/meganeura.glb",
            image:
              "https://cdn.rri.co.id/berita/Bengkulu/o/1761752463317-01/4wfu9532zwn2g8u.jpeg",
            period: "Paleozoikum (Karbon)",
            status: "PUNAH",
            description: {
              short:
                "Serangga terbang mirip capung dengan bentang sayap raksasa.",
              full: "Meganeura adalah serangga terbesar yang pernah terbang. Bentang sayapnya mencapai 70 cm, memangsa serangga lain di udara.",
              key: "Capung purba ini seukuran burung elang modern.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "2 Tahun",
              weight: "< 1 kg",
              size: "Sayap 70 cm",
              discoveryYear: "1880",
              taxonomy: "Insecta",
              stats: { completeness: 30, rarity: 90, value: 80 },
            },
          },
          {
            name: "TRILOBITE",
            modelPath:
              "/models/geologi/era_paleozoikum/model_of_a_trilobite.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstc9xAVu7a6fljWVLAqaDeOHWyE2U6R88Gg&s",
            period: "Paleozoikum (Kambrium)",
            status: "PUNAH",
            description: {
              short: "Hewan laut purba bersegmen tiga yang sangat sukses.",
              full: "Trilobita mendominasi lautan selama ratusan juta tahun. Mereka memiliki mata majemuk canggih dari kristal kalsit.",
              key: "Salah satu hewan paling sukses dan beragam dalam sejarah bumi.",
            },
            details: {
              diet: "Detritivora",
              lifespan: "5 Tahun",
              weight: "< 1 kg",
              size: "3 - 70 cm",
              discoveryYear: "1771",
              taxonomy: "Arthropoda",
              stats: { completeness: 98, rarity: 10, value: 95 },
            },
          },
          {
            name: "GORGONOPSID",
            modelPath:
              "/models/geologi/era_paleozoikum/primeval_-_gorgonopsid.glb",
            image:
              "https://images.steamusercontent.com/ugc/2057631029505964028/84558350C0569A59A53F5D4189B367D6199A0AC6/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            period: "Paleozoikum (Permian)",
            status: "PUNAH",
            description: {
              short: "Predator darat utama sebelum zaman dinosaurus.",
              full: "Gorgonopsid adalah reptil mirip mamalia yang gesit. Mereka memiliki gigi taring 'saber' besar untuk merobek mangsa.",
              key: "Predator puncak daratan sebelum dinosaurus mengambil alih.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "20 Tahun",
              weight: "300 kg",
              size: "3 m",
              discoveryYear: "1876",
              taxonomy: "Therapsida",
              stats: { completeness: 60, rarity: 75, value: 85 },
            },
          },
        ],
      },
      {
        title: "MESOZOIKUM",
        desc: "Zaman kejayaan reptil raksasa.",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4-f90I9kDih-MYUYrWd2v455oWs2jgyfDQzorbMVDMFESo_Mg515wcwZ4L-XmdqMAuKjtCwKITZnxD4UW9hhowELsPhgc1pOpqpzm3n33Bo4fx2POyFDpiJ51mvACxZ5C0TqveOhuwiNr/s1600/Pengertian+Zaman+Mesozoikum.jpg",
        items: [
          {
            name: "ALLOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/allosaurus.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2015/12/Allosaurus-Images.jpg",
            period: "Mesozoikum (Jura)",
            status: "PUNAH",
            description: {
              short: "Predator puncak zaman Jura yang berburu mangsa besar.",
              full: "Allosaurus adalah predator dominan sebelum T-Rex. Ia menggunakan rahangnya seperti kapak untuk melukai mangsa.",
              key: "Rahangnya bisa membuka sangat lebar untuk menghantam mangsa.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "2 Ton",
              size: "8.5 m",
              discoveryYear: "1877",
              taxonomy: "Theropoda",
              stats: { completeness: 85, rarity: 30, value: 90 },
            },
          },
          {
            name: "BRACHIOSAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/brachiosaurus_altithorax.glb",
            image:
              "https://awsimages.detik.net.id/community/media/visual/2023/12/22/brachiosaurus_169.jpeg?w=1200",
            period: "Mesozoikum (Jura)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus leher panjang dengan postur seperti jerapah.",
              full: "Brachiosaurus memiliki kaki depan yang lebih panjang dari kaki belakang, memudahkannya menjangkau daun tinggi.",
              key: "Salah satu dinosaurus tertinggi yang pernah berjalan di bumi.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "100 Tahun",
              weight: "50 Ton",
              size: "25 m",
              discoveryYear: "1903",
              taxonomy: "Sauropoda",
              stats: { completeness: 70, rarity: 60, value: 95 },
            },
          },
          {
            name: "DILOPHOSAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/dilophosaurus_wetherilli.glb",
            image:
              "https://images.dinosaurpictures.org/127544_Dilophosaurus_Pose_2_000.jpg0c59dae3-f8e3-48a4-a5d4-da8ff572cef3Original_eb0a.jpg",
            period: "Mesozoikum (Jura Awal)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus karnivora lincah dengan dua jambul di kepala.",
              full: "Dilophosaurus dikenali dari jambul ganda di kepalanya. Tidak seperti di film, ia tidak menyemburkan racun.",
              key: "Jambul di kepalanya digunakan untuk pamer, bukan senjata.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "20 Tahun",
              weight: "400 kg",
              size: "7 m",
              discoveryYear: "1954",
              taxonomy: "Theropoda",
              stats: { completeness: 65, rarity: 70, value: 85 },
            },
          },
          {
            name: "ANKYLOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/dino_-_ankylosaurus.glb",
            image:
              "https://images.dinosaurpictures.org/Ankylosaurus/Ankylosaurus_775883a1.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus berbaju zirah dengan gada ekor.",
              full: "Ankylosaurus adalah tank hidup. Tubuhnya dilapisi tulang keras dan ekornya memiliki gada pemukul mematikan.",
              key: "Gada ekornya cukup kuat untuk mematahkan kaki T-Rex.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "30 Tahun",
              weight: "8 Ton",
              size: "8 m",
              discoveryYear: "1908",
              taxonomy: "Ankylosauria",
              stats: { completeness: 80, rarity: 50, value: 85 },
            },
          },
          {
            name: "HERRERASAURUS",
            modelPath:
              "/models/geologi/era_mesozoikum/dinorauls_herrerasaurus.glb",
            image:
              "https://image-service.zaonce.net/eyJidWNrZXQiOiJmcm9udGllci1jbXMiLCJrZXkiOiIyMDIxLTExL2hlcnJlcmFzYXVydXNfMjI2MDA0LnBuZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsiZml0IjoiY29udGFpbiJ9fX0=",
            period: "Mesozoikum (Trias)",
            status: "PUNAH",
            description: {
              short: "Salah satu dinosaurus paling awal.",
              full: "Herrerasaurus adalah predator primitif dari zaman Trias. Ia menunjukkan transisi awal evolusi dinosaurus.",
              key: "Salah satu nenek moyang dinosaurus karnivora.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "15 Tahun",
              weight: "350 kg",
              size: "6 m",
              discoveryYear: "1963",
              taxonomy: "Herrerasauridae",
              stats: { completeness: 50, rarity: 80, value: 95 },
            },
          },
          {
            name: "ICHTHYOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/ichthyosaurus.glb",
            image:
              "https://www.harapanrakyat.com/wp-content/uploads/2022/03/Fosil-Reptil-Laut-Ichthyosaurus-Berusia-160-Tahun-Direknostruksi.jpg",
            period: "Mesozoikum (Jura)",
            status: "PUNAH",
            description: {
              short: "Reptil laut yang menyerupai lumba-lumba.",
              full: "Ichthyosaurus beradaptasi penuh di laut, melahirkan anak di air, dan berenang cepat menangkap ikan.",
              key: "Contoh evolusi konvergen: reptil yang berbentuk seperti ikan.",
            },
            details: {
              diet: "Piscivora",
              lifespan: "25 Tahun",
              weight: "100 kg",
              size: "3 m",
              discoveryYear: "1821",
              taxonomy: "Ichthyosauria",
              stats: { completeness: 90, rarity: 40, value: 80 },
            },
          },
          {
            name: "QUETZALCOATLUS",
            modelPath:
              "/models/geologi/era_mesozoikum/jurassic_world_dominion_quetzalcoatlus.glb",
            image:
              "https://t3.ftcdn.net/jpg/16/05/05/46/360_F_1605054644_xdiTwD4wqv0SmPRmmJnenIj8xdYKhqEe.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Hewan terbang terbesar sepanjang masa.",
              full: "Dengan bentang sayap 11 meter, Quetzalcoatlus adalah raksasa langit. Saat di tanah, tingginya setara jerapah.",
              key: "Makhluk terbang terbesar yang pernah ada di bumi.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "250 kg",
              size: "Sayap 11 m",
              discoveryYear: "1971",
              taxonomy: "Pterosauria",
              stats: { completeness: 40, rarity: 95, value: 100 },
            },
          },
          {
            name: "COELOPHYSIS",
            modelPath: "/models/geologi/era_mesozoikum/jwe2_coelophysis.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2018/11/Coelophysis-Images.jpg",
            period: "Mesozoikum (Trias)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus kecil yang lincah dan ramping.",
              full: "Coelophysis adalah dinosaurus awal yang sukses. Tulangnya berongga membuatnya sangat ringan dan cepat.",
              key: "Fosilnya sering ditemukan berkelompok dalam jumlah banyak.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "15 Tahun",
              weight: "30 kg",
              size: "3 m",
              discoveryYear: "1889",
              taxonomy: "Theropoda",
              stats: { completeness: 85, rarity: 60, value: 75 },
            },
          },
          {
            name: "MOSASAURUS",
            modelPath: "/models/geologi/era_mesozoikum/mosasaurus.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2019/03/Mosasaurus.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Kadal laut raksasa penguasa lautan.",
              full: "Mosasaurus adalah predator puncak lautan Kapur. Ia memiliki rahang tambahan di langit-langit mulut untuk menelan mangsa.",
              key: "Bukan dinosaurus, melainkan kadal laut raksasa.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "50 Tahun",
              weight: "15 Ton",
              size: "18 m",
              discoveryYear: "1764",
              taxonomy: "Squamata",
              stats: { completeness: 70, rarity: 50, value: 85 },
            },
          },
          {
            name: "PARASAUROLOPHUS",
            modelPath:
              "/models/geologi/era_mesozoikum/parasaurolophus_walkeri.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2015/09/Parasaurolophus-Photos.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus dengan jambul tabung panjang di kepala.",
              full: "Jambul di kepalanya berfungsi sebagai ruang resonansi untuk menghasilkan suara keras seperti terompet.",
              key: "Jambulnya digunakan untuk berkomunikasi jarak jauh.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "40 Tahun",
              weight: "4 Ton",
              size: "10 m",
              discoveryYear: "1922",
              taxonomy: "Hadrosauridae",
              stats: { completeness: 80, rarity: 40, value: 75 },
            },
          },
          {
            name: "PTERANODON",
            modelPath: "/models/geologi/era_mesozoikum/pteranodon.glb",
            image:
              "https://cdn.mos.cms.futurecdn.net/6vA8wWskCkUgffN9dbQhvh-1200-80.jpg",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Reptil terbang terkenal dengan jambul kepala.",
              full: "Pteranodon adalah penerbang handal di atas lautan purba. Ia tidak memiliki gigi.",
              key: "Paruhnya panjang dan ompong, sempurna untuk menangkap ikan.",
            },
            details: {
              diet: "Piscivora",
              lifespan: "30 Tahun",
              weight: "90 kg",
              size: "Sayap 7 m",
              discoveryYear: "1876",
              taxonomy: "Pterosauria",
              stats: { completeness: 60, rarity: 30, value: 80 },
            },
          },
          {
            name: "SPINOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/spinosaurus.glb",
            image:
              "https://www.superherotoystore.com/cdn/shop/articles/Blog_Banners_11_e325b223-a705-4062-a83a-66a2548fde70_1600x.jpg?v=1746545950",
            period: "Mesozoikum (Kapur)",
            status: "PUNAH",
            description: {
              short: "Karnivora terbesar, hidup semi-akuatik.",
              full: "Spinosaurus lebih besar dari T-Rex dan menghabiskan banyak waktu di air. Layar punggungnya sangat ikonik.",
              key: "Satu-satunya dinosaurus yang diketahui beradaptasi baik di air.",
            },
            details: {
              diet: "Piscivora/Karnivora",
              lifespan: "30 Tahun",
              weight: "20 Ton",
              size: "15 m",
              discoveryYear: "1912",
              taxonomy: "Theropoda",
              stats: { completeness: 45, rarity: 85, value: 95 },
            },
          },
          {
            name: "STEGOSAURUS",
            modelPath: "/models/geologi/era_mesozoikum/stegosaurus_armatus.glb",
            image:
              "https://dinosaurlady.com/wp-content/uploads/2024/08/4802592-311672367.jpg?w=1200",
            period: "Mesozoikum (Jura)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus dengan lempeng punggung dan duri ekor.",
              full: "Stegosaurus memiliki barisan pelat di punggung dan duri tajam di ekor untuk pertahanan. Otaknya sangat kecil.",
              key: "Duri ekornya (thagomizer) adalah senjata mematikan.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "50 Tahun",
              weight: "7 Ton",
              size: "9 m",
              discoveryYear: "1877",
              taxonomy: "Stegosauria",
              stats: { completeness: 80, rarity: 40, value: 85 },
            },
          },
          {
            name: "T-REX",
            modelPath: "/models/geologi/era_mesozoikum/t-rex.glb",
            image:
              "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/6260/production/_126048152_gettyimages-1363838708.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short: "Raja dinosaurus dengan gigitan terkuat.",
              full: "T-Rex adalah predator puncak yang ditakuti. Gigitannya mampu menghancurkan tulang mangsa dengan mudah.",
              key: "Memiliki kekuatan gigitan terkuat di antara hewan darat yang pernah ada.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "14 Ton",
              size: "13 m",
              discoveryYear: "1902",
              taxonomy: "Theropoda",
              stats: { completeness: 65, rarity: 95, value: 100 },
            },
          },
          {
            name: "TRICERATOPS",
            modelPath: "/models/geologi/era_mesozoikum/triceratop.glb",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zUdVREIP4qVQLBkN257QoEFPhqPYVWk3Gw&s",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short: "Dinosaurus bertanduk tiga yang tangguh.",
              full: "Triceratops menggunakan tanduk dan tameng lehernya untuk bertahan dari serangan T-Rex.",
              key: "Musuh bebuyutan T-Rex di akhir zaman dinosaurus.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "50 Tahun",
              weight: "12 Ton",
              size: "9 m",
              discoveryYear: "1889",
              taxonomy: "Ceratopsia",
              stats: { completeness: 75, rarity: 40, value: 90 },
            },
          },
          {
            name: "VELOCIRAPTOR",
            modelPath: "/models/geologi/era_mesozoikum/velociraptor.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2015/08/Velociraptor.jpg",
            period: "Mesozoikum (Kapur Akhir)",
            status: "PUNAH",
            description: {
              short: "Pemangsa kecil, cerdas, dan berbulu.",
              full: "Velociraptor sebenarnya kecil dan berbulu, tidak seperti di film. Cakar sabitnya digunakan untuk menusuk mangsa.",
              key: "Ukurannya hanya sebesar kalkun, tapi sangat ganas.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "15 Tahun",
              weight: "15 kg",
              size: "2 m",
              discoveryYear: "1924",
              taxonomy: "Dromaeosauridae",
              stats: { completeness: 80, rarity: 60, value: 85 },
            },
          },
        ],
      },
      {
        title: "KENOZOIKUM",
        desc: "Era mamalia dan manusia.",
        image:
          "https://sijai.com/wp-content/uploads/2017/05/Zaman-Neozoikum-perjuanganislami.blogspot.co_.id_.jpg",
        items: [
          {
            name: "PARACERATHERIUM",
            modelPath:
              "/models/geologi/era_kenozoikum/dinorauls_paraceratherium.glb",
            image:
              "https://www.fossilguy.com/gallery/vert/mammal/land/paraceratherium/paraceratherium-statue-5820747273.jpg",
            period: "Kenozoikum (Oligosen)",
            status: "PUNAH",
            description: {
              short: "Mamalia darat terbesar sepanjang masa.",
              full: "Paraceratherium adalah kerabat badak raksasa tanpa cula. Tingginya memungkinkannya memakan daun di puncak pohon.",
              key: "Mamalia darat terbesar yang pernah berjalan di bumi.",
            },
            details: {
              diet: "Herbivora",
              lifespan: "80 Tahun",
              weight: "20 Ton",
              size: "7.4 m",
              discoveryYear: "1911",
              taxonomy: "Mammalia",
              stats: { completeness: 50, rarity: 90, value: 95 },
            },
          },
          {
            name: "MAMMOTH",
            modelPath: "/models/geologi/era_kenozoikum/mammoth.glb",
            image:
              "https://awsimages.detik.net.id/community/media/visual/2022/03/19/replika-mammoth-berbulu.webp?w=1200",
            period: "Kenozoikum (Pleistosen)",
            status: "PUNAH",
            description: {
              short: "Gajah purba berbulu tebal dari Zaman Es.",
              full: "Mammoth beradaptasi dengan iklim dingin berkat bulu tebal dan lapisan lemaknya. Sering diburu oleh manusia purba.",
              key: "Mammoth terakhir masih hidup saat Piramida Mesir sedang dibangun!",
            },
            details: {
              diet: "Herbivora",
              lifespan: "60 Tahun",
              weight: "8 Ton",
              size: "3.4 m",
              discoveryYear: "1799",
              taxonomy: "Mammalia",
              stats: { completeness: 85, rarity: 40, value: 95 },
            },
          },
          {
            name: "TERROR BIRD",
            modelPath:
              "/models/geologi/era_kenozoikum/phorusrhacos_longissimus_terror_bird.glb",
            image:
              "https://imgapps.okezone.com/dynamic/content/2023/04/17/56/2800114/mengenal-terror-bird-burung-predator-purba-yang-sempat-jadi-puncak-rantai-makanan-gzmizQFatb.jpg?w=350",
            period: "Kenozoikum (Miosen)",
            status: "PUNAH",
            description: {
              short: "Burung pemangsa raksasa yang tidak bisa terbang.",
              full: "Terror Bird adalah predator puncak di Amerika Selatan. Paruhnya yang kuat digunakan untuk menghancurkan tulang mangsa.",
              key: "Burung ini menjadi penguasa daratan setelah dinosaurus punah.",
            },
            details: {
              diet: "Karnivora",
              lifespan: "20 Tahun",
              weight: "130 kg",
              size: "2.5 m",
              discoveryYear: "1887",
              taxonomy: "Aves",
              stats: { completeness: 60, rarity: 70, value: 85 },
            },
          },
          {
            name: "SMILODON",
            modelPath: "/models/geologi/era_kenozoikum/smilodon.glb",
            image:
              "https://www.extinctanimals.org/wp-content/uploads/2018/09/Smilodon-Size.jpg",
            period: "Kenozoikum (Pleistosen)",
            status: "PUNAH",
            description: {
              short: "Macan gigi pedang yang legendaris.",
              full: "Smilodon menggunakan gigi taringnya yang sangat panjang untuk melumpuhkan mangsa besar di Zaman Es.",
              key: "Gigi taringnya bisa mencapai panjang 28 cm!",
            },
            details: {
              diet: "Karnivora",
              lifespan: "30 Tahun",
              weight: "280 kg",
              size: "2 m",
              discoveryYear: "1842",
              taxonomy: "Mammalia",
              stats: { completeness: 80, rarity: 50, value: 70 },
            },
          },
        ],
      },
    ],
  },
};
