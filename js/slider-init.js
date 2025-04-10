$(document).ready(function(){
    // Banner Slider Variables
    let currentSlide = 0;
    const bannerSlides = [
        {
            image: 'img/product-img/banner-1.jpg',
            title: 'U.S. POLO ASSN.',
            subtitle: 'Up To 50% Off'
        },
        {
            image: 'img/product-img/banner-2.jpg',
            title: 'NEW COLLECTION',
            subtitle: 'Summer Styles'
        },
        {
            image: 'img/product-img/banner-3.jpg',
            title: 'PREMIUM QUALITY',
            subtitle: 'Exclusive Designs'
        }
        // Add more slides as needed
    ];
    
    // Initialize the banner slider
    function initBannerSlider() {
        // Set up navigation
        $('.next-slide').on('click', function() {
            goToNextSlide();
        });
        
        $('.prev-slide').on('click', function() {
            goToPrevSlide();
        });
        
        // Set up dot navigation
        $('.dot').on('click', function() {
            const index = $(this).index();
            goToSlide(index);
        });
        
        // Auto-advance slides
        setInterval(function() {
            goToNextSlide();
        }, 5000);
    }
    
    // Go to a specific slide
    function goToSlide(index) {
        if (index < 0 || index >= bannerSlides.length) return;
        
        currentSlide = index;
        updateSlide();
    }
    
    // Go to the next slide
    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % bannerSlides.length;
        updateSlide();
    }
    
    // Go to the previous slide
    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
        updateSlide();
    }
    
    // Update the slide content
    function updateSlide() {
        const slide = bannerSlides[currentSlide];
        
        // Update content with animation
        $('.banner-img img').fadeOut(300, function() {
            $(this).attr('src', slide.image).fadeIn(300);
        });
        
        $('.banner-text h1').fadeOut(300, function() {
            $(this).text(slide.title).fadeIn(300);
        });
        
        $('.banner-text h2').fadeOut(300, function() {
            $(this).text(slide.subtitle).fadeIn(300);
        });
        
        // Update active dot
        $('.dot').removeClass('active');
        $('.dot').eq(currentSlide).addClass('active');
    }
    
    // Initialize banner slider
    initBannerSlider();
    
    // Initialize Offers Slider
    $('.offers-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
}); 