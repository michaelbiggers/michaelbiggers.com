let btn = document.querySelector('.card-slider');
btn.addEventListener("click", moveToBack);

function moveToBack(){
	// get all current cards
	let cards = document.querySelectorAll(".card");
	// cards = Array.from(cards);
	
	// select top card
	let topCard = cards[cards.length - 1];
	
	// clone top card 
	let clone = topCard.cloneNode(true);
	
	// fade out top card
	topCard.classList.add('card--fade');
	topCard.remove();
	// add clone card to front of list
	document.querySelector('.cards').prepend(clone);

}
