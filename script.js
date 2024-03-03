//navbar

let searchBtn = document.getElementById("searchBtn");
let closeBtn = document.getElementById("closeBtn");
let searchBox = document.querySelector(".searchBox");
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");

searchBtn.onclick = function () {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menuToggle.classList.add("hide");
  header.classList.remove("open");
};

closeBtn.onclick = function () {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
  menuToggle.classList.remove("hide");
};

menuToggle.onclick = function () {
  header.classList.toggle("open");
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBtn.classList.remove("active");
};


//slider

// let items = document.querySelectorAll(".slider .list .item");
// let next = document.getElementById("next");
// let prev = document.getElementById("prev");
// let thumbnails = document.querySelectorAll(".thumbnail .item");


// let countItem = items.length;
// let itemActive = 0;

// next.onclick = function () {
//   itemActive = itemActive + 1;
//   if (itemActive >= countItem) {
//     itemActive = 0;
//   }
//   showSlider();
// };
// prev.onclick = function () {
//   itemActive = itemActive - 1;
//   if (itemActive < 0) {
//     itemActive = countItem - 1;
//   }
//   showSlider();
// };
// let refreshInterval = setInterval(() => {
//   next.click();
// }, 5000);
// function showSlider() {
  
  
//   let itemActiveOld = document.querySelector(".slider .list .item.active");
//   let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
//   itemActiveOld.classList.remove("active");
//   thumbnailActiveOld.classList.remove("active");

//   items[itemActive].classList.add("active");
//   thumbnails[itemActive].classList.add("active");


//   clearInterval(refreshInterval);
//   refreshInterval = setInterval(() => {
//     next.click();
//   }, 5000);
// }

// thumbnails.forEach((thumbnail, index) => {
//   thumbnail.addEventListener("click", () => {
//     itemActive = index;
//     showSlider();
//   });
// });



// servies


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});