// /*
// 	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
// */
// window.addEventListener('load', function() {
// const elts = {
// 	text1: document.getElementById("text1"),
// 	text2: document.getElementById("text2")
// };

// // The strings to morph between. You can change these to anything you want!
// const texts = [
// 	"Elliott Watson",
// 	"Software Engineer",
//     "Elliott Watson",
// 	"Web Developer",
//     "Elliott Watson",
// 	"Photographer",
//     "Elliott Watson",
// 	"Full Stack Engineer",
//     "Elliott Watson",

// ];

// // Controls the speed of morphing.
// const morphTime = 1.8;
// const cooldownTime = 0.20;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
// 	morph -= cooldown;
// 	cooldown = 0;
	
// 	let fraction = morph / morphTime;
	
// 	if (fraction > 1) {
// 		cooldown = cooldownTime;
// 		fraction = 1;
// 	}
	
// 	setMorph(fraction);
// }

// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
// 	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
// 	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	fraction = 1 - fraction;
// 	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	elts.text1.textContent = texts[textIndex % texts.length];
// 	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
// 	morph = 0;
	
// 	elts.text2.style.filter = "";
// 	elts.text2.style.opacity = "100%";
	
// 	elts.text1.style.filter = "";
// 	elts.text1.style.opacity = "0%";
// }

// // Animation loop, which is called every frame.
// function animate() {
// 	requestAnimationFrame(animate);
	
// 	let newTime = new Date();
// 	let shouldIncrementIndex = cooldown > 0;
// 	let dt = (newTime - time) / 1000;
// 	time = newTime;
	
// 	cooldown -= dt;
	
// 	if (cooldown <= 0) {
// 		if (shouldIncrementIndex) {
// 			textIndex++;
// 		}
		
// 		doMorph();
// 	} else {
// 		doCooldown();
// 	}
// }

// // Start the animation.
// animate();})

// Typing Text
window.addEventListener('load', function() {
// get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
    "Elliott Watson",
    	"Software Engineer.",
        "Elliott Watson",
    	"Web Developer.",
        "Elliott Watson",
    	"Photographer.",
        "Elliott Watson",
    	"Full Stack Engineer.",
        
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}
})

// AOS.init({
//     duration: 800,
//     once: true
//   });

// Social Media Icons
// social

document.
querySelectorAll("a").
forEach(el => el.addEventListener("click", ev => ev.preventDefault()));
  

// Load More

