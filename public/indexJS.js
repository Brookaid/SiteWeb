Vue.prototype.$http = axios

app = new Vue({
		  el: '#app',
		  data: {
			currentPage: 'accueil',
			currentArticleId: '',
            name: 'Mes wags en short',
            articlesList: [],
            mon_user: '',
            error: {message: ''},
            success: {message: ''}

		  },
          created() {
		    this.$http.get('/list')
                .then(list => {
                    this.articlesList = list.data
                })
                .catch(err => {
                    console.log('error', err)
                })

            this.$http.get('/user')
                .then(user => {
                    this.mon_user = user.data
                })
                .catch(err => {
                    console.log('error', err)
                })
            this.success.message = ''
            this.error.message = ''

          },
          methods: {
              changePage(page) {
                  this.currentPage = page
              },
              /* Articles */
              createArticle(article) {
                  if (article.titre == '') {
                      alert('Veuillez indiquer le titre')
                  }
                  else {
                      article['index'] = this.articlesList.length
                      this.$http.post('/add', article)
                          .then(() => {
                              this.articlesList.push(article)
                              this.changePage('accueil')
                              alert('Votre article a bien été créé')
                              document.location.reload(true)
                          })
                  }
              },
              delArticle(indexArticle) {
                  this.currentArticleId= indexArticle
                  this.changePage('delArticle')
              },
              deleteArticle(Article) {
                  if (confirm('Supprimer cet article sera definitif')) {
                      this.$http.post('/delete', Article)
                          .then(() => {
                              this.articlesList.splice(Article.index, 1)
                              for (let i = 0; i < this.articlesList.length; i++) {
                                  this.articlesList[i].index = i
                              }
                              alert('Article supprimé')
                              this.changePage('accueil')
                              document.location.reload(true)
                          })
                  }

              },
              editArticle(indexArticle) {
                  this.currentArticleId= indexArticle
                  this.changePage('editArticle')
              },
              modifyArticle(article) {

                  console.log(article)

                  if (article.titre == '') {
                      alert('Titre manquant')
                  }
                  else {
                      this.$http.post('/edit', article)
                          .then(() => {
                              this.articlesList[article.index] = article
                              this.changePage('accueil')
                              alert('Article bien modifié')
                              document.location.reload(true)
                          })
                  }
              },

              /* User */
              inscriptionuser (user) {
                if (user.password != '' && user.password === user.repeatpassword && user.username != '') {
                    this.$http.post('/register', user)
                        .then((req) => {
                            if (req.status === 200) {
                                alert(req.data)
                                this.success.message = req.data
                                this.changePage('accueil')
                            }
                            else {
                                this.error.message = req.data
                                this.changePage('register')
                                alert('Erreur veuillez reessayer')
                            }
                        }).catch(error => {
                        console.log(error)

                    })
                }
                else {
                    this.error.message = 'Verifiez les champs !'
                }
              },
              logout () {
                this.$http.get('/logout').then(() => {
                    this.mon_user = ''
                    this.changePage('accueil')
                    alert('Vous vous êtes déconnecté')
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

                                this.changePage('accueil')
                            } else {
                                this.error.message = response.data
                                this.changePage('connexion')
                            }
                        }).catch(err => {

                        console.log('Error' + error)
                    })
                }
                else {
                    this.error.message = 'Le(s) champs sont vides !'
                }
              }
          },
})



