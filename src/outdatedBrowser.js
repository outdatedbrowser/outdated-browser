/*--------------------------------------------------------------------
JAVASCRIPT "www.burocratik.com"
Version: 	1.0 - 2014
author: 	Burocratik
website: 	http://www.burocratik.com
-----------------------------------------------------------------------*/
var outdatedBrowser = function(options) {

	//Variable definition
	var outdated = document.getElementById("outdated");
	var	btnClose = document.getElementById("btnClose");
	var	btnUpdate = document.getElementById("update");

    // Default settings
    this.defaultOpts = {
		bgColor: '#F25648',
		color: '#FFF'
    }

	if (options) {
		this.defaultOpts.bgColor = options.bgColor,
		this.defaultOpts.color = options.color;
		bkgColor = this.defaultOpts.bgColor;
		txtColor = this.defaultOpts.color;
	} else {
		bkgColor = this.defaultOpts.bgColor;
		txtColor = this.defaultOpts.color;
	}

	//Define opacity and fadeIn/fadeOut functions
	var done = true; 

	function function_opacity(opacity_value) {
	    outdated.style.opacity = opacity_value / 100;
	    outdated.style.filter = 'alpha(opacity=' + opacity_value + ')';
	}

	function function_fade_out(opacity_value) {
	    function_opacity(opacity_value);
	    if (opacity_value == 1) {
	        outdated.style.display = 'none';
	        done = true;
	    }
	}

	function function_fade_in(opacity_value) {
	    function_opacity(opacity_value);
	    if (opacity_value == 1) {
	        outdated.style.display = 'block';
	    }
	    if (opacity_value == 100) {
	        done = true;
	    }
	}

	//check if element has a particular class
	function hasClass(element, cls) {
		return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	//check for css3 property support (transform)
	if (document.createElement("detect").style.webkitTransform === "" || document.createElement("detect").style.transform === ""){
	    document.getElementsByTagName("body")[0].className += " cssTransform";
	}

	var bodyElement = document.getElementsByTagName("body")[0];
	if(hasClass(bodyElement, 'cssTransform') === true) {

	    if (done && outdated.style.opacity !== '1') {
	        done = false;
	        for (var i = 1; i <= 100; i++) {
	            setTimeout((function (x) {
	                return function () {
	                    function_fade_in(x)
	                };
	            })(i), i * 10);
	        }
	    }
	    //close button
		btnClose.onmousedown = function() {
			outdated.style.display = 'none';
			return false;
		};
	}

	//check settings attributes
	outdated.style.backgroundColor = bkgColor;

	//check settings attributes
	btnUpdate.style.color = txtColor;

	//Override the update button color to match the background color
	btnUpdate.onmouseover = function() {
		this.style.color = bkgColor;
		this.style.backgroundColor = txtColor;
	};
	btnUpdate.onmouseout = function() {
		this.style.color = txtColor;
		this.style.backgroundColor = bkgColor;
	};

}//end of function