
 $(document).ready(function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
       itemSelector: '.portfolio-item'
    });
 
    $('#portfolio-filters li').on('click', function() {
       $("#portfolio-filters li").removeClass('filter-active');
       $(this).addClass('filter-active');
 
       portfolioIsotope.isotope({
          filter: $(this).data('filter')
       });
    });
 
  });
 
  $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    gallery: {
       enabled: true,
       navigateByImgClick: true
    }
 });
 