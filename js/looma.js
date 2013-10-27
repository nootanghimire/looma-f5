var callAjax = function(relative_path, callback){
			var Ajax =  new XMLHttpRequest();
				Ajax.onreadystatechange = function() {
					
					//Since what we are calling a local file. we cannot get a 200 OK Status.
					//So We check only the readystate
					if(Ajax.readyState==4){
						serialized = Ajax.responseText;
						callback(serialized);
					}

				}

				Ajax.open("GET",relative_path, true);
				Ajax.send();	
}


var readSettings = callAjax("settings.json", function(data){
	obj = JSON.parse(data);
	alert(obj);
});