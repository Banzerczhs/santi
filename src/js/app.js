
import $ from 'jquery';
import 'bootstrap';

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
		$(this).find('ul').show();
	}, function() {
		$(this).find('ul').hide();
	});
	// // 导航

	let adHeight = $('.ad').height();
	$('.header').height(adHeight);

})