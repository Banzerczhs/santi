import $ from 'jquery';
import 'bootstrap';

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
})