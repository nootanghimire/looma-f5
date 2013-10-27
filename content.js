//Content.js

readSettings(function(data){
		readLocale(getLocaleDefault(data), function(localeData){

			//Start Writing contents here


			//Later Change this approach. 
			//Use a class. and readLocale()  will create a object inside the main looma class
			//and writeContent can use localiztion approach
			//and we could pass as
			//writeContent('top', 'div', 'looma-f5');


			//Start Writing Contents here. Do not tamper index.html
			
			writeContent('top', 'div', localeData['looma-f5']);
			writeContent('content', 'div', localeData['test']);

	});
});