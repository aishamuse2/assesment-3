console.log("hello world");






function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.getElementById('contact');

form.addEventListener('submit', handleSubmit);
 

function handleMouseover(evt) {
	evt.preventDefault();

	alert("You're Magnificent")
}


let img = document.getElementById('imgDuck')

img.addEventListener('mouseover', handleMouseover)









  

