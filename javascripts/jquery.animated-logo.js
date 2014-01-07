(function($) {
	$.fn.animateLogo = function(options) {
		var defaults = {
			canvasWidth: 200,
			canvasHeight: 100,
			fgImage: 'images/logo-fg.png',
			bgImage: 'images/logo-bg.png',
			staticImage: 'images/logo-static.png',
			animationSpeed: 100
		}
		var settings = $.extend({}, defaults, options);
		return this.each(function() {
			var canvas = $('<canvas/>')
				.attr('width', settings.canvasWidth)
				.attr('height', settings.canvasHeight)
				.append($('<img/>').attr('src', settings.staticImage))
				.appendTo(this);
			var ctx = canvas[0].getContext('2d');
			var fg = new Image(), bg = new Image();
			var loadedCount = 0;
			fg.src = settings.fgImage;
			bg.src = settings.bgImage;
			var onload = function() {
				if(++loadedCount == 2) setInterval(function() {
					ctx.clearRect(0, 0, settings.canvasWidth, settings.canvasHeight);
					x += modifier;
					if(x <= -(bg.width - settings.canvasWidth) || x >= 0)
						modifier *= -1;
					ctx.drawImage(bg, x, 0);
					ctx.drawImage(fg, 0, 0);
				},settings.animationSpeed);
			}
			bg.onload = fg.onload = onload;
			var x = 0, modifier = -1;
		});
	}
}(jQuery));