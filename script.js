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

... (kandungan lagu PPP yang telah dimasukkan sebelum ini) ...

Wawasan KKM Asas Usaha
Penolong Pegawai Perubatan Berjaya`
};

function showSong(key) {
  const container = document.getElementById("lyricsContent");
  container.innerHTML = `
    <button onclick="backToMenu()">← Kembali</button>
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
