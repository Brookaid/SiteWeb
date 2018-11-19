;(function () {
  'use strict'

const templateaccueil = ` 
 <section id="accueil">
  
        
     <div v-for="article in articleslist">
        <div class="outer-div">
            <div class="inner-div">
                <div class="title">
                    {{article.titre}}
                </div>
                <img :src="article.photo" width="45%">
                <br>
                {{article.texte}}
                <br>
                <li class="list-option" v-if ="mon_user!=''">
                    <button @click="$emit('change-page', 'editArticle')" class="edit">Editer </button>   
                    <button @click="$emit('change-page','delArticle')" class="suppr">Supprimer </button>
                    <br>
                    <i>Problème de gestion du currentId cela ne fonctionne donc pas</i>
                </li>
             </div>
        </div>
     </div>	    
</section>`


Vue.component('accueil', {
    props:['articleslist','mon_user'],
    template: templateaccueil,

})

const templatepl = ` 
 <section id="pl">
     
     <div v-for="article in articleslist">
     <div v-if="article.categorie === 'PL'">
        <div class="outer-div">
            <div class="inner-div">
                <div class="title">
                    {{article.titre}}
                </div>
                <img :src="article.photo" width="45%">
                <br>
                {{article.texte}}
             
        
        <li class="list-option" v-if ="mon_user!=''">
                    <button @click="$emit('change-page', 'editArticle')" class="edit">Editer </button>   
                    <button @click="$emit('delete-article', 'deleteArticle','article.index')" class="suppr">Supprimer </button>
        </li>
        </div>
     </div>
     </div>
     </div>	    
</section>
`
Vue.component('pl', {
    props:['articleslist','mon_user'],
    template: templatepl
  })

const templatel1 = ` 
     <section id="ligue1">
        <div v-for="article in articleslist">
        <div v-if="article.categorie === 'L1'">
            <div class="outer-div">
                <div class="inner-div">
                    <div class="title">
                        {{article.titre}}
                    </div>
                    <img :src="article.photo" width="45%">
                    <br>
                    {{article.texte}}
                 
            
            <li class="list-option" v-if ="mon_user!=''">
                    <button @click="$emit('change-page', 'editArticle')" class="edit">Editer </button>   
                    <button @click="$emit('delete-article', 'deleteArticle','article.index')" class="suppr">Supprimer </button>
            </li>
            </div>
        </div>
        </div>
        </div>    
    </section>
`

Vue.component('ligue1', {
    props:['articleslist','mon_user'],
    template: templatel1
  })

    const templatebs = ` 
 <section id="bundes">
     <div v-for="article in articleslist">
     <div v-if="article.categorie === 'BL'">
        <div class="outer-div">
            <div class="inner-div">
                <div class="title">
                    {{article.titre}}
                </div>
                <img :src="article.photo" width="45%">
                <br>
                {{article.texte}}
            
        
        <li class="list-option" v-if ="mon_user!=''">
                    <button @click="$emit('change-page', 'editArticle')" class="edit">Editer </button>   
                    <button @click="$emit('delete-article', 'deleteArticle','article.index')" class="suppr">Supprimer </button>
        </li>
        </div>
     </div> 
     </div>
     </div> 
</section>
`
Vue.component('bundes', {
    props:['articleslist','mon_user'],
    template: templatebs,
  })


const templateliga = ` 
 <section id="liga">
     <div v-for="article in articleslist">
     <div v-if="article.categorie === 'LIGA'">
        <div class="outer-div">
            <div class="inner-div">
                <div class="title">
                    {{article.titre}}
                </div>
                <img :src="article.photo" width="45%">
                <br>
                {{article.texte}}
            
        
        <li class="list-option" v-if ="mon_user!=''">
            <button @click="$emit('change-page', 'editArticle')" class="edit">Editer </button>   
            <button @click="$emit('delete-article', 'deleteArticle','article.index')" class="suppr">Supprimer </button>
        </li>
        </div> 
        </div>
     </div>
     </div> 
</section>
`
Vue.component('liga', {
    props:['articleslist','mon_user'],
    template: templateliga,
  })
})()