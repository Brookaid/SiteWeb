;(function () {
  'use strict'



const template = ` 
 <section id="pl">
 <div class="outer-div">
		  <div class="inner-div">
			<div class="title">
				LA COPINE DE DE GEA
			</div>
			<img src="images/Edurne_land.jpg" width="500px">
			<br>
			Edurne García Almagro, née le 22 décembre 1985 à Madrid, est une chanteuse espagnole.
			À 13 ans, Edurne est choisie pour faire partie du groupe Trastos avec lequel elle enregistre 3 disques.
			En 2005, en réussissant le casting de Operación Triunfo, elle se fait connaitre par un large public.
			En 2006, Edurne sort son premier album solo intitulé Edurne qui contient une chanson du groupe espagnol La Oreja de Van Gogh.
			Elle est la petite amie du footballeur espagnol David de Gea.
			Le 14 janvier 2015, elle est choisie pour représenter l'Espagne au Concours Eurovision de la chanson 2015 à Vienne, en Autriche. Sa chanson Amanecer (Aurore) est présentée le 1er mars 2015.
		  </div>
 </div>
</section>
`
Vue.component('pl', {
    template: template
  })
})()