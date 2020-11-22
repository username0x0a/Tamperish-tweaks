
function boot() {

	if (document.body.classList.contains('__tampered'))
		return

	document.body.classList.add("__tampered")

	if (document.location.pathname.indexOf('/documentation') == 0)
		document.body.classList.add("tamp_devdocs")
}

boot()
