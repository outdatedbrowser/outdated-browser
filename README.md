# Outdated Browser v1.1.0

### A time saving tool for developers. It detects outdated browsers and advises users to upgrade to a new version.

So, you're tired of people visiting your modern website with an outdated browser and not doing anything about it.
Maybe they aren't "power" users, maybe it's your auntie running a last century browser trying to see awesome CSS3 animations and transforms. Let the user know that’s an outdated browser, and advise them on a better one.

With this solution you can check if the user’s browser can handle your website. If not, it will show a cool [looking notice](http://buro.pt/Wis6) advising the user to update the browser. It’ll be up to the user to upgrade or not. Don't force the user!

That's it! As simple as it can get.


## How to use it
Important: Because of old browsers (e.g. IE6, IE7), we recommend to implement this plugin before any other javascripts (plugins or your own scripts) — these browsers have "strange" js errors and the plugin may not be working as intended. 

1. Include the CSS located in the HTML head:

    ```html
    <link rel="stylesheet" href="your_path/outdatedbrowser/outdatedbrowser.min.css">    
    ```
    
2. Include plugin's script at the bottom of the HTML body:

    ```html
    <script src="your_path/outdatedbrowser/outdatedbrowser.min.js"></script>
    ```

3. Paste the required HTML at the end of your document (see demo examples):

    ```html
    <div id="outdated"></div>
    ```


4. Call the plugin by placing the following at the bottom of the HTML body:
<br><br>
— Plain Javascript <br>
    ```javascript
    //event listener: DOM ready
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                oldonload();
                func();
            }
        }
    }
    //call plugin function after DOM ready
    addLoadEvent(
        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: 'your_path/outdatedbrowser/lang/en.html'
        })
    );
    ```    
<br>
— Using jQuery (version that supports IE&lt;9) <br>
    ```javascript
    $( document ).ready(function() {
        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: 'your_path/outdatedbrowser/lang/en.html'
        })
    })
    ```    

6. Using the plugin without AJAX calls:

    — Paste the required HTML at the end of your document (see demo examples):
    ```html
    <div id="outdated">
         <h6>Your browser is out-of-date!</h6>
         <p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p>
         <p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
    </div>
    ```
    <br>
    — Call the plugin (see 4.) but with the variable languagePath empty:
     ```javascript
    //DOM ready or jQuery
        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: ''
        })
    ```     
    
    
    
6. Targeting browsers:

    You can do it in one of two ways: using Internet Explorer browsers as reference or specifying a CSS property. The outcome is the same, choose what is easier for you.


    Lower Than (<):
    * "IE11","borderImage"
    * "IE10", "transform" (Default property)
    * "IE9", "boxShadow"
    * "IE8", "borderSpacing"

7. Choose the language:

	Download the “lang" folder: If you have the language you want, just write the correct path for the language file in your project; If you don’t have your language, you can write your own html file, and please share it with us.  
    
And you're done!
<br>PS: check the "demo" folder, it may help you.
***

<!--## Structure

The basic structure of the project is given in the following way:


    ├── demo/
    │   └── index.html
    ├── imgs/
    │   └── outdatedBrowser-close.gif
    ├── src/
    │   ├── jquery.easing.1.3.min.js
    │   ├── jquery.min.js
    │   ├── jquery.outdatedBrowser.js
    │   ├── jquery.outdatedBrowser.min.js
    │   └── outdatedBrowser.css-->


## FAQ

Before opening a new issue please check our [FAQ page](https://github.com/burocratik/outdated-browser/wiki/FAQ)


## Contributing

Fork the project.
<br>Read through the issues or report new ones.
<br>Write some tests to make sure we don't accidentally break each other's code.
<br>Send a pull request.

**TRANSLATIONS** <br>
Rename with a proper language abbreviation: it — italian , de — german, fr — french, nl — dutch , br — brazilian portuguese, etc. <br>
NOTE: we are using a two letter code for the language. If you have variations of the same language use URL country code, e.g.: br—brazilian portuguese; us—american english

## CMS, Frameworks, etc
— [Wordpress Plugin](https://github.com/deblynprado/wp-outdated-browser) by Deblyn Prado<br>
— [Ruby Gem](https://github.com/luisalima/outdatedbrowser_rails) by Luisa Lima

## Team

Made with love at [Bürocratik](http://burocratik.com)


## License

[MIT License](http://zenorocha.mit-license.org/)
