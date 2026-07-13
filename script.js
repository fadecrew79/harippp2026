const songs={
negaraku:`Negaraku
Tanah tumpahnya darahku
Rakyat hidup
bersatu dan maju
Rahmat bahagia
Tuhan kurniakan
Raja kita
selamat bertakhta
Rahmat bahagia
Tuhan kurniakan
Raja kita
selamat bertakhta`,
perlis:`Amin, amin, ya Rabaljalil,
Doa hamba yang sangat zalil,
Tinggikan daulat serta adil,
Kekal perintah Jamalullail.`,
ppp:`Sila tampalkan lirik rasmi lagu PPP di sini.`
};
function show(k){
document.getElementById('title').textContent={
negaraku:'Negaraku',
perlis:'Amin Amin Ya Rabbal Jalil',
ppp:'Penolong Pegawai Perubatan Berjaya'
}[k];
document.getElementById('text').textContent=songs[k];
window.scrollTo({top:document.getElementById('lyrics').offsetTop-20,behavior:'smooth'});
}