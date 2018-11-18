;(function () {
  'use strict'



const templateaccueil = ` 
 <section id="accueil">
  <div class="outer-div">
		<div class="inner-div">
			<div class="title">
				LA COPINE DE THAUVIN
			</div>
			<img src="images/charlotte.jpg" width="500px">
			<br>
			Charlotte Pirroni, née le 17 août 1993 à Monaco, est un mannequin et une chroniqueuse française, élue Miss Côte-d'Azur en 2014 et deuxième dauphine de Miss France 2015.
			Charlotte Pirroni est la petite-fille de Louis Pirroni, ex-entraîneur de l'AS-Monaco.

			En 2014, elle obtient sa 2e année de Bachelor Marketing et Management, option luxe mode et design, et désire devenir chef de produit dans le domaine de la parfumerie ou ouvrir sa propre agence de mannequin

			Le 3 août 2014, Charlotte Pirroni est élue Miss Côte d'Azur à Mougins. Le 6 décembre de la même année, au Zénith d'Orléans et en direct sur TF1, elle est élue deuxième dauphine de Camille Cerf, sacrée Miss France 20152.

			Le 5 novembre 2015, elle représente la France à l'élection de Miss International 2015, faisant partie des 70 Miss en compétition.

			Après des débuts comme youtubeuse beauté en avril 20174, elle est choisie par Cyril Hanouna pour être, chroniqueuse dans l'émission Touche pas à mon poste ! sur C8 à l'automne 2017
			Depuis mars 2015, Charlotte Pirroni vit en couple avec le footballeur Florian Thauvin, à l'exception de la période entre septembre 2017 et décembre 2017 où ils se sont séparés.

		</div>
	</div>
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
  	<div class="outer-div">
		<div class="inner-div">
			<div class="title">
				LA COPINE DE GOTZE
			</div>
			<img src="images/maxresdefault.jpg" width="500px">
			<br>
			Ann-Kathrin, née le 6 décembre 1989  à Emmerich am Rhein en Allemagnea. Elle a grandi avec ses 2 frères, Nils et Sebastian à Emmerich am Rhein. Durant son enfance, elle a pris des cours de chant, de ballet et de piano. À l'âge de 16 ans, elle a commencé à une carrière de mannequinat. En 2010, elle se presente sous de nom de scène Trina et publie son premier single This Is Me. En 2011, elle sort son deuxième single Body Language2.
			En 2012, elle a participé à la septième saison de l'émission Germany's Next Topmodel (en), où elle est entrée dans le top 50. Depuis l'été 2012, elle officialise une romance avec le footballeur international Mario Götze3. En 2013 elle était devant la caméra pour GQ et FHM dans de nombreux pays. Pour la Coupe du Monde de la FIFA 2014, elle a sponsorisée pour la marque Axe4. Elle à posé sur la couverture du magazine FHM à Johannesburg en Afrique du Sud5, et a été également dans le documentaire L'équipe de voir. En 2015 elle est apparue dans le calendrier du chocolatier Lambertzet en tant que modèle de couverture dans le magazine sportif Autriche. En 2016, elle est mannequin pour la marque de bain et de lingerie, Lascana6.
			En tant qu'actrice de doublage, elle a prêté sa voix à Francine, le paresseux géant, dans le film d'animation L'Âge de glace : Les Lois de l'Univers. Pour l'UEFA EURO 2016, elle est apparue dans une chaîne électronique commerciale du marché des médias7. En 2017, elle a été candidate à la 10e de Let's Dance (de), version allemande de Danse avec les stars, où elle a terminé à la 10e place. Également en 2017 a été impliqué dans une campagne pour l' organisation de défense des animaux PETA contre le port de fourrure8.
			Elle à une chaîne YouTube sous le nom de Ann-Kathrin Vida mêlant la musique, le maquillage et le sport.
			</div>
	</div>
</section>`


Vue.component('accueil', {
    template: templateaccueil
  })

const templatepl = ` 
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
    template: templatepl
  })

const templatel1 = ` 
 <section id="ligue1">
  <div class="outer-div">
		<div class="inner-div">
			<div class="title">
				LA COPINE DE THAUVIN
			</div>
			<img src="images/charlotte.jpg" width="500px">
			<br>
			Charlotte Pirroni, née le 17 août 1993 à Monaco, est un mannequin et une chroniqueuse française, élue Miss Côte-d'Azur en 2014 et deuxième dauphine de Miss France 2015.
			Charlotte Pirroni est la petite-fille de Louis Pirroni, ex-entraîneur de l'AS-Monaco.

			En 2014, elle obtient sa 2e année de Bachelor Marketing et Management, option luxe mode et design, et désire devenir chef de produit dans le domaine de la parfumerie ou ouvrir sa propre agence de mannequin

			Le 3 août 2014, Charlotte Pirroni est élue Miss Côte d'Azur à Mougins. Le 6 décembre de la même année, au Zénith d'Orléans et en direct sur TF1, elle est élue deuxième dauphine de Camille Cerf, sacrée Miss France 20152.

			Le 5 novembre 2015, elle représente la France à l'élection de Miss International 2015, faisant partie des 70 Miss en compétition.

			Après des débuts comme youtubeuse beauté en avril 20174, elle est choisie par Cyril Hanouna pour être, chroniqueuse dans l'émission Touche pas à mon poste ! sur C8 à l'automne 2017
			Depuis mars 2015, Charlotte Pirroni vit en couple avec le footballeur Florian Thauvin, à l'exception de la période entre septembre 2017 et décembre 2017 où ils se sont séparés.

		</div>
	</div>
</section>
`

Vue.component('ligue1', {
    template: templatel1
  })

    const templatebs = ` 
 <section id="bundes">
      <div class="outer-div">
		 <div class="inner-div">
			<div class="title">
				LA COPINE DE GOTZE
			</div>
			<img src="images/maxresdefault.jpg" width="500px">
			<br>
			Ann-Kathrin a grandi avec ses 2 frères, Nils et Sebastian à Emmerich am Rhein. Durant son enfance, elle a pris des cours de chant, de ballet et de piano. À l'âge de 16 ans, elle a commencé à une carrière de mannequinat. En 2010, elle se presente sous de nom de scène Trina et publie son premier single This Is Me. En 2011, elle sort son deuxième single Body Language2.
			En 2012, elle a participé à la septième saison de l'émission Germany's Next Topmodel (en), où elle est entrée dans le top 50. Depuis l'été 2012, elle officialise une romance avec le footballeur international Mario Götze3. En 2013 elle était devant la caméra pour GQ et FHM dans de nombreux pays. Pour la Coupe du Monde de la FIFA 2014, elle a sponsorisée pour la marque Axe4. Elle à posé sur la couverture du magazine FHM à Johannesburg en Afrique du Sud5, et a été également dans le documentaire L'équipe de voir. En 2015 elle est apparue dans le calendrier du chocolatier Lambertzet en tant que modèle de couverture dans le magazine sportif Autriche. En 2016, elle est mannequin pour la marque de bain et de lingerie, Lascana6.
			En tant qu'actrice de doublage, elle a prêté sa voix à Francine, le paresseux géant, dans le film d'animation L'Âge de glace : Les Lois de l'Univers. Pour l'UEFA EURO 2016, elle est apparue dans une chaîne électronique commerciale du marché des médias7. En 2017, elle a été candidate à la 10e de Let's Dance (de), version allemande de Danse avec les stars, où elle a terminé à la 10e place. Également en 2017 a été impliqué dans une campagne pour l' organisation de défense des animaux PETA contre le port de fourrure8.
			Elle à une chaîne YouTube sous le nom de Ann-Kathrin Vida mêlant la musique, le maquillage et le sport.
		 </div>
	  </div>
</section>
`
Vue.component('bundes', {
    template: templatebs
  })
})()