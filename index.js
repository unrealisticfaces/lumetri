$(document).ready(function () {
    let owl = $(".custom-carousel").owlCarousel({
        autoWidth: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        },
        dots: false
    });

    let autoplayInterval;
    let currentIndex = 0; // Keep track of the current item index

    function startAutoplay() {
        stopAutoplay(); // Clear any existing interval

        autoplayInterval = setInterval(() => {
            // Remove active class from all items
            $(".custom-carousel .owl-item .item").removeClass("active");

            // Get all non-cloned items
            let items = $(".custom-carousel .owl-item:not(.cloned) .item");

            // Calculate the next index, handling loop
            currentIndex = (currentIndex + 1) % items.length;

            // Add active class to the next item
            let nextItem = items.eq(currentIndex);
            nextItem.addClass("active");

            // Trigger Owl Carousel to move to the next item
            owl.trigger('next.owl.carousel');
        }, 1500);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    startAutoplay();

});