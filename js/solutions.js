// Database Soal & Pembahasan Latihan Aljabar Linear (Topic A & Topic C)
// Seluruh teks matematika menggunakan sintaks LaTeX standar yang siap di-render oleh KaTeX

const solutionsData = {
    "soal-a": {
        "soal-a-0": {
            id: "soal-a-0",
            title: "Soal 0 (Garis & Bidang)",
            pertanyaan: `
                <div class="solve-step">
                    <h5>Bagian 1:</h5>
                    <p>Tentukan persamaan bidang dengan vektor normal $\\vec{n} = (4, 7, 8)$ yang melalui titik $L(9, 3, 2)$.</p>
                </div>
                <div class="solve-step">
                    <h5>Bagian 2:</h5>
                    <p>Tentukan jarak antara bidang $A: -6x + y + 8z = 4$ dan bidang $B: -18x + 3y + 24z = 5$.</p>
                </div>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Rumus Persamaan Bidang:</h5>
                    <p>Persamaan bidang yang melalui titik $(x_0, y_0, z_0)$ dengan vektor normal $\\vec{n} = [a, b, c]$ adalah:</p>
                    \\[ a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\]
                    <p>Atau bentuk umum: $ax + by + cz = d$, di mana $d = ax_0 + by_0 + cz_0$.</p>
                </div>
                <div class="solve-step">
                    <h5>Rumus Jarak Dua Bidang Sejajar:</h5>
                    <p>Untuk dua bidang sejajar $ax + by + cz = d_1$ dan $ax + by + cz = d_2$, jaraknya ($D$) adalah:</p>
                    \\[ D = \\frac{|d_1 - d_2|}{\\sqrt{a^2 + b^2 + c^2}} \\]
                </div>
            `,
            diketahui: `
                <div class="solve-step">
                    <h5>Bagian 1:</h5>
                    <p><strong>Diketahui:</strong></p>
                    <ul>
                        <li>Vektor Normal: $\\vec{n} = [a, b, c] = [4, 7, 8]$</li>
                        <li>Titik: $L(x_0, y_0, z_0) = L(9, 3, 2)$</li>
                    </ul>
                    <p><strong>Ditanya:</strong> Persamaan bidang?</p>
                </div>
                <div class="solve-step">
                    <h5>Bagian 2:</h5>
                    <p><strong>Diketahui:</strong></p>
                    <ul>
                        <li>Bidang A: $-6x + y + 8z = 4 \\implies \\vec{n}_A = [-6, 1, 8]$</li>
                        <li>Bidang B: $-18x + 3y + 24z = 5 \\implies \\vec{n}_B = [-18, 3, 24]$</li>
                    </ul>
                    <p><strong>Ditanya:</strong> Jarak antara bidang A dan bidang B?</p>
                </div>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Persamaan Bidang</h5>
                    <p>Substitusikan nilai $\\vec{n} = [4, 7, 8]$ dan titik $L(9, 3, 2)$ ke persamaan standar bidang:</p>
                    \\[ 4(x - 9) + 7(y - 3) + 8(z - 2) = 0 \\]
                    <p>Kalikan ke dalam:</p>
                    \\[ 4x - 36 + 7y - 21 + 8z - 16 = 0 \\]
                    <p>Sederhanakan konstantanya ($-36 - 21 - 16 = -73$):</p>
                    \\[ 4x + 7y + 8z - 73 = 0 \\]
                    \\[ 4x + 7y + 8z = 73 \\]
                    <p><strong>Persamaan bidang yang terbentuk adalah:</strong> $4x + 7y + 8z = 73$.</p>
                </div>
                
                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Jarak Bidang A dan B</h5>
                    <p><strong>Langkah A: Tunjukkan bidang sejajar</strong></p>
                    <p>Perhatikan bahwa normal bidang B adalah kelipatan normal bidang A:</p>
                    \\[ \\vec{n}_B = [-18, 3, 24] = 3 \\cdot [-6, 1, 8] = 3\\vec{n}_A \\]
                    <p>Karena arah normalnya sejajar, kedua bidang tersebut sejajar. Kita bisa membagi persamaan bidang B dengan 3 agar koefisiennya sama dengan bidang A:</p>
                    \\[ \\text{Bidang A}: -6x + y + 8z = 4 \\implies d_1 = 4 \\]
                    \\[ \\text{Bidang B}: -6x + y + 8z = \\frac{5}{3} \\implies d_2 = \\frac{5}{3} \\]
                    <p>Kini koefisien kita adalah $a = -6$, $b = 1$, $c = 8$.</p>
                    
                    <p><strong>Langkah B: Hitung Jarak</strong></p>
                    <p>Gunakan rumus jarak dua bidang sejajar:</p>
                    \\[ D = \\frac{|d_1 - d_2|}{\\sqrt{a^2 + b^2 + c^2}} = \\frac{|4 - \\frac{5}{3}|}{\\sqrt{(-6)^2 + 1^2 + 8^2}} \\]
                    \\[ D = \\frac{|\\frac{12}{3} - \\frac{5}{3}|}{\\sqrt{36 + 1 + 64}} = \\frac{\\frac{7}{3}}{\\sqrt{101}} \\]
                    \\[ D = \\frac{7}{3\\sqrt{101}} = \\frac{7\\sqrt{101}}{303} \\approx 0.231 \\]
                    <p><strong>Jarak antara bidang A dan B adalah:</strong> $\\frac{7\\sqrt{101}}{303}$ satuan jarak.</p>
                </div>
            `
        },
        "soal-a-1": {
            id: "soal-a-1",
            title: "Soal 1 (Garis & Bidang)",
            pertanyaan: `
                <p>Tentukan persamaan bidang yang melalui titik $P(1, 3, 9)$ dengan vektor normal $\\vec{n} = (5, 2, 1)$.</p>
            `,
            konsep: `
                <p>Persamaan bidang melalui titik $P_0(x_0, y_0, z_0)$ dengan normal $\\vec{n} = [a, b, c]$:</p>
                \\[ a(x-x_0) + b(y-y_0) + c(z-z_0) = 0 \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Titik: $P(x_0, y_0, z_0) = P(1, 3, 9)$</li>
                    <li>Normal: $\\vec{n} = [a, b, c] = [5, 2, 1]$</li>
                </ul>
                <p><strong>Ditanya:</strong> Persamaan bidang?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah Pengerjaan:</h5>
                    <p>Masukkan koordinat titik dan normal ke rumus standar bidang:</p>
                    \\[ 5(x - 1) + 2(y - 3) + 1(z - 9) = 0 \\]
                    <p>Jabarkan secara distributif:</p>
                    \\[ 5x - 5 + 2y - 6 + z - 9 = 0 \\]
                    <p>Gabungkan semua konstanta ($-5 - 6 - 9 = -20$):</p>
                    \\[ 5x + 2y + z - 20 = 0 \\]
                    \\[ 5x + 2y + z = 20 \\]
                    <p><strong>Persamaan bidang yang terbentuk adalah:</strong> $5x + 2y + z = 20$.</p>
                </div>
            `
        },
        "soal-a-2": {
            id: "soal-a-2",
            title: "Soal 2 (Garis & Bidang)",
            pertanyaan: `
                <p>Tentukan persamaan bidang yang sejajar dengan garis perpotongan bidang $x - y + 2z = 3$ dan $2x + 3y - z = 4$, serta mengandung titik $(2, 3, 5)$ dan $(3, 4, 1)$.</p>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Konsep Logika Vektor:</h5>
                    <p>Untuk menyusun bidang, kita memerlukan satu <strong>Vektor Normal ($\\vec{n}$)</strong>. Kita bisa mendapatkannya dari perkalian silang (cross product) dua vektor yang berada/sejajar di bidang tersebut:</p>
                    <ol>
                        <li><strong>Vektor $\\vec{v}$</strong>: Arah garis perpotongan dua bidang awal. Diperoleh dari perkalian silang normal kedua bidang tersebut: $\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2$.</li>
                        <li><strong>Vektor $\\vec{AB}$</strong>: Vektor perpindahan dari dua titik yang dikandung di bidang: $\\vec{AB} = B - A$.</li>
                    </ol>
                    <p>Maka, vektor normal bidang baru adalah: $\\vec{n} = \\vec{v} \\times \\vec{AB}$.</p>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Persamaan Bidang 1: $x - y + 2z = 3 \\implies \\vec{n}_1 = [1, -1, 2]$</li>
                    <li>Persamaan Bidang 2: $2x + 3y - z = 4 \\implies \\vec{n}_2 = [2, 3, -1]$</li>
                    <li>Titik $A = (2, 3, 5)$ dan Titik $B = (3, 4, 1)$</li>
                </ul>
                <p><strong>Ditanya:</strong> Persamaan bidang baru?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Arah Garis Perpotongan ($\\vec{v}$)</h5>
                    <p>Lakukan cross product antara $\\vec{n}_1$ dan $\\vec{n}_2$:</p>
                    \\[ \\vec{v} = \\vec{n}_1 \\times \\vec{n}_2 = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -1 & 2 \\\\ 2 & 3 & -1 \\end{bmatrix} \\]
                    \\[ \\vec{v} = \\vec{i}((-1)(-1) - (2)(3)) - \\vec{j}((1)(-1) - (2)(2)) + \\vec{k}((1)(3) - (-1)(2)) \\]
                    \\[ \\vec{v} = \\vec{i}(1 - 6) - \\vec{j}(-1 - 4) + \\vec{k}(3 + 2) \\]
                    \\[ \\vec{v} = [-5, 5, 5] \\]
                    <p>Untuk mempermudah perhitungan, kita bagi vektor ini dengan 5 untuk menyederhanakannya tanpa mengubah arahnya: $\\vec{v} = [1, -1, -1]$.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Vektor $\\vec{AB}$ dari Dua Titik</h5>
                    <p>Titik $A(2,3,5)$ dan $B(3,4,1)$ berada pada bidang:</p>
                    \\[ \\vec{AB} = B - A = [3-2, 4-3, 1-5] = [1, 1, -4] \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Cari Vektor Normal Bidang Baru ($\\vec{n}$)</h5>
                    <p>Lakukan cross product antara vektor arah perpotongan $\\vec{v}$ dan vektor $\\vec{AB}$:</p>
                    \\[ \\vec{n} = \\vec{v} \\times \\vec{AB} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -1 & -1 \\\\ 1 & 1 & -4 \\end{bmatrix} \\]
                    \\[ \\vec{n} = \\vec{i}((-1)(-4) - (-1)(1)) - \\vec{j}((1)(-4) - (-1)(1)) + \\vec{k}((1)(1) - (-1)(1)) \\]
                    \\[ \\vec{n} = \\vec{i}(4 + 1) - \\vec{j}(-4 + 1) + \\vec{k}(1 + 1) \\]
                    \\[ \\vec{n} = [5, 3, 2] \\]
                    <p>Kita dapatkan koefisien bidang baru: $a=5$, $b=3$, $c=2$.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 4: Susun Persamaan Bidang</h5>
                    <p>Gunakan koordinat titik $A(2, 3, 5)$:</p>
                    \\[ 5(x - 2) + 3(y - 3) + 2(z - 5) = 0 \\]
                    \\[ 5x - 10 + 3y - 9 + 2z - 10 = 0 \\]
                    \\[ 5x + 3y + 2z - 29 = 0 \\]
                    \\[ 5x + 3y + 2z = 29 \\]
                    <p><strong>Verifikasi dengan titik B(3,4,1):</strong> $5(3) + 3(4) + 2(1) = 15 + 12 + 2 = 29$ (Terbukti Benar).</p>
                    <p><strong>Persamaan bidang yang dicari adalah:</strong> $5x + 3y + 2z = 29$.</p>
                </div>
            `
        },
        "soal-a-3": {
            id: "soal-a-3",
            title: "Soal 3 (Garis & Bidang)",
            pertanyaan: `
                <p>Tentukan persamaan bidang $A$ yang melalui titik $(0,0,0)$ dan $(1,0,1)$, serta sejajar dengan vektor $(0,2,1)$.</p>
            `,
            konsep: `
                <p>Untuk mencari normal bidang $\\vec{n}$, kita lakukan perkalian silang (cross product) dari dua vektor di dalam/sejajar bidang:</p>
                <ul>
                    <li>Vektor $\\vec{u}$: diperoleh dari dua titik $O(0,0,0)$ dan $P(1,0,1)$, sehingga $\\vec{u} = P - O = [1, 0, 1]$.</li>
                    <li>Vektor $\\vec{v}$: vektor sejajar yang diberikan yaitu $[0, 2, 1]$.</li>
                </ul>
                \\[ \\vec{n} = \\vec{u} \\times \\vec{v} \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Titik awal: $O(0,0,0)$ dan $P(1,0,1) \\implies \\vec{u} = [1,0,1]$</li>
                    <li>Vektor sejajar: $\\vec{v} = [0,2,1]$</li>
                </ul>
                <p><strong>Ditanya:</strong> Persamaan bidang?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Hitung Vektor Normal ($\\vec{n}$)</h5>
                    \\[ \\vec{n} = \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & 0 & 1 \\\\ 0 & 2 & 1 \\end{bmatrix} \\]
                    \\[ \\vec{n} = \\vec{i}((0)(1) - (1)(2)) - \\vec{j}((1)(1) - (1)(0)) + \\vec{k}((1)(2) - (0)(0)) \\]
                    \\[ \\vec{n} = \\vec{i}(-2) - \\vec{j}(1) + \\vec{k}(2) \\]
                    \\[ \\vec{n} = [-2, -1, 2] \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Susun Persamaan Bidang</h5>
                    <p>Karena bidang melalui titik pusat $(0,0,0)$, maka konstanta $d = 0$:</p>
                    \\[ -2(x - 0) - 1(y - 0) + 2(z - 0) = 0 \\]
                    \\[ -2x - y + 2z = 0 \\]
                    <p>Atau jika dikalikan $-1$:</p>
                    \\[ 2x + y - 2z = 0 \\]
                    <p><strong>Persamaan bidang yang terbentuk adalah:</strong> $2x + y - 2z = 0$.</p>
                </div>
            `
        },
        "soal-a-4": {
            id: "soal-a-4",
            title: "Soal 4 (Garis & Bidang)",
            pertanyaan: `
                <p>Tentukan persamaan garis yang melalui titik $P_0(1, -2, 3)$ dan tegak lurus terhadap bidang $3x - y + 5z = 10$.</p>
            `,
            konsep: `
                <p>Jika sebuah garis tegak lurus terhadap suatu bidang, maka <strong>vektor arah garis ($\\vec{v}$)</strong> harus searah dengan <strong>vektor normal bidang ($\\vec{n}$)</strong> tersebut.</p>
                \\[ \\vec{v} = \\vec{n} = [a, b, c] \\]
                <p>Persamaan parametrik garis 3D melalui $P_0(x_0, y_0, z_0)$ dengan arah $[a,b,c]$ adalah:</p>
                \\[ x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Titik awal: $P_0(1, -2, 3)$</li>
                    <li>Persamaan bidang: $3x - y + 5z = 10 \\implies \\vec{n} = [3, -1, 5]$</li>
                </ul>
                <p><strong>Ditanya:</strong> Persamaan garis?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah Pengerjaan:</h5>
                    <p>Karena garis tegak lurus bidang, maka arah garis $\\vec{v}$ sama dengan normal bidang:</p>
                    \\[ \\vec{v} = [3, -1, 5] \\]
                    <p>Kita dapat menyusun persamaan garis ini dalam tiga bentuk:</p>
                    
                    <p><strong>1. Bentuk Vektor:</strong></p>
                    \\[ [x, y, z] = [1, -2, 3] + t[3, -1, 5] \\]
                    
                    <p><strong>2. Bentuk Parametrik:</strong></p>
                    \\[ x = 1 + 3t \\]
                    \\[ y = -2 - t \\]
                    \\[ z = 3 + 5t \\]
                    
                    <p><strong>3. Bentuk Simetris:</strong></p>
                    \\[ \\frac{x-1}{3} = \\frac{y+2}{-1} = \\frac{z-3}{5} \\]
                </div>
            `
        },
        "soal-a-5": {
            id: "soal-a-5",
            title: "Soal 5 (Garis & Bidang)",
            pertanyaan: `
                <p>Diketahui bidang $\\alpha: 3x + 4y + 5z = 31$ dan garis $g: [x,y,z] = [3,1,7] + \\lambda[2,-1,3]$.</p>
                <ol>
                    <li>Cari koordinat titik tembus garis $g$ dengan bidang $\\alpha$.</li>
                    <li>Cari persamaan bidang yang melalui titik $(3,0,-1)$ dan sejajar dengan bidang $\\alpha$.</li>
                    <li>Cari persamaan garis yang melalui titik $(3,0,-1)$ dan tegak lurus terhadap bidang $\\alpha$.</li>
                </ol>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Konsep Pembahasan:</h5>
                    <ul>
                        <li><strong>Titik Tembus:</strong> Diperoleh dengan mensubstitusi persamaan parametrik garis ($x, y, z$ fungsi $\\lambda$) ke dalam persamaan bidang untuk mendapatkan nilai $\\lambda$, lalu kembalikan $\\lambda$ ke koordinat garis.</li>
                        <li><strong>Bidang Sejajar:</strong> Memiliki vektor normal yang sama ($\\vec{n}_{baru} = \\vec{n}_{\\alpha} = [3,4,5]$).</li>
                        <li><strong>Garis Tegak Lurus Bidang:</strong> Vektor arah garis baru sama dengan normal bidang ($\\vec{v}_{baru} = \\vec{n}_{\\alpha} = [3,4,5]$).</li>
                    </ul>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Bidang $\\alpha: 3x + 4y + 5z = 31 \\implies \\vec{n} = [3, 4, 5]$</li>
                    <li>Garis $g$: $x = 3+2\\lambda$, $y = 1-\\lambda$, $z = 7+3\\lambda$</li>
                    <li>Titik target bagian 2 & 3: $Q(3, 0, -1)$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Koordinat Titik Tembus</h5>
                    <p>Substitusikan komponen $x, y, z$ garis ke persamaan bidang $\\alpha$:</p>
                    \\[ 3(3 + 2\\lambda) + 4(1 - \\lambda) + 5(7 + 3\\lambda) = 31 \\]
                    <p>Jabarkan perkaliannya:</p>
                    \\[ 9 + 6\\lambda + 4 - 4\\lambda + 35 + 15\\lambda = 31 \\]
                    \\[ (6\\lambda - 4\\lambda + 15\\lambda) + (9 + 4 + 35) = 31 \\]
                    \\[ 17\\lambda + 48 = 31 \\]
                    \\[ 17\\lambda = 31 - 48 \\]
                    \\[ 17\\lambda = -17 \\implies \\lambda = -1 \\]
                    
                    <p>Masukkan $\\lambda = -1$ kembali ke komponen koordinat garis:</p>
                    \\[ x = 3 + 2(-1) = 1 \\]
                    \\[ y = 1 - (-1) = 2 \\]
                    \\[ z = 7 + 3(-1) = 4 \\]
                    <p><strong>Koordinat titik tembusnya adalah:</strong> $(1, 2, 4)$.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Persamaan Bidang Sejajar</h5>
                    <p>Gunakan normal $\\vec{n} = [3, 4, 5]$ dan titik baru $Q(3, 0, -1)$:</p>
                    \\[ 3(x - 3) + 4(y - 0) + 5(z - (-1)) = 0 \\]
                    \\[ 3x - 9 + 4y + 5z + 5 = 0 \\]
                    \\[ 3x + 4y + 5z - 4 = 0 \\]
                    \\[ 3x + 4y + 5z = 4 \\]
                    <p><strong>Persamaan bidang sejajar adalah:</strong> $3x + 4y + 5z = 4$.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 3: Persamaan Garis Tegak Lurus</h5>
                    <p>Garis melalui titik $Q(3, 0, -1)$ dengan arah $\\vec{v} = \\vec{n}_{\\alpha} = [3, 4, 5]$:</p>
                    <p><strong>Bentuk Parametrik:</strong></p>
                    \\[ x = 3 + 3t \\]
                    \\[ y = 4t \\]
                    \\[ z = -1 + 5t \\]
                    <p><strong>Bentuk Simetris:</strong></p>
                    \\[ \\frac{x-3}{3} = \\frac{y}{4} = \\frac{z+1}{5} \\]
                </div>
            `
        },
        "soal-a-6": {
            id: "soal-a-6",
            title: "Soal 6 (Garis & Bidang)",
            pertanyaan: `
                <p>Tunjukkan bahwa bidang $2x - y - 3z = 4$ sejajar dengan garis $x = -2 + 2t$, $y = -1 + 4t$, $z = 4$, dan tentukan jarak antara bidang dan garis tersebut.</p>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Konsep Analisis:</h5>
                    <ol>
                        <li><strong>Membuktikan Kesejajaran:</strong> Garis sejajar bidang jika vektor arah garis $\\vec{v}$ tegak lurus dengan normal bidang $\\vec{n}$, yang artinya dot productnya nol: $\\vec{n} \\cdot \\vec{v} = 0$.</li>
                        <li><strong>Menghitung Jarak:</strong> Pilih satu titik sembarang pada garis (misal saat $t=0$), lalu hitung jarak titik tersebut ke bidang dengan rumus:</li>
                    </ol>
                    \\[ D = \\frac{|a x_0 + b y_0 + c z_0 - d|}{\\sqrt{a^2 + b^2 + c^2}} \\]
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Persamaan bidang: $2x - y - 3z = 4 \\implies \\vec{n} = [2, -1, -3]$ dan $d = 4$</li>
                    <li>Garis: $x = -2+2t$, $y = -1+4t$, $z = 4 \\implies$ Vektor arah $\\vec{v} = [2, 4, 0]$</li>
                </ul>
                <p><strong>Ditanya:</strong> Pembuktian sejajar & jarak?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Buktikan Garis Sejajar Bidang</h5>
                    <p>Lakukan perkalian titik (dot product) antara $\\vec{n}$ dan $\\vec{v}$:</p>
                    \\[ \\vec{n} \\cdot \\vec{v} = [2, -1, -3] \\cdot [2, 4, 0] \\]
                    \\[ \\vec{n} \\cdot \\vec{v} = (2 \\times 2) + (-1 \\times 4) + (-3 \\times 0) = 4 - 4 + 0 = 0 \\]
                    <p>Karena hasil dot product = 0, vektor arah garis tegak lurus dengan vektor normal bidang. Sesuai analogi, ini membuktikan bahwa <strong>garis tersebut sejajar dengan bidang</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Ambil Titik pada Garis</h5>
                    <p>Untuk $t = 0$, kita peroleh titik pada garis $P_0(x_0, y_0, z_0) = (-2, -1, 4)$.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Hitung Jarak Titik ke Bidang</h5>
                    <p>Substitusikan titik $P_0(-2, -1, 4)$ dan parameter bidang $2x - y - 3z - 4 = 0$ ke rumus jarak:</p>
                    \\[ D = \\frac{|2(-2) + (-1)(-1) + (-3)(4) - 4|}{\\sqrt{2^2 + (-1)^2 + (-3)^2}} \\]
                    \\[ D = \\frac{|-4 + 1 - 12 - 4|}{\\sqrt{4 + 1 + 9}} \\]
                    \\[ D = \\frac{|-19|}{\\sqrt{14}} = \\frac{19}{\\sqrt{14}} \\]
                    <p>Rasionalkan penyebutnya:</p>
                    \\[ D = \\frac{19\\sqrt{14}}{14} \\approx 5.078 \\]
                    <p><strong>Kesimpulan:</strong> Bidang dan garis terbukti sejajar dengan jarak sejauh $\\frac{19\\sqrt{14}}{14}$ satuan.</p>
                </div>
            `
        },
        "soal-a-7": {
            id: "soal-a-7",
            title: "Soal 7 (Garis & Bidang)",
            pertanyaan: `
                <p>Tentukan persamaan bidang yang melalui tiga titik $P(2,-1,4)$, $Q(-3, 5, -1)$, dan $R(1,2,-3)$.</p>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Persamaan Bidang dari 3 Titik:</h5>
                    <p>Gunakan titik $P$, $Q$, dan $R$ untuk membentuk dua vektor di dalam bidang:</p>
                    \\[ \\vec{PQ} = Q - P, \\quad \\vec{PR} = R - P \\]
                    <p>Lalu, hitung normal bidang dengan cross product:</p>
                    \\[ \\vec{n} = \\vec{PQ} \\times \\vec{PR} \\]
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>$P = (2, -1, 4)$</li>
                    <li>$Q = (-3, 5, -1)$</li>
                    <li>$R = (1, 2, -3)$</li>
                </ul>
                <p><strong>Ditanya:</strong> Persamaan bidang?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Bentuk Vektor $\\vec{PQ}$ dan $\\vec{PR}$</h5>
                    \\[ \\vec{PQ} = [-3-2, 5-(-1), -1-4] = [-5, 6, -5] \\]
                    \\[ \\vec{PR} = [1-2, 2-(-1), -3-4] = [-1, 3, -7] \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Hitung Vektor Normal ($\\vec{n}$)</h5>
                    \\[ \\vec{n} = \\vec{PQ} \\times \\vec{PR} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -5 & 6 & -5 \\\\ -1 & 3 & -7 \\end{bmatrix} \\]
                    \\[ \\vec{n} = \\vec{i}((6)(-7) - (-5)(3)) - \\vec{j}((-5)(-7) - (-5)(-1)) + \\vec{k}((-5)(3) - (6)(-1)) \\]
                    \\[ \\vec{n} = \\vec{i}(-42 + 15) - \\vec{j}(35 - 5) + \\vec{k}(-15 + 6) \\]
                    \\[ \\vec{n} = [-27, -30, -9] \\]
                    <p>Bagi vektor normal dengan $-3$ agar angkanya lebih sederhana: $\\vec{n} = [9, 10, 3]$.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Susun Persamaan Bidang</h5>
                    <p>Gunakan normal $\\vec{n} = [9, 10, 3]$ dan titik $P(2, -1, 4)$:</p>
                    \\[ 9(x - 2) + 10(y - (-1)) + 3(z - 4) = 0 \\]
                    \\[ 9x - 18 + 10y + 10 + 3z - 12 = 0 \\]
                    \\[ 9x + 10y + 3z - 20 = 0 \\]
                    \\[ 9x + 10y + 3z = 20 \\]
                    <p><strong>Verifikasi dengan titik Q(-3,5,-1):</strong> $9(-3) + 10(5) + 3(-1) = -27 + 50 - 3 = 20$ (Benar!).</p>
                    <p><strong>Persamaan bidang melalui ketiga titik tersebut adalah:</strong> $9x + 10y + 3z = 20$.</p>
                </div>
            `
        },
        "soal-a-8": {
            id: "soal-a-8",
            title: "Soal 8 (Garis & Bidang)",
            pertanyaan: `
                <p>Diketahui bidang $A$ dengan persamaan $x - 2y + 3z = 1$ dan bidang $B$ dengan persamaan $x + y + z = 1$ di $\\mathbb{R}^3$.</p>
                <ol>
                    <li>Tunjukkan bahwa bidang $A$ dan bidang $B$ tidak sejajar.</li>
                    <li>Tentukanlah besar sudut $\\alpha$ antara bidang $A$ dan bidang $B$.</li>
                    <li>Tentukanlah persamaan garis perpotongan bidang $A$ dengan bidang $B$.</li>
                </ol>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Konsep Pembahasan:</h5>
                    <ul>
                        <li><strong>Kesejajaran:</strong> Tidak sejajar jika vektor normal tidak saling kelipatan ($\\vec{n}_A \\neq k\\vec{n}_B$).</li>
                        <li><strong>Sudut Antara Dua Bidang:</strong> Dihitung melalui sudut antara kedua vektor normalnya:</li>
                        \\[ \\cos(\\alpha) = \\frac{|\\vec{n}_A \\cdot \\vec{n}_B|}{\\|\\vec{n}_A\\| \\|\\vec{n}_B\\|} \\]
                        <li><strong>Garis Perpotongan:</strong> Memiliki arah $\\vec{v} = \\vec{n}_A \\times \\vec{n}_B$. Titik potong dicari dengan mengeliminasi variabel bebas (misal menetapkan $z=0$).</li>
                    </ul>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Bidang $A: x - 2y + 3z = 1 \\implies \\vec{n}_A = [1, -2, 3]$</li>
                    <li>Bidang $B: x + y + z = 1 \\implies \\vec{n}_B = [1, 1, 1]$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Tunjukkan Bidang Tidak Sejajar</h5>
                    <p>Jika sejajar, harus memenuhi $\\vec{n}_A = k\\vec{n}_B$:</p>
                    \\[ [1, -2, 3] = k[1, 1, 1] \\]
                    <p>Dari komponen $x$, didapat $1 = k \\cdot 1 \\implies k = 1$.</p>
                    <p>Namun, dari komponen $y$, didapat $-2 = k \\cdot 1 \\implies k = -2$.</p>
                    <p>Karena nilai $k$ tidak konsisten, maka kedua normal tidak sejajar. Dengan demikian, <strong>bidang A dan B terbukti tidak sejajar</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Tentukan Besar Sudut $\\alpha$</h5>
                    <p><strong>Langkah A: Hitung Dot Product</strong></p>
                    \\[ \\vec{n}_A \\cdot \\vec{n}_B = (1 \\times 1) + (-2 \\times 1) + (3 \\times 1) = 1 - 2 + 3 = 2 \\]
                    
                    <p><strong>Langkah B: Hitung Panjang Vektor</strong></p>
                    \\[ \\|\\vec{n}_A\\| = \\sqrt{1^2 + (-2)^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14} \\]
                    \\[ \\|\\vec{n}_B\\| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3} \\]
                    
                    <p><strong>Langkah C: Hitung Sudut</strong></p>
                    \\[ \\cos(\\alpha) = \\frac{2}{\\sqrt{14}\\sqrt{3}} = \\frac{2}{\\sqrt{42}} \\approx 0.3086 \\]
                    \\[ \\alpha = \\arccos(0.3086) \\approx 72.02^\\circ \\]
                    <p><strong>Besar sudut antar bidang adalah:</strong> $\\approx 72.02^\\circ$.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 3: Persamaan Garis Perpotongan</h5>
                    <p><strong>Langkah A: Cari Vektor Arah ($\\vec{v}$)</strong></p>
                    \\[ \\vec{v} = \\vec{n}_A \\times \\vec{n}_B = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 1 & -2 & 3 \\\\ 1 & 1 & 1 \\end{bmatrix} \\]
                    \\[ \\vec{v} = \\vec{i}((-2)(1) - (3)(1)) - \\vec{j}((1)(1) - (3)(1)) + \\vec{k}((1)(1) - (-2)(1)) \\]
                    \\[ \\vec{v} = \\vec{i}(-5) - \\vec{j}(-2) + \\vec{k}(3) = [-5, 2, 3] \\]
                    
                    <p><strong>Langkah B: Cari Satu Titik Potong (Misal $z = 0$)</strong></p>
                    <p>Substitusikan $z = 0$ ke persamaan kedua bidang:</p>
                    \\[ \\text{(1) } x - 2y = 1 \\]
                    \\[ \\text{(2) } x + y = 1 \\]
                    <p>Kurangi persamaan (2) dengan (1):</p>
                    \\[ (x + y) - (x - 2y) = 1 - 1 \\]
                    \\[ 3y = 0 \\implies y = 0 \\]
                    <p>Masukkan $y = 0$ ke persamaan (2): $x + 0 = 1 \\implies x = 1$.</p>
                    <p>Diperoleh titik potong: $P_0(1, 0, 0)$.</p>
                    
                    <p><strong>Langkah C: Susun Persamaan Garis</strong></p>
                    <p>Gunakan titik $P_0(1,0,0)$ dan arah $\\vec{v} = [-5, 2, 3]$. Persamaan parametriknya:</p>
                    \\[ x = 1 - 5t \\]
                    \\[ y = 2t \\]
                    \\[ z = 3t \\]
                </div>
            `
        }
    },
    "soal-c": {
        "soal-c-0": {
            id: "soal-c-0",
            title: "Soal C0 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Tentukan nilai-nilai eigen dan vektor-vektor eigen yang berkorespondensi dari matriks:</p>
                \\[ A = \\begin{bmatrix} 4 & -1 \\\\ 3 & 8 \\end{bmatrix} \\]
                <p>Tuliskan bentuk diagonalisasinya dan gunakan untuk menghitung $A^5$.</p>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Persamaan Karakteristik:</h5>
                    \\[ \\det(A - \\lambda I) = 0 \\]
                    <p>Di mana $\\lambda$ adalah nilai eigen. Vektor eigen $\\vec{v}$ diperoleh dengan menyelesaikan:</p>
                    \\[ (A - \\lambda I)\\vec{v} = \\vec{0} \\]
                </div>
                <div class="solve-step">
                    <h5>Diagonalisasi Matriks:</h5>
                    <p>Matriks $A$ dapat didiagonalkan sebagai $A = PDP^{-1}$, di mana $D$ adalah matriks diagonal berisi nilai eigen, dan $P$ berisi vektor-vektor eigen sebagai kolomnya. Untuk menghitung pangkat tinggi:</p>
                    \\[ A^n = P D^n P^{-1} \\]
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} 4 & -1 \\\\ 3 & 8 \\end{bmatrix}$</p>
                <p><strong>Ditanya:</strong> Nilai eigen, vektor eigen, diagonalisasi, dan $A^5$?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Nilai Eigen ($\\lambda$)</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} 4-\\lambda & -1 \\\\ 3 & 8-\\lambda \\end{bmatrix} = 0 \\]
                    \\[ (4-\\lambda)(8-\\lambda) - (-1)(3) = 0 \\]
                    \\[ \\lambda^2 - 12\\lambda + 32 + 3 = 0 \\]
                    \\[ \\lambda^2 - 12\\lambda + 35 = 0 \\]
                    \\[ (\\lambda - 5)(\\lambda - 7) = 0 \\implies \\lambda_1 = 5, \\quad \\lambda_2 = 7 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Vektor Eigen</h5>
                    <p><strong>A. Untuk $\\lambda_1 = 5$:</strong></p>
                    \\[ A - 5I = \\begin{bmatrix} 4-5 & -1 \\\\ 3 & 8-5 \\end{bmatrix} = \\begin{bmatrix} -1 & -1 \\\\ 3 & 3 \\end{bmatrix} \\]
                    <p>Selesaikan $(A-5I)\\vec{v}_1 = \\vec{0}$:</p>
                    \\[ \\begin{bmatrix} -1 & -1 \\\\ 3 & 3 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -x_1 - x_2 = 0 \\implies x_2 = -x_1 \\]
                    <p>Pilih $x_1 = 1$, maka diperoleh vektor eigen pertama: $\\vec{v}_1 = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$.</p>
                    
                    <p><strong>B. Untuk $\\lambda_2 = 7$:</strong></p>
                    \\[ A - 7I = \\begin{bmatrix} 4-7 & -1 \\\\ 3 & 8-7 \\end{bmatrix} = \\begin{bmatrix} -3 & -1 \\\\ 3 & 1 \\end{bmatrix} \\]
                    <p>Selesaikan $(A-7I)\\vec{v}_2 = \\vec{0}$:</p>
                    \\[ \\begin{bmatrix} -3 & -1 \\\\ 3 & 1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\implies -3x_1 - x_2 = 0 \\implies x_2 = -3x_1 \\]
                    <p>Pilih $x_1 = 1$, maka diperoleh vektor eigen kedua: $\\vec{v}_2 = \\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}$.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Susun Bentuk Diagonalisasi</h5>
                    <p>Gabungkan vektor eigen menjadi matriks transformasi $P$, dan nilai eigen menjadi matriks diagonal $D$:</p>
                    \\[ P = \\begin{bmatrix} 1 & 1 \\\\ -1 & -3 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 5 & 0 \\\\ 0 & 7 \\end{bmatrix} \\]
                    <p>Hitung $P^{-1}$:</p>
                    \\[ \\det(P) = (1)(-3) - (1)(-1) = -2 \\]
                    \\[ P^{-1} = -\\frac{1}{2} \\begin{bmatrix} -3 & -1 \\\\ 1 & 1 \\end{bmatrix} = \\begin{bmatrix} 1.5 & 0.5 \\\\ -0.5 & -0.5 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 4: Hitung $A^5$</h5>
                    \\[ A^5 = P D^5 P^{-1} \\]
                    \\[ D^5 = \\begin{bmatrix} 5^5 & 0 \\\\ 0 & 7^5 \\end{bmatrix} = \\begin{bmatrix} 3125 & 0 \\\\ 0 & 16807 \\end{bmatrix} \\]
                    \\[ A^5 = \\begin{bmatrix} 1 & 1 \\\\ -1 & -3 \\end{bmatrix} \\begin{bmatrix} 3125 & 0 \\\\ 0 & 16807 \\end{bmatrix} \\begin{bmatrix} 1.5 & 0.5 \\\\ -0.5 & -0.5 \\end{bmatrix} \\]
                    \\[ A^5 = \\begin{bmatrix} 3125 & 16807 \\\\ -3125 & -50421 \\end{bmatrix} \\begin{bmatrix} 1.5 & 0.5 \\\\ -0.5 & -0.5 \\end{bmatrix} \\]
                    \\[ A^5 = \\begin{bmatrix} (3125 \\times 1.5 + 16807 \\times -0.5) & (3125 \\times 0.5 + 16807 \\times -0.5) \\\\ (-3125 \\times 1.5 - 50421 \\times -0.5) & (-3125 \\times 0.5 - 50421 \\times -0.5) \\end{bmatrix} \\]
                    \\[ A^5 = \\begin{bmatrix} -3716 & -6841 \\\\ 20523 & 23648 \\end{bmatrix} \\]
                    <p><strong>Hasil perhitungan $A^5$ adalah:</strong> $\\begin{bmatrix} -3716 & -6841 \\\\ 20523 & 23648 \\end{bmatrix}$.</p>
                </div>
            `
        },
        "soal-c-1": {
            id: "soal-c-1",
            title: "Soal C1 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Periksa apakah matriks $A$ dapat didiagonalkan. Jika ya, tuliskan bentuk diagonalisasinya:</p>
                \\[ A = \\begin{bmatrix} -1 & 4 & -2 \\\\ -3 & 4 & 0 \\\\ -3 & 1 & 3 \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Matriks berukuran $n \\times n$ dapat didiagonalkan jika memiliki $n$ buah vektor eigen yang saling bebas linear. Jika seluruh nilai eigennya berbeda/distingtif, maka matriks tersebut dijamin dapat didiagonalkan.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} -1 & 4 & -2 \\\\ -3 & 4 & 0 \\\\ -3 & 1 & 3 \\end{bmatrix}$</p>
                <p><strong>Ditanya:</strong> Apakah dapat didiagonalkan dan bentuk diagonalisasinya?</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Persamaan Karakteristik & Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} -1-\\lambda & 4 & -2 \\\\ -3 & 4-\\lambda & 0 \\\\ -3 & 1 & 3-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Ekspansi determinan sepanjang kolom/baris menghasilkan persamaan:</p>
                    \\[ \\lambda^3 - 6\\lambda^2 + 11\\lambda - 6 = 0 \\]
                    \\[ (\\lambda - 1)(\\lambda - 2)(\\lambda - 3) = 0 \\]
                    <p>Diperoleh nilai-nilai eigen: $\\lambda_1 = 1$, $\\lambda_2 = 2$, $\\lambda_3 = 3$.</p>
                    <p>Karena matriks berukuran $3 \\times 3$ dan memiliki 3 nilai eigen yang semuanya berbeda, matriks ini <strong>dijamin dapat didiagonalkan</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Tentukan Vektor Eigen</h5>
                    <p><strong>A. Untuk $\\lambda_1 = 1$:</strong></p>
                    \\[ A - I = \\begin{bmatrix} -2 & 4 & -2 \\\\ -3 & 3 & 0 \\\\ -3 & 1 & 2 \\end{bmatrix} \\implies \\text{Row Reduction} \\implies y = z, \\ x = y \\implies \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} \\]
                    
                    <p><strong>B. Untuk $\\lambda_2 = 2$:</strong></p>
                    \\[ A - 2I = \\begin{bmatrix} -3 & 4 & -2 \\\\ -3 & 2 & 0 \\\\ -3 & 1 & 1 \\end{bmatrix} \\implies \\text{Row Reduction} \\implies y = z, \\ x = \\frac{2}{3}y \\implies \\vec{v}_2 = \\begin{bmatrix} 2 \\\\ 3 \\\\ 3 \\end{bmatrix} \\]
                    
                    <p><strong>C. Untuk $\\lambda_3 = 3$:</strong></p>
                    \\[ A - 3I = \\begin{bmatrix} -4 & 4 & -2 \\\\ -3 & 1 & 0 \\\\ -3 & 1 & 0 \\end{bmatrix} \\implies \\text{Row Reduction} \\implies y = 3x, \\ z = 4x \\implies \\vec{v}_3 = \\begin{bmatrix} 1 \\\\ 3 \\\\ 4 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Susun Matriks Diagonalisasi</h5>
                    \\[ P = \\begin{bmatrix} 1 & 2 & 1 \\\\ 1 & 3 & 3 \\\\ 1 & 3 & 4 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix} \\]
                    <p>Bentuk diagonalisasinya adalah $A = PDP^{-1}$ dengan matriks $P$ dan $D$ di atas.</p>
                </div>
            `
        },
        "soal-c-2": {
            id: "soal-c-2",
            title: "Soal C2 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Jika matriks $A$ memiliki nilai-nilai eigen $1$, $7$, dan $-4$, tentukanlah nilai dari $x$, $y$, dan $z$:</p>
                \\[ A = \\begin{bmatrix} 5 & -2 & 3 \\\\ 0 & y & 0 \\\\ x & 7 & z \\end{bmatrix} \\]
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Sifat-Sifat Nilai Eigen:</h5>
                    <ol>
                        <li><strong>Jejak Matriks (Trace):</strong> Jumlah elemen diagonal utama matriks sama dengan jumlah semua nilai eigennya.</li>
                        \\[ \\text{Tr}(A) = a_{11} + a_{22} + a_{33} = \\lambda_1 + \\lambda_2 + \\lambda_3 \\]
                        <li><strong>Determinan Matriks:</strong> Determinan matriks sama dengan hasil kali semua nilai eigennya.</li>
                        \\[ \\det(A) = \\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 \\]
                    </ol>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Matriks $A = \\begin{bmatrix} 5 & -2 & 3 \\\\ 0 & y & 0 \\\\ x & 7 & z \\end{bmatrix}$</li>
                    <li>Nilai-nilai eigen: $\\lambda = \\{1, 7, -4\\}$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Gunakan Sifat Jejak Matriks (Trace)</h5>
                    \\[ \\text{Tr}(A) = 5 + y + z = 1 + 7 + (-4) \\]
                    \\[ 5 + y + z = 4 \\implies y + z = -1 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Ekspansi Determinan untuk Nilai Eigen</h5>
                    <p>Persamaan karakteristik determinan diperoleh dengan ekspansi baris kedua (karena banyak nol):</p>
                    \\[ \\det(A - \\lambda I) = (y - \\lambda) [(5 - \\lambda)(z - \\lambda) - 3x] = 0 \\]
                    <p>Ini menunjukkan salah satu nilai eigen dijamin adalah $\\lambda = y$.</p>
                    <p>Karena nilai-nilai eigen yang diketahui adalah $\\{1, 7, -4\\}$, mari kita uji skenario bilangan bulat:</p>
                    
                    <p><strong>Kasus 1: $y = 1$</strong></p>
                    <p>Jika $y = 1$, maka dari persamaan $y + z = -1$, didapatkan $z = -2$.</p>
                    <p>Dua nilai eigen sisanya adalah $7$ dan $-4$. Persamaan kuadrat untuk sisa nilai eigen tersebut adalah:</p>
                    \\[ (\\lambda - 7)(\\lambda + 4) = \\lambda^2 - 3\\lambda - 28 = 0 \\]
                    <p>Padahal bagian kuadrat dari determinan adalah:</p>
                    \\[ \\lambda^2 - (5+z)\\lambda + (5z - 3x) = 0 \\]
                    <p>Substitusikan $z = -2$:</p>
                    \\[ \\lambda^2 - (5 - 2)\\lambda + (5(-2) - 3x) = 0 \\implies \\lambda^2 - 3\\lambda + (-10 - 3x) = 0 \\]
                    <p>Sandingkan koefisien konstanta:</p>
                    \\[ -10 - 3x = -28 \\implies -3x = -18 \\implies x = 6 \\]
                    <p>Ini menghasilkan solusi bilangan bulat yang solid: <strong>$x = 6$, $y = 1$, $z = -2$</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Alternatif Skenario Nilai Eigen Lainnya:</h5>
                    <ul>
                        <li>Jika $y = 7 \\implies z = -8 \\implies x = -12$</li>
                        <li>Jika $y = -4 \\implies z = 3 \\implies x = \\frac{8}{3}$</li>
                    </ul>
                    <p>Solusi yang paling umum digunakan dalam buku teks (bernilai bulat positif/kecil) adalah:</p>
                    \\[ x = 6, \\quad y = 1, \\quad z = -2 \\]
                </div>
            `
        },
        "soal-c-3": {
            id: "soal-c-3",
            title: "Soal C3 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Tentukan nilai-nilai eigen dan basis dari vektor eigen dari matriks:</p>
                \\[ A = \\begin{bmatrix} 4 & 0 & 1 \\\\ 2 & 3 & 2 \\\\ 1 & 0 & 4 \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Basis untuk ruang eigen berkorespondensi dengan vektor-vektor eigen bebas linear yang diperoleh dari penyelesaian sistem persamaan linear homogen $(A - \\lambda I)\\vec{v} = \\vec{0}$.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} 4 & 0 & 1 \\\\ 2 & 3 & 2 \\\\ 1 & 0 & 4 \\end{bmatrix}$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Persamaan Karakteristik & Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} 4-\\lambda & 0 & 1 \\\\ 2 & 3-\\lambda & 2 \\\\ 1 & 0 & 4-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Ekspansi sepanjang kolom ke-2:</p>
                    \\[ (3 - \\lambda) \\det \\begin{bmatrix} 4-\\lambda & 1 \\\\ 1 & 4-\\lambda \\end{bmatrix} = 0 \\]
                    \\[ (3 - \\lambda) [(4-\\lambda)^2 - 1] = 0 \\]
                    \\[ (3 - \\lambda) [\\lambda^2 - 8\\lambda + 15] = 0 \\]
                    \\[ (3 - \\lambda) (\\lambda - 3) (\\lambda - 5) = 0 \\implies -(\\lambda - 3)^2 (\\lambda - 5) = 0 \\]
                    <p>Diperoleh nilai eigen: $\\lambda = 3$ (multiplisitas aljabar 2) dan $\\lambda = 5$ (multiplisitas aljabar 1).</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Basis Ruang Eigen</h5>
                    <p><strong>A. Untuk $\\lambda = 3$:</strong></p>
                    \\[ A - 3I = \\begin{bmatrix} 1 & 0 & 1 \\\\ 2 & 0 & 2 \\\\ 1 & 0 & 1 \\end{bmatrix} \\]
                    <p>Sistem ini hanya menyisakan satu persamaan independen: $x + z = 0 \\implies z = -x$.</p>
                    <p>Variabel $y$ adalah variabel bebas (free variable). Kita memiliki dua variabel bebas ($y$ dan $x$). Ini memberikan dua basis vektor eigen bebas linear:</p>
                    <ol>
                        <li>Pilih $x = 1, y = 0 \\implies z = -1 \\implies \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}$</li>
                        <li>Pilih $x = 0, y = 1 \\implies z = 0 \\implies \\vec{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}$</li>
                    </ol>
                    <p><strong>Basis Ruang Eigen $E_3$:</strong> $\\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$.</p>
                    
                    <p><strong>B. Untuk $\\lambda = 5$:</strong></p>
                    \\[ A - 5I = \\begin{bmatrix} -1 & 0 & 1 \\\\ 2 & -2 & 2 \\\\ 1 & 0 & -1 \\end{bmatrix} \\]
                    <p>Dari baris 1: $-x + z = 0 \\implies z = x$.</p>
                    <p>Dari baris 2: $2x - 2y + 2z = 0 \\implies 4x - 2y = 0 \\implies y = 2x$.</p>
                    <p>Pilih $x = 1 \\implies y = 2, z = 1$.</p>
                    <p><strong>Basis Ruang Eigen $E_5$:</strong> $\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} \\right\\}$.</p>
                </div>
            `
        },
        "soal-c-4": {
            id: "soal-c-4",
            title: "Soal C4 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Periksa apakah matriks $A$ dapat didiagonalkan. Jika ya, tuliskan bentuk diagonalisasinya:</p>
                \\[ A = \\begin{bmatrix} -1 & 0 & 1 \\\\ 3 & 0 & -3 \\\\ 1 & 0 & -1 \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Matriks dapat didiagonalkan jika dimensi ruang eigen (multiplisitas geometrik) untuk setiap nilai eigen sama dengan multiplisitas aljabar nilai eigen tersebut.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} -1 & 0 & 1 \\\\ 3 & 0 & -3 \\\\ 1 & 0 & -1 \\end{bmatrix}$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} -1-\\lambda & 0 & 1 \\\\ 3 & -\\lambda & -3 \\\\ 1 & 0 & -1-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Ekspansi kolom ke-2:</p>
                    \\[ -\\lambda [(-1-\\lambda)^2 - 1] = 0 \\]
                    \\[ -\\lambda [\\lambda^2 + 2\\lambda] = -\\lambda^2(\\lambda + 2) = 0 \\]
                    <p>Diperoleh nilai eigen: $\\lambda = 0$ (multiplisitas aljabar 2) dan $\\lambda = -2$ (multiplisitas aljabar 1).</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Uji Multiplisitas Geometrik $\\lambda = 0$</h5>
                    \\[ A - 0I = \\begin{bmatrix} -1 & 0 & 1 \\\\ 3 & 0 & -3 \\\\ 1 & 0 & -1 \\end{bmatrix} \\]
                    <p>Sistem persamaan linear homogennya adalah:</p>
                    \\[ -x + z = 0 \\implies z = x \\]
                    <p>Baris kedua dan ketiga berkelipatan dari baris pertama. Variabel $y$ bebas total, dan kita memiliki satu variabel bebas lagi dari hubungan $z=x$.</p>
                    <p>Maka, kita mendapatkan 2 vektor eigen bebas linear:</p>
                    \\[ \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad \\vec{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\]
                    <p>Karena dimensi ruang eigen $E_0$ adalah 2 (sama dengan multiplisitas aljabarnya), maka <strong>matriks ini dapat didiagonalkan</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Cari Vektor Eigen $\\lambda = -2$</h5>
                    \\[ A - (-2)I = A + 2I = \\begin{bmatrix} 1 & 0 & 1 \\\\ 3 & 2 & -3 \\\\ 1 & 0 & 1 \\end{bmatrix} \\]
                    <p>Dari baris 1: $x + z = 0 \\implies z = -x$.</p>
                    <p>Dari baris 2: $3x + 2y - 3z = 0 \\implies 3x + 2y - 3(-x) = 0 \\implies 6x + 2y = 0 \\implies y = -3x$.</p>
                    <p>Pilih $x = 1 \\implies y = -3, z = -1$.</p>
                    \\[ \\vec{v}_3 = \\begin{bmatrix} 1 \\\\ -3 \\\\ -1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 4: Susun Diagonalisasi</h5>
                    \\[ P = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -3 \\\\ 1 & 0 & -1 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & -2 \\end{bmatrix} \\]
                    <p>Diagonalisasi matriksnya adalah $A = PDP^{-1}$ dengan matriks $P$ dan $D$ di atas.</p>
                </div>
            `
        },
        "soal-c-5": {
            id: "soal-c-5",
            title: "Soal C5 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Tentukan nilai-nilai eigen dan vektor-vektor eigen yang berkorespondensi dari matriks:</p>
                \\[ A = \\begin{bmatrix} 4 & 1 \\\\ -8 & -5 \\end{bmatrix} \\]
                <p>Tuliskan bentuk diagonalisasinya dan gunakan untuk menghitung $A^4$.</p>
            `,
            konsep: `
                <p>Sama seperti Soal C0, kita gunakan rumus $A^4 = P D^4 P^{-1}$.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} 4 & 1 \\\\ -8 & -5 \\end{bmatrix}$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} 4-\\lambda & 1 \\\\ -8 & -5-\\lambda \\end{bmatrix} = 0 \\]
                    \\[ (4-\\lambda)(-5-\\lambda) - (1)(-8) = 0 \\]
                    \\[ \\lambda^2 + \\lambda - 20 + 8 = 0 \\]
                    \\[ \\lambda^2 + \\lambda - 12 = 0 \\]
                    \\[ (\\lambda + 4)(\\lambda - 3) = 0 \\implies \\lambda_1 = -4, \\quad \\lambda_2 = 3 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Vektor Eigen</h5>
                    <p><strong>A. Untuk $\\lambda_1 = -4$:</strong></p>
                    \\[ A - (-4)I = A + 4I = \\begin{bmatrix} 8 & 1 \\\\ -8 & -1 \\end{bmatrix} \\implies 8x_1 + x_2 = 0 \\implies x_2 = -8x_1 \\implies \\vec{v}_1 = \\begin{bmatrix} 1 \\\\ -8 \\end{bmatrix} \\]
                    
                    <p><strong>B. Untuk $\\lambda_2 = 3$:</strong></p>
                    \\[ A - 3I = \\begin{bmatrix} 1 & 1 \\\\ -8 & -8 \\end{bmatrix} \\implies x_1 + x_2 = 0 \\implies x_2 = -x_1 \\implies \\vec{v}_2 = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Susun Diagonalisasi & Balikan Matriks</h5>
                    \\[ P = \\begin{bmatrix} 1 & 1 \\\\ -8 & -1 \\end{bmatrix}, \\quad D = \\begin{bmatrix} -4 & 0 \\\\ 0 & 3 \\end{bmatrix} \\]
                    \\[ \\det(P) = (1)(-1) - (1)(-8) = 7 \\]
                    \\[ P^{-1} = \\frac{1}{7} \\begin{bmatrix} -1 & -1 \\\\ 8 & 1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 4: Hitung $A^4$</h5>
                    \\[ D^4 = \\begin{bmatrix} (-4)^4 & 0 \\\\ 0 & 3^4 \\end{bmatrix} = \\begin{bmatrix} 256 & 0 \\\\ 0 & 81 \\end{bmatrix} \\]
                    \\[ A^4 = P D^4 P^{-1} = \\frac{1}{7} \\begin{bmatrix} 1 & 1 \\\\ -8 & -1 \\end{bmatrix} \\begin{bmatrix} 256 & 0 \\\\ 0 & 81 \\end{bmatrix} \\begin{bmatrix} -1 & -1 \\\\ 8 & 1 \\end{bmatrix} \\]
                    \\[ A^4 = \\frac{1}{7} \\begin{bmatrix} 256 & 81 \\\\ -2048 & -81 \\end{bmatrix} \\begin{bmatrix} -1 & -1 \\\\ 8 & 1 \\end{bmatrix} \\]
                    \\[ A^4 = \\frac{1}{7} \\begin{bmatrix} (256(-1) + 81(8)) & (256(-1) + 81(1)) \\\\ (-2048(-1) - 81(8)) & (-2048(-1) - 81(1)) \\end{bmatrix} \\]
                    \\[ A^4 = \\frac{1}{7} \\begin{bmatrix} 392 & -175 \\\\ 1400 & 1967 \\end{bmatrix} = \\begin{bmatrix} 56 & -25 \\\\ 200 & 281 \\end{bmatrix} \\]
                    <p><strong>Hasil perhitungan $A^4$ adalah:</strong> $\\begin{bmatrix} 56 & -25 \\\\ 200 & 281 \\end{bmatrix}$.</p>
                </div>
            `
        },
        "soal-c-6": {
            id: "soal-c-6",
            title: "Soal C6 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Periksa apakah matriks berikut dapat didiagonalkan. Jika ya, tuliskan bentuk diagonalisasinya:</p>
                \\[ A = \\begin{bmatrix} 1 & -2 & 8 \\\\ 0 & -1 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Jika nilai-nilai eigen yang diperoleh berbeda semua (baik bilangan real maupun kompleks), matriks dapat didiagonalkan.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} 1 & -2 & 8 \\\\ 0 & -1 & 0 \\\\ 1 & 0 & 1 \\end{bmatrix}$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} 1-\\lambda & -2 & 8 \\\\ 0 & -1-\\lambda & 0 \\\\ 1 & 0 & 1-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Ekspansi baris ke-2:</p>
                    \\[ (-1 - \\lambda) [(1-\\lambda)^2 - 8] = 0 \\]
                    <p>Ini menghasilkan akar-akar:</p>
                    \\[ \\lambda_1 = -1 \\]
                    \\[ (1-\\lambda)^2 = 8 \\implies 1-\\lambda = \\pm 2\\sqrt{2} \\implies \\lambda = 1 \\pm 2\\sqrt{2} \\]
                    <p>Diperoleh tiga nilai eigen berbeda: $\\lambda_1 = -1$, $\\lambda_2 = 1+2\\sqrt{2}$, $\\lambda_3 = 1-2\\sqrt{2}$.</p>
                    <p>Karena semuanya berbeda, matriks ini <strong>dapat didiagonalkan</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Tentukan Vektor Eigen</h5>
                    <p><strong>A. Untuk $\\lambda_1 = -1$:</strong></p>
                    \\[ A + I = \\begin{bmatrix} 2 & -2 & 8 \\\\ 0 & 0 & 0 \\\\ 1 & 0 & 2 \\end{bmatrix} \\implies z \\text{ bebas}, \\ x = -2z, \\ y = 2z \\implies \\vec{v}_1 = \\begin{bmatrix} -2 \\\\ 2 \\\\ 1 \\end{bmatrix} \\]
                    
                    <p><strong>B. Untuk $\\lambda_{2,3} = 1 \\pm 2\\sqrt{2}$:</strong></p>
                    \\[ A - (1 \\pm 2\\sqrt{2})I = \\begin{bmatrix} \\mp 2\\sqrt{2} & -2 & 8 \\\\ 0 & -2 \\mp 2\\sqrt{2} & 0 \\\\ 1 & 0 & \\mp 2\\sqrt{2} \\end{bmatrix} \\implies y = 0, \\ x = \\pm 2\\sqrt{2}z \\]
                    \\[ \\vec{v}_2 = \\begin{bmatrix} 2\\sqrt{2} \\\\ 0 \\\\ 1 \\end{bmatrix}, \\quad \\vec{v}_3 = \\begin{bmatrix} -2\\sqrt{2} \\\\ 0 \\\\ 1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Susun Diagonalisasi</h5>
                    \\[ P = \\begin{bmatrix} -2 & 2\\sqrt{2} & -2\\sqrt{2} \\\\ 2 & 0 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix} \\]
                    \\[ D = \\begin{bmatrix} -1 & 0 & 0 \\\\ 0 & 1+2\\sqrt{2} & 0 \\\\ 0 & 0 & 1-2\\sqrt{2} \\end{bmatrix} \\]
                </div>
            `
        },
        "soal-c-7": {
            id: "soal-c-7",
            title: "Soal C7 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Tunjukkan bahwa matriks berikut dapat didiagonalkan:</p>
                \\[ A = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 5 & -10 \\\\ 1 & 0 & 2 & 0 \\\\ 1 & 0 & 0 & 3 \\end{bmatrix} \\]
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Catatan Koreksi Logika:</h5>
                    <p><em>Catatan Penting:</em> Pada sesi analisis sebelumnya, terdapat simpulan keliru yang menyatakan matriks ini tidak dapat didiagonalkan. Mari kita lakukan perhitungan aljabar linear yang ketat untuk membuktikan bahwa matriks ini <strong>sebenarnya dapat didiagonalkan</strong> dengan mencari dimensi ruang eigen secara presisi.</p>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $A = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 5 & -10 \\\\ 1 & 0 & 2 & 0 \\\\ 1 & 0 & 0 & 3 \\end{bmatrix}$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Cari Persamaan Karakteristik & Nilai-Nilai Eigen</h5>
                    \\[ \\det(A - \\lambda I) = \\det \\begin{bmatrix} 1-\\lambda & 0 & 0 & 0 \\\\ 0 & 1-\\lambda & 5 & -10 \\\\ 1 & 0 & 2-\\lambda & 0 \\\\ 1 & 0 & 0 & 3-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Lakukan ekspansi determinan sepanjang baris pertama:</p>
                    \\[ (1 - \\lambda) \\det \\begin{bmatrix} 1-\\lambda & 5 & -10 \\\\ 0 & 2-\\lambda & 0 \\\\ 0 & 0 & 3-\\lambda \\end{bmatrix} = 0 \\]
                    <p>Karena submatriks tersebut berbentuk segitiga atas, determinannya cukup kalikan elemen diagonal utamanya:</p>
                    \\[ (1 - \\lambda) (1 - \\lambda) (2 - \\lambda) (3 - \\lambda) = 0 \\]
                    \\[ (1 - \\lambda)^2 (2 - \\lambda) (3 - \\lambda) = 0 \\]
                    <p>Diperoleh nilai-nilai eigen:</p>
                    <ul>
                        <li>$\\lambda_1 = 1$ (multiplisitas aljabar $m = 2$)</li>
                        <li>$\\lambda_2 = 2$ (multiplisitas aljabar $m = 1$)</li>
                        <li>$\\lambda_3 = 3$ (multiplisitas aljabar $m = 1$)</li>
                    </ul>
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Dimensi Ruang Eigen (Multiplisitas Geometrik) untuk $\\lambda = 1$</h5>
                    <p>Substitusikan $\\lambda = 1$ ke dalam $(A - I)\\vec{v} = \\vec{0}$:</p>
                    \\[ A - I = \\begin{bmatrix} 0 & 0 & 0 & 0 \\\\ 0 & 0 & 5 & -10 \\\\ 1 & 0 & 1 & 0 \\\\ 1 & 0 & 0 & 2 \\end{bmatrix} \\]
                    <p>Mari kita selesaikan SPL homogennya:</p>
                    <ol>
                        <li>Baris 2: $5z - 10w = 0 \\implies z = 2w$</li>
                        <li>Baris 3: $x + z = 0 \\implies x = -z$</li>
                        <li>Baris 4: $x + 2w = 0 \\implies x = -2w$</li>
                    </ol>
                    <p>Jika kita substitusikan $z = 2w$ ke baris 3, didapatkan $x = -2w$, yang mana konsisten/identik dengan baris 4. Variabel bebas kita adalah:</p>
                    <ul>
                        <li>$y$ bebas total (karena kolom ke-2 pada $A-I$ bernilai nol semua).</li>
                        <li>$w$ bebas total (bertindak sebagai parameter penentu $x$ dan $z$).</li>
                    </ul>
                    <p>Maka, solusi umum vektor eigen adalah:</p>
                    \\[ \\vec{v} = \\begin{bmatrix} -2w \\\\ y \\\\ 2w \\\\ w \\end{bmatrix} = y \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + w \\begin{bmatrix} -2 \\\\ 0 \\\\ 2 \\\\ 1 \\end{bmatrix} \\]
                    <p>Kita mendapatkan <strong>dua buah basis vektor eigen bebas linear</strong> untuk $\\lambda = 1$:</p>
                    \\[ \\vec{v}_1 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\vec{v}_2 = \\begin{bmatrix} -2 \\\\ 0 \\\\ 2 \\\\ 1 \\end{bmatrix} \\]
                    <p>Karena <strong>multiplisitas geometrik (dimensi = 2) sama dengan multiplisitas aljabar ($m = 2$)</strong>, maka matriks $A$ <strong>terbukti dapat didiagonalkan</strong>.</p>
                </div>
            `
        },
        "soal-c-8": {
            id: "soal-c-8",
            title: "Soal C8 (Eigen & Diagonalisasi)",
            pertanyaan: `
                <p>Tunjukkan bahwa matriks $A$ mempunyai nilai eigen nol yang bersesuaian dengan vektor $\\vec{x} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$:</p>
                \\[ A = \\begin{bmatrix} -(b+a) & a & b \\\\ a & -(a+c) & c \\\\ b & c & -(b+c) \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Sebuah nilai $\\lambda$ adalah nilai eigen dari matriks $A$ bersesuaian dengan vektor $\\vec{x}$ jika memenuhi hubungan perkalian matriks:</p>
                \\[ A\\vec{x} = \\lambda\\vec{x} \\]
                <p>Jika $\\lambda = 0$, maka kita harus menunjukkan bahwa:</p>
                \\[ A\\vec{x} = \\vec{0} \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>Matriks $A = \\begin{bmatrix} -(b+a) & a & b \\\\ a & -(a+c) & c \\\\ b & c & -(b+c) \\end{bmatrix}$</li>
                    <li>Vektor eigen $\\vec{x} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$</li>
                    <li>Nilai eigen $\\lambda = 0$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah Pembuktian:</h5>
                    <p>Mari kita kalikan matriks $A$ dengan vektor $\\vec{x}$:</p>
                    \\[ A\\vec{x} = \\begin{bmatrix} -(b+a) & a & b \\\\ a & -(a+c) & c \\\\ b & c & -(b+c) \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} \\]
                    
                    <p>Lakukan perkalian baris kali kolom:</p>
                    \\[ A\\vec{x} = \\begin{bmatrix} (-(b+a) \\cdot 1 + a \\cdot 1 + b \\cdot 1) \\\\ (a \\cdot 1 - (a+c) \\cdot 1 + c \\cdot 1) \\\\ (b \\cdot 1 + c \\cdot 1 - (b+c) \\cdot 1) \\end{bmatrix} \\]
                    
                    <p>Jabarkan elemen-elemennya:</p>
                    \\[ A\\vec{x} = \\begin{bmatrix} -b - a + a + b \\\\ a - a - c + c \\\\ b + c - b - c \\end{bmatrix} \\]
                    
                    <p>Sederhanakan penjumlahan variabel:</p>
                    \\[ A\\vec{x} = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix} \\]
                    
                    <p>Karena $A\\vec{x} = \\vec{0} = 0 \\cdot \\vec{x}$, maka terbukti secara sah bahwa $\\lambda = 0$ adalah nilai eigen dari matriks $A$ dan bersesuaian dengan vektor eigen $\\vec{x} = [1, 1, 1]^T$.</p>
                </div>
            `
        }
    },
    "soal-b": {
        "soal-b-0": {
            id: "soal-b-0",
            title: "Soal B0 (Ruang Vektor)",
            pertanyaan: `
                <p class="lead">Wah, kamu punya lembar latihan Aljabar Linear baru nih dari tugas kuliahmu. Yuk, kita bedah dan selesaikan satu per satu dengan santai tapi terstruktur!</p>
                <div class="solve-step">
                    <h5>Analisis Vektor pada Grafik</h5>
                    <p>Mari kita baca titik koordinat dari grafik kartesius terlebih dahulu. Anggap pusat koordinat berada di $O(0,0)$ di mana sumbu berpotongan (tebal). Setiap kotak bernilai 1 satuan.</p>
                    <ul>
                        <li><strong>a.</strong> Tentukan Initial Point (Titik Pangkal) dan Terminal Point (Titik Ujung) dari vektor $\\mathbf{u}$, $\\mathbf{v}$, dan $\\mathbf{w}$.</li>
                        <li><strong>b.</strong> Hitung Norm (Panjang Vektor) dari masing-masing vektor $\\mathbf{u}$, $\\mathbf{v}$, dan $\\mathbf{w}$.</li>
                        <li><strong>c.</strong> Tuliskan komponen vektornya dan hitung hasil penjumlahan vektor $\\mathbf{u} + \\mathbf{v} + \\mathbf{w}$.</li>
                    </ul>
                </div>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>1. Mencari Komponen Vektor dari Dua Titik</h5>
                    <p>Jika vektor dimulai dari titik pangkal $A(x_1, y_1)$ ke titik ujung $B(x_2, y_2)$, komponen vektornya adalah:</p>
                    \\[ \\vec{v} = [x_2 - x_1, \\ y_2 - y_1] = [\\Delta x, \\ \\Delta y] \\]
                </div>
                <div class="solve-step">
                    <h5>2. Menghitung Norm (Panjang Vektor)</h5>
                    <p>Norm dari vektor $\\vec{v} = [\\Delta x, \\Delta y]$ dirumuskan sebagai:</p>
                    \\[ \\|\\vec{v}\\| = \\sqrt{\\Delta x^2 + \\Delta y^2} \\]
                </div>
                <div class="solve-step">
                    <h5>3. Penjumlahan Vektor</h5>
                    <p>Dilakukan dengan menjumlahkan masing-masing komponen yang seletak:</p>
                    \\[ \\vec{a} + \\vec{b} = [a_x + b_x, \\ a_y + b_y] \\]
                </div>
            `,
            diketahui: `
                <div class="solve-step">
                    <h5>Titik-titik Koordinat dari Pembacaan Grafik:</h5>
                    <ul>
                        <li><strong>Vektor $\\mathbf{u}$:</strong> Pangkal $(1, 2)$, Ujung $(4, -1)$</li>
                        <li><strong>Vektor $\\mathbf{v}$:</strong> Pangkal $(1, 2)$, Ujung $(-4, -3)$</li>
                        <li><strong>Vektor $\\mathbf{w}$:</strong> Pangkal $(-4, -3)$, Ujung $(1, 5)$</li>
                    </ul>
                </div>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>a. Menentukan Initial dan Terminal Point</h5>
                    <ul>
                        <li><strong>Vektor $\\mathbf{u}$:</strong> Initial Point $(1, 2)$, Terminal Point $(4, -1)$</li>
                        <li><strong>Vektor $\\mathbf{v}$:</strong> Initial Point $(1, 2)$, Terminal Point $(-4, -3)$</li>
                        <li><strong>Vektor $\\mathbf{w}$:</strong> Initial Point $(-4, -3)$, Terminal Point $(1, 5)$</li>
                    </ul>
                </div>

                <div class="solve-step">
                    <h5>b. Menghitung Norm (Panjang Vektor)</h5>
                    <p>Kita cari dulu komponen $\\Delta x$ dan $\\Delta y$ untuk tiap vektor:</p>
                    
                    <p><strong>Vektor $\\mathbf{u}$:</strong> komponennya adalah $[4-1, \\ -1-2] = [3, -3]$</p>
                    \\[ \\|\\mathbf{u}\\| = \\sqrt{3^2 + (-3)^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2} \\approx 4.243 \\]
                    
                    <p><strong>Vektor $\\mathbf{v}$:</strong> komponennya adalah $[-4-1, \\ -3-2] = [-5, -5]$</p>
                    \\[ \\|\\mathbf{v}\\| = \\sqrt{(-5)^2 + (-5)^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.071 \\]
                    
                    <p><strong>Vektor $\\mathbf{w}$:</strong> komponennya adalah $[1-(-4), \\ 5-(-3)] = [5, 8]$</p>
                    \\[ \\|\\mathbf{w}\\| = \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89} \\approx 9.434 \\]
                </div>

                <div class="solve-step">
                    <h5>c. Komponen Vektor dan Penjumlahannya</h5>
                    <p>Dari perhitungan sebelumnya, komponen-komponen vektor adalah:</p>
                    \\[ \\mathbf{u} = [3, -3] \\]
                    \\[ \\mathbf{v} = [-5, -5] \\]
                    \\[ \\mathbf{w} = [5, 8] \\]
                    
                    <p>Lakukan penjumlahan vektor $\\mathbf{u} + \\mathbf{v} + \\mathbf{w}$:</p>
                    \\[ \\mathbf{u} + \\mathbf{v} + \\mathbf{w} = [3 + (-5) + 5, \\ -3 + (-5) + 8] \\]
                    \\[ \\mathbf{u} + \\mathbf{v} + \\mathbf{w} = [3, \\ 0] \\]
                    <p><strong>Hasil penjumlahan vektor adalah:</strong> $[3, 0]$.</p>
                </div>
            `
        },
        "soal-b-1": {
            id: "soal-b-1",
            title: "Soal B1 (Ruang Vektor)",
            pertanyaan: `
                <div class="solve-step">
                    <h5>Bagian 1:</h5>
                    <p>Tunjukkan bahwa vektor-vektor $\\mathbf{v}_1 = (1, 0, 2)$, $\\mathbf{v}_2 = (3, 1, 1)$, dan $\\mathbf{v}_3 = (2, -1, 3)$ adalah Bebas Linear.</p>
                </div>
                <div class="solve-step">
                    <h5>Bagian 2:</h5>
                    <p>Nyatakan vektor $\\mathbf{w} = (13, 2, 10)$ sebagai Kombinasi Linear dari $\\mathbf{v}_1$, $\\mathbf{v}_2$, dan $\\mathbf{v}_3$.</p>
                </div>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>1. Pembuktian Bebas Linear</h5>
                    <p>Sejumlah $n$ buah vektor di $\\mathbb{R}^n$ dikatakan bebas linear jika matriks $M$ yang dibentuk oleh vektor-vektor tersebut sebagai kolom memiliki determinan tidak sama dengan nol:</p>
                    \\[ \\det(M) \\neq 0 \\]
                </div>
                <div class="solve-step">
                    <h5>2. Kombinasi Linear</h5>
                    <p>Vektor $\\mathbf{w}$ merupakan kombinasi linear dari $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ jika terdapat skalar $k_1, k_2, k_3$ sedemikian rupa sehingga:</p>
                    \\[ \\mathbf{w} = k_1\\mathbf{v}_1 + k_2\\mathbf{v}_2 + k_3\\mathbf{v}_3 \\]
                    <p>Hal ini diselesaikan dengan sistem persamaan linear (SPL).</p>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>$\\mathbf{v}_1 = (1, 0, 2)$</li>
                    <li>$\\mathbf{v}_2 = (3, 1, 1)$</li>
                    <li>$\\mathbf{v}_3 = (2, -1, 3)$</li>
                    <li>$\\mathbf{w} = (13, 2, 10)$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Tunjukkan Bebas Linear</h5>
                    <p>Susun vektor-vektor tersebut sebagai kolom dalam matriks $M$:</p>
                    \\[ M = \\begin{bmatrix} 1 & 3 & 2 \\\\ 0 & 1 & -1 \\\\ 2 & 1 & 3 \\end{bmatrix} \\]
                    <p>Hitung determinan matriks $M$ dengan metode Sarrus:</p>
                    \\[ \\det(M) = [1\\cdot1\\cdot3 + 3\\cdot(-1)\\cdot2 + 2\\cdot0\\cdot1] - [2\\cdot1\\cdot2 + 1\\cdot(-1)\\cdot1 + 3\\cdot0\\cdot3] \\]
                    \\[ \\det(M) = [3 - 6 + 0] - [4 - 1 + 0] \\]
                    \\[ \\det(M) = [-3] - [3] = -6 \\]
                    <p>Karena $\\det(M) = -6 \\neq 0$, maka kolom-kolom matriks $M$ saling bebas linear. Jadi, <strong>vektor-vektor $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ terbukti Bebas Linear</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Nyatakan sebagai Kombinasi Linear</h5>
                    <p>Persamaan kombinasi linear:</p>
                    \\[ \\mathbf{w} = k_1\\mathbf{v}_1 + k_2\\mathbf{v}_2 + k_3\\mathbf{v}_3 \\]
                    \\[ (13, 2, 10) = k_1(1, 0, 2) + k_2(3, 1, 1) + k_3(2, -1, 3) \\]
                    <p>Dari komponen-komponennya, kita dapatkan sistem persamaan linear (SPL):</p>
                    \\[ \\text{(1) } k_1 + 3k_2 + 2k_3 = 13 \\]
                    \\[ \\text{(2) } k_2 - k_3 = 2 \\implies k_2 = k_3 + 2 \\]
                    \\[ \\text{(3) } 2k_1 + k_2 + 3k_3 = 10 \\]
                    
                    <p>Substitusikan persamaan (2) ke persamaan (1) dan (3):</p>
                    <p>Dari persamaan (1):</p>
                    \\[ k_1 + 3(k_3 + 2) + 2k_3 = 13 \\implies k_1 + 5k_3 + 6 = 13 \\implies k_1 = 7 - 5k_3 \\]
                    <p>Masukkan ke persamaan (3):</p>
                    \\[ 2(7 - 5k_3) + (k_3 + 2) + 3k_3 = 10 \\]
                    \\[ 14 - 10k_3 + k_3 + 2 + 3k_3 = 10 \\]
                    \\[ 16 - 6k_3 = 10 \\implies 6k_3 = 6 \\implies k_3 = 1 \\]
                    
                    <p>Cari nilai konstanta lainnya:</p>
                    \\[ k_2 = 1 + 2 = 3 \\]
                    \\[ k_1 = 7 - 5(1) = 2 \\]
                    
                    <p><strong>Bentuk kombinasi linearnya adalah:</strong></p>
                    \\[ \\mathbf{w} = 2\\mathbf{v}_1 + 3\\mathbf{v}_2 + \\mathbf{v}_3 \\]
                </div>
            `
        },
        "soal-b-2": {
            id: "soal-b-2",
            title: "Soal B2 (Ruang Vektor)",
            pertanyaan: `
                <p>Diketahui dua buah vektor $\\vec{a} = (3, 2, 2)$ dan $\\vec{b} = (1, 2, -2)$.</p>
                <ol>
                    <li>Cari sebuah vektor $\\vec{c}$ yang tegak lurus terhadap hasil penjumlahan $(\\vec{a} + \\vec{b})$ dan hasil pengurangan $(\\vec{a} - \\vec{b})$.</li>
                    <li>Tentukan Unit Vektor (vektor satuan) dari $\\vec{c}$.</li>
                </ol>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>1. Vektor Tegak Lurus (Cross Product)</h5>
                    <p>Vektor yang tegak lurus terhadap dua vektor $\\vec{u}$ dan $\\vec{v}$ diperoleh dari perkalian silang (cross product) mereka:</p>
                    \\[ \\vec{c} = \\vec{u} \\times \\vec{v} \\]
                </div>
                <div class="solve-step">
                    <h5>2. Vektor Satuan (Unit Vector)</h5>
                    <p>Vektor satuan $\\hat{u}$ searah vektor $\\vec{c}$ diperoleh dengan membagi vektor dengan panjangnya:</p>
                    \\[ \\hat{u} = \\frac{\\vec{c}}{\\|\\vec{c}\\|} \\]
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>$\\vec{a} = (3, 2, 2)$</li>
                    <li>$\\vec{b} = (1, 2, -2)$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Tentukan hasil Penjumlahan dan Pengurangan Vektor</h5>
                    \\[ \\vec{u} = \\vec{a} + \\vec{b} = [3+1, \\ 2+2, \\ 2+(-2)] = [4, 4, 0] \\]
                    \\[ \\vec{v} = \\vec{a} - \\vec{b} = [3-1, \\ 2-2, \\ 2-(-2)] = [2, 0, 4] \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Cari Vektor $\\vec{c}$ dengan Cross Product</h5>
                    \\[ \\vec{c} = \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 4 & 4 & 0 \\\\ 2 & 0 & 4 \\end{bmatrix} \\]
                    \\[ \\vec{c} = \\vec{i}(4\\cdot4 - 0\\cdot0) - \\vec{j}(4\\cdot4 - 0\\cdot2) + \\vec{k}(4\\cdot0 - 4\\cdot2) \\]
                    \\[ \\vec{c} = 16\\vec{i} - 16\\vec{j} - 8\\vec{k} = [16, -16, -8] \\]
                    <p><strong>Vektor yang tegak lurus adalah:</strong> $[16, -16, -8]$ (atau kelipatannya).</p>
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Hitung Vektor Satuan dari $\\vec{c}$</h5>
                    <p>Hitung panjang (norm) dari $\\vec{c}$:</p>
                    \\[ \\|\\vec{c}\\| = \\sqrt{16^2 + (-16)^2 + (-8)^2} = \\sqrt{256 + 256 + 64} = \\sqrt{576} = 24 \\]
                    <p>Vektor satuan $\\hat{u}$:</p>
                    \\[ \\hat{u} = \\frac{\\vec{c}}{\\|\\vec{c}\\|} = \\left( \\frac{16}{24}, \\ \\frac{-16}{24}, \\ \\frac{-8}{24} \\right) = \\left( \\frac{2}{3}, \\ -\\frac{2}{3}, \\ -\\frac{1}{3} \\right) \\]
                    <p><strong>Vektor satuan yang dicari adalah:</strong> $\\left( \\frac{2}{3}, \\ -\\frac{2}{3}, \\ -\\frac{1}{3} \\right)$.</p>
                </div>
            `
        },
        "soal-b-3": {
            id: "soal-b-3",
            title: "Soal B3 (Ruang Vektor)",
            pertanyaan: `
                <p>Apakah himpunan vektor $S = \\{(1,1,1,1), (2,-2,0,0), (0,3,0,0), (0,0,2,1)\\}$ Bebas Linear di $\\mathbb{R}^4$?</p>
            `,
            konsep: `
                <p>Susun vektor-vektor tersebut menjadi baris/kolom matriks persegi $4 \\times 4$. Himpunan tersebut bebas linear jika determinan matriksnya tidak sama dengan nol:</p>
                \\[ \\det(M) \\neq 0 \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Himpunan 4 buah vektor di $\\mathbb{R}^4$</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Susun ke dalam Matriks</h5>
                    \\[ M = \\begin{bmatrix} 1 & 1 & 1 & 1 \\\\ 2 & -2 & 0 & 0 \\\\ 0 & 3 & 0 & 0 \\\\ 0 & 0 & 2 & 1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Hitung Determinan Matriks $4 \\times 4$</h5>
                    <p>Kita gunakan ekspansi kofaktor sepanjang baris ke-3 (karena memiliki elemen nol terbanyak):</p>
                    \\[ \\det(M) = -3 \\cdot \\det \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 0 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix} \\]
                    <p>Sekarang, hitung determinan submatriks $3 \\times 3$ menggunakan ekspansi baris kedua:</p>
                    \\[ \\det \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & 0 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix} = -2 \\cdot \\det \\begin{bmatrix} 1 & 1 \\\\ 2 & 1 \\end{bmatrix} = -2 \\cdot (1\\cdot1 - 1\\cdot2) = -2 \\cdot (-1) = 2 \\]
                    
                    <p>Substitusikan kembali untuk mencari determinan utama:</p>
                    \\[ \\det(M) = -3 \\cdot (2) = -6 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Kesimpulan</h5>
                    <p>Karena nilai determinan $\\det(M) = -6 \\neq 0$, maka <strong>himpunan vektor $S$ terbukti Bebas Linear</strong>.</p>
                </div>
            `
        },
        "soal-b-4": {
            id: "soal-b-4",
            title: "Soal B4 (Ruang Vektor)",
            pertanyaan: `
                <p>Diketahui tiga buah vektor $\\mathbf{v}_1 = (1,0,1)$, $\\mathbf{v}_2 = (1,1,0)$, dan $\\mathbf{v}_3 = (0,1,1)$.</p>
                <ol>
                    <li>Apakah himpunan vektor tersebut bebas linear atau bergantung linear?</li>
                    <li>Nyatakan vektor $\\mathbf{w} = (1,2,3)$ sebagai kombinasi linear dari $\\mathbf{v}_1$, $\\mathbf{v}_2$, dan $\\mathbf{v}_3$.</li>
                </ol>
            `,
            konsep: `
                <p>Menggunakan konsep determinan untuk mendeteksi kebaslinieran, dan menggunakan penyelesaian SPL untuk mencari skalar kombinasi linear.</p>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>$\\mathbf{v}_1 = (1,0,1)$</li>
                    <li>$\\mathbf{v}_2 = (1,1,0)$</li>
                    <li>$\\mathbf{v}_3 = (0,1,1)$</li>
                    <li>$\\mathbf{w} = (1,2,3)$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Kebebasan Linear</h5>
                    <p>Susun matriks $M$ dari kolom vektor:</p>
                    \\[ M = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{bmatrix} \\]
                    <p>Hitung determinannya dengan metode Sarrus:</p>
                    \\[ \\det(M) = [1\\cdot1\\cdot1 + 1\\cdot1\\cdot1 + 0] - [0 + 0 + 0] = 2 \\]
                    <p>Karena $\\det(M) = 2 \\neq 0$, maka <strong>vektor-vektor tersebut Bebas Linear</strong>.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Kombinasi Linear</h5>
                    <p>Pecahkan persamaan $\\mathbf{w} = k_1\\mathbf{v}_1 + k_2\\mathbf{v}_2 + k_3\\mathbf{v}_3$:</p>
                    \\[ (1, 2, 3) = k_1(1, 0, 1) + k_2(1, 1, 0) + k_3(0, 1, 1) \\]
                    <p>Diperoleh SPL:</p>
                    \\[ \\text{(1) } k_1 + k_2 = 1 \\]
                    \\[ \\text{(2) } k_2 + k_3 = 2 \\]
                    \\[ \\text{(3) } k_1 + k_3 = 3 \\]
                    
                    <p>Jika kita jumlahkan ketiga persamaan tersebut:</p>
                    \\[ (k_1 + k_2) + (k_2 + k_3) + (k_1 + k_3) = 1 + 2 + 3 \\]
                    \\[ 2(k_1 + k_2 + k_3) = 6 \\implies k_1 + k_2 + k_3 = 3 \\]
                    
                    <p>Substitusikan persamaan (2) ke dalam persamaan penjumlahan:</p>
                    \\[ k_1 + (k_2 + k_3) = 3 \\implies k_1 + 2 = 3 \\implies k_1 = 1 \\]
                    <p>Substitusikan persamaan (3) ke dalam persamaan penjumlahan:</p>
                    \\[ (k_1 + k_3) + k_2 = 3 \\implies 3 + k_2 = 3 \\implies k_2 = 0 \\]
                    <p>Dari persamaan (1) atau (2):</p>
                    \\[ 0 + k_3 = 2 \\implies k_3 = 2 \\]
                    
                    <p><strong>Bentuk kombinasi linear akhirnya adalah:</strong></p>
                    \\[ \\mathbf{w} = \\mathbf{v}_1 + 2\\mathbf{v}_3 \\]
                </div>
            `
        },
        "soal-b-5": {
            id: "soal-b-5",
            title: "Soal B5 (Ruang Vektor)",
            pertanyaan: `
                <p>Nyatakan matriks $P = \\begin{bmatrix} 3 & 1 \\\\ 1 & -1 \\end{bmatrix}$ sebagai kombinasi linear dari matriks-matriks berikut:</p>
                \\[ A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 0 & 0 \\\\ 1 & 1 \\end{bmatrix}, \\quad C = \\begin{bmatrix} 0 & 2 \\\\ 0 & -1 \\end{bmatrix} \\]
            `,
            konsep: `
                <p>Konsep kombinasi linear berlaku sama pada ruang matriks $M_{22}$. Kita cari skalar $k_1, k_2, k_3$ yang memenuhi:</p>
                \\[ P = k_1A + k_2B + k_3C \\]
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Matriks $P, A, B, C$ berukuran $2 \\times 2$.</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Susun Persamaan Elemen Matriks</h5>
                    \\[ \\begin{bmatrix} 3 & 1 \\\\ 1 & -1 \\end{bmatrix} = k_1\\begin{bmatrix} 1 & 1 \\\\ 1 & 0 \\end{bmatrix} + k_2\\begin{bmatrix} 0 & 0 \\\\ 1 & 1 \\end{bmatrix} + k_3\\begin{bmatrix} 0 & 2 \\\\ 0 & -1 \\end{bmatrix} \\]
                    \\[ \\begin{bmatrix} 3 & 1 \\\\ 1 & -1 \\end{bmatrix} = \\begin{bmatrix} k_1 & k_1 + 2k_3 \\\\ k_1 + k_2 & k_2 - k_3 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Selesaikan Sistem Persamaan</h5>
                    <p>Dari elemen Baris 1 Kolom 1:</p>
                    \\[ k_1 = 3 \\]
                    <p>Dari elemen Baris 2 Kolom 1:</p>
                    \\[ k_1 + k_2 = 1 \\implies 3 + k_2 = 1 \\implies k_2 = -2 \\]
                    <p>Dari elemen Baris 1 Kolom 2:</p>
                    \\[ k_1 + 2k_3 = 1 \\implies 3 + 2k_3 = 1 \\implies 2k_3 = -2 \\implies k_3 = -1 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Verifikasi Konsistensi pada Elemen Terakhir</h5>
                    <p>Kita uji nilai konstanta pada Baris 2 Kolom 2:</p>
                    \\[ k_2 - k_3 = -2 - (-1) = -1 \\]
                    <p>Karena hasilnya cocok dengan entri matriks $P$ (yaitu $-1$), sistem persamaan terbukti konsisten.</p>
                    <p><strong>Matriks P sebagai kombinasi linear dari A, B, C adalah:</strong></p>
                    \\[ P = 3A - 2B - C \\]
                </div>
            `
        },
        "soal-b-6": {
            id: "soal-b-6",
            title: "Soal B6 (Ruang Vektor)",
            pertanyaan: `
                <p>Tentukan apakah himpunan polinomial kuadrat $S = \\{1 + x - 2x^2, \\ 2 + 5x - x^2, \\ x + x^2\\}$ Bebas Linear atau Bergantung Linear.</p>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Isomorfisme Ruang Polinomial $P_2$ ke $\\mathbb{R}^3$:</h5>
                    <p>Polinomial kuadrat $a_0 + a_1 x + a_2 x^2$ dapat direpresentasikan sebagai vektor komponen $(a_0, a_1, a_2)$ dalam basis standar $\\{1, x, x^2\\}$.</p>
                    <p>Kita dapat menyusun matriks komponen dan menguji nilai determinannya:</p>
                    \\[ \\det(M) = 0 \\implies \\text{Bergantung Linear (Dependent)} \\]
                    \\[ \\det(M) \\neq 0 \\implies \\text{Bebas Linear (Independent)} \\]
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong></p>
                <ul>
                    <li>$p_1(x) = 1 + x - 2x^2 \\implies \\mathbf{v}_1 = (1, 1, -2)$</li>
                    <li>$p_2(x) = 2 + 5x - x^2 \\implies \\mathbf{v}_2 = (2, 5, -1)$</li>
                    <li>$p_3(x) = x + x^2 = 0 + 1x + 1x^2 \\implies \\mathbf{v}_3 = (0, 1, 1)$</li>
                </ul>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Susun Matriks Komponen</h5>
                    \\[ M = \\begin{bmatrix} 1 & 2 & 0 \\\\ 1 & 5 & 1 \\\\ -2 & -1 & 1 \\end{bmatrix} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Hitung Determinan Matriks</h5>
                    <p>Menggunakan metode Sarrus:</p>
                    \\[ \\det(M) = [1\\cdot5\\cdot1 + 2\\cdot1\\cdot(-2) + 0\\cdot1\\cdot(-1)] - [0\\cdot5\\cdot(-2) + 1\\cdot1\\cdot(-1) + 2\\cdot1\\cdot1] \\]
                    \\[ \\det(M) = [5 - 4 + 0] - [0 - 1 + 2] \\]
                    \\[ \\det(M) = 1 - 1 = 0 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Kesimpulan</h5>
                    <p>Karena nilai determinan matriks koordinatnya sama dengan <strong>nol</strong>, maka himpunan polinomial $S$ bersifat <strong>Bergantung Linear (Linearly Dependent)</strong>.</p>
                </div>
            `
        },
        "soal-b-7": {
            id: "soal-b-7",
            title: "Soal B7 (Ruang Vektor)",
            pertanyaan: `
                <p>Diketahui dua vektor di $\\mathbb{R}^3$, yaitu $\\vec{u} = (2, 3, -1)$ dan $\\vec{v} = (1, -2, 1)$.</p>
                <ol>
                    <li>Hitunglah hasil kali titik (dot product) $\\vec{u} \\cdot \\vec{v}$.</li>
                    <li>Tentukan besar sudut $\\theta$ di antara kedua vektor tersebut.</li>
                    <li>Hitunglah hasil perkalian silang (cross product) $\\vec{u} \\times \\vec{v}$.</li>
                </ol>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Rumus-Rumus Dasar Vektor:</h5>
                    <ul>
                        <li><strong>Dot Product:</strong> $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z$</li>
                        <li><strong>Sudut Vektor:</strong> $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|}$</li>
                        <li><strong>Cross Product:</strong> $\\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_x & u_y & u_z \\\\ v_x & v_y & v_z \\end{bmatrix}$</li>
                    </ul>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> $\\vec{u} = (2, 3, -1)$ dan $\\vec{v} = (1, -2, 1)$.</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Jawaban Bagian 1: Perkalian Titik (Dot Product)</h5>
                    \\[ \\vec{u} \\cdot \\vec{v} = (2)(1) + (3)(-2) + (-1)(1) \\]
                    \\[ \\vec{u} \\cdot \\vec{v} = 2 - 6 - 1 = -5 \\]
                    <p><strong>Hasil dot product adalah:</strong> $-5$.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 2: Menghitung Sudut Vektor</h5>
                    <p>Hitung panjang masing-masing vektor:</p>
                    \\[ \\|\\vec{u}\\| = \\sqrt{2^2 + 3^2 + (-1)^2} = \\sqrt{4 + 9 + 1} = \\sqrt{14} \\]
                    \\[ \\|\\vec{v}\\| = \\sqrt{1^2 + (-2)^2 + 1^2} = \\sqrt{1 + 4 + 1} = \\sqrt{6} \\]
                    <p>Masukkan ke rumus kosinus:</p>
                    \\[ \\cos(\\theta) = \\frac{-5}{\\sqrt{14} \\cdot \\sqrt{6}} = \\frac{-5}{\\sqrt{84}} \\approx -0.5455 \\]
                    \\[ \\theta = \\arccos(-0.5455) \\approx 123.06^\\circ \\]
                    <p><strong>Besar sudut antara kedua vektor adalah:</strong> $\\approx 123.06^\\circ$.</p>
                </div>

                <div class="solve-step">
                    <h5>Jawaban Bagian 3: Perkalian Silang (Cross Product)</h5>
                    \\[ \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 2 & 3 & -1 \\\\ 1 & -2 & 1 \\end{bmatrix} \\]
                    \\[ \\vec{u} \\times \\vec{v} = \\vec{i}(3\\cdot1 - (-1)(-2)) - \\vec{j}(2\\cdot1 - (-1)\\cdot1) + \\vec{k}(2\\cdot(-2) - 3\\cdot1) \\]
                    \\[ \\vec{u} \\times \\vec{v} = \\vec{i}(3 - 2) - \\vec{j}(2 + 1) + \\vec{k}(-4 - 3) \\]
                    \\[ \\vec{u} \\times \\vec{v} = \\vec{i} - 3\\vec{j} - 7\\vec{k} = [1, -3, -7] \\]
                    <p><strong>Hasil cross product adalah:</strong> $[1, -3, -7]$.</p>
                </div>
            `
        },
        "soal-b-8": {
            id: "soal-b-8",
            title: "Soal B8 (Ruang Vektor)",
            pertanyaan: `
                <p>Rendy sedang mendesain sistem pencarian dokumen (Information Retrieval System). Diketahui query pencarian direpresentasikan sebagai vektor $\\mathbf{\\bar{Q}} = (2, 0, 1, 0, 0, 0)$. Sistem mencocokkan query dengan tiga dokumen yang direpresentasikan sebagai vektor berikut:</p>
                <ul>
                    <li>$\\mathbf{\\bar{D}}_1 = (1, 1, 0, 1, 0, 0)$</li>
                    <li>$\\mathbf{\\bar{D}}_2 = (1, 1, 1, 0, 0, 0)$</li>
                    <li>$\\mathbf{\\bar{D}}_3 = (0, 0, 1, 0, 1, 1)$</li>
                </ul>
                <ol>
                    <li>Hitunglah tingkat kemiripan (Cosine Similarity) query $\\mathbf{\\bar{Q}}$ terhadap masing-masing dokumen.</li>
                    <li>Tentukan urutan kemunculan dokumen di layar laptop Rendy dari yang paling relevan.</li>
                </ol>
            `,
            konsep: `
                <div class="solve-step">
                    <h5>Cosine Similarity pada IR System:</h5>
                    <p>Kemiripan sudut antara vektor query $\\mathbf{Q}$ dan vektor dokumen $\\mathbf{D}$ diukur dengan:</p>
                    \\[ \\text{Cos}(\\mathbf{Q}, \\mathbf{D}) = \\frac{\\mathbf{Q} \\cdot \\mathbf{D}}{\\|\\mathbf{Q}\\| \\|\\mathbf{D}\\|} \\]
                    <p>Nilai cosine similarity berkisar antara 0 (tidak ada kata kunci yang cocok) hingga 1 (sangat cocok/identik).</p>
                </div>
            `,
            diketahui: `
                <p><strong>Diketahui:</strong> Vektor query dan dokumen dalam ruang 6 dimensi.</p>
            `,
            jawaban: `
                <div class="solve-step">
                    <h5>Langkah 1: Hitung Panjang Vektor Query</h5>
                    \\[ \\|\\mathbf{\\bar{Q}}\\| = \\sqrt{2^2 + 0^2 + 1^2 + 0^2 + 0^2 + 0^2} = \\sqrt{4 + 0 + 1} = \\sqrt{5} \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 2: Hitung Kemiripan dengan Tiap Dokumen</h5>
                    
                    <p><strong>A. Cosine Similarity dengan $\\mathbf{\\bar{D}}_1$:</strong></p>
                    <p>Panjang dokumen: $\\|\\mathbf{\\bar{D}}_1\\| = \\sqrt{1^2 + 1^2 + 0^2 + 1^2 + 0^2 + 0^2} = \\sqrt{3}$</p>
                    <p>Dot product: $\\mathbf{\\bar{Q}} \\cdot \\mathbf{\\bar{D}}_1 = (2)(1) + (0)(1) + (1)(0) + 0 + 0 + 0 = 2$</p>
                    \\[ \\text{Cos}(\\mathbf{\\bar{Q}}, \\mathbf{\\bar{D}}_1) = \\frac{2}{\\sqrt{5} \\cdot \\sqrt{3}} = \\frac{2}{\\sqrt{15}} \\approx 0.516 \\]
                    
                    <p><strong>B. Cosine Similarity dengan $\\mathbf{\\bar{D}}_2$:</strong></p>
                    <p>Panjang dokumen: $\\|\\mathbf{\\bar{D}}_2\\| = \\sqrt{1^2 + 1^2 + 1^2 + 0^2 + 0^2 + 0^2} = \\sqrt{3}$</p>
                    <p>Dot product: $\\mathbf{\\bar{Q}} \\cdot \\mathbf{\\bar{D}}_2 = (2)(1) + (0)(1) + (1)(1) + 0 + 0 + 0 = 3$</p>
                    \\[ \\text{Cos}(\\mathbf{\\bar{Q}}, \\mathbf{\\bar{D}}_2) = \\frac{3}{\\sqrt{5} \\cdot \\sqrt{3}} = \\frac{3}{\\sqrt{15}} = \\frac{\\sqrt{15}}{5} \\approx 0.775 \\]
                    
                    <p><strong>C. Cosine Similarity dengan $\\mathbf{\\bar{D}}_3$:</strong></p>
                    <p>Panjang dokumen: $\\|\\mathbf{\\bar{D}}_3\\| = \\sqrt{0^2 + 0^2 + 1^2 + 0^2 + 1^2 + 1^2} = \\sqrt{3}$</p>
                    <p>Dot product: $\\mathbf{\\bar{Q}} \\cdot \\mathbf{\\bar{D}}_3 = (2)(0) + (0)(0) + (1)(1) + 0 + 0 + 0 = 1$</p>
                    \\[ \\text{Cos}(\\mathbf{\\bar{Q}}, \\mathbf{\\bar{D}}_3) = \\frac{1}{\\sqrt{5} \\cdot \\sqrt{3}} = \\frac{1}{\\sqrt{15}} \\approx 0.258 \\]
                </div>

                <div class="solve-step">
                    <h5>Langkah 3: Tentukan Urutan Dokumen yang Muncul</h5>
                    <p>Mengurutkan dari nilai similarity tertinggi ke terendah:</p>
                    <ol>
                        <li>Dokumen 2 (Similarity: $0.775$)</li>
                        <li>Dokumen 1 (Similarity: $0.516$)</li>
                        <li>Dokumen 3 (Similarity: $0.258$)</li>
                    </ol>
                    <p><strong>Urutan kemunculan dokumen di layar laptop Rendy:</strong> $D_2 \\rightarrow D_1 \\rightarrow D_3$.</p>
                </div>
            `
        }
    }
};
