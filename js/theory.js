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

            </div>
        `
    },
    "basic-theory": {
        title: "Kumpulan Materi Dasar",
        content: `
            <div class="theory-card">
                <h1>Kumpulan Materi Dasar Aljabar Linear</h1>
                <p class="lead">Selamat datang di perpustakaan materi dasar! Di sini kita membedah konsep-konsep inti Aljabar Linear secara santai, terstruktur, dan mudah dipahami oleh pemula sekalipun. Yuk, kita pelajari satu per satu!</p>
                
                <!-- SUB-MATERI 1: OPERASI MATRIKS -->
                <div class="theory-subcard mt-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2)">
                    <h3 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem">
                        <i data-lucide="grid"></i> 1. Operasi Matriks, Determinan, & Invers
                    </h3>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">💡 Pemahaman Dasar</h5>
                        <p>Bayangkan matriks seperti tabel mini yang menyimpan angka-angka. Yang paling sering menjebak pemula adalah <strong>perkalian matriks</strong>. Ingat, perkalian matriks tidak dilakukan elemen-per-elemen secara langsung, melainkan dengan cara <strong>Baris dikali Kolom</strong> (kita singkat <strong>Baris x Kolom = Ba-Ko</strong>). Invers matriks ($A^{-1}$) mirip seperti pembagian pada angka biasa (misal $5^{-1} = 1/5$). Jika kita punya persamaan matriks $QS = R$, kita tidak bisa membagi dengan $Q$, melainkan harus mengalikan dengan inversnya $Q^{-1}$ dari arah kiri.</p>
                    </div>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">📐 Pembahasan Rumus</h5>
                        <p><strong>A. Perkalian Matriks $2 \\times 2$:</strong></p>
                        \\[ \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} e & f \\\\ g & h \\end{bmatrix} = \\begin{bmatrix} ae+bg & af+bh \\\\ ce+dg & cf+dh \\end{bmatrix} \\]
                        
                        <p class="mt-2"><strong>B. Determinan dan Invers Matriks $2 \\times 2$:</strong></p>
                        \\[ \\det(A) = ad - bc \\]
                        \\[ A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} \\]
                        
                        <p class="mt-2"><strong>C. Invers Matriks $3 \\times 3$:</strong></p>
                        \\[ A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) \\]
                        <p>di mana $\\text{adj}(A)$ adalah matriks kofaktor yang di-transpose ($C^T$).</p>
                    </div>
                    
                    <div class="alert-info mt-3" style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--indigo); padding: 1rem; border-radius: 6px">
                        <h5 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem">
                            <i data-lucide="zap"></i> Tips Kreatif (Anti-Terkecoh)
                        </h5>
                        <p><strong>Ingat BA-KO!</strong> Saat mengalikan matriks, telusuri jari kiri mendatar di baris matriks pertama, dan jari kanan tegak di kolom matriks kedua. Untuk invers $2 \\times 2$, ingat jembatan keledai ini: <em>"Tukar tempat diagonal utama, ganti tanda diagonal samping, lalu bagi determinan!"</em> ($a$ dan $d$ bertukar tempat; $b$ dan $c$ berubah tanda jadi negatif).</p>
                    </div>
                </div>
                
                <!-- SUB-MATERI 2: VEKTOR -->
                <div class="theory-subcard mt-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2)">
                    <h3 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem">
                        <i data-lucide="git-merge"></i> 2. Vektor di Ruang $\\mathbb{R}^n$ (Dot & Cross Product)
                    </h3>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">💡 Pemahaman Dasar</h5>
                        <p>Vektor adalah sebuah instruksi pergeseran atau anak panah yang memiliki <strong>Arah</strong> dan <strong>Panjang</strong>. Ada dua cara mengalikan vektor:</p>
                        <ul>
                            <li><strong>Dot Product (Hasil Kali Titik):</strong> Menghasilkan <em>skalar (angka biasa)</em>. Ini mengukur seberapa sejajar kedua vektor tersebut. Jika tegak lurus, dot product-nya pasti nol!</li>
                            <li><strong>Cross Product (Hasil Kali Silang):</strong> Hanya ada di ruang 3D, menghasilkan <em>vektor baru</em> yang berdiri tegak lurus secara sempurna terhadap kedua vektor asal.</li>
                        </ul>
                    </div>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">📐 Pembahasan Rumus</h5>
                        <p><strong>A. Panjang (Norm) Vektor $\\vec{u} = [u_x, u_y, u_z]$:</strong></p>
                        \\[ \\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2 + u_z^2} \\]
                        
                        <p class="mt-2"><strong>B. Dot Product & Sudut antara Dua Vektor:</strong></p>
                        \\[ \\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta) \\]
                        \\[ \\theta = \\arccos\\left( \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} \\right) \\]
                        
                        <p class="mt-2"><strong>C. Cross Product (Metode Determinan $3 \\times 3$):</strong></p>
                        \\[ \\vec{u} \\times \\vec{v} = \\det \\begin{bmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ u_x & u_y & u_z \\\\ v_x & v_y & v_z \\end{bmatrix} = [u_y v_z - u_z v_y, \\ -(u_x v_z - u_z v_x), \\ u_x v_y - u_y v_x] \\]
                    </div>
                    
                    <div class="alert-info mt-3" style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--indigo); padding: 1rem; border-radius: 6px">
                        <h5 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem">
                            <i data-lucide="zap"></i> Tips Kreatif (Anti-Terkecoh)
                        </h5>
                        <p><strong>Siku-Siku = Dot Product 0!</strong> Jika ada soal ujian menyebutkan kata <em>"saling tegak lurus"</em> atau <em>"ortogonal"</em>, langsung buat persamaan $\\vec{u} \\cdot \\vec{v} = 0$. Ini adalah trik tercepat menyelesaikan soal parameter tak diketahui. Ingat juga bahwa perkalian silang tidak komutatif: $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$ (arahnya terbalik!).</p>
                    </div>
                </div>
                
                <!-- SUB-MATERI 3: GARIS & BIDANG -->
                <div class="theory-subcard mt-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2)">
                    <h3 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem">
                        <i data-lucide="box"></i> 3. Garis & Bidang di Ruang 3D
                    </h3>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">💡 Pemahaman Dasar</h5>
                        <p>Di ruang 3D, sebuah garis tidak bisa ditulis sebagai persamaan sederhana seperti $y=mx+c$. Kita butuh **satu titik awal** ($P_0$) dan **satu arah pergeseran** (vektor arah $\\vec{v}$). Sedangkan untuk mendefinisikan sebuah bidang datar, kita membutuhkan **satu titik acuan** di bidang dan **satu tiang penyangga** yang tegak lurus bidang tersebut, yang disebut <strong>Vektor Normal ($\\vec{n}$)</strong>. Vektor normal ini mengunci kemiringan bidang agar tidak goyang.</p>
                    </div>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">📐 Pembahasan Rumus</h5>
                        <p><strong>A. Persamaan Vektor & Parametrik Garis melalui $P_0(x_0, y_0, z_0)$ searah $\\vec{v}=[a,b,c]$:</strong></p>
                        \\[ \\vec{r} = \\vec{r}_0 + t\\vec{v} \\implies [x, y, z] = [x_0, y_0, z_0] + t[a, b, c] \\]
                        \\[ x = x_0 + at, \\quad y = y_0 + bt, \\quad z = z_0 + ct \\]
                        
                        <p class="mt-2"><strong>B. Persamaan Bidang (Bentuk Point-Normal):</strong></p>
                        \\[ a(x-x_0) + b(y-y_0) + c(z-z_0) = 0 \\implies ax + by + cz = d \\]
                        <p>di mana $d = ax_0 + by_0 + cz_0$ dan $\\vec{n}=[a,b,c]$ adalah vektor normal bidang.</p>
                    </div>
                    
                    <div class="alert-info mt-3" style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--indigo); padding: 1rem; border-radius: 6px">
                        <h5 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem">
                            <i data-lucide="zap"></i> Tips Kreatif (Anti-Terkecoh)
                        </h5>
                        <p><strong>Koefisien Bidang adalah Normalnya!</strong> Jika Anda melihat persamaan bidang seperti $2x - 3y + z = 8$, Anda langsung mengetahui vektor normalnya adalah $\\vec{n} = [2, -3, 1]$ tanpa perlu menghitung apa pun! Ini sangat berguna saat Anda mencari hubungan bidang (sejajar/tegak lurus) di soal ujian.</p>
                    </div>
                </div>
                
                <!-- SUB-MATERI 4: NILAI EIGEN -->
                <div class="theory-subcard mt-4" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2)">
                    <h3 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem">
                        <i data-lucide="cpu"></i> 4. Nilai Eigen, Vektor Eigen, & Diagonalisasi
                    </h3>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">💡 Pemahaman Dasar</h5>
                        <p>Biasanya, mengalikan matriks $A$ dengan vektor $\\vec{v}$ akan merotasi arah vektor tersebut. Namun, untuk beberapa vektor istimewa yang disebut <strong>Vektor Eigen</strong>, arahnya <em>tidak berubah sama sekali</em>! Vektor tersebut hanya memanjang atau memendek sebesar faktor skala $\\lambda$ yang dinamakan <strong>Nilai Eigen</strong>. Diagonalisasi ($P^{-1}AP=D$) adalah proses menata vektor eigen ini menjadi matriks transisi $P$ agar matriks asal $A$ berubah menjadi matriks diagonal $D$ yang super mudah dihitung pangkat tingginya.</p>
                    </div>
                    
                    <div class="mt-3">
                        <h5 style="color: var(--cyan); margin-bottom: 0.5rem">📐 Pembahasan Rumus</h5>
                        <p><strong>A. Persamaan Karakteristik (Mencari $\\lambda$):</strong></p>
                        \\[ \\det(A - \\lambda I) = 0 \\]
                        <p>di mana $I$ is matriks identitas.</p>
                        
                        <p class="mt-2"><strong>B. Mencari Vektor Eigen:</strong></p>
                        <p>Masukkan $\\lambda$ yang didapat ke dalam persamaan homogen:</p>
                        \\[ (A - \\lambda I)\\vec{v} = \\vec{0} \\]
                        <p>Selesaikan SPL homogen ini dengan eliminasi Gauss-Jordan (RREF).</p>
                        
                        <p class="mt-2"><strong>C. Diagonalisasi:</strong></p>
                        \\[ P^{-1}AP = D \\implies D = \\begin{bmatrix} \\lambda_1 & 0 & 0 \\\\ 0 & \\lambda_2 & 0 \\\\ 0 & 0 & \\lambda_3 \\end{bmatrix} \\]
                        <p>di mana kolom-kolom matriks $P$ berisi basis-basis vektor eigen bebas linear yang bersesuaian dengan $\\lambda_i$ pada matriks diagonal $D$.</p>
                    </div>
                    
                    <div class="alert-info mt-3" style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--indigo); padding: 1rem; border-radius: 6px">
                        <h5 style="color: var(--indigo); display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem">
                            <i data-lucide="zap"></i> Tips Kreatif (Anti-Terkecoh)
                        </h5>
                        <p><strong>Trik Cek Cepat Nilai Eigen di Ujian!</strong> Gunakan hukum Trace dan Determinan untuk memastikan nilai eigen Anda benar:</p>
                        <ul>
                            <li>Jumlah nilai eigen ($\\lambda_1 + \\lambda_2 + ...$) **harus sama dengan** Trace matriks (jumlah angka di diagonal utama matriks $A$).</li>
                            <li>Perkalian nilai eigen ($\\lambda_1 \\cdot \\lambda_2 \\cdot ...$) **harus sama dengan** determinan matriks $A$.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="theory-navigation mt-5" style="display: flex; justify-content: center">
                    <button class="btn btn-primary btn-sm btn-nav-redirect" data-redirect="dashboard">
                        <i data-lucide="layout-dashboard"></i> Kembali ke Dashboard Utama
                    </button>
                </div>
            </div>
        `
    }
};
