
function removeConsentModal() {

	var consentElement = document.querySelector('iframe[src*="consent"]')

	var path = window.location.pathname
	var cont = null

	if (path.startsWith('/maps')) {
		document.querySelector('div#consent-bump').remove()
		return
	} else if (path.startsWith('/search'))
		cont = document.querySelector('div#cnt')
	else cont = document.querySelector('div#main')

	if (!cont) return

	var par = consentElement
	while (par.parentElement != cont) par = par.parentElement

	par.remove()
}

removeConsentModal()
