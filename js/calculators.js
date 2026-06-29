// Engine Komputasi Aljabar Linear - Garis, Bidang & Nilai Eigen
// Menyediakan fungsi perhitungan analitis lengkap dengan output HTML terformat LaTeX

const LinearAlgebraCalc = {
    // --- UTILS ---
    // Mengubah pecahan desimal menjadi teks atau pembulatan cantik
    formatNum(n, decimals = 4) {
        if (Math.abs(n) < 1e-9) return "0";
        if (Math.abs(n - Math.round(n)) < 1e-5) return Math.round(n).toString();
        return Number(n.toFixed(decimals)).toString();
    },

    formatSignNum(n, decimals = 4) {
        const val = this.formatNum(n, decimals);
        if (n >= 0) return `+ ${val}`;
        return `- ${val.substring(1)}`;
    },

    // Perkalian silang dua vektor 3D
    crossProduct(u, v) {
        return [
            u[1] * v[2] - u[2] * v[1],
            -(u[0] * v[2] - u[2] * v[0]),
            u[0] * v[1] - u[1] * v[0]
        ];
    },

    // Perkalian titik dua vektor
    dotProduct(u, v) {
        return u.reduce((sum, val, idx) => sum + val * (v[idx] || 0), 0);
    },

    // Panjang vektor
    magnitude(v) {
        return Math.sqrt(v.reduce((sum, val) => sum + val * val, 0));
    },

    // Sederhanakan vektor dengan membaginya dengan FPB (jika integer)
    simplifyVector(v) {
        const isAllInt = v.every(x => Math.abs(x - Math.round(x)) < 1e-9);
        if (!isAllInt) return [...v];
        
        const rounded = v.map(Math.round);
        const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);
        
        let currentGcd = Math.abs(rounded[0]);
        for (let i = 1; i < rounded.length; i++) {
            currentGcd = gcd(currentGcd, Math.abs(rounded[i]));
        }
        
        if (currentGcd > 1) {
            const simplified = rounded.map(x => x / currentGcd);
            // Pertahankan arah dominan positif
            const firstNonZero = simplified.find(x => x !== 0);
            if (firstNonZero < 0) {
                return simplified.map(x => -x);
            }
            return simplified;
        }
        
        return v;
    },

    // --- GEOMETRI 3D SOLVER ---

    // 1. Bidang: Titik & Vektor Normal
    solvePlanePointNormal(point, normal) {
        const [x0, y0, z0] = point;
        const [a, b, c] = normal;
        const d = a * x0 + b * y0 + c * z0;

        const aText = a === 1 ? 'x' : (a === -1 ? '-x' : `${a}x`);
        const bText = b === 0 ? '' : (b > 0 ? `+ ${b === 1 ? '' : b}y` : `- ${Math.abs(b) === 1 ? '' : Math.abs(b)}y`);
        const cText = c === 0 ? '' : (c > 0 ? `+ ${c === 1 ? '' : c}z` : `- ${Math.abs(c) === 1 ? '' : Math.abs(c)}z`);
        
        let planeEq = `${aText} ${bText} ${cText} = ${d}`;
        planeEq = planeEq.replace(/\s+/g, ' ').replace(/\+\s*-/g, '-');

        const stepsHtml = `
            <div class="solve-step">
                <h5>1. Rumus yang Digunakan</h5>
                <p>Persamaan bidang dengan vektor normal $\\vec{n} = [a, b, c]$ melalui titik $P_0(x_0, y_0, z_0)$:</p>
                \\[ a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\]
            </div>
            <div class="solve-step">
                <h5>2. Substitusi Nilai</h5>
                <p>Masukkan titik $P_0(${x0}, ${y0}, ${z0})$ dan normal $\\vec{n} = [${a}, ${b}, ${c}]$:</p>
                \\[ ${a}(x - ${x0}) ${this.formatSignNum(b)}(y - ${y0}) ${this.formatSignNum(c)}(z - ${z0}) = 0 \\]
            </div>
            <div class="solve-step">
                <h5>3. Ekspansi & Penyederhanaan</h5>
                \\[ ${a}x - ${a * x0} ${this.formatSignNum(b)}y - ${b * y0} ${this.formatSignNum(c)}z - ${c * z0} = 0 \\]
                \\[ ${a}x ${bText.includes('y') ? bText.substring(0,1) + ' ' + Math.abs(b) + 'y' : ''} ${cText.includes('z') ? cText.substring(0,1) + ' ' + Math.abs(c) + 'z' : ''} = ${d} \\]
                <p><strong>Persamaan Bidang Akhir:</strong></p>
                \\[ ${planeEq.replace('=', '\\quad = \\quad')} \\]
            </div>
        `;

        return {
            type: 'plane',
            point,
            normal,
            d,
            equation: planeEq,
            stepsHtml
        };
    },

    // 2. Bidang: Melalui 3 Titik
    solvePlaneThreePoints(p1, p2, p3) {
        const u = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
        const v = [p3[0] - p1[0], p3[1] - p1[1], p3[2] - p1[2]];
        const nRaw = this.crossProduct(u, v);
        const n = this.simplifyVector(nRaw);
        
        const [a, b, c] = n;
        const d = a * p1[0] + b * p1[1] + c * p1[2];
        const res = this.solvePlanePointNormal(p1, n);

        const stepsHtml = `
            <div class="solve-step">
                <h5>1. Cari Dua Vektor di Dalam Bidang</h5>
                <p>Titik $P_1(${p1.join(',')})$, $P_2(${p2.join(',')})$, dan $P_3(${p3.join(',')})$ membentuk vektor arah:</p>
                \\[ \\vec{u} = P_2 - P_1 = [${p2[0]}-${p1[0]}, ${p2[1]}-${p1[1]}, ${p2[2]}-${p1[2]}] = [${u.join(',')}] \\]
                \\[ \\vec{v} = P_3 - P_1 = [${p3[0]}-${p1[0]}, ${p3[1]}-${p1[1]}, ${p3[2]}-${p1[2]}] = [${v.join(',')}] \\]
            </div>
            <div class="solve-step">
                <h5>2. Cari Vektor Normal ($\\vec{n}$) dengan Cross Product</h5>
                \\[ \\vec{n}_{raw} = \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ ${u[0]} & ${u[1]} & ${u[2]} \\\\ ${v[0]} & ${v[1]} & ${v[2]} \\end{bmatrix} \\]
                \\[ \\vec{n}_{raw} = [(${u[1]}\\cdot${v[2]} - ${u[2]}\\cdot${v[1]}), -(${u[0]}\\cdot${v[2]} - ${u[2]}\\cdot${v[0]}), (${u[0]}\\cdot${v[1]} - ${u[1]}\\cdot${v[0]})] = [${nRaw.join(',')}] \\]
                <p>Setelah disederhanakan (dibagi FPB), diperoleh vektor normal terkecil:</p>
                \\[ \\vec{n} = [${n.join(',')}] \\]
            </div>
            ${res.stepsHtml}
        `;

        return {
            type: 'plane',
            point: p1,
            normal: n,
            d,
            equation: res.equation,
            stepsHtml
        };
    },

    // 3. Garis: Titik & Vektor Arah
    solveLinePointDirection(point, direction) {
        const [x0, y0, z0] = point;
        const [a, b, c] = direction;

        const parametric = `x = ${x0} ${this.formatSignNum(a)}t, \\quad y = ${y0} ${this.formatSignNum(b)}t, \\quad z = ${z0} ${this.formatSignNum(c)}t`;
        
        let symX = a === 0 ? `x = ${x0}` : `\\frac{x - ${x0}}{${a}}`;
        let symY = b === 0 ? `y = ${y0}` : `\\frac{y - ${y0}}{${b}}`;
        let symZ = c === 0 ? `z = ${z0}` : `\\frac{z - ${z0}}{${c}}`;
        
        let symmetric = "";
        if (a !== 0 && b !== 0 && c !== 0) {
            symmetric = `${symX} = ${symY} = ${symZ}`;
        } else {
            symmetric = `[${symX}], \\ [${symY}], \\ [${symZ}]`;
        }

        const stepsHtml = `
            <div class="solve-step">
                <h5>1. Rumus Persamaan Garis 3D</h5>
                <p>Melalui titik $P_0(x_0, y_0, z_0)$ dengan vektor arah $\\vec{v} = [a, b, c]$:</p>
                <p><strong>Bentuk Vektor:</strong> $[x, y, z] = [x_0, y_0, z_0] + t[a, b, c]$</p>
                <p><strong>Bentuk Parametrik:</strong> $x = x_0 + at, \\ y = y_0 + bt, \\ z = z_0 + ct$</p>
                <p><strong>Bentuk Simetris:</strong> $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$</p>
            </div>
            <div class="solve-step">
                <h5>2. Penyusunan Persamaan</h5>
                <p><strong>Persamaan Parametrik:</strong></p>
                \\[ ${parametric} \\]
                <p><strong>Persamaan Simetris:</strong></p>
                \\[ ${symmetric} \\]
            </div>
        `;

        return {
            type: 'line',
            point,
            direction,
            parametric,
            symmetric,
            stepsHtml
        };
    },

    // 4. Garis: Melalui 2 Titik
    solveLineTwoPoints(p1, p2) {
        const direction = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
        const res = this.solveLinePointDirection(p1, direction);

        const stepsHtml = `
            <div class="solve-step">
                <h5>1. Cari Vektor Arah Garis ($\\vec{v}$)</h5>
                <p>Vektor arah dicari dengan mengurangkan titik kedua dengan titik pertama:</p>
                \\[ \\vec{v} = P_2 - P_1 = [${p2[0]}-${p1[0]}, ${p2[1]}-${p1[1]}, ${p2[2]}-${p1[2]}] = [${direction.join(',')}] \\]
            </div>
            ${res.stepsHtml}
        `;

        return {
            type: 'line',
            point: p1,
            direction,
            parametric: res.parametric,
            symmetric: res.symmetric,
            stepsHtml
        };
    },

    // 5. Titik Tembus Garis & Bidang
    solveLinePlaneIntersection(lPoint, lDir, pNormal, pD) {
        const [x0, y0, z0] = lPoint;
        const [a, b, c] = lDir;
        const [A, B, C] = pNormal;
        
        // n . v (perkalian normal bidang dengan arah garis)
        const dot = A*a + B*b + C*c;
        const startDot = A*x0 + B*y0 + C*z0;

        let stepsHtml = `
            <div class="solve-step">
                <h5>1. Nyatakan Garis dalam Persamaan Parametrik</h5>
                \\[ x = ${x0} + ${a}t \\]
                \\[ y = ${y0} + ${b}t \\]
                \\[ z = ${z0} + ${c}t \\]
                <p>Persamaan bidang kita adalah: $${A}x ${this.formatSignNum(B)}y ${this.formatSignNum(C)}z = ${pD}$</p>
            </div>
        `;

        if (Math.abs(dot) < 1e-9) {
            // Garis sejajar bidang
            if (Math.abs(startDot - pD) < 1e-9) {
                stepsHtml += `
                    <div class="solve-step">
                        <h5>2. Analisis Hubungan</h5>
                        <p>Lakukan perkalian titik normal bidang dan arah garis:</p>
                        \\[ \\vec{n} \\cdot \\vec{v} = ${A}(${a}) + ${B}(${b}) + ${C}(${c}) = 0 \\]
                        <p>Hasil dot product adalah 0. Substitusikan titik garis $(${x0}, ${y0}, ${z0})$ ke bidang:</p>
                        \\[ ${A}(${x0}) + ${B}(${y0}) + ${C}(${z0}) = ${startDot} = ${pD} \\]
                        <p>Karena titik garis terletak pada bidang dan arah garis tegak lurus dengan normal, maka <strong>garis sepenuhnya terletak di dalam bidang</strong> (memiliki tak terhingga titik potong).</p>
                    </div>
                `;
                return { type: 'intersection-infinite', stepsHtml };
            } else {
                stepsHtml += `
                    <div class="solve-step">
                        <h5>2. Analisis Hubungan</h5>
                        <p>Lakukan perkalian titik normal bidang dan arah garis:</p>
                        \\[ \\vec{n} \\cdot \\vec{v} = ${A}(${a}) + ${B}(${b}) + ${C}(${c}) = 0 \\]
                        <p>Hasil dot product adalah 0, namun titik awal garis tidak terletak pada bidang. Dengan demikian, <strong>garis sejajar dengan bidang dan tidak memiliki titik potong</strong>.</p>
                    </div>
                `;
                return { type: 'intersection-none', stepsHtml };
            }
        }

        // Cari t
        const t = (pD - startDot) / dot;
        const ix = x0 + a * t;
        const iy = y0 + b * t;
        const iz = z0 + c * t;
        const iPoint = [ix, iy, iz];

        stepsHtml += `
            <div class="solve-step">
                <h5>2. Substitusikan Garis ke dalam Bidang</h5>
                \\[ ${A}(${x0} + ${a}t) + ${B}(${y0} + ${b}t) + ${C}(${z0} + ${c}t) = ${pD} \\]
                \\[ (${A * x0} + ${A * a}t) + (${B * y0} + ${B * b}t) + (${C * z0} + ${C * c}t) = ${pD} \\]
                \\[ (${A * x0 + B * y0 + C * z0}) + (${dot})t = ${pD} \\]
                \\[ ${dot}t = ${pD} - ${A * x0 + B * y0 + C * z0} \\]
                \\[ ${dot}t = ${pD - startDot} \\]
                \\[ t = \\frac{${pD - startDot}}{${dot}} = ${this.formatNum(t)} \\]
            </div>
            <div class="solve-step">
                <h5>3. Cari Koordinat Titik Tembus</h5>
                <p>Masukkan nilai $t = ${this.formatNum(t)}$ ke persamaan parametrik garis:</p>
                \\[ x = ${x0} + ${a}(${this.formatNum(t)}) = ${this.formatNum(ix)} \\]
                \\[ y = ${y0} + ${b}(${this.formatNum(t)}) = ${this.formatNum(iy)} \\]
                \\[ z = ${z0} + ${c}(${this.formatNum(t)}) = ${this.formatNum(iz)} \\]
                <p><strong>Koordinat Titik Tembus:</strong> $(${this.formatNum(ix)}, \\ ${this.formatNum(iy)}, \\ ${this.formatNum(iz)})$</p>
            </div>
        `;

        return {
            type: 'intersection',
            point: iPoint,
            stepsHtml
        };
    },

    // 6. Hubungan Dua Bidang
    solveTwoPlanesRelation(n1, d1, n2, d2) {
        const mag1 = this.magnitude(n1);
        const mag2 = this.magnitude(n2);
        const dot = this.dotProduct(n1, n2);
        
        // Hitung sudut
        const cosAlpha = Math.abs(dot) / (mag1 * mag2);
        const alphaRad = Math.acos(Math.min(cosAlpha, 1.0));
        const alphaDeg = (alphaRad * 180) / Math.PI;

        let stepsHtml = `
            <div class="solve-step">
                <h5>1. Hitung Sudut Antara Kedua Vektor Normal</h5>
                <p>Vektor normal bidang 1: $\\vec{n}_1 = [${n1.join(',')}]$, panjang $\\|\\vec{n}_1\\| = \\sqrt{${n1[0]}^2 + ${n1[1]}^2 + ${n1[2]}^2} = ${this.formatNum(mag1)}$</p>
                <p>Vektor normal bidang 2: $\\vec{n}_2 = [${n2.join(',')}]$, panjang $\\|\\vec{n}_2\\| = \\sqrt{${n2[0]}^2 + ${n2[1]}^2 + ${n2[2]}^2} = ${this.formatNum(mag2)}$</p>
                \\[ \\cos(\\alpha) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|} = \\frac{|${n1[0]}\\cdot${n2[0]} + ${n1[1]}\\cdot${n2[1]} + ${n1[2]}\\cdot${n2[2]}|}{${this.formatNum(mag1)} \\cdot ${this.formatNum(mag2)}} \\]
                \\[ \\cos(\\alpha) = \\frac{|${dot}|}{${this.formatNum(mag1 * mag2)}} = ${this.formatNum(cosAlpha)} \\]
                \\[ \\alpha = \\arccos(${this.formatNum(cosAlpha)}) \\approx ${this.formatNum(alphaDeg)}^\\circ \\]
            </div>
        `;

        // Periksa Kesejajaran
        // n1 = k * n2
        const kX = n1[0] / n2[0];
        const isParallel = (isNaN(kX) || !isFinite(kX)) ? 
            (Math.abs(n1[0]) < 1e-9 && Math.abs(n2[0]) < 1e-9 && Math.abs(n1[1]/n2[1] - n1[2]/n2[2]) < 1e-9) :
            (Math.abs(n1[1]/n2[1] - kX) < 1e-5 && Math.abs(n1[2]/n2[2] - kX) < 1e-5);

        if (isParallel) {
            const k = n1[0] !== 0 ? n1[0] / n2[0] : (n1[1] !== 0 ? n1[1] / n2[1] : n1[2] / n2[2]);
            const isIdentical = Math.abs(d1 - k * d2) < 1e-5;

            if (isIdentical) {
                stepsHtml += `
                    <div class="solve-step">
                        <h5>2. Kesimpulan Hubungan</h5>
                        <p>Karena $\\vec{n}_1$ merupakan kelipatan dari $\\vec{n}_2$ dengan faktor $k = ${this.formatNum(k)}$, dan konstanta persamaannya juga memenuhi $d_1 = k \\cdot d_2$ ($${d1} = ${this.formatNum(k)} \\cdot ${d2}$), maka <strong>kedua bidang adalah IDENTIK/HIMPIT</strong>.</p>
                    </div>
                `;
                return { type: 'planes-identical', stepsHtml };
            } else {
                // Cari jarak
                // Rumus jarak: |d1 - k*d2| / ||n1||
                const dist = Math.abs(d1 - k * d2) / mag1;
                stepsHtml += `
                    <div class="solve-step">
                        <h5>2. Jarak Antara Dua Bidang Sejajar</h5>
                        <p>Karena $\\vec{n}_1$ merupakan kelipatan dari $\\vec{n}_2$ namun $d_1 \\neq k \\cdot d_2$, maka <strong>kedua bidang adalah SEJAJAR</strong>.</p>
                        <p>Jarak antara kedua bidang dihitung dengan rumus:</p>
                        \\[ D = \\frac{|d_1 - k \\cdot d_2|}{\\|\\vec{n}_1\\|} = \\frac{|${d1} - ${this.formatNum(k)} \\cdot ${d2}|}{${this.formatNum(mag1)}} = ${this.formatNum(dist)} \\]
                        <p><strong>Jarak Bidang:</strong> $D = ${this.formatNum(dist)}$ satuan.</p>
                    </div>
                `;
                return { type: 'planes-parallel', distance: dist, stepsHtml };
            }
        }

        // Bidang berpotongan -> Cari garis perpotongan
        // Arah garis: v = n1 x n2
        const vRaw = this.crossProduct(n1, n2);
        const v = this.simplifyVector(vRaw);

        // Cari satu titik potong. Set salah satu variabel = 0.
        // Jika v_z != 0, set z = 0 dan pecahkan SPL 2D untuk x dan y.
        let p0 = [0, 0, 0];
        let setCoord = "";
        
        if (Math.abs(v[2]) > 1e-5) {
            // Set z = 0
            // A1 x + B1 y = d1
            // A2 x + B2 y = d2
            // Gunakan aturan Cramer
            const det = n1[0]*n2[1] - n1[1]*n2[0];
            const detX = d1*n2[1] - n1[1]*d2;
            const detY = n1[0]*d2 - d1*n2[0];
            p0 = [detX / det, detY / det, 0];
            setCoord = "z = 0";
        } else if (Math.abs(v[1]) > 1e-5) {
            // Set y = 0
            // A1 x + C1 z = d1
            // A2 x + C2 z = d2
            const det = n1[0]*n2[2] - n1[2]*n2[0];
            const detX = d1*n2[2] - n1[2]*d2;
            const detZ = n1[0]*d2 - d1*n2[0];
            p0 = [detX / det, 0, detZ / det];
            setCoord = "y = 0";
        } else {
            // Set x = 0
            // B1 y + C1 z = d1
            // B2 y + C2 z = d2
            const det = n1[1]*n2[2] - n1[2]*n2[1];
            const detY = d1*n2[2] - n1[2]*d2;
            const detZ = n1[1]*d2 - d1*n2[1];
            p0 = [0, detY / det, detZ / det];
            setCoord = "x = 0";
        }

        stepsHtml += `
            <div class="solve-step">
                <h5>2. Cari Arah Garis Perpotongan ($\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2$)</h5>
                \\[ \\vec{v}_{raw} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ ${n1[0]} & ${n1[1]} & ${n1[2]} \\\\ ${n2[0]} & ${n2[1]} & ${n2[2]} \\end{bmatrix} = [${vRaw.join(',')}] \\]
                <p>Setelah disederhanakan, didapat vektor arah garis perpotongan:</p>
                \\[ \\vec{v} = [${v.join(',')}] \\]
            </div>
            <div class="solve-step">
                <h5>3. Cari Satu Titik yang Dilalui Garis (Mengeliminasi Variabel)</h5>
                <p>Karena garis perpotongan memiliki tak terhingga titik, kita bebas memilih salah satu koordinat bernilai nol. Mari tetapkan <strong>${setCoord}</strong>:</p>
                <p>SPL yang terbentuk adalah:</p>
                \\[ ${n1[0] !== 0 && setCoord !== "x = 0" ? n1[0]+'x' : ''} ${n1[1] !== 0 && setCoord !== "y = 0" ? this.formatSignNum(n1[1])+'y' : ''} ${n1[2] !== 0 && setCoord !== "z = 0" ? this.formatSignNum(n1[2])+'z' : ''} = ${d1} \\]
                \\[ ${n2[0] !== 0 && setCoord !== "x = 0" ? n2[0]+'x' : ''} ${n2[1] !== 0 && setCoord !== "y = 0" ? this.formatSignNum(n2[1])+'y' : ''} ${n2[2] !== 0 && setCoord !== "z = 0" ? this.formatSignNum(n2[2])+'z' : ''} = ${d2} \\]
                <p>Penyelesaian SPL di atas menghasilkan titik:</p>
                \\[ P_0 = (${this.formatNum(p0[0])}, \\ ${this.formatNum(p0[1])}, \\ ${this.formatNum(p0[2])}) \\]
            </div>
            <div class="solve-step">
                <h5>4. Persamaan Garis Perpotongan Akhir</h5>
                <p>Menggabungkan titik $P_0$ dan vektor arah $\\vec{v}$ ke bentuk parametrik:</p>
                \\[ x = ${this.formatNum(p0[0])} ${this.formatSignNum(v[0])}t \\]
                \\[ y = ${this.formatNum(p0[1])} ${this.formatSignNum(v[1])}t \\]
                \\[ z = ${this.formatNum(p0[2])} ${this.formatSignNum(v[2])}t \\]
            </div>
        `;

        return {
            type: 'planes-intersect',
            angle: alphaDeg,
            intersectionLine: { point: p0, direction: v },
            stepsHtml
        };
    },

    // --- KALKULATOR NILAI & VEKTOR EIGEN (2x2 & 3x3) ---

    // 1. Matriks 2x2
    solveEigen2x2(matrix) {
        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[1][0];
        const d = matrix[1][1];

        const trace = a + d;
        const det = a * d - b * c;

        // Persamaan Karakteristik: L^2 - Tr(A)*L + det(A) = 0
        const diskriminan = trace * trace - 4 * det;

        let stepsHtml = `
            <div class="solve-step">
                <h5>1. Cari Persamaan Karakteristik Matriks</h5>
                <p>Untuk matriks $2 \\times 2$, persamaan karakteristik dirumuskan sebagai:</p>
                \\[ \\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A) = 0 \\]
                <p>Di mana:</p>
                <ul>
                    <li>Jejak Matriks: $\\text{Tr}(A) = a_{11} + a_{22} = ${a} + ${d} = ${trace}$</li>
                    <li>Determinan: $\\det(A) = a_{11}a_{22} - a_{12}a_{21} = (${a})(${d}) - (${b})(${c}) = ${det}$</li>
                </ul>
                <p>Persamaan karakteristik:</p>
                \\[ \\lambda^2 ${this.formatSignNum(-trace)}\\lambda ${this.formatSignNum(det)} = 0 \\]
            </div>
        `;

        if (diskriminan < 0) {
            // Nilai eigen kompleks
            const real = trace / 2;
            const imag = Math.sqrt(-diskriminan) / 2;
            stepsHtml += `
                <div class="solve-step">
                    <h5>2. Cari Akar Karakteristik (Nilai Eigen)</h5>
                    <p>Karena diskriminan $D = \\text{Tr}(A)^2 - 4\\det(A) = ${trace}^2 - 4(${det}) = ${diskriminan} < 0$, maka matriks tidak memiliki nilai eigen real. Nilai eigen yang diperoleh berupa bilangan kompleks konjugat:</p>
                    \\[ \\lambda_{1,2} = ${this.formatNum(real)} \\pm ${this.formatNum(imag)}i \\]
                    <p>Karena nilai eigen kompleks, matriks $A$ <strong>tidak dapat didiagonalkan di himpunan bilangan riil ($\\mathbb{R}$)</strong>.</p>
                </div>
            `;
            return { diagonalizable: false, stepsHtml };
        }

        const l1 = (trace + Math.sqrt(diskriminan)) / 2;
        const l2 = (trace - Math.sqrt(diskriminan)) / 2;
        const eigenvalues = [l1, l2];

        stepsHtml += `
            <div class="solve-step">
                <h5>2. Hitung Nilai-Nilai Eigen ($\\lambda$)</h5>
                <p>Menggunakan rumus kuadratik untuk memecahkan $\\lambda^2 - ${trace}\\lambda + ${det} = 0$:</p>
                \\[ \\lambda = \\frac{-(-${trace}) \\pm \\sqrt{(-${trace})^2 - 4(1)(${det})}}{2} = \\frac{${trace} \\pm \\sqrt{${diskriminan}}}{2} \\]
                \\[ \\lambda_1 = ${this.formatNum(l1)}, \\quad \\lambda_2 = ${this.formatNum(l2)} \\]
            </div>
            <div class="solve-step">
                <h5>3. Cari Vektor Eigen untuk Tiap Nilai Eigen</h5>
                <p>Kita selesaikan sistem $(A - \\lambda I)\\vec{v} = \\vec{0}$ untuk masing-masing nilai eigen.</p>
            </div>
        `;

        const eigenvectors = [];
        const basisTexts = [];

        for (let i = 0; i < eigenvalues.length; i++) {
            const lam = eigenvalues[i];
            const m00 = a - lam;
            const m01 = b;
            const m10 = c;
            const m11 = d - lam;

            let v = [0, 0];
            // Selesaikan SPL homogen [m00 m01; m10 m11] v = 0
            if (Math.abs(m01) > 1e-9) {
                // m00*x + m01*y = 0 -> y = -m00/m01 * x. Pilih x = m01, y = -m00
                v = [m01, -m00];
            } else if (Math.abs(m10) > 1e-9) {
                // m10*x + m11*y = 0 -> x = -m11/m10 * y. Pilih y = m10, x = -m11
                v = [-m11, m10];
            } else {
                // m01 = 0 dan m10 = 0 -> matriks diagonal
                if (Math.abs(m00) < 1e-9) {
                    v = [1, 0];
                } else {
                    v = [0, 1];
                }
            }

            const simplifiedV = this.simplifyVector(v);
            eigenvectors.push(simplifiedV);

            stepsHtml += `
                <div class="solve-step">
                    <h6>Vektor Eigen untuk $\\lambda_{${i+1}} = ${this.formatNum(lam)}$:</h6>
                    \\[ A - (${this.formatNum(lam)})I = \\begin{bmatrix} ${this.formatNum(m00)} & ${this.formatNum(m01)} \\\\ ${this.formatNum(m10)} & ${this.formatNum(m11)} \\end{bmatrix} \\]
                    <p>SPL homogen:</p>
                    \\[ ${this.formatNum(m00)}x_1 ${this.formatSignNum(m01)}x_2 = 0 \\]
                    <p>Memilih variabel bebas memberikan vektor eigen basis:</p>
                    \\[ \\vec{v}_{${i+1}} = \\begin{bmatrix} ${this.formatNum(simplifiedV[0])} \\\\ ${this.formatNum(simplifiedV[1])} \\end{bmatrix} \\]
                </div>
            `;
        }

        // Periksa apakah determinan P != 0 agar dapat didiagonalkan
        const detP = eigenvectors[0][0] * eigenvectors[1][1] - eigenvectors[0][1] * eigenvectors[1][0];
        const isDiag = Math.abs(detP) > 1e-9;

        if (isDiag) {
            stepsHtml += `
                <div class="solve-step">
                    <h5>4. Susun Matriks Diagonalisasi</h5>
                    <p>Karena kita memiliki 2 vektor eigen yang bebas linear, matriks $A$ dapat didiagonalkan:</p>
                    \\[ P = \\begin{bmatrix} ${this.formatNum(eigenvectors[0][0])} & ${this.formatNum(eigenvectors[1][0])} \\\\ ${this.formatNum(eigenvectors[0][1])} & ${this.formatNum(eigenvectors[1][1])} \\end{bmatrix}, \\quad D = \\begin{bmatrix} ${this.formatNum(l1)} & 0 \\\\ 0 & ${this.formatNum(l2)} \\end{bmatrix} \\]
                    <p>Hubungan diagonalisasi: $A = PDP^{-1}$.</p>
                </div>
            `;
            return {
                diagonalizable: true,
                eigenvalues,
                eigenvectors,
                P: [[eigenvectors[0][0], eigenvectors[1][0]], [eigenvectors[0][1], eigenvectors[1][1]]],
                D: [[l1, 0], [0, l2]],
                stepsHtml
            };
        } else {
            stepsHtml += `
                <div class="solve-step">
                    <h5>4. Kesimpulan Kediagonalan</h5>
                    <p>Meskipun memiliki nilai eigen real, matriks ini tidak memiliki 2 vektor eigen bebas linear (ruang eigen memiliki dimensi 1, sedangkan multiplisitas aljabar $\\lambda = ${this.formatNum(l1)}$ adalah 2). Dengan demikian, <strong>matriks A tidak dapat didiagonalkan</strong>.</p>
                </div>
            `;
            return { diagonalizable: false, stepsHtml };
        }
    },

    // 2. Matriks 3x3
    solveEigen3x3(matrix) {
        // Ekstrak elemen
        const a11 = matrix[0][0], a12 = matrix[0][1], a13 = matrix[0][2];
        const a21 = matrix[1][0], a22 = matrix[1][1], a23 = matrix[1][2];
        const a31 = matrix[2][0], a32 = matrix[2][1], a33 = matrix[2][2];

        // Koefisien polinomial karakteristik: L^3 - c2 * L^2 - c1 * L - c0 = 0
        const c2 = a11 + a22 + a33; // Trace
        
        // Minor sum
        const m1 = a11*a22 - a12*a21;
        const m2 = a11*a33 - a13*a31;
        const m3 = a22*a33 - a23*a32;
        const c1 = -(m1 + m2 + m3);

        const det = a11 * (a22 * a33 - a23 * a32) -
                    a12 * (a21 * a33 - a23 * a31) +
                    a13 * (a21 * a32 - a22 * a31);
        const c0 = det;

        // Persamaan Karakteristik: L^3 - c2*L^2 - c1*L - c0 = 0
        let stepsHtml = `
            <div class="solve-step">
                <h5>1. Polinomial Karakteristik</h5>
                <p>Persamaan karakteristik untuk matriks $3 \\times 3$ adalah:</p>
                \\[ \\det(A - \\lambda I) = -\\lambda^3 + c_2\\lambda^2 + c_1\\lambda + c_0 = 0 \\]
                <p>Di mana:</p>
                <ul>
                    <li>$c_2 = \\text{Tr}(A) = ${a11} + ${a22} + ${a33} = ${c2}$</li>
                    <li>$c_1 = -(\\det(M_{33}) + \\det(M_{22}) + \\det(M_{11})) = -(${m1} + ${m2} + ${m3}) = ${c1}$</li>
                    <li>$c_0 = \\det(A) = ${this.formatNum(det)}$</li>
                </ul>
                <p>Persamaan polinomial karakteristik:</p>
                \\[ \\lambda^3 ${this.formatSignNum(-c2)}\\lambda^2 ${this.formatSignNum(-c1)}\\lambda ${this.formatSignNum(-c0)} = 0 \\]
            </div>
        `;

        // Menyelesaikan persamaan kubik secara numerik
        // f(x) = x^3 - c2*x^2 - c1*x - c0 = 0
        const f = (x) => x*x*x - c2*x*x - c1*x - c0;
        const df = (x) => 3*x*x - 2*c2*x - c1;

        // Newton Raphson untuk mencari satu akar riil
        let root1 = 0;
        let startX = 0;
        // Cari tebakan awal yang baik
        for (let guess of [-100, -10, -1, 0, 1, 10, 100]) {
            let x = guess;
            for (let iter = 0; iter < 100; iter++) {
                const fx = f(x);
                const dfx = df(x);
                if (Math.abs(dfx) < 1e-9) break;
                const nextX = x - fx / dfx;
                if (Math.abs(nextX - x) < 1e-9) {
                    root1 = nextX;
                    break;
                }
                x = nextX;
            }
            if (Math.abs(f(root1)) < 1e-5) break;
        }

        // Jika tebakan kasar gagal, lakukan pemindaian halus
        if (Math.abs(f(root1)) > 1e-5) {
            for (let i = -100; i <= 100; i += 0.5) {
                let x = i;
                for (let iter = 0; iter < 10; iter++) {
                    const fx = f(x);
                    const dfx = df(x);
                    if (Math.abs(dfx) < 1e-9) break;
                    x = x - fx / dfx;
                }
                if (Math.abs(f(x)) < 1e-7) {
                    root1 = x;
                    break;
                }
            }
        }

        // Reduksi polinomial kubik menjadi kuadratik: (L - root1) * (L^2 + p*L + q) = 0
        // L^3 - c2*L^2 - c1*L - c0 = L^3 + (p - root1)L^2 + (q - p*root1)L - q*root1
        // p - root1 = -c2 -> p = root1 - c2
        // -q * root1 = -c0 -> q = c0 / root1 (jika root1 != 0)
        const p = root1 - c2;
        const q = Math.abs(root1) > 1e-7 ? c0 / root1 : (c2 * root1 + c1); // fallback

        const diskKuadrat = p * p - 4 * q;
        let eigenvalues = [];

        if (diskKuadrat < 0) {
            // Hanya ada 1 akar riil, 2 kompleks konjugat
            eigenvalues = [root1];
            stepsHtml += `
                <div class="solve-step">
                    <h5>2. Cari Nilai Eigen ($\\lambda$)</h5>
                    <p>Berdasarkan penyelesaian persamaan kubik, matriks hanya memiliki 1 nilai eigen real dan 2 nilai eigen kompleks:</p>
                    \\[ \\lambda_1 = ${this.formatNum(root1)} \\]
                    <p>Karena tidak memiliki 3 nilai eigen real, matriks $A$ <strong>tidak dapat didiagonalkan di ruang bilangan riil ($\\mathbb{R}$)</strong>.</p>
                </div>
            `;
            return { diagonalizable: false, stepsHtml };
        }

        const root2 = (-p + Math.sqrt(diskKuadrat)) / 2;
        const root3 = (-p - Math.sqrt(diskKuadrat)) / 2;
        
        // Simpan nilai eigen dan rapikan pembulatan integer
        const rawRoots = [root1, root2, root3];
        eigenvalues = rawRoots.map(x => Math.abs(x - Math.round(x)) < 1e-4 ? Math.round(x) : x);
        
        // Urutkan nilai eigen agar hasil pembacaan rapi
        eigenvalues.sort((x, y) => x - y);

        stepsHtml += `
            <div class="solve-step">
                <h5>2. Hitung Nilai-Nilai Eigen ($\\lambda$)</h5>
                <p>Persamaan kubik $\\lambda^3 ${this.formatSignNum(-c2)}\\lambda^2 ${this.formatSignNum(-c1)}\\lambda ${this.formatSignNum(-c0)} = 0$ memiliki tiga akar real:</p>
                \\[ \\lambda_1 = ${this.formatNum(eigenvalues[0])}, \\quad \\lambda_2 = ${this.formatNum(eigenvalues[1])}, \\quad \\lambda_3 = ${this.formatNum(eigenvalues[2])} \\]
            </div>
            <div class="solve-step">
                <h5>3. Cari Vektor Eigen Berkorespondensi</h5>
                <p>Selesaikan SPL homogen $(A - \\lambda I)\\vec{v} = \\vec{0}$ untuk tiap nilai eigen.</p>
            </div>
        `;

        const eigenvectors = [];
        let isDiagPossible = true;

        // Loop untuk mencari null space (vektor eigen) menggunakan reduksi baris sederhana
        for (let idx = 0; idx < eigenvalues.length; idx++) {
            const lam = eigenvalues[idx];
            
            // Cek apakah eigenvalue ini duplikat dari sebelumnya (multiplisitas > 1)
            const isDuplicate = idx > 0 && Math.abs(lam - eigenvalues[idx - 1]) < 1e-5;
            if (isDuplicate) {
                // Penanganan khusus untuk nilai eigen berulang telah dicakup jika sistem reduksi dinamis
                // Kita akan cari ruang eigen secara lengkap.
            }

            // Buat matriks M = A - lambda*I
            const M = [
                [a11 - lam, a12, a13],
                [a21, a22 - lam, a23],
                [a31, a32, a33 - lam]
            ];

            // Pecahkan SPL homogen M * v = 0 dengan Gauss-Jordan parsial
            // Lakukan row reduction secara numerik
            const numRows = 3;
            const numCols = 3;
            
            // Eliminasi Gauss sederhana
            const rref = M.map(row => [...row]);
            let lead = 0;
            for (let r = 0; r < numRows; r++) {
                if (lead >= numCols) break;
                let i = r;
                while (Math.abs(rref[i][lead]) < 1e-7) {
                    i++;
                    if (i === numRows) {
                        i = r;
                        lead++;
                        if (lead === numCols) return { diagonalizable: false, stepsHtml: stepsHtml + "<p>Gagal numerik</p>" };
                    }
                }
                // Tukar baris
                let temp = rref[i];
                rref[i] = rref[r];
                rref[r] = temp;
                
                // Normalisasi baris utama
                let val = rref[r][lead];
                rref[r] = rref[r].map(x => x / val);
                
                // Eliminasi kolom lain
                for (let j = 0; j < numRows; j++) {
                    if (j !== r) {
                        let factor = rref[j][lead];
                        rref[j] = rref[j].map((x, colIdx) => x - factor * rref[r][colIdx]);
                    }
                }
                lead++;
            }

            // Rapikan elemen rref yang mendekati nol
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    if (Math.abs(rref[r][c]) < 1e-5) rref[r][c] = 0;
                }
            }

            // Cari basis dari RREF
            // Contoh RREF ideal untuk rank 2:
            // [1, 0, alpha]
            // [0, 1, beta ]
            // [0, 0, 0    ] -> z bebas. v = [-alpha, -beta, 1]
            let v = [0, 0, 0];
            
            // Cek rank matriks M
            let rank = 0;
            for (let r = 0; r < 3; r++) {
                if (rref[r].some(x => Math.abs(x) > 1e-4)) rank++;
            }

            let e_vects = [];

            if (rank === 2) {
                // Satu variabel bebas, misal variabel bebas adalah variabel dengan kolom tanpa pivot
                // Cari kolom pivot
                let pivotCols = [];
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        if (Math.abs(rref[r][c] - 1) < 1e-5) {
                            pivotCols.push(c);
                            break;
                        }
                    }
                }
                
                let freeCol = [0, 1, 2].find(c => !pivotCols.includes(c));
                if (freeCol === undefined) freeCol = 2; // fallback

                if (freeCol === 2) {
                    v = [-rref[0][2], -rref[1][2], 1];
                } else if (freeCol === 1) {
                    v = [-rref[0][1], 1, -rref[1][2]]; // perkiraan susunan
                } else {
                    v = [1, -rref[0][1], -rref[0][2]];
                }
                
                let simplifiedV = this.simplifyVector(v);
                e_vects.push(simplifiedV);
            } else if (rank === 1) {
                // Dua variabel bebas! (Contoh: Soal C3 atau C7)
                // Persamaan: x + alpha*y + beta*z = 0 -> x = -alpha*y - beta*z
                // y bebas, z bebas.
                // Basis 1 (y=1, z=0): v1 = [-alpha, 1, 0]
                // Basis 2 (y=0, z=1): v2 = [-beta, 0, 1]
                const alpha = rref[0][1];
                const beta = rref[0][2];
                
                e_vects.push(this.simplifyVector([-alpha, 1, 0]));
                e_vects.push(this.simplifyVector([-beta, 0, 1]));
            } else {
                // Rank = 0 -> matriks nol (seluruh ruang R3 adalah ruang eigen)
                e_vects.push([1, 0, 0]);
                e_vects.push([0, 1, 0]);
                e_vects.push([0, 0, 1]);
            }

            // Simpan ke database global
            for (let ev of e_vects) {
                eigenvectors.push({ lambda: lam, vector: ev });
            }

            const matrixLatex = `\\begin{bmatrix} ${this.formatNum(M[0][0])} & ${this.formatNum(M[0][1])} & ${this.formatNum(M[0][2])} \\\\ ${this.formatNum(M[1][0])} & ${this.formatNum(M[1][1])} & ${this.formatNum(M[1][2])} \\\\ ${this.formatNum(M[2][0])} & ${this.formatNum(M[2][1])} & ${this.formatNum(M[2][2])} \\end{bmatrix}`;
            const rrefLatex = `\\begin{bmatrix} ${this.formatNum(rref[0][0])} & ${this.formatNum(rref[0][1])} & ${this.formatNum(rref[0][2])} \\\\ ${this.formatNum(rref[1][0])} & ${this.formatNum(rref[1][1])} & ${this.formatNum(rref[1][2])} \\\\ ${this.formatNum(rref[2][0])} & ${this.formatNum(rref[2][1])} & ${this.formatNum(rref[2][2])} \\end{bmatrix}`;

            stepsHtml += `
                <div class="solve-step">
                    <h6>Untuk Nilai Eigen $\\lambda = ${this.formatNum(lam)}$ (Multiplisitas Aljabar: ${eigenvalues.filter(x => Math.abs(x-lam) < 1e-4).length}):</h6>
                    \\[ A - (${this.formatNum(lam)})I = ${matrixLatex} \\]
                    <p>Setelah direduksi ke bentuk baris eselon tereduksi (RREF):</p>
                    \\[ RREF = ${rrefLatex} \\]
                    <p>Basis ruang eigen yang diperoleh:</p>
                    ${e_vects.map(ev => `\\[ \\vec{v} = \\begin{bmatrix} ${this.formatNum(ev[0])} \\\\ ${this.formatNum(ev[1])} \\\\ ${this.formatNum(ev[2])} \\end{bmatrix} \\]`).join('')}
                </div>
            `;
        }

        // Periksa kediagonalan: Harus ada tepat 3 vektor eigen independen
        if (eigenvectors.length === 3) {
            const p1 = eigenvectors[0].vector;
            const p2 = eigenvectors[1].vector;
            const p3 = eigenvectors[2].vector;
            
            stepsHtml += `
                <div class="solve-step">
                    <h5>4. Susun Matriks Diagonalisasi</h5>
                    <p>Karena kita memiliki total 3 vektor eigen bebas linear, maka matriks $A$ <strong>dapat didiagonalkan</strong>.</p>
                    \\[ P = \\begin{bmatrix} ${this.formatNum(p1[0])} & ${this.formatNum(p2[0])} & ${this.formatNum(p3[0])} \\\\ ${this.formatNum(p1[1])} & ${this.formatNum(p2[1])} & ${this.formatNum(p3[1])} \\\\ ${this.formatNum(p1[2])} & ${this.formatNum(p2[2])} & ${this.formatNum(p3[2])} \\end{bmatrix} \\]
                    \\[ D = \\begin{bmatrix} ${this.formatNum(eigenvectors[0].lambda)} & 0 & 0 \\\\ 0 & ${this.formatNum(eigenvectors[1].lambda)} & 0 \\\\ 0 & 0 & ${this.formatNum(eigenvectors[2].lambda)} \\end{bmatrix} \\]
                    <p>Bentuk diagonalisasi: $A = PDP^{-1}$.</p>
                </div>
            `;
            return {
                diagonalizable: true,
                eigenvalues: eigenvalues,
                eigenvectors: eigenvectors.map(e => e.vector),
                P: [
                    [p1[0], p2[0], p3[0]],
                    [p1[1], p2[1], p3[1]],
                    [p1[2], p2[2], p3[2]]
                ],
                D: [
                    [eigenvectors[0].lambda, 0, 0],
                    [0, eigenvectors[1].lambda, 0],
                    [0, 0, eigenvectors[2].lambda]
                ],
                stepsHtml
            };
        } else {
            stepsHtml += `
                <div class="solve-step">
                    <h5>4. Kesimpulan Kediagonalan</h5>
                    <p>Karena jumlah total vektor eigen bebas linear (${eigenvectors.length}) kurang dari dimensi ruang matriks (3), maka <strong>matriks A tidak dapat didiagonalkan</strong>.</p>
                </div>
            `;
            return { diagonalizable: false, stepsHtml };
        }
    }
};
