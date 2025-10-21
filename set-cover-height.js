// ✅ Versi aman: tidak menimpa --cover-height dari CSS
// Semua event listener untuk setCoverHeight dihapus

const params = new URLSearchParams(window.location.search);
const slug = params.get('guest');

fetch('./rsvp/daftar_nama_tamu.json')
  .then(res => res.json())
  .then(tamuList => {
    const tamu = tamuList.find(item => item.slug === slug);
    if (tamu) {
      document.querySelector('#nama-tamu').textContent = tamu.nama;
      // kamu bisa tambah logika jumlahTamu dan statusRSVP di sini
    } else {
      document.querySelector('#Nama-Lengkap').textContent = 'Nama Tamu';
    }
  });
