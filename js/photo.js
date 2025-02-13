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
  let grid = document.getElementById('the--grid')
  let loadingAnimation = document.getElementById('loading')

  if (grid && loadingAnimation) {
    grid.classList.remove('loading')
    loadingAnimation.classList.add('hide')
  }

  initializeLazyLoading()
}

function initializeLazyLoading() {
  const images = document.querySelectorAll('.grid img[data-src]')

  const loadImage = (img) => {
    img.src = img.dataset.src
    img.classList.add('loaded')
    img.removeAttribute('data-src')
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, {
    rootMargin: '0px 0px 100px 0px'
  })

  images.forEach(img => observer.observe(img))
}

function removeHidden() {
  for (let i = 1; i <= 29; i++) {
    const element = document.getElementById(`imageHiding${i}`)
    if (element && element.classList.contains('hidden')) {
      element.classList.remove('hidden')
    }
  }
}

document.querySelectorAll('a').forEach(el => el.addEventListener('click', ev => ev.preventDefault()))
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
