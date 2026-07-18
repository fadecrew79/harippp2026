const songs = {
  negaraku: `Negaraku
Tanah tumpahnya darahku
Rakyat hidup
Bersatu dan maju
Rahmat bahagia
Tuhan kurniakan
Raja kita
Selamat bertakhta`,

  perlis: `Amin amin ya Rabaljalil
Doa hamba yang sangat zalil
Tinggikan daulat serta adil
Kekal perintah Jamalullail`,

  ppp: `Terbitmu Di Negara Malaysia
Memberi Sinar Dalam Kegelapan
Diasuh Dilatih Dibentuk Mulia
Bekal Kemudi Dalam Perkhidmatan

Rela Berkhidmat Di Mana Jua
Hutan Belantara Sedia Dirasa
Ombak Dan Badai Diharung Biasa
Nyawa Tergadai Tidak Terasa

----- CHORUS -----

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
  const lyricsContent = document.getElementById("lyricsContent");
  lyricsContent.innerHTML = `
    <button class="back-btn" onclick="backToMenu()">← Kembali</button>
    <pre>${songs[key]}</pre>
  `;
  document.getElementById("lyrics").scrollIntoView({
    behavior: "smooth"
  });
}

function backToMenu() {
  document.getElementById("songs").scrollIntoView({
    behavior: "smooth"
  });
}
