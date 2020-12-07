var app = new Vue({
  el: '#bab7',
  data: {
    pesan:"",
    hasil: "",
    hasilKombinasi:"",
    hasilKlik:"",
    tampak: false,
    isEditing: false
  },
  methods: {
    alertx: function (){
        alert('Belajar penggunaan event click')
    },
    pesanx: function (isi){
        alert(isi)
    },
    enterModifier: function (){
        alert('Anda Menekan Enter')
    },
    enter: function(){this.hasil = "Tombol Enter"},
    esc: function(){this.hasil = "Tombol esc"},
    space: function(){this.hasil = "Tombol space"},
    up: function(){this.hasil = "Tombol up"},
    down: function(){this.hasil = "Tombol down"},
    right: function(){this.hasil = "Tombol right"},
    left: function(){this.hasil = "Tombol left"},
    altx: function(){this.hasilKombinasi = "Alt + X"},
    altz: function(){this.hasilKombinasi = "Alt + Z"},

    kliklLeft: function(){this.hasilKlik = "Klik Kiri"},
    kliklRight: function(){this.hasilKlik = "Klik Kanan"},
  }
})
