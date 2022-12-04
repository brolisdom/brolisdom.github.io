let slideIndex = 0;
    showSlides();

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          this.style.rotate = '0deg';
          panel.style.maxHeight = null;
        } else {
          this.style.rotate = '180deg';
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }