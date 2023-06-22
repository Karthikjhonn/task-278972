let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
setInterval(()=>{
    changeSlide(1)   
},3000)

// small devices menu
function ismenuactive(){
    document.querySelector("#navgation").classList.toggle("menuActive")
}
// dark mode
function dark() {
  var darkColor=document.querySelector("meta").content
  if (confirm("Do you want to change the theme?")) {
      if (darkColor=="light") {
          document.querySelector("meta").content="dark"
      } else{
          document.querySelector("meta").content="light"     
         }
  }
}