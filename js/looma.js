var looma = {
	localepath:false,
	settings:false,
	localeObj:false,
	callAjax: function(relative_path, callback){
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
	},

	readSettings: function(callback){
		var that = this;
		var data = this.callAjax('settings.json', function(data){
			that.settings = JSON.parse(data);
			callback();
		});
	},

	getCustomSettings: function(settingPath, callback){
		var data = this.callAjax(settingPath, function(data){
			callback(JSON.parse(data));
		});
	},

	readLocale: function(localepath, callback){
		var that = this;
		var data = this.callAjax('locale/'+localepath+'.json', function(data){
			that.localeObj = JSON.parse(data);
			callback();
		});
	},
	write: function(typeofElement, content, parent=false, attribObj = false){
		var currentElement = document.createElement(typeofElement);
		//currentElement.setAttribute('id', id);
		currentElement.innerHTML = this.l10n(content);
		if(parent==false){
			document.body.appendChild(currentElement);	
		} else {
			parent.appendChild(currentElement);
		}
		if(attribObj != false){
			for(var key in attribObj){
				currentElement.setAttribute(key, attribObj[key]);
			}
		}
		return currentElement;
	},
	l10n: function(content){
		var localeObject =  this.localeObj;
		var arr = content.split(" ").reverse(); //Split by space. and reverse (actually non-reversed) the order
		var newArr =[]; //Container
		for (var i = arr.length - 1; i >= 0; i--) {
			// if the word does not have one-to-one mapping:
			if(localeObject[arr[i]] == undefined){
				if(isNaN(Number(arr[i]))){
				//^^ if the word is not a number
				newArr.push(arr[i]); //do not translate.
				} else { //if the word is collection of digits
					var nums = arr[i].split('').reverse(); //Same old split and (non)-reverse
					var convNums = []; //Same old container
					for (var j = nums.length - 1; j >= 0; j--) {
						convNums.push(localeObject[nums[j]]);
						//iterate and push digits
					}
					newArr.push(convNums.join('')); //Make those digits a word! :)
				}
			} else { //This means the word has a one-to-one mapping:
				newArr.push(localeObject[arr[i]]);
			}
		}
		return newArr.join(" "); //Join all with spaces.
	},

	setLocalePath: function(path_to_locale){
		this.localepath = path_to_locale;
	},
	getLocaleDefault: function(settings){
		return settings.locale[settings.defaultLocale];
	},

	showSubjects: function(buttonData, attr){
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
			var objSub = that.write('div','',false,{"id":"subjects"});
			for (var i = 0; i < obj.subjects.length; i++) {
				that.write('button', obj.subjects[i], objSub, {"onclick":"looma.loadSub("+cls+",'"+obj.subjects[i]+"')"});
			};
		});
	}
};
