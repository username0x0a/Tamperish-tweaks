
if (!document.body.classList.contains('__tampered')) {

	document.body.classList.add("__tampered")

	function process() {

		console.log('[Tamperish] Video features injection')

		var fscBtn = document.querySelector('#fullScreenShell')

		if (fscBtn == undefined) {
			setTimeout(process, 5000)
			return
		}

		var airBtn = fscBtn.cloneNode(true)
		airBtn.id = 'airPlayShell'
		airBtn.innerHTML = airBtn.innerHTML.replace(/fullScreen/g,'airPlay')
		airBtn.querySelector('svg#airPlay').innerHTML = '<use xlink:href="#icon-ico-tv-linked"></use>'
		airBtn.querySelector('#smallScreen').remove()
		airBtn.title = airBtn.ariaLabel = 'AirPlay'
		airBtn.style = 'display: inline-block; margin-right: 10px;'
		fscBtn.parentElement.appendChild(airBtn)

		var pipBtn = fscBtn.cloneNode(true)
		pipBtn.id = 'airPlayShell'
		pipBtn.innerHTML = pipBtn.innerHTML.replace(/fullScreen/g,'airPlay')
		pipBtn.querySelector('svg#airPlay').innerHTML = '<use xlink:href="#icon-ico-pop"></use>'
		pipBtn.querySelector('#smallScreen').remove()
		pipBtn.title = pipBtn.ariaLabel = 'Picture in Picture'
		pipBtn.style = 'display: inline-block; margin-right: 10px;'
		fscBtn.parentElement.appendChild(pipBtn)

		var video = document.querySelector('#video')

		if (window.WebKitPlaybackTargetAvailabilityEvent)
			airBtn.addEventListener('click', function() {
				video.webkitShowPlaybackTargetPicker()
			})
		else airBtn.disabled = true


		if (video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function") {
			// Toggle PiP when the user clicks the button.
			pipBtn.addEventListener('click', function(event) {
				var newMode =
					video.webkitPresentationMode === "picture-in-picture" ?
						"inline" : "picture-in-picture"
				video.webkitSetPresentationMode(newMode)
			})
		} else pipBtn.disabled = true

	}

	process()
}
