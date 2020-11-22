
function process() {

	if (document.body.classList.contains('__tampered'))
		return

	document.body.classList.add("__tampered")

	const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?!&//=]*)/g

	var elms = document.querySelectorAll('td.code')
	elms.forEach(function(e){
		e.innerHTML = e.innerHTML.replace(regex, function(x){ return '<a href="'+x+'">'+x+'</a>' })
	})

}

process()
