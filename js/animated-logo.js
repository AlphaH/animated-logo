function animate_logo(options) {
	if(typeof options.canvas == 'undefined' || typeof options.foreground_url == 'undefined' || typeof options.background_url == 'undefined') {
		if ('console' in self && 'log' in console)
			console.log('Function options is missing certain options. Please read the manual.');
		return;
	}
	do_animation = function() {
		ctx.clearRect(0, 0, options.canvas.width, options.canvas.height);
		x += modifier;
		if(x <= -72 || x >= 0)
			modifier *= -1;
		ctx.drawImage(bg, x, 0);
		ctx.drawImage(fg, 0, 0);
	}
	var ctx = options.canvas.getContext('2d');
	var bg = new Image(), fg = new Image();
	var loadedCount = 0;
	fg.src = options.foreground_url;
	bg.src = options.background_url;
	var onload = function() {
		if(++loadedCount == 2) setInterval(do_animation,100);
	}
	bg.onload = fg.onload = onload;
	var x = 0, modifier = -1;
}
