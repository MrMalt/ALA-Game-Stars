window.onload = function() {
	
	const buttonScrollTop = document.getElementById("floatButton");

	document.querySelectorAll(".expandButton").forEach(button =>{
		button.addEventListener('click', () => {
			const expandContent = button.nextElementSibling;
			expandContent
			button.classList.toggle("expandButton--active");
			if (button.classList.contains("expandButton--active")) {
				expandContent.style.maxHeight = expandContent.scrollHeight + 'px';
			}
			else {
				expandContent.style.maxHeight = 0;
			}
		});
	});

	var testDiv = document.getElementById("alphabetNavBarID");
	console.log(testDiv.offsetTop);

	window.addEventListener("scroll", (event) => {
	    let scroll = this.scrollY;
	    if (scroll >= testDiv.offsetTop + 30) {
	    	buttonScrollTop.style.visibility = "visible";
	    	buttonScrollTop.style.opacity = 1;
	    }
	    else {
	    	buttonScrollTop.style.visibility = "visible";
	    	buttonScrollTop.style.opacity = 0;
	    }
	});
};