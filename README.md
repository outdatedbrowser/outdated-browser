# jQuery Outdated Browser v1.0

### An easy solution to aware your users running an old browser version

So, you're tired of people visiting your modern website with an old IE version and don't do anything about it. Maybe they aren't "power" users, maybe it's your aunt running IE8 or 9 and trying to see the awesomeness of CSS3 animations and transforms. Let the user know they are running an outdated browser, and advise them for a better one. 

With this solution you will check the user browser version and if he's running an old IE, it will show him a nice cool looking notice advising him to update the browser. That's it! As simple as it can get.

You let him know he's running some old browser, he will call the shot if he upgrades it or not. Don't force the user!

## How to use it

1. Include jQuery (has to be a version prior to 1.9 due to support for older IE versions):

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	```

2. Include jQuery Easing for the div animation:

	```html
	<script src="jquery.easing.1.3.min.js"></script>
	```

3. Include plugin's code:

	```html
	<script src="jquery.outdatedBrowser.js"></script>
	```

4. Include the CSS located in the html head:

	```html
	<style type="text/css" src="outdatedBrowser.css"></style>
	```

5. Include the required HTML:
 
	    <div id="outdated">
	        <div class="wrapperCenter">
	            <h6>your browser is out-of-date!</h6>
	            <p>update your browser to view the website correctly.</p>
	            <a class="update" href="http://outdatedbrowser.com/" rel="external">update my browser now</a>
	        </div>
	        <a class="btnClose"></a>
	    </div>
	
	The "outdated" id, aswell as all classes are required.

6. Call the plugin:

		$("#outdated").outdatedBrowser({
			bgColor: '#F25648',
			color: '#FFF',
			easeType: 'easeOutExpo',
			delayTime: 1000,
			animationTime: 1200
		});

	And you're done! Load your loved IE8 for a preview.

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
