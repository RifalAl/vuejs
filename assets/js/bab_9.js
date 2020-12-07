var app = new Vue({
  el: '#bab9',
  data: {
    pesan: "halo Minnasang konichiwa!"
  },
  methods: {

  },

  computed:{

  },

  filters: {
    kapital(value){
      if (!value) return ""
      value = value.toString()
      return value.toUpperCase()
    },
    kecil(value){
      if (!value) return ""
      value = value.toString()
      return value.toLowerCase()
    },
    terbalik(value){
      if (!value) return
      value = value.toString()
      return value.split('').reverse().join('')
    },
    terbalik2(value){
      if (!value) return
      value = value.toString()
      return value.split(' ').reverse().join(' ')
    }
  }
})
