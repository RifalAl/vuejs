Vue.component('tebal', {
  template: '<b>Tulisan tebal ini berasal dari component</b>'
})

Vue.component('tebalSlot', {
  template: '<b> <slot></slot> </b>'
})

Vue.component('multi', {
  template: `
    <div>
        <p><b>ini adalah tulisan tebal</b></p>
        <p><i>ini adalah tulisan miring</i></p>
        <p><u>ini adalah tulisan bergaris bawah</u></p>
    </div>
 `
})

Vue.component('daftar', {
  template: '<div><siswa v-for="s in daftarsiswa"> {{s.nama}} kelas {{s.kelas}}</siswa></div>',

  data: function () {
    return {
      daftarsiswa: [
        { nama: 'eha', kelas: 'XII' },
        { nama: 'riski', kelas: 'XI' },
        { nama: 'sri', kelas: 'X' }
      ]
    }
  }
})

Vue.component('siswa', {
  template: '<li><slot></slot></li>'
})

Vue.component('karya', {
  props: ['judul', 'isi'],
  template: `
        <div>
            <h2>{{judul}}</h2>
            <p>{{isi}}</p>
        </div>
    `
})

Vue.component('tes', {
  props: ['nilai', 'nilai2'],
  template: `
        <div>
            <b>{{nilai}}</b> dengan <b>{{nilai2}}</b>
        </div>
    `
})

Vue.component('nama', {
  template: `
        <input type="text" placeholder="masukkan nama" @blur="validasi"></input>
    `,
  methods: {
    validasi () {
      this.$emit('applied')
    }
  }

})

Vue.component('kendaraans', {
  template: `
    <div class="bg-light mx-auto">
      <h2 v-if='tampiljudul' class="text-center bg-dark text-light">Pilih hadiah anda:</h2>
      <isi v-for='(kd, index) in kendaraan' v-if='tampilpilihan' class="d-flex justify-content-between col-6 mx-auto m-2">
        {{kd.jenis}}
        <button @click="klik(index)" class="btn btn-success" v-if="tampilalert"> Pilih
        </button>
      </isi>
      <h3 v-if='tampilhasil' class="alert alert-success text-center">
        Silahkan Ambil Hadiah anda di dealer
      </h3>
    </div>
  `,

  data: function () {
    return {
      kendaraan: [
        { jenis: 'mobil' },
        { jenis: 'motor' },
        { jenis: 'pesawat' }
      ],
      tampilalert: true,
      tampilpilihan: true,
      tampiljudul: true,
      tampilhasil: false
    }
  },

  methods: {
    klik (index) {
      alert('selamat anda mendapatkan ' + this.kendaraan[index].jenis)
      this.tampilalert = false,
      this.tampilpilihan = false,
      this.tampiljudul = false,
      this.tampilhasil = true
    }
  }
})

Vue.component('isi', {
  template: '<li class="mb-2"><slot></slot></li>'
})

var app = new Vue({
  el: '#bab10',
  data: {
    pesan: 'Belajar Vuejs',
    pesan2: 'Dengan Semangat',
    valid: false
  },
  methods: {
    validasi () {
      this.validasi = true
    },

    log (message) {
      console.log(message)
    }

  }

})
