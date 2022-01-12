
jQuery(function ($) {
  // header functions
  const imgHeight = $('.front-mainview').outerHeight();
  $(window).on('load scroll', function () {
    if ($(window).scrollTop() < imgHeight) {
      $('.header , .header-hum').removeClass('switch');
    } else {
      $('.header , .header-hum').addClass('switch');
    }
  });
  $('.header-hum , #overlay').on('click',function() {
    $('.header-hum').toggleClass('active');
    $('.sliding').toggleClass('is-show');
    $('body').toggleClass('hum-open');
  })
  // loading animation
//   var time=new Date().getTime();

// //全ての読み込みが完了したら実行
// $(window).on('load',function () {
//   var now = new Date().getTime();
//   if (now-time<=3000) {
//     setTimeout('stopload()',5000-(now-time));
//     return;
//   } else {
//     stopload();
//   }
// });

// //10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',10000);
// });
// function stopload(){
//   // $('#wrap').css('display','block');
//   $('.loading').delay(900).fadeOut(800);
//     $(".loading").addClass("completed")
//   // $('#loader').delay(600).fadeOut(300);
// }

  $(window).on('load', function () {
    jQuery(".loading").fadeOut(1800);
    // $(".loading").addClass("completed")
  });
  setTimeout(function() {
    $('.loading').fadeOut(600);
  }, 2000);

  // window.onpageshow = function (event) {
  //   if (event.persisted) {
  //       window.location.reload();
  //   }
  // };

  // front fadein text
  $(window).scroll(function (){
    $(".front-lead").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(".front-hero").addClass("js-inview");
        $(".js-fadein").addClass("js-fadeon");
      } else {
        $(".front-hero").removeClass("js-inview");
      }
    });
  });
  // front information button
  TransitionToUserPage();
  function TransitionToUserPage() {
    $('.js-button').on('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      location.href = $(this).attr('data-url');
    });
  }

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'fade',
    crossFade: true ,
    autoplay: {
      delay: 3000,
    },
    speed: 1200,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
})
