function initStickyNavBar() {
  // Get the navbar
  const navbar = document.querySelector(".navContainer");
  const sticky = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= sticky) {    
      navbar.classList.add("sticky");
    }
  });
}

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
      var cosParameter = (window.scrollY - elementTop) / 2,
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

initStickyNavBar();
animateElements();
