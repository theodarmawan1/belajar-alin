// Database Materi Teori Belajar Aljabar Linear - Garis & Bidang 3D
const theoryContent = {
    "theory-1": {
        title: "Babak 1: Dasar Mutlak (Dunia 2D & Vektor)",
        content: `
            <div class="theory-card">
                <h1>Babak 1: Dasar Mutlak (Dunia 2D & Vektor)</h1>
                <p class="lead">Sebelum melompat ke dunia 3 dimensi, kita harus memiliki fondasi yang kokoh tentang <strong>Vektor</strong>. Bayangkan vektor bukan sebagai angka rumit, melainkan sebagai <em>anak panah</em> yang memiliki <strong>Arah</strong> dan <strong>Panjang</strong>.</p>
                
                <h2>1. Titik vs Vektor</h2>
                <p>Ada perbedaan mendasar antara titik dan vektor:</p>
                <ul>
                    <li><strong>Titik $A(x, y)$</strong>: Merupakan sebuah lokasi murni di dalam ruang. Titik tidak memiliki arah. Contohnya, koordinat rumah Anda di peta.</li>
                    <li><strong>Vektor $\\vec{v} = [x, y]$</strong>: Merupakan sebuah instruksi pergeseran atau perpindahan. Jika $\\vec{v} = [3, 2]$, artinya <em>"bergeserlah 3 langkah ke kanan dan 2 langkah ke atas"</em> dari titik mana pun Anda berada.</li>
                </ul>

                <div class="alert-info">
                    <i data-lucide="info"></i>
                    <div class="alert-content">
                        <h5>Mengapa ini penting?</h5>
                        <p>Di dalam ruang 3D, semua garis dan bidang didefinisikan menggunakan perpaduan antara lokasi awal (titik) dan petunjuk arah pergeseran (vektor).</p>
                    </div>
                </div>

                <h2>2. Persamaan Garis di 2D (Sudut Pandang Baru)</h2>
                <p>Di sekolah menengah, Anda mungkin mengenal rumus garis lurus $y = mx + c$. Namun, untuk tingkat lanjut, kita mendefinisikan garis menggunakan <strong>titik awal</strong> dan <strong>vektor arah</strong>.</p>
                <p>Bayangkan Anda sedang berdiri di sebuah titik $A$ dan ingin berjalan mengikuti jalur lurus yang searah dengan vektor arah $\\vec{v}$. Setiap titik $P(x, y)$ yang Anda lalui di sepanjang garis tersebut dapat dicapai menggunakan rumus:</p>
                
                <div class="math-block">
                    \\[ P = A + t\\vec{v} \\]
                </div>
                
                <p>Di mana $t$ adalah sebuah pengali skalar (parameter waktu/langkah):</p>
                <ul>
                    <li>Jika $t = 0$, Anda berada di titik awal $A$.</li>
                    <li>Jika $t = 1$, Anda melangkah sejauh satu vektor $\\vec{v}$.</li>
                    <li>Jika $t = -1$, Anda melangkah ke arah berlawanan.</li>
                    <li>Jika $t$ berubah dari $-\\infty$ ke $+\\infty$, Anda akan menyapu seluruh garis lurus tersebut.</li>
                </ul>
                <p>Ini disebut sebagai <strong>Persamaan Parametrik Garis</strong>.</p>

                <div class="theory-navigation mt-5">
                    <span></span>
                    <button class="btn btn-primary btn-sm btn-next-theory" data-next="theory-2">
                        Lanjut ke Babak 2 <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        `
    },
    "theory-2": {
        title: "Babak 2: Persamaan Garis di Ruang 3D",
        content: `
            <div class="theory-card">
                <h1>Babak 2: Persamaan Garis di Ruang 3D</h1>
                <p>Sekarang kita tambahkan satu sumbu lagi, yaitu sumbu $z$ yang mewakili tinggi atau kedalaman ruang. Konsep dasar parametrik garis dari 2D tetap sama, kita hanya menambahkan satu komponen $z$.</p>
                
                <h2>Modal Utama Membuat Garis 3D</h2>
                <p>Untuk menuliskan persamaan sebuah garis lurus di ruang 3D, Anda wajib memiliki dua modal informasi:</p>
                <ol>
                    <li>Satu titik yang dilalui garis: $P_0(x_0, y_0, z_0)$.</li>
                    <li>Satu vektor yang sejajar dengan arah garis (Vektor Arah): $\\vec{v} = [a, b, c]$.</li>
                </ol>

                <h2>Tiga Bentuk Persamaan Garis 3D</h2>
                
                <h3>A. Bentuk Vektor</h3>
                <p>Menyatakan garis sebagai penjumlahan vektor posisi titik awal dengan kelipatan vektor arah:</p>
                <div class="math-block">
                    \\[ \\vec{r} = \\vec{r}_0 + t\\vec{v} \\]
                    \\[ [x, y, z] = [x_0, y_0, z_0] + t[a, b, c] \\]
                </div>

                <h3>B. Bentuk Parametrik</h3>
                <p>Jika kita memecah komponen $x$, $y$, dan $z$ dari bentuk vektor di atas, kita mendapatkan tiga persamaan terpisah:</p>
                <div class="math-block">
                    \\[ x = x_0 + at \\]
                    \\[ y = y_0 + bt \\]
                    \\[ z = z_0 + ct \\]
                </div>

                <h3>C. Bentuk Simetris</h3>
                <p>Jika kita mengisolasi parameter $t$ dari masing-masing persamaan parametrik ($t = \\frac{x-x_0}{a}$, $t = \\frac{y-y_0}{b}$, dst.), kita mendapatkan bentuk simetris:</p>
                <div class="math-block">
                    \\[ \\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c} \\]
                </div>

                <div class="alert-info">
                    <i data-lucide="zap"></i>
                    <div class="alert-content">
                        <h5>Contoh Cepat</h5>
                        <p>Tentukan persamaan garis yang melalui titik $A(1, 2, 3)$ dengan vektor arah $\\vec{v} = [4, 5, 6]$.</p>
                        <p><strong>Parametrik:</strong> $x = 1+4t$, $y = 2+5t$, $z = 3+6t$</p>
                        <p><strong>Simetris:</strong> $\\frac{x-1}{4} = \\frac{y-2}{5} = \\frac{z-3}{6}$</p>
                    </div>
                </div>

                <div class="theory-navigation mt-5">
                    <button class="btn btn-outline btn-sm btn-prev-theory" data-prev="theory-1">
                        <i data-lucide="arrow-left"></i> Kembali ke Babak 1
                    </button>
                    <button class="btn btn-primary btn-sm btn-next-theory" data-next="theory-3">
                        Lanjut ke Babak 3 <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        `
    },
    "theory-3": {
        title: "Babak 3: Persamaan Bidang (Plane) di 3D",
        content: `
            <div class="theory-card">
                <h1>Babak 3: Persamaan Bidang (Plane) di 3D</h1>
                <p>Apa itu bidang? Bayangkan selembar kertas tipis yang sangat lebar tanpa batas yang melayang di ruang 3 dimensi.</p>
                
                <h2>Modal Utama Mengunci Posisi Bidang</h2>
                <p>Agar sebuah bidang di ruang 3D terkunci posisinya (tidak bergeser atau berputar sembarangan), kita butuh dua informasi:</p>
                <ol>
                    <li>Satu titik pada bidang: $P_0(x_0, y_0, z_0)$.</li>
                    <li>Satu vektor yang tegak lurus ($90^\\circ$) terhadap bidang tersebut. Vektor sakti ini disebut sebagai <strong>Vektor Normal</strong> ($\\vec{n} = [a, b, c]$).</li>
                </ol>

                <div class="alert-info">
                    <i data-lucide="help-circle"></i>
                    <div class="alert-content">
                        <h5>Kenapa harus vektor yang tegak lurus?</h5>
                        <p>Karena jika sebuah vektor tegak lurus dengan permukaan bidang, maka ia dijamin akan tegak lurus dengan seluruh garis atau vektor yang berada di dalam bidang tersebut. Ini adalah kunci matematika untuk menurunkan rumusnya!</p>
                    </div>
                </div>

                <h2>Menurunkan Rumus Bidang dengan Dot Product</h2>
                <p>Dalam aljabar vektor, jika dua vektor saling tegak lurus, hasil perkalian titik (<strong>dot product</strong>) mereka adalah <strong>nol</strong>.</p>
                <p>Jika $P(x, y, z)$ adalah titik sembarang lainnya pada bidang, maka vektor $\\vec{P_0 P} = [x-x_0, y-y_0, z-z_0]$ pasti menempel di bidang, sehingga ia tegak lurus dengan vektor normal $\\vec{n}$.</p>
                
                <div class="math-block">
                    \\[ \\vec{n} \\cdot \\vec{P_0 P} = 0 \\]
                    \\[ [a, b, c] \\cdot [x-x_0, y-y_0, z-z_0] = 0 \\]
                </div>
                
                <p>Dari perkalian titik ini, muncullah <strong>Persamaan Standar Bidang</strong>:</p>
                <div class="math-block">
                    \\[ a(x-x_0) + b(y-y_0) + c(z-z_0) = 0 \\]
                </div>

                <p>Jika kita kalikan ke dalam dan satukan konstanta numeriknya (kita misalkan $-ax_0 - by_0 - cz_0 = -d$, atau dipindahkan ke ruas kanan), kita mendapatkan <strong>Persamaan Umum Bidang</strong>:</p>
                <div class="math-block">
                    \\[ ax + by + cz = d \\]
                </div>

                <h3>💡 Kemampuan Membaca Bidang (Kemampuan Mahir)</h3>
                <p>Jika Anda melihat sebuah persamaan bidang seperti $3x - 4y + 2z = 10$, Anda tidak perlu menghitung apa pun untuk mengetahui arah tegak lurusnya. Vektor normalnya tinggal diambil langsung dari koefisien variabel $x, y, z$, yaitu:</p>
                <div class="math-block">
                    \\[ \\vec{n} = [3, -4, 2] \\]
                </div>

                <div class="theory-navigation mt-5">
                    <button class="btn btn-outline btn-sm btn-prev-theory" data-prev="theory-2">
                        <i data-lucide="arrow-left"></i> Kembali ke Babak 2
                    </button>
                    <button class="btn btn-primary btn-sm btn-next-theory" data-next="theory-relations">
                        Lanjut ke Hubungan Geometris <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        `
    },
    "theory-relations": {
        title: "Hubungan Geometris Garis dan Bidang",
        content: `
            <div class="theory-card">
                <h1>Hubungan Geometris Garis dan Bidang</h1>
                <p>Setelah menguasai rumus-rumus dasarnya, langkah selanjutnya adalah menganalisis interaksi antar objek geometri di ruang 3D.</p>
                
                <h2>1. Dua Bidang Sejajar</h2>
                <p>Bayangkan dua lantai di gedung bertingkat. Keduanya adalah bidang sejajar yang tidak akan pernah bertemu. Karena sejajar, tiang penunjuk arah mereka (vektor normal) pasti menunjuk ke arah yang sama atau berlawanan secara total. Secara matematika, vektor normal bidang kedua merupakan kelipatan dari vektor normal bidang pertama:</p>
                <div class="math-block">
                    \\[ \\vec{n}_2 = k \\cdot \\vec{n}_1 \\]
                </div>
                <p><em>Contoh:</em> Bidang $x+2y+3z=4$ ($\\vec{n}_1 = [1,2,3]$) sejajar dengan bidang $2x+4y+6z=10$ ($\\vec{n}_2 = [2,4,6]$) karena $\\vec{n}_2 = 2\\vec{n}_1$.</p>

                <h2>2. Dua Bidang Tegak Lurus</h2>
                <p>Bayangkan lantai rumah Anda dan dinding rumah Anda. Mereka membentuk sudut tepat $90^\\circ$. Jika dua bidang tegak lurus, maka vektor normal masing-masing bidang juga pasti tegak lurus, sehingga hasil dot product-nya adalah nol:</p>
                <div class="math-block">
                    \\[ \\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\]
                </div>

                <h2>3. Garis dan Bidang: Jebakan Intuisi!</h2>
                <p>Ini adalah bagian yang paling sering membingungkan siswa baru. Perhatikan hubungan berikut:</p>
                
                <div class="alert-info">
                    <i data-lucide="moon"></i>
                    <div class="alert-content">
                        <h5>Analogi Meja dan Botol Sirup</h5>
                        <p>Bayangkan permukaan meja makan sebagai <strong>Bidang</strong>, dan sebuah botol sirup yang berdiri tegak di atasnya sebagai <strong>Vektor Normal ($\\vec{n}$)</strong>.</p>
                        <p>Sekarang ambil sebuah pulpen sebagai <strong>Garis dengan arah ($\\vec{v}$)</strong>:</p>
                        <ul>
                            <li><strong>Kasus Sejajar:</strong> Posisikan pulpen mendatar di udara (sejajar permukaan meja). Lihat hubungannya dengan botol sirup. Mereka membentuk sudut $90^\\circ$ (tegak lurus)! Jadi, jika vektor arah garis tegak lurus dengan normal bidang ($\\vec{n} \\cdot \\vec{v} = 0$), maka garis dan bidang justru <strong>sejajar</strong>.</li>
                            <li><strong>Kasus Tegak Lurus:</strong> Posisikan pulpen tegak (searah dengan botol sirup). Pulpen sekarang menembus meja secara tegak lurus. Jadi, jika vektor arah garis sejajar dengan normal bidang ($\\vec{v} = k\\vec{n}$), maka garis dan bidang justru <strong>tegak lurus</strong>.</li>
                        </ul>
                    </div>
                </div>

                <h2>4. Titik Tembus vs Garis Memotong</h2>
                <p>Apakah perbedaan antara "garis memotong" dan "titik tembus"?</p>
                <ul>
                    <li><strong>Garis Memotong (Intersection):</strong> Istilah umum hubungan antar objek. Misalnya, bidang memotong bidang menghasilkan sebuah <strong>Garis Perpotongan</strong>.</li>
                    <li><strong>Titik Tembus (Piercing Point):</strong> Koordinat titik tunggal $(x, y, z)$ yang terbentuk secara fisik ketika sebuah garis menembus sebuah bidang (seperti jarum menusuk kertas).</li>
                </ul>

                <h2>5. Mencari Persamaan Garis Perpotongan Dua Bidang</h2>
                <p>Jika dua bidang berpotongan, garis perpotongannya berada pada kedua bidang tersebut sekaligus. Ini berarti vektor arah garis perpotongan tersebut ($\\vec{v}$) harus tegak lurus dengan normal bidang 1 ($\\vec{n}_1$) sekaligus normal bidang 2 ($\\vec{n}_2$).</p>
                <p>Alat matematika sakti untuk mencari vektor yang tegak lurus dengan dua vektor lainnya secara bersamaan adalah <strong>Perkalian Silang (Cross Product)</strong>:</p>
                <div class="math-block">
                    \\[ \\vec{v} = \\vec{n}_1 \\times \\vec{n}_2 \\]
                </div>

                <div class="theory-navigation mt-5">
                    <button class="btn btn-outline btn-sm btn-prev-theory" data-prev="theory-3">
                        <i data-lucide="arrow-left"></i> Kembali ke Babak 3
                    </button>
                    <button class="btn btn-secondary btn-sm btn-nav-redirect" data-redirect="soal-a">
                        Coba Latihan Soal Topic A <i data-lucide="help-circle"></i>
                    </button>
                </div>
            </div>
        `
    }
};
