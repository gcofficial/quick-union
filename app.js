var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    ids: Array.from({ length: 10 }).map((_value, index) => index), // Create array with 10 elements
    from: '',
    to: '',
    colors: [
      '#F25260',
      '#F25270',
      '#2192BF',
      '#D9C791',
      '#F2B84B',
      '#99F2D1',
      '#F2AE2E',
      '#BF4904',
      '#F24130',
      '#F28177'
    ]
  },
  methods: {
    appUnion: function (event) {
      this.ids = union(this.ids, this.from, this.to)
    },
    appIsConnected: function (event) {
      if (isConnected(this.ids, this.from, this.to)) {
        alert('YES')
      } else {
        alert('No')
      }
    }
  }
})