// Controller Utama Aplikasi - SPA, Navigasi, KaTeX, & Integrasi Kalkulator

document.addEventListener("DOMContentLoaded", () => {
    // --- INISIALISASI UTAMA ---
    lucide.createIcons();
    
    // Dynamic states
    let activeSection = "dashboard";
    let activeSoalATab = "pertanyaan";
    let activeSoalCTab = "pertanyaan";
    let isVisualizerInit = false;

    // --- NAVIGASI SINGLE PAGE APPLICATION (SPA) ---
    const sidebar = document.getElementById("app-sidebar");
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".content-section");
    const sectionTitle = document.getElementById("current-section-title");

    function switchSection(targetId) {
        sections.forEach(sec => {
            sec.classList.remove("active");
            if (sec.id === `sec-${targetId}`) {
                sec.classList.add("active");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("data-target") === targetId) {
                item.classList.add("active");
            }
        });

        activeSection = targetId;

        // Set Title Header
        const titles = {
            "dashboard": "Dashboard Utama",
            "theory-1": "Babak 1: Dasar Vektor",
            "theory-2": "Babak 2: Persamaan Garis 3D",
            "theory-3": "Babak 3: Persamaan Bidang 3D",
            "theory-relations": "Hubungan Geometris",
            "soal-a": "Latihan Soal Topic A: Garis & Bidang",
            "soal-c": "Latihan Soal Topic C: Nilai Eigen",
            "calc-3d": "Kalkulator Geometri 3D Interaktif",
            "calc-eigen": "Kalkulator Nilai Eigen & Diagonalisasi"
        };
        sectionTitle.textContent = titles[targetId] || "Aljabar Linear";

        // Beban konten sesuai pilihan
        if (targetId.startsWith("theory-")) {
            loadTheoryContent(targetId);
        } else if (targetId === "soal-a") {
            initSoalLayout("a");
        } else if (targetId === "soal-c") {
            initSoalLayout("c");
        } else if (targetId === "calc-3d") {
            initCalculator3DInputs();
            if (!isVisualizerInit) {
                Visualizer3D.init("canvas-3d-container");
                isVisualizerInit = true;
            }
            // Triger render ukuran WebGL agar pas dengan box kontainer yang baru dibuka
            setTimeout(() => {
                Visualizer3D.onWindowResize();
                Visualizer3D.resetView();
                // Jalankan hitung default agar visualizer langsung berisi data awal dan tidak kosong
                runCalculator3D();
            }, 150);
        } else if (targetId === "calc-eigen") {
            initEigenMatrixGrid();
        }

        // Tutup sidebar di perangkat mobile setelah navigasi
        if (window.innerWidth <= 850) {
            sidebar.classList.remove("open");
        }
    }

    // Bind sidebar buttons
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            switchSection(item.getAttribute("data-target"));
        });
    });

    // Toggle sidebar on mobile
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("open");
        });
    }

    // Tutup mobile sidebar saat klik di luar
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 850 && sidebar.classList.contains("open")) {
            if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove("open");
            }
        }
    });

    // Bind welcome redirects
    document.querySelectorAll(".btn-nav-redirect").forEach(btn => {
        btn.addEventListener("click", () => {
            switchSection(btn.getAttribute("data-redirect"));
        });
    });

    // Helper KaTeX auto render
    function triggerKaTeX(element) {
        if (typeof renderMathInElement !== "undefined") {
            renderMathInElement(element, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false},
                    {left: "\\[", right: "\\]", display: true},
                    {left: "\\(", right: "\\)", display: false}
                ],
                throwOnError: false
            });
        }
    }

    // --- MODUL THEORY VIEWER ---
    function loadTheoryContent(theoryId) {
        const container = document.getElementById(`${theoryId}-content`);
        const data = theoryContent[theoryId];
        if (!container || !data) return;

        container.innerHTML = data.content;
        lucide.createIcons();
        triggerKaTeX(container);

        // Bind next/prev buttons inside theory cards
        const nextBtn = container.querySelector(".btn-next-theory");
        const prevBtn = container.querySelector(".btn-prev-theory");

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                switchSection(nextBtn.getAttribute("data-next"));
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                switchSection(prevBtn.getAttribute("data-prev"));
            });
        }

        // Bind redirect buttons inside theory
        container.querySelectorAll(".btn-nav-redirect").forEach(btn => {
            btn.addEventListener("click", () => {
                switchSection(btn.getAttribute("data-redirect"));
            });
        });
    }

    // --- MODUL LATIHAN SOAL (TOPIC A & C) ---
    let currentSoalAIndex = 0;
    let currentSoalCIndex = 0;

    function initSoalLayout(topic) {
        const listSidebar = document.getElementById(`soal-${topic}-list`);
        if (!listSidebar) return;

        // Kosongkan list
        listSidebar.innerHTML = "";

        const totalSoal = topic === "a" ? 9 : 9; // 0 sampai 8 = 9 soal
        
        for (let i = 0; i < totalSoal; i++) {
            const btn = document.createElement("button");
            btn.className = `soal-btn ${i === 0 ? 'active' : ''}`;
            btn.textContent = topic === "a" ? `Soal ${i}` : `Soal C${i}`;
            btn.addEventListener("click", () => {
                // Set active class
                listSidebar.querySelectorAll(".soal-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                
                if (topic === "a") {
                    currentSoalAIndex = i;
                    loadSoalContent("a", i);
                } else {
                    currentSoalCIndex = i;
                    loadSoalContent("c", i);
                }
            });
            listSidebar.appendChild(btn);
        }

        // Load soal pertama
        loadSoalContent(topic, 0);
        setupTabListeners(topic);
    }

    function loadSoalContent(topic, index) {
        const key = `soal-${topic}-${index}`;
        const data = solutionsData[`soal-${topic}`]?.[key];
        
        const titleEl = document.getElementById(`soal-${topic}-title`);
        const tabPertanyaan = document.getElementById(`soal-${topic}-tab-pertanyaan`);
        const tabKonsep = document.getElementById(`soal-${topic}-tab-konsep`);
        const tabDiketahui = document.getElementById(`soal-${topic}-tab-diketahui`);
        const tabJawaban = document.getElementById(`soal-${topic}-tab-jawaban`);

        if (!data) return;

        titleEl.textContent = data.title;
        tabPertanyaan.innerHTML = data.pertanyaan;
        tabKonsep.innerHTML = data.konsep;
        tabDiketahui.innerHTML = data.diketahui;
        tabJawaban.innerHTML = data.jawaban;

        // Tambahkan tombol visualisasi 3D dinamis untuk Topic A
        if (topic === "a") {
            const btnContainer = document.createElement("div");
            btnContainer.className = "mt-4 pt-3";
            btnContainer.style.borderTop = "1px dashed rgba(255, 255, 255, 0.1)";
            
            const btn = document.createElement("button");
            btn.className = "btn btn-primary btn-sm";
            btn.innerHTML = `<i data-lucide="eye"></i> Visualisasikan Soal Ini dalam 3D`;
            btn.addEventListener("click", () => {
                visualizeExercisePreset(index);
            });
            btnContainer.appendChild(btn);
            tabPertanyaan.appendChild(btnContainer);
        }

        // Ambil container soal dan render matematika
        const bodyEl = document.getElementById(`soal-${topic}-body`);
        lucide.createIcons();
        triggerKaTeX(bodyEl);
    }

    function setupTabListeners(topic) {
        const tabsContainer = document.getElementById(`soal-${topic}-tabs`);
        if (!tabsContainer) return;

        tabsContainer.querySelectorAll(".tab-btn").forEach(btn => {
            // Hapus event listener lama
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener("click", () => {
                tabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
                newBtn.classList.add("active");

                const targetTab = newBtn.getAttribute("data-tab");
                const bodyContainer = document.getElementById(`soal-${topic}-body`);
                
                bodyContainer.querySelectorAll(".tab-content").forEach(content => {
                    content.classList.remove("active");
                    if (content.id === `soal-${topic}-tab-${targetTab}`) {
                        content.classList.add("active");
                    }
                });

                if (topic === "a") activeSoalATab = targetTab;
                else activeSoalCTab = targetTab;
            });
        });
    }

    // --- MODUL KALKULATOR 3D (GEOMETRI) ---
    const calc3dOpSelect = document.getElementById("calc-3d-operation");
    const calc3dInputs = document.getElementById("calc-3d-inputs");
    const btnCalculate3d = document.getElementById("btn-calculate-3d");
    const btnResetView = document.getElementById("btn-reset-view");

    if (calc3dOpSelect) {
        calc3dOpSelect.addEventListener("change", () => {
            initCalculator3DInputs();
        });
    }

    function initCalculator3DInputs() {
        const op = calc3dOpSelect.value;
        let html = "";

        if (op === "plane-point-normal") {
            html = `
                <div class="input-group">
                    <span class="input-label">Titik $P(x_0, y_0, z_0)$</span>
                    <div class="vector-inputs">
                        <input type="number" id="p-x" class="form-control" value="9" placeholder="x">
                        <input type="number" id="p-y" class="form-control" value="3" placeholder="y">
                        <input type="number" id="p-z" class="form-control" value="2" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Vektor Normal $\\vec{n} = [a, b, c]$</span>
                    <div class="vector-inputs">
                        <input type="number" id="n-a" class="form-control" value="4" placeholder="a">
                        <input type="number" id="n-b" class="form-control" value="7" placeholder="b">
                        <input type="number" id="n-c" class="form-control" value="8" placeholder="c">
                    </div>
                </div>
            `;
        } else if (op === "plane-three-points") {
            html = `
                <div class="input-group">
                    <span class="input-label">Titik $P_1(x_1, y_1, z_1)$</span>
                    <div class="vector-inputs">
                        <input type="number" id="p1-x" class="form-control" value="2" placeholder="x">
                        <input type="number" id="p1-y" class="form-control" value="-1" placeholder="y">
                        <input type="number" id="p1-z" class="form-control" value="4" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Titik $P_2(x_2, y_2, z_2)$</span>
                    <div class="vector-inputs">
                        <input type="number" id="p2-x" class="form-control" value="-3" placeholder="x">
                        <input type="number" id="p2-y" class="form-control" value="5" placeholder="y">
                        <input type="number" id="p2-z" class="form-control" value="-1" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Titik $P_3(x_3, y_3, z_3)$</span>
                    <div class="vector-inputs">
                        <input type="number" id="p3-x" class="form-control" value="1" placeholder="x">
                        <input type="number" id="p3-y" class="form-control" value="2" placeholder="y">
                        <input type="number" id="p3-z" class="form-control" value="-3" placeholder="z">
                    </div>
                </div>
            `;
        } else if (op === "line-point-direction") {
            html = `
                <div class="input-group">
                    <span class="input-label">Titik $P_0(x_0, y_0, z_0)$</span>
                    <div class="vector-inputs">
                        <input type="number" id="lp-x" class="form-control" value="1" placeholder="x">
                        <input type="number" id="lp-y" class="form-control" value="-2" placeholder="y">
                        <input type="number" id="lp-z" class="form-control" value="3" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Vektor Arah $\\vec{v} = [a, b, c]$</span>
                    <div class="vector-inputs">
                        <input type="number" id="ld-a" class="form-control" value="3" placeholder="a">
                        <input type="number" id="ld-b" class="form-control" value="-1" placeholder="b">
                        <input type="number" id="ld-c" class="form-control" value="5" placeholder="c">
                    </div>
                </div>
            `;
        } else if (op === "line-two-points") {
            html = `
                <div class="input-group">
                    <span class="input-label">Titik Pertama $P_1$</span>
                    <div class="vector-inputs">
                        <input type="number" id="lp1-x" class="form-control" value="-2" placeholder="x">
                        <input type="number" id="lp1-y" class="form-control" value="-1" placeholder="y">
                        <input type="number" id="lp1-z" class="form-control" value="4" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Titik Kedua $P_2$</span>
                    <div class="vector-inputs">
                        <input type="number" id="lp2-x" class="form-control" value="0" placeholder="x">
                        <input type="number" id="lp2-y" class="form-control" value="3" placeholder="y">
                        <input type="number" id="lp2-z" class="form-control" value="4" placeholder="z">
                    </div>
                </div>
            `;
        } else if (op === "line-plane-intersection") {
            html = `
                <div class="input-group">
                    <span class="input-label">Titik Garis $P_0$</span>
                    <div class="vector-inputs">
                        <input type="number" id="ilp-x" class="form-control" value="3" placeholder="x">
                        <input type="number" id="ilp-y" class="form-control" value="1" placeholder="y">
                        <input type="number" id="ilp-z" class="form-control" value="7" placeholder="z">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Arah Garis $\\vec{v}$</span>
                    <div class="vector-inputs">
                        <input type="number" id="ild-a" class="form-control" value="2" placeholder="a">
                        <input type="number" id="ild-b" class="form-control" value="-1" placeholder="b">
                        <input type="number" id="ild-c" class="form-control" value="3" placeholder="c">
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-label">Normal Bidang $\\vec{n}_p$</span>
                    <div class="vector-inputs">
                        <input type="number" id="ipn-a" class="form-control" value="3" placeholder="a">
                        <input type="number" id="ipn-b" class="form-control" value="4" placeholder="b">
                        <input type="number" id="ipn-c" class="form-control" value="5" placeholder="c">
                    </div>
                </div>
                <div class="input-group">
                    <label for="ipn-d" class="input-label">Konstanta Bidang ($d$)</label>
                    <input type="number" id="ipn-d" class="form-control" value="31" placeholder="d">
                </div>
            `;
        } else if (op === "two-planes-relation") {
            html = `
                <div class="input-group">
                    <span class="input-label">Normal Bidang 1 $\\vec{n}_1$</span>
                    <div class="vector-inputs">
                        <input type="number" id="n1-a" class="form-control" value="1" placeholder="a">
                        <input type="number" id="n1-b" class="form-control" value="-2" placeholder="b">
                        <input type="number" id="n1-c" class="form-control" value="3" placeholder="c">
                    </div>
                </div>
                <div class="input-group">
                    <label for="d1" class="input-label">Konstanta Bidang 1 ($d_1$)</label>
                    <input type="number" id="d1" class="form-control" value="1" placeholder="d1">
                </div>
                <div class="input-group">
                    <span class="input-label">Normal Bidang 2 $\\vec{n}_2$</span>
                    <div class="vector-inputs">
                        <input type="number" id="n2-a" class="form-control" value="1" placeholder="a">
                        <input type="number" id="n2-b" class="form-control" value="1" placeholder="b">
                        <input type="number" id="n2-c" class="form-control" value="1" placeholder="c">
                    </div>
                </div>
                <div class="input-group">
                    <label for="d2" class="input-label">Konstanta Bidang 2 ($d_2$)</label>
                    <input type="number" id="d2" class="form-control" value="1" placeholder="d2">
                </div>
            `;
        }

        calc3dInputs.innerHTML = html;
        triggerKaTeX(calc3dInputs);
    }

    if (btnCalculate3d) {
        btnCalculate3d.addEventListener("click", () => {
            runCalculator3D();
        });
    }

    if (btnResetView) {
        btnResetView.addEventListener("click", () => {
            Visualizer3D.resetView();
        });
    }

    function runCalculator3D() {
        const op = calc3dOpSelect.value;
        const outputEl = document.getElementById("calc-3d-output");
        
        // Bersihkan visualisasi 3D
        Visualizer3D.clear();

        try {
            if (op === "plane-point-normal") {
                const px = parseFloat(document.getElementById("p-x").value) || 0;
                const py = parseFloat(document.getElementById("p-y").value) || 0;
                const pz = parseFloat(document.getElementById("p-z").value) || 0;
                
                const na = parseFloat(document.getElementById("n-a").value) || 0;
                const nb = parseFloat(document.getElementById("n-b").value) || 0;
                const nc = parseFloat(document.getElementById("n-c").value) || 0;

                const res = LinearAlgebraCalc.solvePlanePointNormal([px, py, pz], [na, nb, nc]);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi
                Visualizer3D.drawPlane([na, nb, nc], res.d, 0x8b5cf6);
                Visualizer3D.drawPoint([px, py, pz], 0xf59e0b);
                Visualizer3D.drawVector([px, py, pz], [na, nb, nc], 0x6366f1);
                
            } else if (op === "plane-three-points") {
                const p1 = [
                    parseFloat(document.getElementById("p1-x").value) || 0,
                    parseFloat(document.getElementById("p1-y").value) || 0,
                    parseFloat(document.getElementById("p1-z").value) || 0
                ];
                const p2 = [
                    parseFloat(document.getElementById("p2-x").value) || 0,
                    parseFloat(document.getElementById("p2-y").value) || 0,
                    parseFloat(document.getElementById("p2-z").value) || 0
                ];
                const p3 = [
                    parseFloat(document.getElementById("p3-x").value) || 0,
                    parseFloat(document.getElementById("p3-y").value) || 0,
                    parseFloat(document.getElementById("p3-z").value) || 0
                ];

                const res = LinearAlgebraCalc.solvePlaneThreePoints(p1, p2, p3);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi
                Visualizer3D.drawPlane(res.normal, res.d, 0x8b5cf6);
                Visualizer3D.drawPoint(p1, 0xef4444);
                Visualizer3D.drawPoint(p2, 0x22c55e);
                Visualizer3D.drawPoint(p3, 0x3b82f6);
                // Vektor u & v
                const u = [p2[0]-p1[0], p2[1]-p1[1], p2[2]-p1[2]];
                const v = [p3[0]-p1[0], p3[1]-p1[1], p3[2]-p1[2]];
                Visualizer3D.drawVector(p1, u, 0xf59e0b);
                Visualizer3D.drawVector(p1, v, 0x10b981);
                Visualizer3D.drawVector(p1, res.normal, 0x6366f1);

            } else if (op === "line-point-direction") {
                const px = parseFloat(document.getElementById("lp-x").value) || 0;
                const py = parseFloat(document.getElementById("lp-y").value) || 0;
                const pz = parseFloat(document.getElementById("lp-z").value) || 0;
                
                const da = parseFloat(document.getElementById("ld-a").value) || 0;
                const db = parseFloat(document.getElementById("ld-b").value) || 0;
                const dc = parseFloat(document.getElementById("ld-c").value) || 0;

                const res = LinearAlgebraCalc.solveLinePointDirection([px, py, pz], [da, db, dc]);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi
                Visualizer3D.drawLine([px, py, pz], [da, db, dc], 0x10b981);
                Visualizer3D.drawPoint([px, py, pz], 0xef4444);
                Visualizer3D.drawVector([px, py, pz], [da, db, dc], 0x6366f1);

            } else if (op === "line-two-points") {
                const p1 = [
                    parseFloat(document.getElementById("lp1-x").value) || 0,
                    parseFloat(document.getElementById("lp1-y").value) || 0,
                    parseFloat(document.getElementById("lp1-z").value) || 0
                ];
                const p2 = [
                    parseFloat(document.getElementById("lp2-x").value) || 0,
                    parseFloat(document.getElementById("lp2-y").value) || 0,
                    parseFloat(document.getElementById("lp2-z").value) || 0
                ];

                const res = LinearAlgebraCalc.solveLineTwoPoints(p1, p2);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi
                Visualizer3D.drawLine(p1, res.direction, 0x10b981);
                Visualizer3D.drawPoint(p1, 0xef4444);
                Visualizer3D.drawPoint(p2, 0x3b82f6);
                Visualizer3D.drawVector(p1, res.direction, 0x6366f1);

            } else if (op === "line-plane-intersection") {
                const lPoint = [
                    parseFloat(document.getElementById("ilp-x").value) || 0,
                    parseFloat(document.getElementById("ilp-y").value) || 0,
                    parseFloat(document.getElementById("ilp-z").value) || 0
                ];
                const lDir = [
                    parseFloat(document.getElementById("ild-a").value) || 0,
                    parseFloat(document.getElementById("ild-b").value) || 0,
                    parseFloat(document.getElementById("ild-c").value) || 0
                ];
                const pNormal = [
                    parseFloat(document.getElementById("ipn-a").value) || 0,
                    parseFloat(document.getElementById("ipn-b").value) || 0,
                    parseFloat(document.getElementById("ipn-c").value) || 0
                ];
                const pD = parseFloat(document.getElementById("ipn-d").value) || 0;

                const res = LinearAlgebraCalc.solveLinePlaneIntersection(lPoint, lDir, pNormal, pD);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi
                Visualizer3D.drawPlane(pNormal, pD, 0x8b5cf6);
                Visualizer3D.drawLine(lPoint, lDir, 0x10b981);
                Visualizer3D.drawPoint(lPoint, 0xef4444);
                
                if (res.type === "intersection") {
                    Visualizer3D.drawPoint(res.point, 0xf59e0b, 0.35); // Titik potong besar kuning
                }

            } else if (op === "two-planes-relation") {
                const n1 = [
                    parseFloat(document.getElementById("n1-a").value) || 0,
                    parseFloat(document.getElementById("n1-b").value) || 0,
                    parseFloat(document.getElementById("n1-c").value) || 0
                ];
                const d1 = parseFloat(document.getElementById("d1").value) || 0;
                
                const n2 = [
                    parseFloat(document.getElementById("n2-a").value) || 0,
                    parseFloat(document.getElementById("n2-b").value) || 0,
                    parseFloat(document.getElementById("n2-c").value) || 0
                ];
                const d2 = parseFloat(document.getElementById("d2").value) || 0;

                const res = LinearAlgebraCalc.solveTwoPlanesRelation(n1, d1, n2, d2);
                outputEl.innerHTML = res.stepsHtml;

                // Visualisasi kedua bidang
                Visualizer3D.drawPlane(n1, d1, 0x8b5cf6); // Bidang 1: Ungu
                Visualizer3D.drawPlane(n2, d2, 0x06b6d4); // Bidang 2: Teal cyan

                if (res.type === "planes-intersect") {
                    // Gambar garis perpotongan
                    const line = res.intersectionLine;
                    Visualizer3D.drawLine(line.point, line.direction, 0xf59e0b);
                    Visualizer3D.drawPoint(line.point, 0xef4444);
                }
            }
            
            triggerKaTeX(outputEl);
        } catch (err) {
            outputEl.innerHTML = `<div class="solve-step"><p style="color:var(--ef4444)">Terjadi kesalahan input data: ${err.message}</p></div>`;
        }
    }

    // --- MODUL KALKULATOR EIGEN (MATRIKS) ---
    const matrixSizeSelect = document.getElementById("matrix-size");
    const matrixInputGrid = document.getElementById("matrix-input-grid");
    const btnCalculateEigen = document.getElementById("btn-calculate-eigen");

    if (matrixSizeSelect) {
        matrixSizeSelect.addEventListener("change", () => {
            initEigenMatrixGrid();
        });
    }

    function initEigenMatrixGrid() {
        const size = parseInt(matrixSizeSelect.value);
        matrixInputGrid.innerHTML = "";
        
        if (size === 2) {
            matrixInputGrid.className = "matrix-grid-2x2";
            // Kunci default dari Soal C0
            const defaults = [
                [4, -1],
                [3, 8]
            ];
            for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                    const input = document.createElement("input");
                    input.type = "number";
                    input.className = "matrix-cell";
                    input.id = `m-${r}-${c}`;
                    input.value = defaults[r][c];
                    matrixInputGrid.appendChild(input);
                }
            }
        } else {
            matrixInputGrid.className = "matrix-grid-3x3";
            // Kunci default dari Soal C3
            const defaults = [
                [4, 0, 1],
                [2, 3, 2],
                [1, 0, 4]
            ];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    const input = document.createElement("input");
                    input.type = "number";
                    input.className = "matrix-cell";
                    input.id = `m-${r}-${c}`;
                    input.value = defaults[r][c];
                    matrixInputGrid.appendChild(input);
                }
            }
        }
    }

    if (btnCalculateEigen) {
        btnCalculateEigen.addEventListener("click", () => {
            runCalculatorEigen();
        });
    }

    function runCalculatorEigen() {
        const size = parseInt(matrixSizeSelect.value);
        const outputEl = document.getElementById("calc-eigen-output");

        try {
            const matrix = [];
            for (let r = 0; r < size; r++) {
                const row = [];
                for (let c = 0; c < size; c++) {
                    const val = parseFloat(document.getElementById(`m-${r}-${c}`).value);
                    if (isNaN(val)) throw new Error(`Elemen baris ${r+1} kolom ${c+1} tidak valid.`);
                    row.push(val);
                }
                matrix.push(row);
            }

            let res;
            if (size === 2) {
                res = LinearAlgebraCalc.solveEigen2x2(matrix);
            } else {
                res = LinearAlgebraCalc.solveEigen3x3(matrix);
            }

            outputEl.innerHTML = res.stepsHtml;
            triggerKaTeX(outputEl);

        } catch (err) {
            outputEl.innerHTML = `<div class="solve-step"><p style="color:#ef4444">Terjadi kesalahan perhitungan: ${err.message}</p></div>`;
        }
    }

    // Fungsi preset visualisasi untuk soal latihan Topic A
    function visualizeExercisePreset(index) {
        // Pindah ke section kalkulator
        switchSection("calc-3d");
        
        // Tunggu transisi halaman selesai, lalu set nilai input
        setTimeout(() => {
            const opSelect = document.getElementById("calc-3d-operation");
            if (!opSelect) return;

            if (index === 0) {
                opSelect.value = "plane-point-normal";
                initCalculator3DInputs();
                document.getElementById("p-x").value = 9;
                document.getElementById("p-y").value = 3;
                document.getElementById("p-z").value = 2;
                document.getElementById("n-a").value = 4;
                document.getElementById("n-b").value = 7;
                document.getElementById("n-c").value = 8;
            } else if (index === 1) {
                opSelect.value = "plane-point-normal";
                initCalculator3DInputs();
                document.getElementById("p-x").value = 1;
                document.getElementById("p-y").value = 3;
                document.getElementById("p-z").value = 9;
                document.getElementById("n-a").value = 5;
                document.getElementById("n-b").value = 2;
                document.getElementById("n-c").value = 1;
            } else if (index === 2) {
                opSelect.value = "two-planes-relation";
                initCalculator3DInputs();
                document.getElementById("n1-a").value = 1;
                document.getElementById("n1-b").value = -1;
                document.getElementById("n1-c").value = 2;
                document.getElementById("d1").value = 3;
                document.getElementById("n2-a").value = 2;
                document.getElementById("n2-b").value = 3;
                document.getElementById("n2-c").value = -1;
                document.getElementById("d2").value = 4;
            } else if (index === 3) {
                opSelect.value = "plane-point-normal";
                initCalculator3DInputs();
                document.getElementById("p-x").value = 0;
                document.getElementById("p-y").value = 0;
                document.getElementById("p-z").value = 0;
                document.getElementById("n-a").value = -2;
                document.getElementById("n-b").value = -1;
                document.getElementById("n-c").value = 2;
            } else if (index === 4) {
                opSelect.value = "line-point-direction";
                initCalculator3DInputs();
                document.getElementById("lp-x").value = 1;
                document.getElementById("lp-y").value = -2;
                document.getElementById("lp-z").value = 3;
                document.getElementById("ld-a").value = 3;
                document.getElementById("ld-b").value = -1;
                document.getElementById("ld-c").value = 5;
            } else if (index === 5) {
                opSelect.value = "line-plane-intersection";
                initCalculator3DInputs();
                document.getElementById("ilp-x").value = 3;
                document.getElementById("ilp-y").value = 1;
                document.getElementById("ilp-z").value = 7;
                document.getElementById("ild-a").value = 2;
                document.getElementById("ild-b").value = -1;
                document.getElementById("ild-c").value = 3;
                document.getElementById("ipn-a").value = 3;
                document.getElementById("ipn-b").value = 4;
                document.getElementById("ipn-c").value = 5;
                document.getElementById("ipn-d").value = 31;
            } else if (index === 6) {
                opSelect.value = "line-plane-intersection";
                initCalculator3DInputs();
                document.getElementById("ilp-x").value = -2;
                document.getElementById("ilp-y").value = -1;
                document.getElementById("ilp-z").value = 4;
                document.getElementById("ild-a").value = 2;
                document.getElementById("ild-b").value = 4;
                document.getElementById("ild-c").value = 0;
                document.getElementById("ipn-a").value = 2;
                document.getElementById("ipn-b").value = -1;
                document.getElementById("ipn-c").value = -3;
                document.getElementById("ipn-d").value = 4;
            } else if (index === 7) {
                opSelect.value = "plane-three-points";
                initCalculator3DInputs();
                document.getElementById("p1-x").value = 2;
                document.getElementById("p1-y").value = -1;
                document.getElementById("p1-z").value = 4;
                document.getElementById("p2-x").value = -3;
                document.getElementById("p2-y").value = 5;
                document.getElementById("p2-z").value = -1;
                document.getElementById("p3-x").value = 1;
                document.getElementById("p3-y").value = 2;
                document.getElementById("p3-z").value = -3;
            } else if (index === 8) {
                opSelect.value = "two-planes-relation";
                initCalculator3DInputs();
                document.getElementById("n1-a").value = 1;
                document.getElementById("n1-b").value = -2;
                document.getElementById("n1-c").value = 3;
                document.getElementById("d1").value = 1;
                document.getElementById("n2-a").value = 1;
                document.getElementById("n2-b").value = 1;
                document.getElementById("n2-c").value = 1;
                document.getElementById("d2").value = 1;
            }

            // Jalankan hitung
            runCalculator3D();
        }, 200);
    }

    // Jalankan inisialisasi default dashboard
    switchSection("dashboard");
});
