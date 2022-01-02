import p5 from "p5";

const randomSeed = ~~(fxrand()*12345);
const noiseSeed = ~~(fxrand()*56789);
let screenSize;

window.$fxhashFeatures = {
	"Feature": 0
}

let sketch = function(p5) {

	p5.setup = function() {
		p5.randomSeed(randomSeed);
		p5.noiseSeed(noiseSeed);
		p5.colorMode(p5.HSB, 360);
		screenSize = p5.min(p5.windowWidth, p5.windowHeight);
		p5.createCanvas(screenSize, screenSize);
		p5.initiate();
		};
		
	p5.initiate() {
		// Use this space for updating variables related to screenSize changing
	}

	p5.draw = function() {
		p5.background(128);
		p5.translate(screenSize/2, screenSize/2);
		p5.ellipse(0, 0, 64, 64);
	};

	p5.windowResized = function() {
		if (navigator.userAgent.indexOf("HeadlessChrome") == -1) {
			screenSize = p5.min(p5.windowWidth, p5.windowHeight);
			p5.resizeCanvas(screenSize, screenSize);
			p5.initiate();
		}
	}
}

let myp5 = new p5(sketch, window.document.body);
