/*!--------------------------------------------------------------------
JAVASCRIPT "Outdated Browser"
Version:    1.1.2 - 2015
Forked version: 1.0 - 2019
author:     Burocratik
website:    http://www.burocratik.com
* @preserve
-----------------------------------------------------------------------*/
var outdatedBrowser = function (options) {

  //Variable definition (before ajax)
  var outdated = document.getElementById("outdated");

  // Default settings
  this.defaultOpts = {
    bgColor: '#f25648',
    color: '#ffffff',
    lowerThan: 'transform',
    languagePath: '../outdatedbrowser/lang/en.html',
    dismissValidSeconds: 60*60*24*7, // One week
    localStorageKeyDismiss: 'outdatedBrowserDismiss'
  }

  if (options) {
    //assign css3 property to IE browser version
    if (options.lowerThan == 'IE8' || options.lowerThan == 'borderSpacing') {
      options.lowerThan = 'borderSpacing';
    } else if (options.lowerThan == 'IE9' || options.lowerThan == 'boxShadow') {
      options.lowerThan = 'boxShadow';
    } else if (options.lowerThan == 'IE10' || options.lowerThan == 'transform' || options.lowerThan == '' || typeof options.lowerThan === "undefined") {
      options.lowerThan = 'transform';
    } else if (options.lowerThan == 'IE11' || options.lowerThan == 'borderImage') {
      options.lowerThan = 'borderImage';
    }
    //all properties
    this.defaultOpts.bgColor = options.color ? options.bgColor : this.defaultOpts.bgColor;
    this.defaultOpts.color = options.color ? options.color : this.defaultOpts.color;
    this.defaultOpts.lowerThan = options.lowerThan ? options.lowerThan : this.defaultOpts.lowerThan,
    this.defaultOpts.languagePath = options.languagePath ? options.languagePath : this.defaultOpts.languagePath;
    this.defaultOpts.dismissValidSeconds = options.dismissValidSeconds ? options.dismissValidSeconds : this.defaultOpts.dismissValidSeconds;
    this.defaultOpts.localStorageKeyDismiss = options.localStorageKeyDismiss ? options.localStorageKeyDismiss : this.defaultOpts.localStorageKeyDismiss;
  }

  // Set variables
  bkgColor = this.defaultOpts.bgColor;
  txtColor = this.defaultOpts.color;
  cssProp = this.defaultOpts.lowerThan;
  languagePath = this.defaultOpts.languagePath;
  dismissValidSeconds = this.defaultOpts.dismissValidSeconds * 1000;
  localStorageKeyDismiss = this.defaultOpts.localStorageKeyDismiss;

  //Define opacity and fadeIn/fadeOut functions
  var done = true;

  function function_opacity(opacity_value) {
    outdated.style.opacity = opacity_value / 100;
    outdated.style.filter = 'alpha(opacity=' + opacity_value + ')';
  }

  // Has local storage?
  function localStorageIsSupported() {
    return Storage !== void(0);
  }

  // Match if message is closed
  function messageIsClosedBefore() {
    if (!localStorageIsSupported()) {
      return false
    }

    // Validate time
    var closedTimestamp = Math.floor(window.localStorage.getItem(localStorageKeyDismiss));
    var now = new Date().getTime();

    if (!closedTimestamp) {
      return false;
    }

    if (now < closedTimestamp + dismissValidSeconds) {
      return true;
    } else {
      window.localStorage.removeItem(localStorageKeyDismiss);
      return false;
    }
  }

  // Store closed in LocalStorage
  function storeClosed() {
    if (!localStorageIsSupported()) {
      return;
    }

    window.localStorage.setItem(localStorageKeyDismiss, new Date().getTime());
  }

  // Hide the mesasge
  function hideMessage() {
    outdated.style.display = 'none';
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

  var supports = (function () {
    var div = document.createElement('div');
    var vendors = 'Khtml Ms O Moz Webkit'.split(' ');
    var len = vendors.length;

    return function (prop) {
      if (prop in div.style) return true;

      prop = prop.replace(/^[a-z]/, function (val) {
        return val.toUpperCase();
      });

      while (len--) {
        if (vendors[len] + prop in div.style) {
          return true;
        }
      }

      if (messageIsClosedBefore()) {
        return true;
      }

      return false;
    };
  })();

  //if browser does not supports css3 property (transform=default), if does > exit all this
  if (!supports('' + cssProp + '')) {
    if (done && outdated.style.opacity !== '1') {
      done = false;
      for (var i = 1; i <= 100; i++) {
        setTimeout((function (x) {
          return function () {
            function_fade_in(x);
          };
        })(i), i * 8);
      }
    }
  } else {
    return;
  } //end if

  // Check AJAX Options: if languagePath == '' > use no Ajax way, html is needed inside <div id="outdated">
  if (languagePath === ' ' || languagePath.length == 0) {
    startStylesAndEvents();
  } else {
    grabFile(languagePath);
  }

  //events and colors
  function startStylesAndEvents() {
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
    // btnUpdate.style.borderColor = txtColor;
    if (btnUpdate.style.borderColor) {
      btnUpdate.style.borderColor = txtColor;
    }
    btnClose.style.color = txtColor;

    //close button
    btnClose.onmousedown = function () {
      hideMessage();
      storeClosed();
      return false;
    };

    //Override the update button color to match the background color
    btnUpdate.onmouseover = function () {
      this.style.color = bkgColor;
      this.style.backgroundColor = txtColor;
    };
    btnUpdate.onmouseout = function () {
      this.style.color = txtColor;
      this.style.backgroundColor = bkgColor;
    };
  } //end styles and events

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
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          xhr = false;
        }
      }
    }
    return xhr;
  }//end function

  function grabFile(file) {
    var request = getHTTPObject();
    if (request) {
      request.onreadystatechange = function () {
        displayResponse(request);
      };
      request.open("GET", file, true);
      request.send(null);
    }
    return false;
  } //end grabFile

  function displayResponse(request) {
    var insertContentHere = document.getElementById("outdated");
    if (request.readyState == 4) {
      if (request.status == 200 || request.status == 304) {
        insertContentHere.innerHTML = request.responseText;
      } else {
        insertContentHere.innerHTML = ajaxEnglishDefault;
      }
      startStylesAndEvents();
    }
    return false;
  }//end displayResponse

////////END of outdatedBrowser function
};
