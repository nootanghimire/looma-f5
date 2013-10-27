var callAjax = function(){
			var Ajax =  new XMLHttpRequest();
				Ajax.onreadystatechange = function() {
					
					//Since what we are calling a local file. we cannot get a 200 OK Status.
					//So We check only the readystate
					if(Ajax.readyState==4){
						serialized = Ajax.responseText;
						obj = JSON.parse(serialized);
						alert(obj);
					}

				}

				Ajax.open("GET","settings.json", true);
				Ajax.send();	
}
