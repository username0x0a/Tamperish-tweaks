
if (document.body.id == 'jsonpeep-ext-body' && document.contentType == 'application/json') {

	function applyFix() {
		var links = document.querySelectorAll('a.jsonpeep-ext-a')
		links.forEach(function(link) {
			link.outerHTML = link.innerText
		})
		var strings = links = document.querySelectorAll('span.string')
		strings.forEach(function(str) {
			var s  = str.innerText.slice(1,-1)
			if (s.indexOf(';amp;') > 0)
				s = s.replaceAll(';amp;','')
			var reg = /(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i
			var out = s.match(reg) ?? []
			if (out.length > 0 && out[0] == s) {
				s = '"'+ '<a class="jsonpeep-ext-a" href="'+ s +'">'+ s +'</a>"'
				str.outerHTML = s
			}
		})
	}
	applyFix()

	// Hook fix on toggling button
	document.querySelector('button#jsonpeep-ext-button-toggle').addEventListener('click', applyFix, false)

	// Hide Turn Off The Lights button if found
	setTimeout(function(){
		var totl = document.querySelector('label#stefanvdnighttheme')
		if (totl != null) totl.style['visibility'] = 'hidden'
	}, 500)
}
