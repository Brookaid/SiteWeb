;(function () {
  'use strict'



const template = ` 
<section id="register">
 <div class="outer-div">
    <div class="inner-div">
        <form action="" style="border:1px solid #ccc">
          <div class="container">
            <h1>Inscription</h1>
            <p>Veuillez remplir afin de vous inscrire.</p>
            <hr>
        
            <label for="pseudo"><b>Pseudo</b></label>
            <input type="text" placeholder="Entrez Pseudo" name="pseudo" required>
        
            <label for="pswd"><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrer Mot de passe" name="pswd" required>
        
            <label for="pswd-repeat"><b>Répéter Mot de passe</b></label>
            <input type="password" placeholder="Répéter Mot de passe" name="pswd-repeat" required>
        
            <label>
              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Se souvenir de moi
            </label>
        
            <p>En créeant un compte vous donnez votre accord à notre <a href="#" style="color:dodgerblue">Politique de confidentialité et modalités</a>.</p>
        
            <div class="clearfix">
              <button type="submit" class="signupbtn">S'enregistrer</button>
            </div>
          </div>
        </form>
    </div>
 </div>
</section>
`
Vue.component('register', {
    template: template
  })
})()