/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#CCCCCC',
                trackColor: 'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    


    // (function () {
    //     $('.popup-video').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-with-zoom',
    //         removalDelay: 300,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }());

    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    // (function () {
    //     $(".video-container").fitVids();
    // }());



    // -------------------------------------------------------------
    // Vidio auto play
    // -------------------------------------------------------------
    // (function () {

    //     /* Vimeo API: http://developer.vimeo.com/player/js-api */

    //     var iframe = document.getElementById('nofocusvideo');
    //     // $f == Froogaloop
    //     var player = $f(iframe);

    //     $('.modal').on('hidden.bs.modal', function () {
    //         player.api('pause');
    //     })

    //     $('.modal').on('shown.bs.modal', function () {
    //         player.api('play');
    //     })
    // }());




    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());

    // -------------------------------------------------------------
    // Popup JS
    // -------------------------------------------------------------
    
    $(function(){
		$('#popup01').click(function(){
			$('#pop01').show();
		});
		$('#popup02').click(function(){
			$('#pop02').show();
		});

		$('.popup i').click(function(){
			$('.popup').hide();
		});
	});

});

/* ===== Custom Cursor (dot + ring) ===== */
if(!('ontouchstart' in window)){  // 모바일 제외
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  window.addEventListener('mousemove', e=>{
    gsap.to(dot ,{x:e.clientX, y:e.clientY, duration:.12, ease:'power3.out', opacity:1});
    gsap.to(ring,{x:e.clientX, y:e.clientY, duration:.25, ease:'power3.out', opacity:1});
  });

  // 링크·버튼 위에서 링 확대
  document.querySelectorAll('a,button,.tilt').forEach(el=>{
    el.addEventListener('mouseenter', ()=>ring.style.transform='scale(1.8)');
    el.addEventListener('mouseleave', ()=>ring.style.transform='scale(1)');
  });
}



