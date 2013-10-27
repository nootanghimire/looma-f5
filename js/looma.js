var localepath = "";
var callAjax = function(relative_path, callback){
			var Ajax =  new XMLHttpRequest();
			var serialized = false;
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
};


var readSettings = function(settings){
	var data = callAjax('settings.json', function(data){
		settings(JSON.parse(data));
	});

}

var readLocale = function(localepath, callback){
	var data = callAjax('locale/'+localepath+'.json', function(data){
		callback(JSON.parse(data));
	});
}

var writeContent = function(id, typeofElement, content){
	var currentElement = document.createElement(typeofElement);
	currentElement.setAttribute('id', id);
	currentElement.innerHTML = content;
	document.body.appendChild(currentElement);
}

var setLocalePath = function(path_to_locale){
	alert(path_to_locale);
	localepath = path_to_locale;
};

var getLocaleDefault = function(settings){
	return settings.locale[settings.defaultLocale];
}