import $ from 'jquery';
import Swiper from 'swiper';

$(function () {

	$('a').click(function() {
		return false;
	});
	// 本地测试

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

	// let adHeight = $('.hd-content').height() * -1 + 'px';
	// $('.ad').css('top',adHeight);

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