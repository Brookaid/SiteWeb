;(function () {
  'use strict'

  const template =`
<section id="navbar">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#82BFB6;">
  		<img src="images/icons8-football-100.png" width="45px">
    	<ul class="navbar-nav">
		    <li class="nav-item active" v-on:click="$emit('accueil')">
				<div class="maintitle">
		       		<a class="nav-link"  href="#accueil">MES WAGS EN SHORT <span class="sr-only">(current)</span></a>
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
		         <button v-if ="mon_user!=''" @click="$emit('change-page', 'addArticle')">Ajouter des Articles </button>
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
                <li v-if ="mon_user!=''" class="user-name">
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
})()