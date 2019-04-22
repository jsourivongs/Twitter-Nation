    var script = document.createElement('script');
      script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
      script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    var x;
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});
