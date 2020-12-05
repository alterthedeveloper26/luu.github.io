var slideIndex = 1;
var slidesIndex1 = 1;
var slidesIndex2 = 1;
var slidesIndex3 = 1;

showSlides(slideIndex, 1);

showSlides(slideIndex, 2);

showSlides(slideIndex, 3);

// Next/previous controls
function plusSlides(n, currentAlbum) {
  if(currentAlbum == 1){
    slidesIndex1 += n;
    slideIndex = slidesIndex1;
  }else if (currentAlbum == 2) {
    slidesIndex2 += n;
    slideIndex = slidesIndex2;
  }else{
    slidesIndex3 += n;
    slideIndex = slidesIndex3;
  }
  showSlides(slideIndex, currentAlbum);
}

// Thumbnail image controls
function currentSlide(n, currentAlbum) {
  if(currentAlbum == 1){
    slidesIndex1 = n;
    slideIndex = slidesIndex1
  }else if (currentAlbum == 2) {
    slidesIndex2 = n;
    slideIndex = slidesIndex2;
  }else{
    slidesIndex3 = n;
    slideIndex = slidesIndex3;
  }
  showSlides(slideIndex, currentAlbum);
}

function showSlides(n, currentAlbum) {
  var i;
  var slides;
  if(currentAlbum == 1){
    slides = document.getElementsByClassName("myAlbum1");
  }else if (currentAlbum == 2) {
    slides = document.getElementsByClassName("myAlbum2");
  }else{
    slides = document.getElementsByClassName("myAlbum3");
  }

  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  //if n is bigger than slides length reset it to 1
  if (n > slides.length) {
    slideIndex = 1    
  }
  //if smaller than 1 bring it to the last
  if (n < 1) {slideIndex = slides.length}
  //Make every image display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //make the chosen image display block
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; //dot is small images below big image
  // captionText.innerHTML = dots[slideIndex-1].alt;

  if(currentAlbum == 1){
    slidesIndex1 = slideIndex;
  }else if (currentAlbum == 2) {
     slidesIndex2 = slideIndex;
  }else{
    slidesIndex3 = slideIndex;
  }  
  console.log("THIS IS SLIDEINDEX: " + slideIndex);
  console.log("THIS IS SLIDEINDEX1: " +slidesIndex1);
  console.log("THIS IS SLIDEINDEX: " + slidesIndex2);
   
}