// Engine Visualisasi 3D Interaktif menggunakan Three.js
// Membantu pengguna memvisualisasikan vektor, garis, bidang, titik tembus, dan perpotongan bidang

const Visualizer3D = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    gridHelper: null,
    axesHelper: null,
    userObjects: [], // Menyimpan objek-objek geometri yang digambar oleh pengguna
    container: null,

    // Inisialisasi visualizer 3D pada elemen kontainer HTML
    init(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        // Kosongkan kontainer terlebih dahulu (hapus fallback)
        this.container.innerHTML = "";

        // Periksa apakah Three.js dimuat
        if (typeof THREE === 'undefined') {
            this.container.innerHTML = `
                <div class="canvas-fallback">
                    <i data-lucide="alert-triangle" style="color: var(--purple); width:48px; height:48px;"></i>
                    <p style="margin-top:10px;">Gagal memuat Three.js CDN. Pastikan Anda terhubung ke internet.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        // 1. Setup Scene & Kamera (Z-Up untuk kesesuaian buku teks matematika)
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x04030a);

        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        // Atur agar kamera menggunakan sistem koordinat Z-Up
        this.camera.up.set(0, 0, 1);
        this.camera.position.set(12, 10, 8); // Sudut pandang 3D yang bagus

        // 2. Setup Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // 3. Setup Orbit Controls (Zoom, Pan, Rotate)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI; // Bebas rotasi vertikal

        // 4. Setup Pencahayaan
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(10, 15, 20);
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0xa78bfa, 0.4); // Cahaya glow ungu lembut
        dirLight2.position.set(-10, -10, -10);
        this.scene.add(dirLight2);

        // 5. Setup Grid Helper (Lantai XY)
        // THREE.GridHelper secara default terletak pada bidang XZ. Kita rotasikan ke XY.
        this.gridHelper = new THREE.GridHelper(30, 30, 0x3b2d54, 0x1f1936);
        this.gridHelper.rotation.x = Math.PI / 2; 
        this.scene.add(this.gridHelper);

        // 6. Setup Axes Helper (Sumbu Koordinat X, Y, Z kustom)
        this.drawCustomAxes();

        // 7. Event Listener Resize Kontainer
        window.addEventListener('resize', () => this.onWindowResize());

        // 8. Loop Animasi Render
        const animate = () => {
            requestAnimationFrame(animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    },

    // Gambar sumbu kustom dengan warna standar (Merah=X, Hijau=Y, Biru=Z)
    drawCustomAxes() {
        const axisLength = 15;
        
        // Fungsi helper untuk menggambar garis sumbu tebal dan panah
        const drawAxis = (dir, color) => {
            const origin = new THREE.Vector3(0, 0, 0);
            const target = new THREE.Vector3().copy(dir).multiplyScalar(axisLength);
            const arrow = new THREE.ArrowHelper(dir.clone().normalize(), origin, axisLength, color, 0.6, 0.3);
            this.scene.add(arrow);
        };

        // Sumbu X: Merah [1, 0, 0]
        drawAxis(new THREE.Vector3(1, 0, 0), 0xef4444);
        
        // Sumbu Y: Hijau [0, 1, 0] (Dalam Three.js adalah Y, dalam matematika 3D Z-up diposisikan mendatar)
        drawAxis(new THREE.Vector3(0, 1, 0), 0x22c55e);
        
        // Sumbu Z: Biru [0, 0, 1] (Arah vertikal ke atas)
        drawAxis(new THREE.Vector3(0, 0, 1), 0x3b82f6);
    },

    // Bersihkan objek-objek buatan user dari scene
    clear() {
        this.userObjects.forEach(obj => {
            this.scene.remove(obj);
            if (obj.geometry) obj.geometry.dispose();
            if (Array.isArray(obj.material)) {
                obj.material.forEach(m => m.dispose());
            } else if (obj.material) {
                obj.material.dispose();
            }
        });
        this.userObjects = [];
    },

    // Reset Sudut Pandang Kamera ke Default
    resetView() {
        if (!this.camera || !this.controls) return;
        this.camera.position.set(12, 10, 8);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    },

    // Handler ukuran layar berubah
    onWindowResize() {
        if (!this.container || !this.renderer || !this.camera) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    },

    // --- GEOMETRIC SHAPES DRAWERS ---

    // 1. Gambar Titik (Bola)
    drawPoint(pos, color = 0xf59e0b, size = 0.25) {
        if (!this.scene) return;
        const geometry = new THREE.SphereGeometry(size, 16, 16);
        const material = new THREE.MeshPhongMaterial({ 
            color, 
            emissive: color,
            emissiveIntensity: 0.3,
            shininess: 30
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(pos[0], pos[1], pos[2]);
        
        this.scene.add(mesh);
        this.userObjects.push(mesh);
        return mesh;
    },

    // 2. Gambar Vektor (Panah Tebal)
    drawVector(start, dir, color = 0x6366f1) {
        if (!this.scene) return;
        const startVec = new THREE.Vector3(start[0], start[1], start[2]);
        const dirVec = new THREE.Vector3(dir[0], dir[1], dir[2]);
        const length = dirVec.length();
        
        if (length < 1e-5) return;
        
        const arrow = new THREE.ArrowHelper(
            dirVec.clone().normalize(),
            startVec,
            length,
            color,
            0.8, // Panjang kepala panah
            0.28 // Lebar kepala panah
        );
        
        // Membuat garis panah lebih tebal dengan mengganti objek dalamnya secara tidak langsung
        arrow.line.material.linewidth = 3; 
        
        this.scene.add(arrow);
        this.userObjects.push(arrow);
        return arrow;
    },

    // 3. Gambar Garis (Silinder tipis tak terhingga / panjang)
    drawLine(point, direction, color = 0x10b981) {
        if (!this.scene) return;
        const [x0, y0, z0] = point;
        const [dx, dy, dz] = direction;
        
        const dirVec = new THREE.Vector3(dx, dy, dz).normalize();
        
        // Garis digambar sepanjang 100 satuan ke depan dan ke belakang
        const pStart = new THREE.Vector3(x0, y0, z0).addScaledVector(dirVec, -50);
        const pEnd = new THREE.Vector3(x0, y0, z0).addScaledVector(dirVec, 50);
        
        const points = [pStart, pEnd];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ 
            color, 
            linewidth: 3 // Kustomisasi garis tebal (tergantung dukungan driver browser)
        });
        const line = new THREE.Line(geometry, material);
        
        this.scene.add(line);
        this.userObjects.push(line);
        return line;
    },

    // 4. Gambar Bidang (Mesh Kotak Luas)
    drawPlane(normal, d, color = 0xa855f7) {
        if (!this.scene) return;
        
        const normalVec = new THREE.Vector3(normal[0], normal[1], normal[2]);
        const length = normalVec.length();
        if (length < 1e-5) return;
        
        const normalizedNormal = normalVec.clone().normalize();
        
        // Ukuran representasi bidang melayang (luas mesh)
        const planeSize = 24;
        const geometry = new THREE.PlaneGeometry(planeSize, planeSize, 4, 4);
        
        // Posisikan bidang. Titik terdekat dari origin adalah normal_normalized * (d / ||normal||)
        const closestPoint = normalizedNormal.clone().multiplyScalar(d / length);
        
        // Rotasikan bidang agar tegak lurus dengan vektor normal target
        // Default geometri bidang Three.js menghadap ke sumbu Z positif (0, 0, 1)
        const defaultNormal = new THREE.Vector3(0, 0, 1);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(defaultNormal, normalizedNormal);
        
        // Material semi-transparan dua sisi dengan kawat jala (grid) agar terlihat premium
        const material = new THREE.MeshPhongMaterial({
            color,
            transparent: true,
            opacity: 0.45,
            side: THREE.DoubleSide,
            depthWrite: false
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(closestPoint);
        mesh.quaternion.copy(quaternion);
        
        // Tambahkan jala pembatas (wireframe outline) agar kontur kemiringan bidang terlihat jelas
        const wireframeGeom = new THREE.EdgesGeometry(geometry);
        const wireframeMat = new THREE.LineBasicMaterial({ color, linewidth: 1.5, transparent: true, opacity: 0.7 });
        const wireframe = new THREE.LineSegments(wireframeGeom, wireframeMat);
        mesh.add(wireframe);
        
        this.scene.add(mesh);
        this.userObjects.push(mesh);
        return mesh;
    }
};
