function myModal() {

	// МОДАЛЬНОЕ ОКНО

	let more = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close"),
		descBtn = document.querySelectorAll(".description-btn");


	function modalOpen() {
		overlay.style.display = "block";
		this.classList.add("more-splash");
		document.body.style.overflow = "hidden";
	};

	more.addEventListener("click", modalOpen);

	descBtn.forEach(function(btn) {
		btn.addEventListener("click", modalOpen);
	});

	close.addEventListener("click", function() {
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = "";
	});

};

module.exports = myModal;