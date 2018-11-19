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
            <input type="text" placeholder="Entrez Pseudo"  v-model="user.username" name="pseudo" required>
        
            <label for="pswd"><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrer Mot de passe" v-model="user.password" name="pswd" required>
        
            <label for="pswd-repeat"><b>Répéter Mot de passe</b></label>
            <input type="password" placeholder="Répéter Mot de passe" v-model="user.repeatpassword" name="pswd-repeat" required>
        
            <p>En créeant un compte vous donnez votre accord à notre <a href="#" style="color:dodgerblue">Politique de confidentialité et modalités</a>.</p>
        
            <div class="clearfix">
              <button  @click="$emit('inscriptionuser', user)" type="submit" class="signupbtn">S'enregistrer</button>
            </div>
          </div>
        </form>
    </div>
 </div>
</section>
`
Vue.component('register', {
    template: template,
    data: function () {
			return {
				user: {
					'username': '',
					'password': '',
					'repeatpassword': ''
				}
			}
		},
  })
Vue.component('connexion-form', {
			template: `
                    <div class="outer-div">
    					<div class="inner-div">
                            <h1 class="modal-title">Connexion </h1>
                        </div>
                        <div class="panel-body">
                            <form action="" style="border:1px solid #ccc">
                                        <label>Login</label>
                                        <input v-model ="user.username" type="text" placeholder="Login">
                                        <label>Mot de passe</label>
                                        <input v-model ="user.password" type="password" placeholder="Mot de passe">
                            </form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <button @click="$emit('connexion', user)" class="btn btn-primary">Connexion</button>
                                </div>
                            </div>
                        </form>
                    </div>
    
    `,
			data: function () {
				return {
					user: {
						'username': '',
						'password': ''
					}
				}
			},
		}
	)
})()