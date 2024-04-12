let scrollpos = window.scrollY

const header = document.querySelector(".header")
const pod = document.querySelector(".hero-moon")
const scrollChange = 1
const globe = 350
const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  if(scrollpos >= globe) {
  
  } else {
    
  }
})

var b = document.getElementsByTagName("div")[0];  

b.addEventListener("mousemove", function(event) {
  parallaxed(event);

});

function parallaxed(e) {
      var amountMovedX = (e.clientX * 0.2 / 8);
      var amountMovedY = (e.clientY * 0.2 / 8);
      var x = document.getElementsByClassName("parallaxed");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
      }
}

