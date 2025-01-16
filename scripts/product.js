var Nav = document.querySelector("header nav");
var Bodyy = document.querySelector("body");


/***************************/
/* EERSTE STREEPJES BUTTON */
/***************************/
var eersteStreepjesButton = document.querySelector("header button");
eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;

function eersteStreepjesButtonKlik() {
  if (eersteStreepjesButton.ariaExpanded == "false") {
    eersteStreepjesButton.ariaExpanded = "true"
	console.log("aria op true gezet")
	Nav.classList.toggle("toonMenu");
	Bodyy.classList.toggle("toonMenuBody");
  }
  else {
    eersteStreepjesButton.ariaExpanded = "false"
	console.log("aria op false gezet")
	Nav.classList.toggle("toonMenu");
	Bodyy.classList.toggle("toonMenuBody");
  }
}




