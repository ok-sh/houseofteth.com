
// Navbar Sticky ------------------------->

$(document).ready(function() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      
      var stickyTop = stickyWrapper.offset().top;
      
      if (scrollElement.scrollTop() >= stickyTop){
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
        sticky.removeClass("not-sticky");
      }
      else{
        
        sticky.removeClass("is-sticky");
        sticky.addClass("not-sticky");
        stickyWrapper.height('auto');
      }
    };
    
    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
      
      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      
      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
    });
  });

  //<------------------------------------------------------

    //function fix height!
    var calcHeight = function() {
      // var headerDimensions = $('.preview__header').height();
      $('.full-header').height ($(window).innerHeight());
    }
    

    $(document).ready(function() {
      calcHeight();
    });

    $(window).resize(function() {
      calcHeight();
    }).load(function() {
      calcHeight();
    });
    