import $ from 'jquery';
import 'bootstrap';

$(function () {

    /*产品列表页菜单点击*/
    let menuItem = $('.accordion-toggle');
    menuItem.on('click', function () {
        if ($(this).attr('aria-expanded') === 'false') {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    })

})