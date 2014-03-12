/*--------------------------------------------------------------------
JAVASCRIPT "www.burocratik.com"
Version: 	1.0 - 2014
author: 	Burocratik
website: 	http://www.burocratik.com
-----------------------------------------------------------------------*/
//safety net against concatenated scripts and plugins which may not be closed
;(function ( $, window, document, undefined ) {

	$.fn.outdatedBrowser = function( options ) {

		// Default settings
		var settings = $.extend({
			bgColor: '#F25648',
			color: '#FFF',
			easeType: 'easeOutExpo',
			delayTime: 1000,
			animationTime: 1200
		}, options);

		//Variable definition
		var $outdated 	= 	$("#outdated"),
			$btnClose 	= 	$("#outdated .btnClose"),
			$btnUpdate 	= 	$('#outdated .update');

		return this.each( function() {

			if (document.createElement("detect").style.webkitTransform === "" || document.createElement("detect").style.transform === ""){
			    document.getElementsByTagName("html")[0].className += " cssTransform";
			}

			if( !$("html").hasClass("cssTransform") ) {
				$outdated.show().delay(settings.delayTime).animate({"top": 0}, settings.animationTime, settings.easeType);
				$btnClose.click(function(){
					$outdated.animate({"top": -333}, 1200, settings.easeType);
					return false;
				});
			}

			//check settings attributes
			if ( settings.color ) {
				$(this).css( 'color', settings.color );
			}

			//check settings attributes
			if ( settings.bgColor ) {
				$(this).css( 'background-color', settings.bgColor );
			}

			//Override the update button color to match the background color
			$btnUpdate.hover(function() {
			  $(this).css("color", settings.bgColor);
			}, function() {
			  $(this).css("color", settings.color);
			});

			//check settings and call for action
			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call(this);
			}

		});

	};//end of outdatedBrowser function

})( jQuery, window, document );