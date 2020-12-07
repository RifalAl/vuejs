var app = new Vue({
  el: '#bab8',
  data: {
    kendaraan: ['mobil', 'sepeda motor', 'kapal terbang', 'kapal laut', 'kereta api'],
    kendaraan2: ['mobil', 'sepeda motor', 'kapal terbang', 'kapal laut', 'kereta api'],
    kendaraan3: [
      { jenis: 'mobil', merk: 'honda', warna: 'merah' },
      { jenis: 'kapal laut', merk: 'shimano', warna: 'hijau' },
      { jenis: 'motor', merk: 'yamaha', warna: 'hitam' }
    ],
    barang: [
      { jenis: 'mie rebus', stock: true },
      { jenis: 'mie goreng', stock: true },
      { jenis: 'chiki', stock: false },
      { jenis: 'minuman soda', stock: false },
      { jenis: 'minyak goreng', stock: false },
      { jenis: 'roti', stock: true },
    ],
    isi: "",
    isi2: "",
    cari: "",
  },
  methods: {
    tambah: function() {
      this.kendaraan.push(this.isi)
      this.isi = ""
    },
    tambah2: function() {
      this.kendaraan2.push(this.isi2)
      this.isi2 = ""
    },
    hapus: function(index) {
      this.kendaraan2.splice(index, 1)
    }
  },

  computed:{
    barangAda(){
        return this.barang.filter(b => b.stock)
    },
    barangHabis(){
        return this.barang.filter(b => !b.stock)
    },
    filterKendaraan(){
        return this.kendaraan3.filter((kd) => {
            return kd.warna.match(this.cari)
        })
    }
  }
})
