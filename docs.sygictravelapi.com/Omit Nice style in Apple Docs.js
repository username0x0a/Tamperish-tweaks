
function process() {

	if (window.location.toString().indexOf('apple') == -1)
		return

	document.querySelector('style[id*="_tamperish_"]').remove()

	setTimeout(function(){ document.querySelector('style[id*="_tamperish_"]').remove() }, 1)
}

process()
