window.onload = function() {
    console.log('window loaded!')

    // Lazy
    try {
        let lazyLoadInstance = new LazyLoad()
    } catch (error) {
        console.log(`Lazy load error:  ${error}`)
    }

    // Burger script
    let menuBurger = document.querySelector(".menu-icon")
    menuBurger.addEventListener("click", function () {
        this.classList.toggle("active")
    })

     // Swiper slide
     try {
        let swiper1 = new Swiper('#slider-1 .swiper-container', {
            spaceBetween: 30,
            loop: true,
            lazy: true,
            navigation: {
                nextEl: '#slider-1 .swiper-button-next',
                prevEl: '#slider-1 .swiper-button-prev',
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },

                1024: {
                    slidesPerView: 'auto',
                }
            }
        })


        let swiper3 = new Swiper('#slider-text', {
            slidesPerView: 1,
            spaceBetween: 10,

            loop: true,

            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    centeredSlides: false,
                    loop: false,
                },
            }
        })

        let swiper2 = new Swiper('#slider-2 .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,

            lazy: true,
            navigation: {
                nextEl: '#slider-2 .swiper-button-next',
                prevEl: '#slider-2 .swiper-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
            },
            thumbs: {
                swiper: swiper3,
            },
        })

        
    } catch (error) {
        console.log(`Swiper slide error:  ${error}`)
    }

}
