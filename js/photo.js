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

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '0px 0px 20px 0px',
    }
  )

  images.forEach((img) => observer.observe(img))
}

function removeHidden() {
  for (let i = 1; i <= 29; i++) {
    const element = document.getElementById(`imageHiding${i}`)
    if (element && element.classList.contains('hidden')) {
      element.classList.remove('hidden')
    }
  }
}

// document
//   .querySelectorAll('a')
//   .forEach((el) => el.addEventListener('click', (ev) => ev.preventDefault()))
