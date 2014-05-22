# jQuery Outdated Browser v1.0

### A time saving tool for developers, that detects if an outdated browser is being used and advises the users to update for a new one.

So, you're tired of people visiting your modern website with an old IE version and don't do anything about it. Maybe they aren't "power" users, maybe it's your aunt running IE8 or 9 and trying to see awesome CSS3 animations and transforms. Let the user know htat they are running an outdated browser, and advise them for a better one. 

With this solution you will check the user browser and if he's running a browser that cant handle CSS3 it will show him a nice cool looking notice advising him to update the browser. That's it! As simple as it can get.

You let him know he's running some old browser, he will call the shot if he upgrades it or not. Don't force the user!

## How to use it


1. Include plugin's script:

	```html
	<script src="outdatedBrowser.min.js"></script>
	```

4. Include the CSS located in the html head:

	```html
	<style type="text/css" src="outdatedBrowser.min.css"></style>
	```

5. Include the required HTML:
 
	    <div id="outdated">
            <div class="wrapperCenter">
                <h6>your browser is out-of-date!</h6>
                <p>update your browser to view the website correctly.</p>
                <a id="update" href="http://outdatedbrowser.com/" rel="external">update my browser now</a>
            </div>
            <p id="btnClose"><a href="#">Close Navigation</a></p>
        </div>

6. Call the plugin:

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
					showForLowerThan: 'IE9'
				})
			);
			
			//or if you're using jQuery
			$( document ).ready(function() {
				outdatedBrowser({
					bgColor: '#3f3f3f',
					color: '#e3e3e3',
					lowerThan: 'IE9'
				})
			});



	And you're done!

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

Made with love by the guys at Bürocratik.


## License

[MIT License](http://zenorocha.mit-license.org/)
