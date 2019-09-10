# Outdated Browser v1.1.5

### A time saving tool for developers. It detects outdated browsers and advises users to upgrade to a new version.

So, you're tired of people visiting your modern website with an outdated browser and not doing anything about it.
Maybe they aren't "power" users, maybe it's your auntie running a last century browser trying to see awesome CSS3 animations and transforms. Let the user know that’s an outdated browser, and advise them on a better one.

With this solution you can check if the user’s browser can handle your website. If not, it will show a cool [looking notice](http://d.pr/i/Xhf) advising the user to update the browser. It’ll be up to the user to upgrade or not. Don't force the user!

That's it! As simple as it can get.

## How to use it
**Important:** Because of old browsers (e.g. IE6, IE7), we recommend:


* Implement this plugin before any other javascripts (plugins or your own scripts); 
* Although we tested the AJAX approach, and it's easier to implement, we recommend to use the plugin without AJAX calls (5.).

With these points in consideration is less prone to have conflicts with your code. These browsers have "strange" js errors and the plugin may not be working as intended. So keep it simple! 

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

    ```javascript
    // Plain Javascript
    //event listener: DOM ready
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    //call plugin function after DOM ready
    addLoadEvent(function(){
        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: 'your_path/outdatedbrowser/lang/en.html'
        })
    });
    ```

    ```javascript
    // Using jQuery (version that supports IE < 9)
    $( document ).ready(function() {
        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: 'your_path/outdatedbrowser/lang/en.html'
        })
    })
    ```

5. Using the plugin without AJAX calls:
    
    ```html
    <!-- Paste the required HTML at the end of your document (see demo examples) -->
    <div id="outdated">
        <h6>Your browser is out-of-date!</h6>
        <p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="https://bestvpn.org/outdatedbrowser/"> Outdated Browser </a></p>
        <p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
    </div>
    ```

    
    ```javascript
    // Call the plugin (see 4.) but with the variable languagePath empty: 
    // DOM ready or jQuery
    
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    })
    ```

6. Targeting browsers:

    You can do it in one of two ways: using Internet Explorer browsers as reference or specifying a CSS property. The outcome is the same, choose what is easier for you (for Edge vs IE11 check issue [#198](https://github.com/burocratik/outdated-browser/issues/198)).

    Lower Than (<):
    * "IE11","borderImage"
    * "IE10", "transform" (Default property)
    * "IE9", "boxShadow"
    * "IE8", "borderSpacing"

7. Choose the language:

    Download the “lang" folder: If you have the language you want, just write the correct path for the language file in your project; If you don’t have your language, you can write your own html file, and please share it with us.

And you're done!

*PS*: check the "demo" folder, it may help you.

***


## How to install

You have several options: you can download the repository manually or you can use a package manager to do that work for you.

```bash
# NPM
$ npm install outdatedbrowser

# Yarn
$ yarn add outdatedbrowser

# Bower
$ bower install outdated-browser
```

## FAQ

Before opening a new issue please check our [FAQ page](https://github.com/burocratik/outdated-browser/wiki/FAQ)


## Contributing

* Fork the project.
* Read through the issues or report new ones.
* Write some tests to make sure we don't accidentally break each other's code.
* Send a pull request.

**Note:** mind that this is NOT a plugin for the latest browsers, but the complete opposite! The html, css and javascript must work properly in very old browsers (IE6, IE7, etc), so there is no point to use the latest recommendations. It must work properly at least on IE6, so please double test it before sending a pull request.

**TRANSLATIONS**
Rename with a proper language abbreviation using the IETF language tags: two-letter language (ISO 639-1)  — two-letter country code (ISO 3166-1). For simplicity we are using all **lower case** and **country code can be omitted if** there is no regional variation. Links with language-country codes: [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm), [Windows Locale Codes](http://www.science.co.il/Language/Locale-codes.asp).

Current available languages: ar, cs, da, de, el, en, es, es-pe, et, fa, fi, fr, hr, hu, hy, id, it, ja, ko, lt, nb, nl, pl, pt, pt-br, ro, ru, sk, sl, sv, tr, uk, zh-cn, zh-tw

## CMS, Frameworks, etc
— [Wordpress Plugin](https://github.com/deblynprado/wp-outdated-browser) by Deblyn Prado
— [Ruby Gem](https://github.com/luisalima/outdatedbrowser_rails) by Luisa Lima
— [Yii2 widget](http://www.yiiframework.com/extension/yii2-outdated-browser)
— [Drupal Plugin](https://www.drupal.org/sandbox/agoradesign/2369737) by Mag. Andreas Mayr
— [Magento Extension](https://github.com/gaugeinteractive/magento-outdated-browser) by Joey Hoer
— [Contao Open Source CMS Module](https://github.com/lucasgehin/contao-outdatedbrowser) by Lucas Gehin

## Team

Made with love at [Bürocratik](http://burocratik.com) 2014—2019.<br>
Outdated Browser was acquired on June 2019.

## License

[MIT License](http://zenorocha.mit-license.org/)
