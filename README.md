# Animated Logo Plugin for jQuery

Give a logo an animated background by providing a foreground and background image.
Currently the plugin exclusively supports a horizontal back-and-forth animation for the background image.

## Usage
Animated Logo needs jQuery to run. Include jQuery and the plugin script in your HTML code:
```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.animated-logo.js" type="text/javascript"></script>
```
You'll also need a `<div>` which will contain the logo:
```html
<div id="logo"></div>
```
Finally, use this JavaScript code to create the animated logo:
```javascript
$('#logo').animateLogo({
	foreground_url: '/path/to/foreground/image.png',
	background_url: '/path/to/background/image.png',
	staticImage: '/path/to/static/logo/image.png',
	canvasWidth: 200,
	canvasHeight: 100
});
```
Make sure the foreground logo image is the same size as the canvas and the background logo image is wider than the logo.

## Options
`int canvasWidth` (default value `200`)

Width of the canvas that holds the logo (and thus the effective width of your logo)

`int canvasHeight` (default value `100`)

Height of the canvas that holds the logo (and thus the effective height of your logo)

`string fgImage` (default value `'images/logo-fg.png'`)

Path to the foreground image of your logo.

`string bgImage` (default value `'images/logo-bg.png'`)

Path to the background image of your logo.

`string staticImage` (default value `'images/logo-static.png'`)

The default, static, background image for when the animation won't work.

`int animationSpeed` (default value `100`)

The speed of the animation. Lower is faster.