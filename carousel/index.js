var index = 0;
var locations = ["Amsterdam, The Netherlands", "Sydney, Australia", "San Francisco, California"]

var slides = document.getElementsByClassName("slides");
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots");

createDots();
showSlides(index);

function createDots() {
  for (i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.className = "dots";
    dotsContainer.appendChild(dot);
  }
}

function showSlides(x) {
  if (x > slides.length - 1) {
    index = 0;
  }
  if (x < 0) {
    index = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dotArray[i].className = "dots";
  }

  slides[index].style.display = "block";
  dotArray[index].className += " activeDot";
  place.innerHTML = locations[index];
}

nextArrow.onclick = function () {
  index += 1;
  showSlides(index);
}

// previousArrow.onclick = function() {
// 	index -= 1; 
// 	showSlides(index); 
// } 
previousArrow.addEventListener('click', function () {
  index -= 1;
  showSlides(index);
})


// use Array.from(dotArray).map but diract map on dotArray will not work because it array like object
for (let i = 0; i < dotArray.length; i++) {
  dotArray[i].addEventListener('click', event => {
    // event.target is the element that is clicked
    index = i;
    showSlides(i)
  });
}

