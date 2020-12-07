var app = new Vue({
  el: '#app',
  data: {
    pass1: '',
    pass2: '',
    keterangan: '',
    tampil: false,

  },

  watch: {
    pass2: 'ketik',
  },

  methods: {
    ketik: function(){
      if (this.pass2 == this.pass1) {
        this.keterangan = '<i class="text-success">Password sama silahkan lanjutkan</i>';
        this.tampil = true;
      }
      else {
        this.keterangan = '<i class="text-danger">Password tidak sama</i>';
        this.tampil = false;
      }
    }
  }



})
