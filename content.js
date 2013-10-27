//Content.js

readSettings(function(data){
		readLocale(getLocaleDefault(data), function(localeData){

			//Start Writing contents here


			//Later Change this approach. 
			//Use a class. and readLocale()  will create a object inside the main looma class
			//and writeContent can use localiztion approach
			//may be work on a algorithm that can automatically guess the correct
			//mapping, instead of one-to-one mapping everything
			//and we could pass as
			//writeContent('top', 'div', 'looma-f5');


			//Start Writing Contents here. Do not tamper index.html
			
			writeContent('top', 'div', localeData['looma-f5']);
			writeContent('content', 'div', localeData['test']);

	});
});
