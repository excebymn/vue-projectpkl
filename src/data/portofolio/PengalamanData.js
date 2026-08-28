const projects = [
  // TAHUN 2017
  {
    id: 1,
    title: "Audit Sertifikat ISO 9001:2015",
    client: "Bappeda Provinsi Sulawesi Selatan",
    location: "Makassar",
    category: "ISO 9001:2015"
  },
  {
    id: 2,
    title: "Identifikasi Potensi IKM Jawa Timur",
    client: "Dinas Perindustrian dan Perdagangan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Survey Industri"
  },
  {
    id: 3,
    title: "Belanja Jasa Konsultansi Manajemen/Keuangan/SDM (SOP Dinas Kelautan & Perikanan Prov. Jatim)",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Penyusunan SOP"
  },
  {
    id: 4,
    title: "SOP Dinas Kelautan Perikanan Provinsi Jawa Timur Tahun Anggaran 2017",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Malang, Probolinggo, Surabaya",
    category: "Penyusunan SOP"
  },
  {
    id: 5,
    title: "Jasa Konsultansi Penyusunan Analisis Jabatan di Lingkungan Pemerintah Kabupaten Lebak",
    client: "Bagian Organisasi Setda Kabupaten Lebak",
    location: "Rangkasbitung, Lebak",
    category: "Analisis Jabatan"
  },

  // TAHUN 2018
  {
    id: 6,
    title: "Jasa Konsultansi Manajemen dan Audit Surveillance SMM ISO 9001:2015",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 7,
    title: "Pengadaan Pekerjaan Barang/Jasa Pelatihan Tim Building (Training Survey Kepuasan Masyarakat, Manajemen Mutu ISO, Pelayanan Prima) dan Outbound UPTD RSUD SLG Kediri",
    client: "Dinas Kesehatan Kabupaten Kediri",
    location: "Kediri",
    category: "Pelatihan Manajemen SDM"
  },
  {
    id: 8,
    title: "Audit Surveillance",
    client: "UPT BLK Jombang Dinas Tenaga Kerja dan Transmigrasi Prov. Jatim",
    location: "Jombang",
    category: "ISO 9001:2015"
  },
  {
    id: 9,
    title: "Jasa Konsultansi Penelitian Evaluasi Pemantapan ISO Lanjutan",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 10,
    title: "Belanja Jasa Konsultansi Manajemen/Keuangan/SDM (Review SOP UPT Dinas Kelautan dan Perikanan Prov. Jatim)",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Penyusunan SOP"
  },
  {
    id: 11,
    title: "Jasa Konsultansi Penyusunan Roadmap Reformasi Birokrasi",
    client: "Bagian Organisasi Setda Kabupaten Pandeglang",
    location: "Pandeglang",
    category: "Roadmap RB"
  },
  {
    id: 12,
    title: "Jasa konsultansi Penyusunan Analisis Jabatan di Lingkungan Pemerintah Kabupaten Lebak",
    client: "Bagian Organisasi Setda Kabupaten Lebak",
    location: "Rangkasbitung",
    category: "Analisis Jabatan"
  },
  {
    id: 13,
    title: "Belanja Jasa Manajemen Organisasi Kepemudaan",
    client: "Dinas Kepemudaan dan Olahraga Kabupaten Bojonegoro",
    location: "Bojonegoro",
    category: "Manajemen SDM"
  },
  {
    id: 14,
    title: "Belanja Jasa Konsultansi Surveillance ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 15,
    title: "Jasa Konsultansi Pendampingan SKM",
    client: "Kecamatan Sukodono",
    location: "Sidoarjo",
    category: "IKM"
  },
  {
    id: 16,
    title: "Belanja Jasa Konsultansi Manajemen/Keuangan/SDM (Indeks Kepuasan Pelanggan) di UPT PBAT Umbulan TA 2018",
    client: "UPT PBAT Umbulan Dinas Kelautan dan Perikanan Prov. Jatim",
    location: "Pasuruan",
    category: "IKM"
  },
  {
    id: 17,
    title: "Belanja Jasa Konsultansi Manajemen (Evaluasi Pelayanan Kependudukan dan Pencatatan Sipil)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kota Surabaya",
    location: "Surabaya",
    category: "IKM & Pelayanan Publik"
  },
  {
    id: 18,
    title: "Belanja Jasa Konsultansi Manajemen/Keuangan/SDM UPT Pengembangan Budidaya Air Payau Bangil Kajian Index Kepuasan Masyarakat (IKM) TA 2018",
    client: "UPT PBAP Bangil Dinas Kelautan dan Perikanan Prov. Jatim",
    location: "Bangil, Pasuruan",
    category: "IKM"
  },
  {
    id: 19,
    title: "Biaya Jasa Konsultansi Pihak Ketiga/Perguruan Tinggi/LSM Pelaksan Survey IKM",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IKM"
  },
  {
    id: 20,
    title: "Belanja Jasa Konsultansi Penelitian",
    client: "Bagian Organisasi Setda Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 21,
    title: "Penyusunan Survey Indeks Kepuasan Masyarakat",
    client: "Badan Kepegawaian Daerah Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },

  // TAHUN 2019
  {
    id: 22,
    title: "Belanja Sosialisasi, Bimtek, Aplikasi BMW Untuk Aparatur Desa",
    client: "Kecamatan Sukodono",
    location: "Sidoarjo",
    category: "Bimbingan Teknis"
  },
  {
    id: 23,
    title: "Belanja Jasa Konsultansi Manajemen/Keuangan/SDM Penyusunan Survey Kepuasan Masyarakat (SKM) Dinas Kelautan dan Perikanan Prov. Jatim TA 2019",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "IKM"
  },
  {
    id: 24,
    title: "Survey Kepuasan Masyarakat",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 25,
    title: "Belanja Jasa Penyusunan Indeks Kepuasan Masyarakat",
    client: "Badan Kepegawaian Daerah Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 26,
    title: "Jasa Konsultansi Penelitian Survey Kepuasan Masyarakat",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 27,
    title: "Survey Kepuasan Masyarakat dan Monitoring",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IKM"
  },
  {
    id: 28,
    title: "Belanja Jasa Konsultasi Manajemen/Keuangan/SDM (Pembinaan Sumber Daya Aparatur) Survei Kepuasan Masyarakat Eksternal dan Internal RSJ Menur Prov. Jatim",
    client: "Rumah Sakit Jiwa Menur Provinsi Jawa Timur",
    location: "Surabaya",
    category: "IKM & SKP"
  },
  {
    id: 29,
    title: "Jasa Survey F03 Untuk Evaluasi Pelayanan Publik",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Survey Kepuasan Pelayanan"
  },
  {
    id: 30,
    title: "Survey Kepuasan Masyarakat DPMPTSP Provinsi Jawa Timur",
    client: "DPMPTSP Provinsi Jawa Timur",
    location: "Surabaya, Madiun, Malang",
    category: "IKM"
  },
  {
    id: 31,
    title: "Belanja Jasa Konsultansi Survey Kepuasan Masyarakat",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "IKM"
  },
  {
    id: 32,
    title: "Belanja Jasa Konsultansi Survey Kepuasan Masyarakat (SKM)",
    client: "UPT Budidaya Air Payau dan Laut Dinas Kelautan dan Perikanan Prov. Jatim",
    location: "Bangil",
    category: "IKM"
  },
  {
    id: 33,
    title: "Paket Pekerjaan Jasa Konsultansi/Pendampingan Review Renstra 2016-2021",
    client: "Dinas Perikanan Kabupaten Sidoarjo",
    location: "Sidoarjo",
    category: "Renstra"
  },
  {
    id: 34,
    title: "Jasa Konsultan Penyesuaian Dokumen ISO/IEC 17025:2017 di UPT LAB KESKANLING Pasuruan TA 2019",
    client: "UPT Laboratorium Kesehatan Ikan dan Lingkungan Dinas Kelautan dan Perikanan Prov. Jatim",
    location: "Pasuruan",
    category: "ISO Lab 17025:2017"
  },
  {
    id: 35,
    title: "Penguatan Mutu SMM ISO 9001:2015",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 36,
    title: "Pengadaan Langsung Jasa Penyusunan ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kota Mojokerto",
    location: "Mojokerto",
    category: "ISO 9001:2015"
  },
  {
    id: 37,
    title: "Jasa Konsultansi Penelitian Evaluasi Pemantapan ISO Lanjutan",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 38,
    title: "Audit Surveillance",
    client: "UPT Balai Latihan Kerja Jombang Dinas Tenaga Kerja dan Transmigrasi Prov. Jatim",
    location: "Jombang",
    category: "ISO 9001:2015"
  },
  {
    id: 39,
    title: "Belanja Jasa Konsultansi Manajemen-Roadmap (Penyusunan Rancangan Pola Kemitraan Antar Pemuda dan Masyarakat)",
    client: "Dinas Kepemudaan dan Olahraga Kabupaten Bojonegoro",
    location: "Bojonegoro",
    category: "Roadmap"
  },
  {
    id: 40,
    title: "Belanja Jasa Konsultansi Manajemen (Pengkajian Kebijakan-Kebijakan Pembangunan Olahraga)",
    client: "Dinas Kepemudaan dan Olahraga Kabupaten Bojonegoro",
    location: "Bojonegoro",
    category: "Roadmap"
  },
  {
    id: 41,
    title: "Penyusunan Standar Operasional Prosedur (SOP)",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "Penyusunan SOP"
  },
  {
    id: 42,
    title: "Bimbingan Teknis Peraturan Perundang-Undangan dan Pelayanan Prima",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Mojokerto",
    category: "Bimbingan Teknis"
  },
  {
    id: 43,
    title: "Jasa Konsultansi Penyusunan Standar Kompetensi Jabatan ASN meliputi Jabatan Tinggi Pratama atau setara Eselon II, Jabatan Administrator atau setara Eselon III seluruh OPD Pemkab Probolinggo TA 2019",
    client: "Bagian Organisasi Setda Kabupaten Probolinggo",
    location: "Kraksaan",
    category: "SKJ"
  },
  {
    id: 44,
    title: "Belanja Sertifikasi",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },

  // TAHUN 2020
  {
    id: 45,
    title: "Pengadaan Jasa Konsultasi Survey Kepuasan Masyarakat & Survey Kepuasan Karyawan",
    client: "Rumah Sakit Umum Daerah Kota Madiun",
    location: "Madiun",
    category: "IKM & SKP"
  },
  {
    id: 46,
    title: "Belanja Jasa Konsultasi Manajemen/Keuangan/SDM (Pembinaan SDM Aparatur Pemerintah Daerah Survei Kepuasan Masyarakat Eksternal dan Internal) RSJ Menur Prov. Jatim",
    client: "Rumah Sakit Jiwa Menur Provinsi Jawa Timur",
    location: "Surabaya",
    category: "IKM & SKP"
  },
  {
    id: 47,
    title: "Jasa Konsultansi/Pendampingan Survey Kepuasan Pelayanan Kesekretariatan",
    client: "Dinas Koperasi dan Usaha Mikro Kabupaten Sidoarjo",
    location: "Sidoarjo",
    category: "IKM Internal"
  },
  {
    id: 48,
    title: "Belanja Jasa Konsultansi Penyusunan Analisis Jabatan, Analisis Beban Kerja dan Evaluasi Jabatan Pemerintah Kabupaten Serang",
    client: "Bagian Organisasi Setda Kabupaten Serang",
    location: "Serang",
    category: "Analisis Jabatan, ABK & Evaluasi Jabatan"
  },
  {
    id: 49,
    title: "Belanja Survey Indeks Kepuasan Masyarakat RSUD dr. Soedono Madiun",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "IKM"
  },
  {
    id: 50,
    title: "Belanja Jasa Konsultasi Manajemen/Keuangan/SDM (Penyusunan Review SOP)",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Review SOP"
  },
  {
    id: 51,
    title: "Survey Kepuasan Masyarakat dan Monitoring",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IKM"
  },
  {
    id: 52,
    title: "Penyusunan SOP",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "Penyusunan SOP"
  },
  {
    id: 53,
    title: "Jasa Konsultansi Penyusunan Standar Kompetensi Jabatan (SKJ)",
    client: "Bagian Organisasi Setda Kabupaten Pandeglang",
    location: "Pandeglang",
    category: "SKJ"
  },
  {
    id: 54,
    title: "Penyusunan Dokumen Standar Kompetensi Jabatan (SKJ)",
    client: "Bagian Organisasi Setda Kabupaten Probolinggo",
    location: "Kraksaan",
    category: "SKJ"
  },
  {
    id: 55,
    title: "Belanja Jasa Konsultansi Resertifikasi ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 56,
    title: "Belanja Jasa Konsultansi Survey Kepuasan Masyarakat",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "IKM"
  },
  {
    id: 57,
    title: "Belanja Jasa Tenaga Ahli/Konsultasi Survey Persepsi Korupsi",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IPK"
  },
  {
    id: 58,
    title: "Belanja Jasa Konsultansi Penelitian Survey Kepuasan Masyarakat",
    client: "Bagian Organisasi Setda Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 59,
    title: "Jasa Konsultansi Evaluasi Pemantapan ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 60,
    title: "Survey Kepuasan Masyarakat",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 61,
    title: "Belanja Jasa Konsultansi Manajemen SMM ISO 9001:2015",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 62,
    title: "Belanja Jasa Konsultansi Penelitian Survey Kepuasan Masyarakat",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "IKM"
  },
  {
    id: 63,
    title: "Penyusunan Dokumen Review Manajemen Resiko Tahun Anggaran 2020",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Manajemen Resiko"
  },

  // TAHUN 2021
  {
    id: 64,
    title: "Pengadaan Jasa Konsultansi Penyusunan Tingkat Kematangan Organisasi",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Tingkat Kematangan Organisasi"
  },
  {
    id: 65,
    title: "Belanja Jasa Audit/Surveillance ISO Penyediaan Jasa Pelayanan Kantor UPT BLK Jombang",
    client: "UPT BLK Jombang Dinas Tenaga Kerja dan Transmigrasi Prov. Jatim",
    location: "Jombang",
    category: "ISO 9001:2015"
  },
  {
    id: 66,
    title: "Penyusunan Review SOP Tahun Anggaran 2021",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Review SOP"
  },
  {
    id: 67,
    title: "Belanja Jasa Konsultansi Non Konstruksi (Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Survei Tenaga Ahli (Instruktur2))-Survei Kepuasan Masyarakat eksternal dan Internal RSJ Menur Prov. Jatim",
    client: "Rumah Sakit Jiwa Menur Provinsi Jawa Timur",
    location: "Surabaya",
    category: "IKM & SKP"
  },
  {
    id: 68,
    title: "Jasa Konsultansi Evaluasi Pemantapan ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 69,
    title: "Jasa Konsultansi Berorientasi Bidang-Kependudukan (Surveillance ISO 9001:2015)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 70,
    title: "Belanja Jasa Tenaga Ahli Indeks Persepsi Korupsi",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IPK"
  },
  {
    id: 71,
    title: "Belanja Jasa Tenaga Ahli (Survey Kepuasan Masyarakat)",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IKM"
  },
  {
    id: 72,
    title: "Belanja Jasa Konsultasi Review Road Map Reformasi Birokrasi",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Roadmap RB"
  },
  {
    id: 73,
    title: "Pendampingan Surveillance Integrasi ISO 9001:2015 dan ISO 37001:2016",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "ISO 9001:2015 & ISO 37001:2016"
  },
  {
    id: 74,
    title: "Belanja Jasa Konsultansi Manajemen SMM ISO 9001:2015",
    client: "DPMPTSP Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 75,
    title: "Belanja Survey Indeks Kepuasan Masyarakat RSUD dr. Soedono Madiun",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "IKM"
  },
  {
    id: 76,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Survei Unit UPT Budidaya Air Payau dan Laut Bangil TA 2021",
    client: "UPT Budidaya Air Payau dan Laut (BAPL) Bangil",
    location: "Bangil",
    category: "IKM"
  },
  {
    id: 77,
    title: "Pengadaan Jasa Konsultasi Berorientasi Layanan Survei [Survei Kepuasan Masyarakat (SKM)] Sub Kegiatan Pemeliharaan dan Mesin Lainnya TA 2021",
    client: "Badan Kepegawaian Daerah Kabupaten Gresik",
    location: "Gresik",
    category: "IKM"
  },
  {
    id: 78,
    title: "Pengadaan Belanja Bimbingan Teknis Peningkatan Kapasitas SDM Aparatur Untuk Kegiatan Penyusunan Kebijakan Teknis dan Rencana Sertifikasi Kompetensi, Pengelolaan Kelembagaan, Tenaga Pengembangan Kompetensi, Sumber Belajar, Kerjasama, Pengembangan Kompetensi Pimpinan Daerah, Jabatan Pimpinan Tinggi, Kepemimpinan dan Prajabatan, Serta Jabatan Fungsional TA 2021",
    client: "Badan Kepegawaian Daerah Kabupaten Lamongan",
    location: "Lamongan",
    category: "Bimbingan Teknis"
  },
  {
    id: 79,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Studi Penelitian dan Bantuan Teknik",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IKM"
  },
  {
    id: 80,
    title: "Konsultansi Survey Kepuasan Masyarakat/Layanan Biro Administrasi Pembangunan",
    client: "Biro Administrasi Pembangunan Setda Provinsi Jawa Timur",
    location: "Surabaya",
    category: "IKM"
  },
  {
    id: 81,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Konsultansi Manajemen (Survey Kepuasan Masyarakat)",
    client: "DPMPTSP Kabupaten Gresik",
    location: "Gresik",
    category: "IKM"
  },
  {
    id: 82,
    title: "Belanja Jasa Konsultasi ISO",
    client: "Dinas Tenaga Kerja Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },

  // TAHUN 2022
  {
    id: 83,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan Jasa Survei - Survey Kepuasan Masyarakat",
    client: "Biro Umum Setda Provinsi Jawa Timur",
    location: "Surabaya",
    category: "SKM"
  },
  {
    id: 84,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Survei/Jasa Konsultasi Penelitian Kepuasan Internal",
    client: "RSUD Dr. Soegiri Lamongan",
    location: "Lamongan",
    category: "SKP"
  },
  {
    id: 85,
    title: "Survey Kepuasan Masyarakat Cabang Dinas Kelautan dan Perikanan Kabupaten Malang",
    client: "Cabang Dinas Kelautan dan Perikanan Kab. Malang",
    location: "Malang, Kota Malang, Kota Batu, Kota Pasuruan, Kab. Pasuruan, Kota Surabaya, Kab. Sidoarjo",
    category: "SKM"
  },
  {
    id: 86,
    title: "Pengadaan Jasa Survey Kepuasan Masyarakat dan Survey Kepuasan Karyawan",
    client: "RSUD Kota Madiun",
    location: "Madiun",
    category: "SKM & SKP"
  },
  {
    id: 87,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Khusus (ISO) Pada UPT BLK Madiun",
    client: "UPT BLK Madiun Dinas Tenaga Kerja dan Transmigrasi Prov. Jatim",
    location: "Caruban, Madiun",
    category: "ISO 9001:2015"
  },
  {
    id: 88,
    title: "Belanja Jasa Tenaga Ahli Penyusunan SKJ",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "SKJ"
  },
  {
    id: 89,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Studi Penelitian dan Bantuan Teknik (Survey Kepuasan Masyarakat)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "SKM"
  },
  {
    id: 90,
    title: "Pengadaan Jasa Konsultasi Survey Kepuasan Layanan Biro Administrasi Pembangunan Tahun 2022",
    client: "Biro Administrasi Pembangunan Setda Provinsi Jawa Timur",
    location: "Surabaya",
    category: "SKM"
  },
  {
    id: 91,
    title: "Pengadaan Jasa Konsultasi Penyusunan Tingkat Kematangan Organisasi",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Tingkat Kematangan Organisasi"
  },
  {
    id: 92,
    title: "Jasa Konsultasi Evaluasi Pemantapan ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 93,
    title: "Belanja Jasa Tenaga Ahli-Penyusunan IPK (Indeks Persepsi Korupsi)",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "IPK"
  },
  {
    id: 94,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Survei (Survey Kepuasan Masyarakat)",
    client: "DPMPTSP Kabupaten Gresik",
    location: "Gresik",
    category: "SKM"
  },
  {
    id: 95,
    title: "Belanja Jasa Konsultasi Berorientasi Layanan-Jasa Survei (Survei Kepuasan Masyarakat) CDKP TUBAN",
    client: "Cabang Dinas Kelautan dan Perikanan Kabupaten Tuban",
    location: "Bojonegoro, Tuban, Lamongan, Jombang, Mojokerto, Kota Mojokerto, Kediri, Kota Kediri, Gresik",
    category: "SKM"
  },
  {
    id: 96,
    title: "Belanja Jasa Konsultansi Standarisasi (ISO 9001:2015)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 97,
    title: "Belanja Jasa Survey Kepuasan Karyawan RSUD dr. Soedono Madiun",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "SKP"
  },
  {
    id: 98,
    title: "Penyusunan Survei Kepuasan Masyarakat (SKM) Tahun Anggaran 2022",
    client: "Dinas Kelautan dan Perikanan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "SKM"
  },

  // TAHUN 2023
  {
    id: 99,
    title: "Pengadaan Jasa Konsultansi Survey Kepuasan Layanan Biro Administrasi Pembangunan Tahun 2023",
    client: "Biro Administrasi Pembangunan Setda Provinsi Jawa Timur",
    location: "Surabaya",
    category: "SKM"
  },
  {
    id: 100,
    title: "Pengadaan Jasa Survey Kepuasan Masyarakat dan Survey Kepuasan Karyawan",
    client: "RSUD Kota Madiun",
    location: "Madiun",
    category: "SKM & SKP"
  },
  {
    id: 101,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus (Jasa Resertifikasi SMM ISO)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 102,
    title: "Penyusunan Evaluasi Kelembagaan di Lingkungan Pemerintah Kabupaten Probolinggo",
    client: "Bagian Organisasi Setda Kabupaten Probolinggo",
    location: "Kraksaan",
    category: "Evaluasi Kelembagaan"
  },
  {
    id: 103,
    title: "Belanja Jasa Konsultansi Penelitian Kepuasan Pelanggan",
    client: "RSUD dr. Soegiri Lamongan",
    location: "Lamongan",
    category: "SKM"
  },
  {
    id: 104,
    title: "Belanja Survey Kepuasan Karyawan (PDN) RSUD dr. Soedono Provinsi Jawa Timur",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "SKP"
  },
  {
    id: 105,
    title: "Belanja Jasa Konsultansi IPAK",
    client: "Inspektorat Kota Madiun",
    location: "Madiun",
    category: "IPAK"
  },
  {
    id: 106,
    title: "Pengadaan Jasa Konsultansi Penyusunan Roadmap RB dan Survey Persepsi Anti Korupsi",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Roadmap RB & IPAK"
  },
  {
    id: 107,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Studi Penelitian dan Bantuan Teknik (Sertifikasi ISO 9001:2015)",
    client: "Badan Kepegawaian Daerah Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 108,
    title: "Pengadaan Jasa Konsultansi Penyusunan Tingkat Kematangan Organisasi",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Tingkat Kematangan Organisasi"
  },
  {
    id: 109,
    title: "Belanja Jasa Audit/Surveillance ISO",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 110,
    title: "Belanja Jasa Konsultansi ISO",
    client: "Dinas Tenaga Kerja Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 111,
    title: "Belanja Bimbingan Teknis",
    client: "Dinas Lingkungan Hidup Kabupaten Bojonegoro",
    location: "Bojonegoro",
    category: "Bimbingan Teknis"
  },
  {
    id: 112,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Konsultansi Manajemen (Penyusunan SOP) Untuk Keperluan Biro Umum Setda Provinsi Jawa Timur Tahun 2023",
    client: "Biro Umum Setda Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Penyusunan SOP"
  },

  // TAHUN 2024
  {
    id: 113,
    title: "Penyusunan Analisis Jabatan dan Analisis Beban Kerja di Lingkungan Pemerintah Kota Madiun",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Analisis Jabatan dan ABK"
  },
  {
    id: 114,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus (Evaluasi Kelembagaan)",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "Evaluasi Kelembagaan"
  },
  {
    id: 115,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Studi Penelitian dan Bantuan Teknik (Surveillance ISO)",
    client: "Badan Kepegawaian dan Pengembangan SDM Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 116,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus (Sertifikasi ISO 9001:2015)",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 117,
    title: "Belanja Jasa Audit/Surveillance ISO",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 118,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus/Pelayanan Antar Kerja",
    client: "Dinas Tenaga Kerja Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 119,
    title: "Belanja Jasa Konsultansi Penelitian Kepuasan Pelanggan (Tri Bulan I, II dan III)",
    client: "RSUD dr. Soegiri Lamongan",
    location: "Lamongan",
    category: "IKM"
  },
  {
    id: 120,
    title: "Belanja Jasa Konsultansi Penelitian Kepuasan Pelanggan Tri Bulan IV",
    client: "RSUD dr. Soegiri Lamongan",
    location: "Lamongan",
    category: "IKM"
  },
  {
    id: 121,
    title: "Belanja Jasa Survey IKM RSUD dr. Soedono",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "IKM"
  },
  {
    id: 122,
    title: "Belanja Jasa Survei Indeks Perilaku Anti Korupsi (IPAK)",
    client: "Inspektorat Kota Madiun",
    location: "Madiun",
    category: "IPAK"
  },

  // TAHUN 2025
  {
    id: 123,
    title: "Beban Jasa Konsultansi Berorientasi Layanan-Jasa Khusus (Penyusunan Analisis Jabatan dan Analisis Beban Kerja)",
    client: "Bagian Organisasi Setda Kabupaten Bangkalan",
    location: "Bangkalan",
    category: "Analisis Jabatan dan ABK"
  },
  {
    id: 124,
    title: "Pengadaan Jasa Konsultansi Penyusunan Tingkat Kematangan Organisasi dan Evaluasi Kelembagaan",
    client: "Bagian Organisasi Setda Kota Madiun",
    location: "Madiun",
    category: "Tingkat Kematangan dan Evaluasi Kelembagaan"
  },
  {
    id: 125,
    title: "Belanja Jasa Survei Layanan Kepuasan Masyarakat (SKM)",
    client: "Inspektorat Kota Madiun",
    location: "Madiun",
    category: "IKM"
  },
  {
    id: 126,
    title: "Belanja Jasa Audit/Surveillance ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Gresik",
    location: "Gresik",
    category: "ISO 9001:2015"
  },
  {
    id: 127,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Studi Penelitian dan Bantuan Teknik (Surveillance atau Pemantauan Sertifikasi ISO)",
    client: "Badan Kepegawaian dan Pengembangan SDM Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 128,
    title: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus-Jasa Sertifikasi ISO 9001:2015",
    client: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Magetan",
    location: "Magetan",
    category: "ISO 9001:2015"
  },
  {
    id: 129,
    title: "Belanja Survey Indeks Persepsi Korupsi RSUD dr. Soedono",
    client: "RSUD dr. Soedono Provinsi Jawa Timur",
    location: "Madiun",
    category: "IPAK"
  },
  {
    id: 130,
    title: "Belanja Jasa Konsultansi Berorientasi Bidang-Perindustrian dan Perdagangan-Jasa Konsultansi Lainnya-Kajian Identifikasi Standar dan Penyedia Bahan Baku Sentra IKM Logam di Kab. Sidoarjo-Bidang PSDI",
    client: "Dinas Perindustrian dan Perdagangan Provinsi Jawa Timur",
    location: "Surabaya",
    category: "Kajian"
  }
];

export { projects };
