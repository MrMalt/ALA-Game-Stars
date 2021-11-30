window.onload = function() 
{
	var details = document.getElementById("details");
	document.getElementsByTagName("ul")[0].addEventListener("click", showDetails);

	document.getElementById("detailsCancel").addEventListener("click", hideDetails);
	document.getElementById("detailsBackground").addEventListener("click", hideDetails);
}


function showDetails(event)
{
	if(event.target.dataset.id)
	{
		details.style.display = "block";

		document.getElementById("detailsTitle").innerText = event.target.dataset.title;
		document.getElementById("detailsDescription").innerText = event.target.dataset.description;
		document.getElementById("detailsImage").src = "img/merch" + event.target.dataset.id + ".png";

		var timer = setTimeout(function(){details.className = "is-visible";}, 20);
	}
}

function hideDetails()
{

	details.className = "";

	timer = setTimeout(function(){details.style.display = "none";}, 300);
}