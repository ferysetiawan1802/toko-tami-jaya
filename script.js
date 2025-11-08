// Fungsi pencarian & filter kategori
const searchInput = document.getElementById("search");
const kategoriSelect = document.getElementById("kategori");
const produkContainer = document.getElementById("produkContainer");
const produkList = produkContainer.querySelectorAll(".produk");

function filterProduk() {
  const keyword = searchInput.value.toLowerCase();
  const kategori = kategoriSelect.value;

  produkList.forEach((produk) => {
    const nama = produk.dataset.nama.toLowerCase();
    const kategoriProduk = produk.dataset.kategori;

    const cocokNama = nama.includes(keyword);
    const cocokKategori = kategori === "semua" || kategoriProduk === kategori;

    if (cocokNama && cocokKategori) {
      produk.style.display = "block";
    } else {
      produk.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterProduk);
kategoriSelect.addEventListener("change", filterProduk);
