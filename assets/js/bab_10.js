Vue.component('tebal', {
  template: '<b>Tulisan tebal ini berasal dari component</b>'
});

Vue.component('tebalSlot', {
  template: '<b> <slot></slot> </b>'
});

Vue.component('multi', {
  template: `
    <div>
        <p><b>ini adalah tulisan tebal</b></p>
        <p><i>ini adalah tulisan miring</i></p>
        <p><u>ini adalah tulisan bergaris bawah</u></p>
    </div>
 `
});

Vue.component('daftar', {
  template: '<div><siswa v-for="s in daftarsiswa"> {{s.nama}} kelas {{s.kelas}}</siswa></div>',

  data: function() {
    return {
      daftarsiswa: [
        { nama: 'eha', kelas: 'XII' },
        { nama: 'riski', kelas: 'XI' },
        { nama: 'sri', kelas: 'X' }
      ]
    }
  }
});

Vue.component('siswa', {
  template: '<li><slot></slot></li>'
});

Vue.component('karya', {
  props: ['judul', 'isi'],
  template: `
        <div>
            <h2>{{judul}}</h2>
            <p>{{isi}}</p>
        </div>
    `
});

Vue.component('tes', {
  props: ['nilai', 'nilai2'],
  template: `
        <div>
            <b>{{nilai}}</b> dengan <b>{{nilai2}}</b>
        </div>
    `
});

Vue.component('nama', {
  template: `
        <input type="text" placeholder = "masukkan nama" @blur = "validasi"></input>
    `,
  methods: {
    validasi() {
      this.$emit('applied')
    }
  }

})

var app = new Vue({
  el: '#bab10',
  data: {
    pesan: "Belajar Vuejs",
    pesan2: "Dengan Semangat",
    valid: false
  },
  methods: {
    validasi() {
      this.validasi = true
    },

    log(message) {
      console.log(message)
    }

  }

});
