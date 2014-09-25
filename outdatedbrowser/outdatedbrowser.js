/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.0 - 2014
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function(options) {

    //Variable definition (before ajax)
    var outdated = document.getElementById("outdated");

    // Default settings
    var defaultOpts = this.defaultOpts = {
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: '../outdatedbrowser/lang/en.html',
		fadeInSpeed: 800
    }
	
	if (!options) {
		options = {};
	}

    if (options) {
        //assign css3 property to IE browser version
        if(options.lowerThan == 'IE8') {
            options.lowerThan = 'borderSpacing';
        } else if (options.lowerThan == 'IE9') {
            options.lowerThan = 'boxShadow';
        } else if (options.lowerThan == 'IE10' || options.lowerThan == '' || typeof options.lowerThan === "undefined") {
            options.lowerThan = 'transform';
        } else if (options.lowerThan == 'IE11') {
            options.lowerThan = 'borderImage';
        }
    };//end if options
	
	var bkgColor = options.bgColor || defaultOpts.bgColor;
	var txtColor = options.color || defaultOpts.color;
	var cssProp = options.lowerThan || defaultOpts.lowerThan;
	var languagePath = options.languagePath || defaultOpts.languagePath;
	var fadeInSpeed = typeof options.fadeInSpeed !== "undefined" ? options.fadeInSpeed : defaultOpts.fadeInSpeed;


    //Define opacity and fadeIn/fadeOut functions
    var fading_is_in_process = false;

    function change_opacity(opacity_value) {
        outdated.style.opacity = opacity_value / 100;
        outdated.style.filter = 'alpha(opacity=' + opacity_value + ')';
    }

    // function fade_out(opacity_value) {
    //     change_opacity(opacity_value);
    //     if (opacity_value == 1) {
    //         outdated.style.display = 'none';
    //         fading_is_in_process = false;
    //     }
    // }

    function fade_in(opacity_value) {
        change_opacity(opacity_value);
        if (opacity_value == 1) {
            outdated.style.display = 'block';
        }
        if (opacity_value == 100) {
            fading_is_in_process = false;
        }
    }

    //check if element has a particular class
    // function hasClass(element, cls) {
    //     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    // }

    var supports = (function() {
       var div = document.createElement('div'),
          vendors = 'Khtml Ms O Moz Webkit'.split(' '),
          len = vendors.length;

       return function(prop) {
          if ( prop in div.style ) return true;

          prop = prop.replace(/^[a-z]/, function(val) {
             return val.toUpperCase();
          });

          while(len--) {
             if ( vendors[len] + prop in div.style ) {
                return true;
             }
          }
          return false;
       };
    })();

    //check for css3 property support (transform=default)
    if ( !supports(''+ cssProp +'') ) {
		if (!fading_is_in_process && outdated.style.opacity !== '1') {
            fading_is_in_process = true;
			
			for (var i = 1; i <= 100; i++) {
				setTimeout((function (x) {
					return function () {
						fade_in(x);
					};
				})(i), i * fadeInSpeed / 100);
			}
        }
    };//end if

    //Check AJAX Options: if languagePath == '' > use no Ajax way, html is needed inside <div id="outdated">
    if( languagePath === ' ' || languagePath.length == 0 ){
        startStylesAndEvents();
    }else{
        grabFile(languagePath);
    }

    //events and colors
    function startStylesAndEvents(){
        var btnClose = document.getElementById("btnCloseUpdateBrowser");
        var btnUpdate = document.getElementById("btnUpdateBrowser");

        //check settings attributes
        outdated.style.backgroundColor = bkgColor;
        //way too hard to put !important on IE6
        outdated.style.color = txtColor;
        outdated.children[0].style.color = txtColor;
        outdated.children[1].style.color = txtColor;

        //check settings attributes
        btnUpdate.style.color = txtColor;
        btnUpdate.style.borderColor = txtColor;
        btnClose.style.color = txtColor;

        //close button
        btnClose.onmousedown = function() {
            outdated.style.display = 'none';
            return false;
        };

        //Override the update button color to match the background color
        btnUpdate.onmouseover = function() {
            this.style.color = bkgColor;
            this.style.backgroundColor = txtColor;
        };
        btnUpdate.onmouseout = function() {
            this.style.color = txtColor;
            this.style.backgroundColor = bkgColor;
        };
    }//end styles and events


    // IF AJAX with request ERROR > insert english default
    var ajaxEnglishDefault = '<h6>Your browser is out-of-date!</h6>'
        + '<p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p>'
        + '<p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>';


    //** AJAX FUNCTIONS - Bulletproof Ajax by Jeremy Keith **
    function getHTTPObject() {
      var xhr = false;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
          try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
          } catch(e) {
            xhr = false;
          }
        }
      }
      return xhr;
    };//end function

    function grabFile(file) {
        var request = getHTTPObject();
            if (request) {
                request.onreadystatechange = function() {
                displayResponse(request);
            };
                request.open("GET", file, true);
                request.send(null);
            }
        return false;
    };//end grabFile

    function displayResponse(request) {
        var insertContentHere = document.getElementById("outdated");
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 304) {
                insertContentHere.innerHTML = request.responseText;
            }else{
                insertContentHere.innerHTML = ajaxEnglishDefault;
            }
            startStylesAndEvents();
        }
      return false;
    };//end displayResponse

////////END of outdatedBrowser function
};







