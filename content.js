//Content.js

//TODO: Write Navigation bar at the bottom.  

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
	var path = "classes/Class"+cls+"/"+sub+"/config.json";
	var that = this;
	this.callAjax(path, function(data){
		var obj = JSON.parse(data);
		//get the file names. List it. And then use PDF.js to render it.
		var clickurl=""
		for (var i = obj.files.length - 1; i >= 0; i--) {
			clickurl="'../../classes/Class"+cls+"/"+sub+"/"+obj.files[i].path+"'"
			that.write('div','<button class="submit-box s-blue" onclick="looma.renderPDF('+clickurl+');">'+obj.files[i].name+'</button>',classContainer,{"id":"subject-list"}); 
		};
	});
};

looma.renderPDF = function(path){
	//user viewer js to render the pdf. (with basic controls)
	//i think you need to iframe it.
	//remove the div first.

	//I need to create a fuckin' iframe in here. Instead of those ill-looking scripts and all 
	//I need to create a godforsaken html, use hashtags(#) to get those fuckin' paths to PDFs
	//But you know what? A movie is a movie. So, Dear Code, Please kindly be fucked till i finish the movie!
	//Savvy?

	/*var mainPDFDiv = this.write('div',"",false,{"id":"pdf-Div"})
	mainPDFDiv.innerHTML += '<script type="text/javascript" src="js/pdf.js"></script>';
	mainPDFDiv.innerHTML += '<script type="text/javascript" src="js/FnForPdf.js"></script>';

	var controlDiv = this.write('div', "",mainPDFDiv);
	this.write('button', "Previous", controlDiv, {"id":"prev","onclick":"goPrevious()"});
	this.write('button', "Next", controlDiv, {"id":"next","onclick":"goNext()"});
	this.write('span','Page: <span id="page_num"></span> / <span id="page_count"></span>', controlDiv);
	this.write('canvas','', this.write('div','',mainPDFDiv), {'id':'the-canvas','style':'border:1px solid black'});
	mainPDFDiv.innerHTML += '<script type="text/javascript">loadPDF(\''+path+'\')</script>';*/	
	//Create an iframe
	var mainPDFDiv = this.write('div',"",false,{"id":"pdf-Div", "align":"center"});
	var framePDF = this.write('iframe',"",mainPDFDiv ,{"src":"pdfjs/web/viewer.html?"+path, "height":"800px;", "width":"80%"});

	
};



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



