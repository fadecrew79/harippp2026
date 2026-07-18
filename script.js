const songs = {
  negaraku: `Negaraku
Tanah tumpahnya darahku
Rakyat hidup
Bersatu dan maju
Rahmat bahagia
Tuhan kurniakan
Raja kita
Selamat bertakhta`,

  perlis: `SILA GANTIKAN DENGAN LIRIK RASMI
AMIN AMIN YA RABBAL JALIL`,

  ppp: `Terbitmu Di Negara Malaysia
Memberi Sinar Dalam Kegelapan
Diasuh Dilatih Dibentuk Mulia
Bekal Kemudi Dalam Perkhidmatan
Rela Berkhidmat Di Mana Jua
Hutan Belantara Sedia Dirasa
Ombak Dan Badai Diharung Biasa
Nyawa Tergadai Tidak Terasa

Chorus

Jangan Ikutkan Rasa Dihati
Kelak Impian Tinggal Simpati
Bertekad Terus Berjuang Jati
Sampai Kita Dihormati
Jika Kami Terus Berusaha
Pantang Mundur Sebelum Berjaya
Wawasan KKM Asas Usaha
Penolong Pegawai Perubatan Berjaya`
};

function showSong(key) {
  const area = document.getElementById("lyricsContent");
  area.innerHTML = `
    <button onclick="backToMenu()" class="back-btn">← Kembali</button>
    <pre class="lyrics-text">${songs[key]}</pre>
  `;
  document.getElementById("lyrics").scrollIntoView({behavior:"smooth"});
}

function backToMenu() {
  document.getElementById("lyricsContent").innerHTML = `
    <h2>Pilih lagu di atas</h2>
    <p>Tekan mana-mana lagu untuk melihat lirik.</p>
  `;
  document.getElementById("songs").scrollIntoView({behavior:"smooth"});
}
