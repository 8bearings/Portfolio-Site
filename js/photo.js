// Header
// window.onload = function() {
// let grid = document.getElementById("the--grid");
// let loadingAnimation = document.getElementById("loading");



//   grid.classList.remove('loading');
//   loadingAnimation.classList.add('hide');
// }


// let firstHidden = document.getElementById('imageHiding1');
// let secondHidden = document.getElementById('imageHiding2');
// let thirdHidden = document.getElementById('imageHiding3');
// let forthHidden = document.getElementById('imageHiding4');
// let fifthHidden = document.getElementById('imageHiding5');
// let sixthHidden = document.getElementById('imageHiding6');
// let seventhHidden = document.getElementById('imageHiding7');

// function removeHidden() {
//   if (firstHidden.classList.contains('hidden')) {
//     firstHidden.classList.remove('hidden');
//   } else if (secondHidden.classList.contains('hidden')) {
//     secondHidden.classList.remove('hidden');
//   } else if (thirdHidden.classList.contains('hidden')) {
//     thirdHidden.classList.remove('hidden');
//   } else if (forthHidden.classList.contains('hidden')) {
//     forthHidden.classList.remove('hidden');
//   } else if (fifthHidden.classList.contains('hidden')) {
//     fifthHidden.classList.remove('hidden');
//   } else if (sixthHidden.classList.contains('hidden')) {
//     sixthHidden.classList.remove('hidden');
//   } else if (seventhHidden.classList.contains('hidden')) {
//     seventhHidden.classList.remove('hidden');
//   }


window.onload = function () {
  let grid = document.getElementById("the--grid");
  let loadingAnimation = document.getElementById("loading");

  // Ensure the grid and loading elements exist
  if (grid && loadingAnimation) {
    grid.classList.remove("loading"); // Remove loading class from grid
    loadingAnimation.classList.add("hide"); // Hide the loading wheel
  }

  // Initialize lazy loading for images
  initializeLazyLoading();
};

// Function to handle lazy loading of images
function initializeLazyLoading() {
  const images = document.querySelectorAll(".grid img[data-src]");

  const loadImage = (img) => {
    img.src = img.dataset.src; // Set the src from data-src
    img.classList.add("loaded"); // Add a class to trigger the fade-in effect
    img.removeAttribute("data-src"); // Remove the data-src attribute
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target); // Load the image
        observer.unobserve(entry.target); // Stop observing once loaded
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: "0px 0px 100px 0px", // Load images 100px before they come into view
  });

  images.forEach((img) => {
    observer.observe(img); // Start observing each image
  });
}

// Function to reveal hidden images
function removeHidden() {
  const hiddenElements = [];

  // Loop through all hidden elements (up to imageHiding29)
  for (let i = 1; i <= 29; i++) {
    const element = document.getElementById(`imageHiding${i}`);
    if (element && element.classList.contains("hidden")) {
      hiddenElements.push(element);
    }
  }

  // Remove the "hidden" class from each element
  hiddenElements.forEach((element) => {
    element.classList.remove("hidden");
  });
}

  hiddenElements.forEach((element) => {
    if (element && element.classList.contains("hidden")) {
      element.classList.remove("hidden"); // Reveal the hidden element
    }
  });




// Body

// // remove hidden
// document.getElementById("removeHidden").onclick = removeHidden()

// function removeHidden() {
//   var hidden = document.querySelectorAll(".hidden");
//   for (var i = 0; i < hidden.length; i++) {
//     hidden[i].classList.remove("hidden");
//   }

// }
// }

//Lazy Load

// if(!!window.IntersectionObserver){
// 	let observer = new IntersectionObserver((entries, observer) => { 
// 		entries.forEach(entry => {
// 		if(entry.isIntersecting){
// 			console.log(entry);
// 			entry.target.src = entry.target.dataset.src;
// 			observer.unobserve(entry.target);
// 		}
// 		});
// 	}, {rootMargin: "0px 0px -200px 0px"});
// 	document.querySelectorAll('img').forEach(img => { observer.observe(img) });
// }

// else document.querySelector('#warning').style.display = 'block';
// Social Media Icons
// social

document.
querySelectorAll("a").
forEach(el => el.addEventListener("click", ev => ev.preventDefault()));
  
