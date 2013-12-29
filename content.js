//Content.js


//Write needed functions!

looma.showSubjects = function(buttonData, attr) {
	//remove previous div
		var elem = document.getElementById('subjects');
		if(elem != null){
			elem.parentNode.removeChild(elem);
		}
		var cls = buttonData.getAttribute(attr);
		var path = "classes/Class"+cls+"/"+this.settings.config+".json";
		//alert(path);
		var that = this;
		this.callAjax(path, function(data){
			var obj = JSON.parse(data);
			var objSub = that.write('div','<button onclick="looma.showSubjects(null, 200)" class="submit-box s-white">Hide</button>',classContainer,{"id":"subjects","class":"user-select-none","style":"cursor:default"});
			for (var i = 0; i < obj.subjects.length; i++) {
				that.write('button', obj.subjects[i], objSub, {"class":"submit-box s-green","onclick":"looma.loadSub("+cls+",'"+obj.subjects[i]+"')"});
			};
		});

};

looma.loadSub = function(cls, sub){
	//locate the json file for the 
}



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



