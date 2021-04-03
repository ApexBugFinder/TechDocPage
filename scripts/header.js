
document.getElementById('contentContainer').onscroll = function() {
    scrollBuddy();
}

function scrollBuddy() {
    console.log('HELLO BUDDY');
    var topMenu = document.getElementById('topMenuContainer').getBoundingClientRect();

    if (topMenu.top)
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
      ) {
      let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
          topMenu.classList.add("header-not-at-top");
          console.log('HELLO SCROLL BUDDY');
        } else {
          topMenu.classList.remove("header-not-at-top");
          console.log('GOODBYE SCROLL BUDDY ');
        }
      });
      observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
      }
      
}

  