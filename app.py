import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

# 1. Tentukan path folder 'dist'
# Karena app.py sekarang ada di root, kita bisa langsung menunjuk ke 'frontend/dist'
base_dir = os.path.dirname(os.path.abspath(__file__))
frontend_dist_folder = os.path.join(base_dir, 'frontend', 'dist')

# 2. Inisialisasi Flask dengan folder statis yang benar
app = Flask(__name__, static_folder=frontend_dist_folder, static_url_path='')
CORS(app)

# 3. Route untuk menyajikan Frontend (React)
@app.route('/')
def serve_frontend():
    # Mengirimkan file index.html jika user membuka halaman utama
    return send_from_directory(app.static_folder, 'index.html')

# 4. Route untuk API Backend
@app.route('/api/data')
def get_data():
    return jsonify({"message": "Halo dari Flask", "status": "connected"})

# 5. Handle 404 untuk React Router (PENTING untuk SPA)
# Jika user refresh di halaman selain home, tetap kembalikan index.html agar React yang menangani
@app.errorhandler(404)
def not_found(e):
    if os.path.exists(os.path.join(app.static_folder, 'index.html')):
        return send_from_directory(app.static_folder, 'index.html')
    return jsonify({"error": "Resource not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)