import $ from 'jquery';
import 'bootstrap';
import Swiper from 'swiper';

$(function () {

    /*产品列表页菜单点击*/
    let menuItem = $('.list .accordion-heading');

    menuItem.on('click', function () {
        let accordion = $(this).children();
        if (accordion.attr('aria-expanded') === 'false') {
            accordion.addClass('active');
        } else {
            accordion.removeClass('active');
        }
    })


    /*小屏幕的菜单*/
    let subNavItem = $('.min-sub-nav .subnav-item');
    subNavItem.on('click', function (e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })


    let minSubNavHeight = $('.min-sub-nav .subnav').height();
    $('.min-sub-nav .second-nav').css('top', minSubNavHeight);



    // 合并 zp.
    $('.star a').click(function() {
        try{
                window.external.addFavorite(window.location, '武汉三泰硅宝新材料有限公司');
            }
        catch (e){
            try{
                window.sidebar.addPanel('武汉三泰硅宝新材料有限公司', window.location, "");
            }
            catch (e){
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    });
    // 收藏

    $('.naver').hover(function() {
        $('.hd-content').addClass('active');
        $(this).find('ul').show();
    }, function() {
        $('.hd-content').removeClass('active');
        $(this).find('ul').hide();
    });
    // // 导航

    $('.nav-mune').click(function() {
        $('.naver').slideToggle()
        $('.content').toggle();
        $('.footer').toggle();
    });
    // End xs Nav
    
    $('.search .icon').click(function() {
        $('.tel').toggleClass('search-active-tel');
        $('.search-btn .icon-box').toggleClass('search-active-box');
    });

    $('.tel').click(function() {
        $('.tel').removeClass('search-active-tel');
        $('.search-btn .icon-box').removeClass('search-active-box');
        
    });
    // search xs

    const ad1 = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
      },
      loop: true,
       autoplay: {
           delay: 3500,
           disableOnInteraction:false
     },
  });
    // Banner
    const productAd = new Swiper('.swiper-container-product', {
        slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction:true
    },
  });


})