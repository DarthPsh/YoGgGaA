function myTimer() {

	// ТАЙМЕР

	let deadline = "2019-03-31";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t / 1000) % 60),
			minutes = Math.floor( (t / 1000 / 60) % 60),
			hours = Math.floor( (t / (1000 * 60 * 60) ) );

		return {
			"total" : t,
			"hours" : hours,
			"minutes" : minutes,
			"seconds" : seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds"),
			timeInterval = setInterval(updateClock, 1000);


		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.minutes < 10) minutes.textContent  = "0" + t.minutes;
			if (t.seconds < 10) seconds.textContent  = "0" + t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			};
			if (t.total < 0) {
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
			};
		};
	};

	setClock("timer", deadline);

};

module.exports = myTimer;