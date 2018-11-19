/* globals Vue */
;(function () {
	'use strict'

    Vue.component('del-article', {

		props: ['article'],
		template: `
            <div>
                Probleme de suppression car probleme de gestion du currentid, cela va supprimer le premier element de la liste des articles
                <button @click="$emit('delete-article','article')" class="suppr">Supprimer </button>
            </div>
      `,
	})


	Vue.component('article-edit', {

		props: ['article'],
		template: `
  
              <div class="col-lg-6">
                  <div class="thumbnail">
                    <div>
              <div class="col-lg-6">
              <form action="" style="border:1px solid #ccc">
                  <div>
                   <label for="titre"><b>Titre:</b></label> 
                   <input type="text" v-model="articlemodif.titre" required>
                   <label for="photo"><b>Photo(URL):</b></label>
                   <input type="text" v-model="articlemodif.photo" required>
                   <label for="championnat"><b>Championnat :</b></label>
                       <select v-model="articlemodif.categorie" required>
                          <option value="L1">Ligue 1</option>
                          <option value="PL">Premier League</option>
                          <option value="BL">Bundesliga</option>
                          <option value="LIGA">Liga BBVA</option>
                       </select>
                       <br>
                   <label for="bio"><b>Biographie :</b></label>
                   <textarea v-model="articlemodif.texte" cols="50" rows="5" required> </textarea>
                 </div>
                </form>
                <img :src= "articlemodif.photo" alt="...">
                <button @click="$emit('change-page', 'accueil')">Annuler</button>
                <button @click="$emit('modify-article', articlemodif)" >Edit</button>
            </div>
      `,
		data: function () {
			return {
				articlemodif: Vue.util.extend({}, this.article)
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
                   <textarea v-model="articleitem.texte" cols="50" rows="5" required> </textarea>
                 </div>
              </form>
              </div>
              <div>
                  <img :src= "articleitem.photo" alt="...">
              </div>
              <button @click="$emit('change-page', 'accueil')" > Annuler</button>
              <button @click="$emit('create-article', articleitem)" > Ajouter</button>
              
              
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

})()