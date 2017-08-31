(function musicDB(){
	this.init = function(){
		this.search();
	};

	this.search = function(){
		var form = document.querySelector("#form");

		form.addEventListener("submit", function(e){
			e.preventDefault();
			var value = document.querySelector("#input_search").value;
			form.reset();

			getData(value.split(' ').join("+"));
		});
	};

	this.getData = function(artist){
		var http = new XMLHttpRequest();
		var url = "https://itunes.apple.com/search?term=audioslave&entity=album";
		var method = "GET";

		var container = document.querySelector("#album_list_container");
		container.innerHTML = '';

		http.open(method, url);
		http.onreadystatechange = function(){
			if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
				showArtist(JSON.parse(http.response));
			}else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200){

			}
		}
		http.send();
	};

	this.showArtist = function(obj){
		var container = document.querySelector("#album_list_container");
		var template = "";

		if(obj.results.length > 0){

			document.querySelector('#not_match').style.display = 'block';

			for(var i = 0; i < obj.results.length; i++){
				template += '<div class="col-sm-3 album_item">';
				template += '<div class="item_thmb" style="background: url()"></div>';
				template += '<div class="item_title">I cand destroy</div>';
				template += '<div class="item_price">';
				template += '<span>Price:</span> 200 USD';
				template += '</div>';
				template += '<a href="#" target="_blank">Buy now</a>';
				template += '</div>';

			}
			container.innerHTML = '';
			container.insertAdjacentHTML('afterbegin', template);
		}else{
			document.querySelector('#not_match').style.display = 'block';
		}

	};

	this.init();
})();