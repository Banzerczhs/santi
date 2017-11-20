
 var data1 = {
     total : 24,
     result : 
      [
        {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       },
       {
          images : './images/product-1.png',
          name : '3140',
          summary : ' 清洁粘接表面的水分、杂质、油污等。确保基表面干燥',
          brand : '康道宁',
          limit : '本品可对焊点提供长效的环境和机械保护'
       }
    ]
}
 
 
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
              history.go(0);
		}
	});

    $('.product-list').find('li').click(function(){
          $('.product-list').find('li span').removeClass('active');
          $(this).find('span').addClass('active');
          var text = $(this).find('a').text();
          $('.content-right').find('a').eq(3).text(text);
    })

        console.log(data1.result.length)
        
        var str = '';
         for(var i=0;i<data1.result.length;i++){
             
           str +=  '<li class="clearfix">' + 
                         '<div class="info-pic">'+
                              '<img src=" ' +data1.result[i].images+ ' " alt="" />'+
                         '</div>'+                      
                         '<span class="name">'+data1.result[i].name+'</span>'+
                         '<div class="product-summary clearfix">'+
                            '<p class="p-summary">'+data1.result[i].summary+'</p>'+
                            '<a href="javascript:;">详情>></a>'+
                         '</div>'+
                         '<span>'+data1.result[i].brand+'</span>'+
                      '<span class="limit">'+data1.result[i].limit+'</span>'+
                    '</li>';

         }
         $('.content-info-list').html(str);  
         $('.content-info-list').find('li').hide();
        for(var i=0;i<5;i++){
           (function(){
              $('.content-info-list').find('li').eq(i).show();console.log(i)
           })(i);         
        }

        var len = Math.ceil(data1.result.length/5);
        console.log(len);

        var i=0;
       var scrollTop = $(document).scrollTop(); console.log(scrollTop)
       var scroll = $(document).height() - $(window).height(); console.log(scroll)
       if( scrollTop >= scroll ){
           if(i<=len){
               $('.loadmore').show();
             setTimeout(function(){
               
               for(var i=5;i<10;i++){
               (function(){
                  $('.content-info-list').find('li').eq(i).show();console.log(i)
                })(i);         
              }
             },3000)
              
           }
       }
})
