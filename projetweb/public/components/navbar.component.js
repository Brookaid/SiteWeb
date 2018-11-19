;(function () {
  'use strict'

  const template =`
<section id="navbar">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#82BFB6;">
  		<img src="images/icons8-football-100.png" width="45px">
    	<ul class="navbar-nav">
		    <li class="nav-item active" v-on:click="$emit('accueil')">
				<div class="maintitle">
		       		<a class="nav-link"  href="#accueil">MES COUILLES EN SHORT <span class="sr-only">(current)</span></a>
				</div>
			</li>
            
		    <li class="nav-item" v-on:click="$emit('ligue1')">
		       <a class="nav-link" href="#ligue1">Ligue 1</a>
		    </li>
		    <li class="nav-item" v-on:click="$emit('pl')">
		       <a class="nav-link"  href="#pl">Premier League</a>
		    </li>
		    <li class="nav-item" v-on:click="$emit('bundes')">
		       <a class="nav-link"  href="#bundes">Bundesliga</a>
		    </li>
		    <li class="nav-item" v-on:click="$emit('liga')">
		       <a class="nav-link"  href="#liga">Liga BBVA</a>
		    </li>
		</ul>
		<ul class="navbar-nav ml-auto" >
		   <li>
                
		   </li>
		</ul>
		<ul class="navbar-nav ml-auto" >
		    <li>
		         <button @click="$emit('change-page', 'addArticles')">Ajouter des Articles </button></li>
            </li>
		    <li>
		        <button v-if= "mon_user ===''"@click="$emit('change-page','register')">Inscription</button>
            </li>
		   <li>
                <!--<button onclick="document.getElementById('id01').style.display='block'">Login</button>-->
                <button v-if= "mon_user ===''"@click="$emit('change-page','connexion')">Login</button>
                <li v-if ="mon_user!=''">
                	<button  @click="$emit('logout')">Se déconnecter</button>
				</li>
                <li v-if ="mon_user!=''" class="user-icon">
                       {{ mon_user.username }} 
                </li>
		   </li>
		</ul>
	</nav>
</section>
  `

  Vue.component('navbar', {
    props: ['mon_user'],
    template: template
  })
    /*Vue.component('navigation-bar', {
		props: ['mon_user'],
		template: `
    <nav class="navbar">
        <div class="page-header">
            <ul class="nav nav-pills pull-right ">
                <li v-if ="mon_user!=''" >
                     <a @click="$emit('change-page', 'index')">Accueil </a></li>
                <li> <a @click="$emit('change-page', 'listeDesArticles')">Toutes les wags </a></li>
                <li> <a @click="$emit('change-page', 'inscription')">Inscription </a></li>

                <li>
                    <i v-if= "mon_user ===''"@click="$emit('change-page', 'connexion')" class="btn btn-info button_deco" > Connexion </i>
                </li>

                <li v-if ="mon_user!=''" class="user-icon">
                       <span class="glyphicon glyphicon-user"> {{ mon_user.username }}</span >
                </li>
                <li v-if ="mon_user!=''">
                	<i  @click="$emit('logout')" class="btn btn-info button_deco">Se déconnecter</i>
				</li>
            </ul>
            <h3 class="modal-title titre_site"> <a class="titre_site" @click="$emit('change-page', 'index')"><i class="glyphicon glyphicon-film"></i> HelloCine</a>
            </h3>
        </div>
    </nav>
    `
	})*/
})()