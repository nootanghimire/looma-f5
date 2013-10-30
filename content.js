//Content.js


looma.readSettings(function(){	
	alert(looma.settings);
		looma.readLocale(looma.getLocaleDefault(looma.settings), function(){

			//Start Writing contents here


			//Later Change this approach. 
			//Use a class. and readLocale()  will create a object inside the main looma class
			//and writeContent can use localiztion approach
			//may be work on a algorithm that can automatically guess the correct
			//mapping, instead of one-to-one mapping everything
			//and we could pass as
			//writeContent('top', 'div', 'looma-f5');


			//Start Writing Contents here. Do not tamper index.html
			
			looma.writeContent('top', 'div', 'looma-f5');
			looma.writeContent('content', 'div','test 132');

	});
});
