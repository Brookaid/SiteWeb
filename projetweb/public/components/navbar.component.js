;(function () {
  'use strict'

  const template = `
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
		<ul class="navbar-nav ml-auto">
		   <li class="nav-item">
		      <a class="nav-link" href="">Connexion</a>
		   </li>
		</ul>
	</nav>
</section>
  `

  Vue.component('navbar', {
    template: template
  })
})()