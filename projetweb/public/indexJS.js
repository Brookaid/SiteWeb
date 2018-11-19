Vue.prototype.$http = axios

app = new Vue({
		  el: '#app',
		  data: {
			currentPage: 'accueil',
			currentArticleId: '',
            filter: '',
            menu: '',
            name: 'Mes couilles en short',
            articlesList: '',
            mon_user: '',
            search: '',
            error: {message: ''},
            success: {message: ''}

		  },
          created() {
		    this.$http.get('/list')
                .then(list => {
                    console.log('affichage de ma liste', list)
                    this.articlesList = list.data
                })
                .catch(err => {
                    console.log('error', err)
                })

            this.$http.get('/user')
                .then(user => {
                    console.log('affichage de mon  user ', user)
                    this.mon_user = user.data
                })
                .catch(err => {
                    console.log('error', err)
                })
            this.success.message = ''
            this.error.message = ''

          },
          methods: {
              /*close: function () {
                  this.success = false
              },*/
              changePage(page) {
                  this.currentPage = page
              },

              // Articles
              viewArticle(indexArticle) {
                  this.currentArticleId = indexArticle
                  this.changePage('viewArticle')
              },
              editArticle(indexArticle) {
                  this.currentarticleId = indexArticle
                  this.changePage('editArticle')
              },
              createArticle(article) {
                  if (article.titre == '') {
                      alert('Veuillez indiquer le titre')
                  }
                  else {
                      article['index'] = this.articlesList.length
                      this.$http.post('/add', article)
                          .then(() => {
                              this.articlesList.push(article)
                              this.changePage('listeDesArticles')
                              alert('Votre article a bien été créé')
                              document.location.reload(true)
                          })
                  }
              },
              deleteArticle(article) {
                  if (confirm('Êtes vous sûr de vouloir supprimer cet article ?')) {
                      this.$http.post('/delete', article)
                          .then(() => {
                              this.articlesList.splice(article.index, 1)
                              for (let i = 0; i < this.articlesList.length; i++) {
                                  this.articlesList[i].index = i
                              }
                              alert('Votre article a bien été supprimé')
                              this.changePage('listeDesArticles')
                              document.location.reload(true)
                          })
                  }

              },

              modifyArticle(article) {

                  console.log(article)

                  if (article.titre == '') {
                      alert('Veuillez indiquer le titre')
                  }
                  else {
                      this.$http.post('/edit', article)
                          .then(() => {
                              this.articlesList[article.index] = article
                              this.changePage('listeDesarticles')
                              alert('Votre article a bien été modifié')
                              document.location.reload(true)
                          })
                  }
              },

              // User
              inscriptionuser (user) {
                if (user.password != '' && user.password === user.repeatpassword && user.username != '') {
                    this.$http.post('/register', user)
                        .then((req) => {

                            //alert(req.data);
                            if (req.status === 200) {
                                alert(req.data)
                                this.success.message = req.data
                                this.changePage('listeDesArticles')
                            }
                            else {
                                this.error.message = req.data
                                this.changePage('inscription')
                            }
                        }).catch(error => {
                        console.log(error)

                    })
                }
                else {
                    this.error.message = 'Le mot de passe n\'est pas identique ou les champs sont vides !'
                    //alert("Le mot de passe n'est pas identique ou les champs sont vides !")
                }
              },
              logout () {
                this.$http.get('/logout').then(() => {
                    this.mon_user = ''
                    this.changePage('index')
                    alert('Vous êtes déconnecté')
                })
              },
              connexion (user) {
                if (user.password != '' && user.username != '') {
                    this.$http.post('/login', user)
                        .then((response) => {
                            //alert(response.data);
                            this.success.message = ''
                            this.error.message = ''

                            if (response.status === 200) {
                                alert(response.data)
                                this.success.message = response.data
                                document.location.reload(true)

                                this.changePage('listeDesArticles')
                            } else {
                                this.error.message = response.data
                                this.changePage('connexion')
                            }
                        }).catch(err => {

                        console.log('Error' + error)
                    })
                }
                else {
                    this.error.message = 'Le ou les champs sont vides !'
                    //alert("Le ou les champs sont vides !")
                }
              }
          },
})



