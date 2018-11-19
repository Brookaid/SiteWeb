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
          <div class="thumbnail">
           <h1>Titre : <input v-model="articleitem.titre"> </h1>
           <h2>Photo (web) : <input v-model="articleitem.photo"> </h2>
           <h4 align="center" > Championnat : <input type="number" v-model="articleitem.categorie"></h4>
           <h4>Biographie:</h4>
           <textarea v-model="articleitem.texte" cols="30" rows="5" > </textarea>
         </div>
     </div>
          
          <div class="col-lg-6">
          <div class="thumbnail">
          <h1 align="center">{{ articleitem.titre}}</h1>
          <h4 align="center" >{{ articleitem.categorie}} </h4>
              <img :src= "articleitem.photo" alt="...">
              <div class="caption">
                  <p><b>Bio : </b>{{ articleitem.texte }}</p>
              </div>
          </div>
          <a @click="$emit('change-page', 'listeDesArticles')" class="btn btn-default" role="button">Annuler</a>
          <a @click="$emit('create-article', articleitem)" class="btn btn-primary" role="button">Ajouter</a>
      </div>
      </div>
      `,
		data: function () {
			return {
				articleitem: {
					'titre': '',
					'photo': '',
					'texte': '',
				}
			}
		}

	})

	Vue.component('footer-item', {
		template: `
     <div class="text-center">
        <a @click="$emit('change-page', 'index')"  class="btn btn-default" >Page d'accueil</a>
     </div>
    `
	})

	Vue.component('ajouter-article-form', {
		props: ['mon_user'],
		template: `
    <div class="col-lg-12" align="right">
		  <p v-if ="mon_user!=''"><a @click="$emit('change-page', 'addArticle')"  class="btn btn-info" >Ajouter une wags</a></p>
    </div>
    `

	})

})()