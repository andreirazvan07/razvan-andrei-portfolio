  // smooth scroll 
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('#js-scroll'),
//     smooth: true,
//     smoothMobile: true,
//     inertia: 0.75
// });

// Photo cursor
// var $cursor = $(".photo-cursor"),
// $overlay = $(".project-overlay");
// function moveCircle(e) {
// TweenLite.to($cursor, 0.5, {
//   css: {
//     left: e.pageX,
//     top: e.pageY
//   },
//   delay: 0.03
// });
// }

// $(".p-1").hover(function() {
// $(".photo-cursor").css({ "background-image": "url(img-five.jpeg)" });
// });

// var flag = false;
// $($overlay).mousemove(function() {
// flag = true;
// TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
// $($overlay).on("mousemove", moveCircle);
// });

// $($overlay).mouseout(function() {
// flag = false;
// TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
// });


//Hover Menu
(function () {
    const link = document.querySelectorAll('.hover-this');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
          if (e.type === 'mouseleave') span.style.transform ='';
    };
    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})();
//Hover Menu ends

//Menu responsive open-close
var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
$(document).ready(function() {
  anime.timeline({ loop: false }).add({
    targets: ".hero-title .letter",
    translateY: [120, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 2000 + 40 * i
  });
});

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

TweenMax.from(".left-img-cap span", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1
});

TweenMax.from(".menu-toggle", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.2
});

TweenMax.from(".middle", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.2
});

TweenMax.from("nav", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.2
});

TweenMax.from(".scroll-down", 2, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.4
});


TweenMax.staggerFrom(
  ".media ul li",
  2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.6
  },
  0.1
);

t1.to(".overlay", 1, {
  zIndex:1000,
  opacity: 1,
  ease: Expo.easeInOut
});

t1.to(".scroll-down, .media", 1, {
  opacity: 0,
  ease: Expo.easeInOut
});

t1.staggerFrom(
  ".menu ul li",
  1,
  { y: 100, opacity: 0, ease: Expo.easeOut },
  0.1
);

t1.reverse();
$(document).on("click", ".menu-toggle", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-btn", function() {
  t1.reversed(!t1.reversed());
});

t1.reverse();
$(document).on("click", "li", function() {
  t1.reversed(!t1.reversed());
});

var image = document.getElementsByClassName("hero-img-parallax");
new simpleParallax(image, {
  scale: 1.4
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });



//Scroll menu
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $(".hover-this").filter(':not(:animated)').slideUp();
        $('.small-logo').addClass('.visible');
        $(".big-logo").filter(':not(:animated)').slideUp();
        $(".small-logo").filter(':not(:animated)').slideDown();
        $(".middle").filter(':not(:animated)').fadeOut();
        // $(".middle").addClass(".invisible");
        $(".scroll-down").filter(':not(:animated)').fadeOut();
  }

  else {$(".hover-this").filter(':not(:animated)').slideDown();
        $(".middle").filter(':not(:animated)').slideDown();
        $(".middle").removeClass(".invisible");
        $(".small-logo").filter(':not(:animated)').slideUp();
        $('small-logo').removeClass('.visible');
        $(".big-logo").filter(':not(:animated)').slideDown();
        $(".scroll-down").filter(':not(:animated)').fadeIn();
  }
});


const circleType = new CircleType(
  document.getElementById('rotated')
).radius(80);
$(window).scroll(function(){
  var offset = $(window).scrollTop();
  offset=offset * 0.4;
  
  $("#rotated").css({
      "-moz-transform" : "rotate(" + offset + "deg)",
      "-webkit-transform" : "rotate(" + offset + "deg)",
      "-0-transform" : "rotate(" + offset + "deg)",
      "-ms-transform" : "rotate(" + offset + "deg)",
      "transform" : "rotate(" + offset + "deg)"
  });
});

// $(window).scroll(function(){
//   var offset = $(window).scrollTop();
//   offset=offset * 0.4;
  
//   $(".cerc-2").css({
//       "-moz-transform" : "rotate(" + offset + "deg)",
//       "-webkit-transform" : "rotate(" + offset + "deg)",
//       "-0-transform" : "rotate(" + offset + "deg)",
//       "-ms-transform" : "rotate(" + offset + "deg)",
//       "transform" : "rotate(" + offset + "deg)"
//   });
// });