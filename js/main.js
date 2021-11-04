document.addEventListener('DOMContentLoaded', function(){

	// Header -> Change background on scroll (temporal, TODO: Find solution - debounce?)
	function headerScroll() {
		const header = document.querySelector('.header')
		this.scrollY >= 50
			? header.classList.add('header_scroll')
			: header.classList.remove('header_scroll')
	}

	window.addEventListener('scroll', headerScroll)
})