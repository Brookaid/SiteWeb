
 app = new Vue({
		  el: '#app',
		  data: {
			currentPage: 'accueil',
			success: true,
		  },
		  methods: {
              close: function(){
                this.success = false
              }
		  },
		})

function OuvrirPopup(page, nom, option) {
  window.open(page, nom, option);
}

function retrieve()
{

	var parameters = location.search.substring(1).split("&");
	var temp = parameters[0].split("=");
	mail = unescape(temp[1]);

	temp = parameters[1].split("=");
	sex = unescape(temp[1]);

	temp = parameters[2].split("=");
	city = unescape(temp[1]);

	var data =  document.getElementById("data");

	data.innerHTML = "Email: " + mail + "<brr";
	data.innerHTML += "Genre: " + sex + "<br>";
	data.innerHTML += "City: " + city + "<br>";

}
retrieve();


function openbox(formtitle, fadin)
{
  var box = document.getElementById('box');
  document.getElementById('filter').style.display='block';

  var btitle = document.getElementById('boxtitle');
  btitle.innerHTML = formtitle;

  if(fadin)
  {
    gradient("box", 0);
    fadein("box");
  }
  else
  {
    box.style.display='block';
  }
}

