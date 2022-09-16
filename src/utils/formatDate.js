const showFormatedDate = (date) => {
  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const d = new Date(date);
  const hari = d.getDay();
  const tgl = d.getDate();
  const bulan = d.getMonth();
  const tahun = d.getFullYear();

  return `${days[hari - 1]}, ${tgl} ${months[bulan]} ${tahun}`;
};

export default showFormatedDate;
