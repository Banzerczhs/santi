$(function(){
	$('.logo').click(function(){
		$('.content-left').toggle();
		if($('.content-left').css('display')=='none'){
            $('.content-right').css('width','100%');
            $('.content-right-title').find('span').css('margin','0px  7.2%');
             $('.page').css('width','70%');

		}else{
			 $('.content-right').css('width','70%')
			 $('.content-right-title').find('span').css('margin','0px 6.5%')
              $('.page').css('width','86%');
            // window.location.reload();
              history.go(0)

		}
	})
})