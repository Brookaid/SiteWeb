/* globals Vue */
;(function () {
	'use strict'

	Vue.component('article-item', {

		props: ['articleitem', 'mon_user'],
		template: `

                <div class="col-lg-4">
                    <div class="thumbnail">
                        <img :src= "articleitem.Poster" alt="...">
                        <div class="caption">
                            <h3>{{ articleitem.titre }}</h3>
                            <p>{{ articleitem.texte }} </p>
                            <i>{{ articleitem.categorie }}</i>
                            <p>
                                <a @click="$emit('event-article', 'viewArticle','articleitem.index')" class="btn btn-primary" role="button">Voir </a> 
                                <a v-if ="mon_user!=''" @click="$emit('edit-article', 'editArticle','articleitem.index')" class="btn btn-default" role="button">Editer </a>
                                <a v-if ="mon_user!=''" @click="$emit('delete-article', 'deleteArticle','articleitem.index')" class="btn btn-danger" role="button">Supprimer </a>
                            </p>
                        </div>
                    </div>
                </div>
                `

	})

	Vue.component('article-view', {

		props: ['articleitem', 'mon_user'],
		template: `
                <div class="outer-div">
                  <div class="inner-div">
                    <div class="title">
                       {{articleitem.title}}
                    </div>
                    <img :src="articleitem.photo" width="500px">
                    <br>
                    {{articleitem.texte}}
                  </div>
                  <p>
                      <a v-if ="mon_user!=''" @click="$emit('change-page', 'editArticle')" class="btn btn-primary" role="button">Editer </a>   
                      <a v-if ="mon_user!=''" @click="$emit('delete-article', 'deleteArticle','articleitem.index')" class="btn btn-danger" role="button">Supprimer </a>                         
                  </p>
                </div>
              <a @click="$emit('change-page', 'listeDesArticles')" class="btn btn-default" role="button">Retour à la liste</a>
      `

	})
	Vue.component('article-edit', {

		props: ['articleitem'],
		template: `
  
      <div class="col-lg-6">
          <div class="thumbnail">
           <h1>Titre : <input v-model="articlemodif.titre"> </h1>
           <h2>Photo (web) : <input v-model="articlemodif.photo"> </h2>
           <h4 align="center" > Championnat: <input type="texte" v-model="articlemodif.categorie"></h4>
           <h4>Biographie:</h4>
           <textarea v-model="articlemodif.texte" cols="30" rows="5" > </textarea>
         </div>
     </div>
          
      <div class="col-lg-6">
        <div class="thumbnail">
          <h1 align="center">{{ articlemodif.titre }}</h1>
          <h4 align="center" >{{ articlemodif.categorie }} </h4>
              <img :src= "articlemodif.photo" alt="...">
              <div class="caption">
                  <p><b>Texte : </b>{{ articlemodif.texte }}</p>
              </div>
          </div>
          <a @click="$emit('modify-article', articlemodif)" class="btn btn-primary" role="button">Edit</a>
          <a @click="$emit('change-page', 'listeDesArticles')" class="btn btn-default" role="button">Annuler</a>
        </div>
      </div>
      `,
		data: function () {
			return {
				articlemodif: Vue.util.extend({}, this.articleitem)
			}
		}
	})

	Vue.component('article-add', {
		template: `
              <div>
              <div class="col-lg-6">
              <form action="" style="border:1px solid #ccc">
                  <div class="thumbnail">
                   <label for="titre"><b>Titre:</b></label> 
                   <input type="text" v-model="articleitem.titre" required>
                   <label for="photo"><b>Photo(URL):</b></label>
                   <input type="text" v-model="articleitem.photo" required>
                   <label for="championnat"><b>Championnat :</b></label>
                       <select v-model="articleitem.categorie" required>
                          <option value="L1">Ligue 1</option>
                          <option value="PL">Premier League</option>
                          <option value="BL">Bundesliga</option>
                          <option value="LIGA">Liga BBVA</option>
                       </select>
                       <br>
                   <label for="bio"><b>Biographie :</b></label>
                   <textarea v-model="articleitem.texte" cols="70" rows="5" required> </textarea>
                 </div>
              </form>
              </div>
              <div>
                  <img :src= "articleitem.photo" alt="...">
              </div>
              <button @click="$emit('change-page', 'listeDesArticles')" class="btn btn-default"> Annuler</button>
              <button @click="$emit('create-article', articleitem)" class="btn btn-primary"> Ajouter</button>
              
              
      `,
		data: function () {
			return {
				articleitem: {
					'titre': '',
					'categorie': '',
					'photo': '',
					'texte': '',
				}
			}
		}

	})

	/*Vue.component('footer-item', {
		template: `
     <div class="text-center">
        <a @click="$emit('change-page', 'index')"  class="btn btn-default" >Page d'accueil</a>
     </div>
    `
	})*/

	/*Vue.component('ajouter-article-form', {
		props: ['mon_user'],
		template: `
    <div class="col-lg-12" align="right">
		  <p v-if ="mon_user!=''"><a @click="$emit('change-page', 'addArticle')"  class="btn btn-info" >Ajouter une wags</a></p>
    </div>
    `
*/

})()