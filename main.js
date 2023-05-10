let textContainer = document.querySelector(".text");
let palette = document.querySelector(".palette-container");
let texts = document.querySelectorAll(".big");

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function shufflealignement() {
  texts.forEach((text) => {
    if (!text.classList.contains("fixed")) {
      text.classList.remove("right");
      text.classList.remove("middle");
      let r = Math.floor(Math.random() * 3);
      if (r == 0) {
        text.classList.add("right");
      } else if (r == 1) {
        text.classList.add("middle");
      }
    }
  });
}

function suffleRotation() {
  texts.forEach((text) => {
    text.classList.remove("rotated");
    if (!text.classList.contains("fixed")) {
      let r = Math.floor(Math.random() * 4);
      if (r == 0) {
        text.classList.add("rotated");
      }
    }
  });
}

let counter = 0;

window.addEventListener("mousemove", () => {
  counter++;
  if (counter % 30 == 0) {
    shufflealignement();
    suffleRotation();
  }
});

let state = 0;

window.addEventListener("click", () => {
  clickTouchHandler();
});
window.addEventListener("touchend", () => {
  clickTouchHandler();
});

function clickTouchHandler() {
  shufflealignement();
  suffleRotation();

  state = state > 1 ? 0 : (state += 1);
  console.log(state);

  textContainer.classList.remove("hidden");
  palette.classList.remove("hidden");
  pinkLine.classList.remove("hidden");
  greenLine.classList.remove("hidden");

  if (state == 0) {
    textContainer.classList.add("hidden");
    greenLine.classList.add("hidden");
  } else if (state == 1) {
    palette.classList.add("hidden");
    pinkLine.classList.add("hidden");
  }
}

const leftBar = document.querySelector('.left-bar');
const direction = document.querySelector('.direction');
const thirdOfPageWidth = window.innerWidth/3;
const halfOfPageWidth = window.innerWidth/2;
const right = window.innerWidth /3;

// document.addEventListener('mousemove', function(event) {
//   if (event.clientX < thirdOfPageWidth) {
//     leftBar.classList.add('l-hover');
//   } else {
//     leftBar.classList.remove('l-hover');
//   }
// });

document.addEventListener('mousemove', function(event) {
  
  if (event.clientX < halfOfPageWidth) {
    direction.classList.remove('hidden');
  } else if ( event.clientX > right) {
    direction.classList.add('hidden');
  } }

);

document.addEventListener('click', function(event) {
  
  if (event.clientX < halfOfPageWidth) {
    leftBar.classList.remove('open');
  } else if ( event.clientX > right) {
    leftBar.classList.add('open');
  }

  }




  
);



