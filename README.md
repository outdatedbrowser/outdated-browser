# Outdated Browser v1.0

### A time saving tool for developers. It detects outdated browsers and advises users to upgrade to a new version.

So, you're tired of people visiting your modern website with an outdated browser and not doing anything about it.
Maybe they aren't "power" users, maybe it's your auntie running a last century browser trying to see awesome CSS3 animations and transforms. Let the user know that’s an outdated browser, and advise them on a better one.

With this solution you can check if the user’s browser can handle your website. If not, it will show a cool looking notice advising the user to update the browser. It'll be up to him/her to decide if he upgrades or not. Don't force the user!

That's it! As simple as it can get.


## How to use it


1. Include plugin's script:

    ```html
    <script src="outdatedBrowser.min.js"></script>
    ```

2. Include the CSS located in the html head:

    ```html
    <style type="text/css" src="outdatedBrowser.min.css"></style>
    ```

3. Paste the required HTML:

    ```html
    <div id="outdated">
        <h6>Your browser is out-of-date!</h6>
        <p>Update your browser to view this website correctly. <a id="btnUpdate" href="http://outdatedbrowser.com/">Update my browser now</a></p>
        <p id="btnClose"><a href="#">Close</a></p>
    </div>
    ```




4. Call the plugin:

    ```javascript
    //PLAIN JAVASCRIPT
    //event listener form DOM ready
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
            bgColor: '#3f3f3f',
            color: '#e3e3e3',
            lowerThan: 'IE10'
        })
        );

    //USING jQuery
    $( document ).ready(function() {
        outdatedBrowser({
            bgColor: '#3f3f3f',
            color: '#e3e3e3',
            lowerThan: 'IE10'
        })
    })
    ```

5. Targeting browsers:

    You can do it in one of two ways: using Internet Explorer browsers as reference or specifying a CSS property. The outcome is the same, choose what is easier for you.

    
    Lower Than:
    * "IE11","borderImage"
    * "IE10", "transform" (Default property)
    * "IE9", "boxShadow"
    * "IE8", "borderSpacing"


And you're done! 
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


## Team

Made with love at Bürocratik.


## Contributing

Fork the project.
<br>Read through the outstanding issues or report new ones.
<br>Write some tests to make sure we don't accidentally break each other's code.
<br>Send a pull request.


## License

[MIT License](http://zenorocha.mit-license.org/)
