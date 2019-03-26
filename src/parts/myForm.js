function myForm() {


	// ФОРМА 

	let message = {
	    loading: "Загрузка...",
	    success: "Спасибо за заявку! За вами уже выехали...",
	    failure: "Что-то пошло не так..."
	};

	let form = document.querySelector(".main-form"),
	    contactForm = document.querySelector("#form"),
	    input = document.querySelectorAll("input"),
	    statusMessage = document.createElement("div"),
	    inputTel = document.querySelectorAll("input[type='tel']");

	statusMessage.classList.add("status");

	input[2].setAttribute("name", "email");
	input[3].setAttribute("name", "phone");

	function sendForm(element) {
	    element.addEventListener("submit", (a) => {
	    	a.preventDefault();
	    	element.appendChild(statusMessage);
	    	let formData = new FormData(element);      

    	function postData(data) {
	        return new Promise((resolve, reject) => {
	        	let request = new XMLHttpRequest();
	        	request.open("POST", "server.php");
	        	request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        	request.onreadystatechange = () => {
	            if (request.readyState < 4) {
	            	resolve();
	            } else if (request.readyState === 4 && request.status == 200) {
	            	resolve();
	            } else {
	            	reject();
	            }
	        };
	        request.send(data);
        });
    }

    	function clearInput() {
        	for (let i = 0; i < input.length; i++) {
        		input[i].value = "";
        	}
        	statusMessage.innerHTML = "";
    	};

	    postData(formData)
	    .then(() => statusMessage.innerHTML = message.loading)
	    .then(() => statusMessage.innerHTML = message.success)
	    .catch(() => statusMessage.innerHTML = message.failure)
	    .then(() => setTimeout(clearInput, 3000));
	    });
	};

		sendForm(form);
		sendForm(contactForm);

		// проверка формы. 
  
 		inputTel.forEach((item) => {
    		item.addEventListener("focus", () => {
    		if(!/^\+\d*$/.test(item.value)) {
        		item.value = "+";
    		};
 		});

	    item.addEventListener("keydown", (i) => {
	    	if(!/\d/.test(i.key)) {
	        	i.preventDefault();
	    	};
	    });
	});

};

module.exports = myForm;