

app = new Vue({
		  el: '#app',
		  data: {
			currentPage: 'accueil',
			success: true,
		  },
		  methods: {
              close: function(){
                this.success = false
              }
		  },
})



