// My JS is bad, sorry
window.onload = function() {
let grid = document.getElementById("the--grid");
let loadingAnimation = document.getElementById("loading");



  grid.classList.remove('loading');
  loadingAnimation.classList.add('hide');
}

let firstHidden = document.getElementById('imageHiding1');
let secondHidden = document.getElementById('imageHiding2');
let thirdHidden = document.getElementById('imageHiding3');
let forthHidden = document.getElementById('imageHiding4');
let fifthHidden = document.getElementById('imageHiding5');
let sixthHidden = document.getElementById('imageHiding6');
let seventhHidden = document.getElementById('imageHiding7');

function removeHidden() {
  if (firstHidden.classList.contains('hidden')) {
    firstHidden.classList.remove('hidden');
  } else if (secondHidden.classList.contains('hidden')) {
    secondHidden.classList.remove('hidden');
  } else if (thirdHidden.classList.contains('hidden')) {
    thirdHidden.classList.remove('hidden');
  } else if (forthHidden.classList.contains('hidden')) {
    forthHidden.classList.remove('hidden');
  } else if (fifthHidden.classList.contains('hidden')) {
    fifthHidden.classList.remove('hidden');
  } else if (sixthHidden.classList.contains('hidden')) {
    sixthHidden.classList.remove('hidden');
  } else if (seventhHidden.classList.contains('hidden')) {
    seventhHidden.classList.remove('hidden');
  }
}