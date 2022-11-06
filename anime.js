// vitesse de défilement du carousel
$('.carousel').carousel({
    interval:0
});
// lightbox
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });