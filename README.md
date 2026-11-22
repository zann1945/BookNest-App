# 📚 BookNest

**BookNest** adalah aplikasi web untuk mencatat dan memantau kebiasaan membaca. Kamu bisa menyimpan koleksi buku, mencatat progres halaman, menulis jurnal bacaan, dan menetapkan target membaca tahunan, semuanya dalam satu ruang pribadi yang rapi.

Aplikasi ini berjalan sepenuhnya di browser, tanpa server, tanpa akun, dan tanpa instalasi.

## ✨ Fitur

- **Dashboard**: ringkasan jumlah buku, buku yang sedang dibaca, halaman tercatat, dan buku yang baru ditambahkan.
- **Perpustakaan pribadi**: tambah, ubah, dan hapus buku lengkap dengan penulis, genre, jumlah halaman, rating bintang, dan ulasan.
- **Status bacaan**: Currently Reading, Want to Read, dan Finished.
- **Progres membaca**: perbarui halaman terakhir, lalu lihat persentasenya. Buku otomatis selesai saat halaman terakhir tercapai.
- **Pencarian, filter, dan urutan**: cari berdasarkan judul, penulis, atau genre; urutkan berdasarkan terbaru, judul, penulis, atau progres.
- **Favorit**: tandai buku yang paling berkesan.
- **Reading Goals**: atur target jumlah buku per tahun dan pantau lewat grafik lingkaran.
- **Reading Journal**: simpan catatan, kutipan favorit, dan refleksi, bisa dikaitkan dengan buku tertentu.
- **Statistik**: lihat sebaran buku berdasarkan genre.
- **Backup dan Import**: unduh data sebagai file JSON dan pulihkan kapan saja.
- **Pengingat harian**: notifikasi seperti "Kamu belum membaca buku hari ini?" pada jam yang kamu pilih (butuh izin notifikasi).
- **Responsif**: nyaman dipakai di HP maupun komputer.

## 🚀 Cara Menjalankan

1. Unduh atau clone repositori ini.
2. Buka file `index.html` di browser.

Tidak ada dependensi atau proses build.

## 🌐 Demo Online

Setelah GitHub Pages aktif, aplikasi dapat dibuka di:

`https://USERNAME.github.io/NAMA-REPOSITORI/`

## 💾 Penyimpanan Data

Data disimpan di `localStorage` browser masing-masing pengguna. Artinya data tidak dikirim ke server dan tidak tersinkron antar perangkat. Gunakan tombol **Backup** untuk memindahkan data ke perangkat lain, lalu **Import backup** untuk memulihkannya.

## 🗂️ Struktur Proyek

```
├── index.html   # struktur halaman
├── style.css    # tampilan dan tata letak
├── script.js    # logika aplikasi
├── sw.js        # service worker untuk notifikasi
├── manifest.json# pengaturan agar bisa diinstal (PWA)
└── icon-*.png   # ikon aplikasi
```

## 🛠️ Teknologi

HTML, CSS, dan JavaScript murni (vanilla), tanpa framework maupun library eksternal.

## 👤 Pembuat

Dibuat oleh Zan Malaka.
