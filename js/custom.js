(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(".navigation_menu").toggleClass("menu_open");
		$(this).toggleClass("close_toggle");
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	$(".megamenu_wrapper").parents("li").addClass("mega_dropdown");
	$(".mega_dropdown > a").append("<span class='mega_toggle'><i class='fa fa-angle-down'></span>");
	
	//mega menu js script
	var win_w = $(window).outerWidth();
	if(win_w < 992){
		$(".mega_dropdown").on('click', function(){
			$(this).children(".megamenu_wrapper").slideToggle(300);
		});
	}
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 300) {
			$('.navigation_header').addClass('fixed_menu');
		} else {
			$('.navigation_header').removeClass('fixed_menu');
		}	
	}); 
	//Testimonial Slider
	if ($(".testimonial_slider").length > 0){
		$(".testimonial_slider").owlCarousel({
			singleItem:true,
			items:1,
			loop:false,
			margin:0,
			autoplay:true,
			autoHeight:true,
			autoplayTimeout:5000,
			autoplaySpeed:1500,
			smartSpeed:1500,
			dots:false,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
	}
	//onclick popup js
	$('.popup_icon').on('click', function() {
		$('.popup_wrapper').removeClass("open_popup");
		var popup_show = $(this).attr('data-show');
		$('#'+ popup_show).addClass("open_popup");	
	});
	$('.popup_wrapper').on('click', function(){
		$(this).removeClass("open_popup");
	});
	$('.close_btn').on('click', function(){
		$('.popup_wrapper').removeClass("open_popup");
	});
	$('.popup_inner_content').on('click', function(e){
		e.stopPropagation();
	});	
	//load event
	$(window).on('load', function() {
		$(".ayu_loader").delay(600).fadeOut("slow");
		//add class on focused in input
		$(".input").each(function() {
			var default_val = $(this).val();
			if ( default_val !== "") {
				$(this).parents('.form_group').addClass('focused');
			}
			else{
				$(this).parents('.form_group').removeClass('focused');
				
			}
		});
	});
	//show contact form on click
	$('.enquiry_btn').on('click', function(){
		$(".fix_enquiry_form_cover").toggleClass("open");
	});
	$('.close_btn').on('click', function(){
		$(this).parents(".fix_enquiry_form_cover").removeClass("open");
	});
	//add class on focus in label
	$('.input').focus(function(){
		$(this).parents('.form_group').addClass('focused');
	});
	//Remove class on focus in label
	$('.input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).parents('.form_group').removeClass('focused');  
		} 
	});
	$('.fileupload_dv input').on('change', function(e) {
        e.preventDefault();
        var filename = $(this).val().split('\\').pop();
        $(this).prev(".upload_label").find('.filepath').text(filename);
    });
	//blog slideToggle
	$('.blog_filter_btn').on('click', function(){
		$(".blog_sidebar").slideToggle(200);
	});
	//full page Scroll js
	$('#pagepiling').pagepiling({
		menu: '#scroll_menus',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
		sectionsColor: ['#004878', '#33cb98', '#ff6600', '#6699ff', '#ff6666', '#c7c71c', '#ae85ff', '#fc85fc', '#00e0e0']			
	});
	/*
	* Internal use of the demo website
	*/
	$('#showExamples').click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#examplesList').toggle();
	});
	$('html').click(function(){
		$('#examplesList').hide();
	});
})(jQuery);