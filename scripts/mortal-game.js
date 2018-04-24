RocketBoots.loadComponents([
	"PIXI",
	"Game",
	"Coords",
	"StateMachine",
	"Dice",
	"Entity",
	"Loop",
	"Stage",
	"World",
	"Keyboard",
	"Color",
	"GameImage",
	"Spritesheet"
	//"ImageBank"
]).ready(function(){

	const g = new RocketBoots.Game({
		name: "LD",
		instantiateComponents: [
			//{"state": "StateMachine", "options": {"states": states}},
			//{"loop": "Loop"},
			//{"dice": "Dice"},
			//{"world": "World", "options": worldOptions},
			//{"stage": "Stage", "options": stageOptions},
			//{"images": "ImageBank"},
			//{"keyboard": "Keyboard"}
		],
		version: "v0.0.0"
	});	

	g.age = 0;
	g.rate = 1;
	g.lastYear = 0;

	updateUI();

	$('button.age').click((e) => {
		g.age += Math.round(g.rate);
		g.rate += 2;
		updateUI();
		console.log(g.rate, g.age);
		const year = getYears();
		if (year > g.lastYear) {
			g.lastYear = year;
			updateGraphic(year);
		}
		if (year >= 99) {
			$('.clickers').hide();
		}
	});


	function updateGraphic(year) {
		const i = getGraphicIndex(year);
		$('.character')
			.removeClass('age-0 age-1 age-2 age-3 age-4 age-5 age-6')
			.addClass('age-' + i);
	}

	function updateUI() {
		$('.age-years').html(getYears());
		$('.age-days').html(g.age.toLocaleString());
		$('.rate').html(g.rate.toLocaleString());
	}

	function getYears() {
		return Math.floor(g.age / 365);
	}

	function getGraphicIndex(year) {
		if (year < 0) {
			return 0;
		} else if (year < 5) {
			return 1;
		} else if (year < 10) {
			return 2;
		} else if (year < 22) {
			return 3;
		} else if (year < 40) {
			return 4;
		} else if (year < 70) {
			return 5;
		} else if (year < 99) {
			return 6;
		}
		return 7;
	}




}).init();