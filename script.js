// view scrolling animation 
function animateElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

// smooth scrolling to any element, defaults to the top
function scrollToElement(myElement = "#introductionContainer", scrollDuration = 500) {
  const elementExists = document.querySelector(myElement);

  if (elementExists && elementExists.getBoundingClientRect) {
      const rect = elementExists.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY - 200; // a bit of space from top
      let cosParameter = (window.scrollY - elementTop) / 2,
          scrollCount = 0,
          oldTimestamp = performance.now();
      function step(newTimestamp) {
          console.log(scrollCount);
          scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
          if (scrollCount >= Math.PI) {
              window.scrollTo(0, elementTop);
              return;
          }
          window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)) + elementTop);
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
  }
}

animateElements();

// track the width of the window
let windowWidth = window.innerWidth;
addEventListener('resize', (event) => {
  // check if the width has resized or not
  if (windowWidth === window.innerWidth) {
  // width has not
    return;
  }

  const projectTicker = document.getElementById('projectTicker');

  // reset the animation
  projectTicker.style.animation = 'none';
  projectTicker.offsetHeight;
  projectTicker.style.animation = 'ticker 10s linear infinite'

  // set new window width
  windowWidth = window.innerWidth
})