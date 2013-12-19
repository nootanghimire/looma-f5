//Content.js


looma.readSettings(function(){	
		looma.readLocale(looma.getLocaleDefault(looma.settings), function(){

			//Start Writing contents here


			//Later Change this approach. 
			//Use a class. and readLocale()  will create a object inside the main looma class
			//and writeContent can use localiztion approach
			//may be work on a algorithm that can automatically guess the correct
			//mapping, instead of one-to-one mapping everything
			//and we could pass as
			//looma.write(typeofElement, content, parent=false, attribObj = false)

			//Start Writing Contents here. Do not tamper index.html
			//
			looma.write('div', 'looma-f5',false,{"id":"top","class":"user-select-none"});
			var centered = looma.write('center','',false,{"id":"centered"});
			var classContainer = looma.write('div', '', centered, {"id":"classContainer"});
			var i;

			for(i=1; i<= looma.settings.classes; i++){
				looma.write('button', 'Class '+i, classContainer,
					{
						"data-class":i,
						"onclick":"looma.showSubjects(this, 'data-class')",
						"class":"submit-box s-white"
					}
				);
			}			
	});
});
