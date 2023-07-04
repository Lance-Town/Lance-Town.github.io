function initStickyNavBar() {
  // Get the navbar
  const navbar = document.querySelector(".navContainer");
  const sticky = navbar.offsetTop;
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= sticky) {    
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");    
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

initStickyNavBar();
animateElements();