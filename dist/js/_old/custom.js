/*--------------------------------------*\
	outthere
			by DFocus AuTiMoThY
\*--------------------------------------*/
$(window).load(function(){
	var flexslider = $('.flexslider');
	if (flexslider.length) {

		$('.flexslider').flexslider({
			animation: "slide",
			easing: "easeInOutElastic",
			animationLoop: true,
			directionNav: false,
			pauseOnAction: false,
			slideshowSpeed: 5000,
			// initDelay: 1000,
			minItems: 1,
			maxItems: 5,
			itemMargin: 2,
	        // move:1102,
	        controlsContainer: $('#hcarouselcontrols .well'),
			init: function(){
				// (function () {

					var support = { animations : Modernizr.cssanimations },
						container = document.getElementById( 'ip-container' ),
						header = container.querySelector( 'header.ip-header' ),
						loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
						animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
						// animation end event name
						animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

					function init() {
						var onEndInitialAnimation = function() {
							if( support.animations ) {
								this.removeEventListener( animEndEventName, onEndInitialAnimation );
							}

							startLoading();
						};

						// disable scrolling
						window.addEventListener( 'scroll', noscroll );

						// initial animation
						classie.add( container, 'loading' );

						if( support.animations ) {
							container.addEventListener( animEndEventName, onEndInitialAnimation );
						}
						else {
							onEndInitialAnimation();
						}
					}

					function startLoading() {
						// simulate loading something..
						var simulationFn = function(instance) {
							var progress = 0,
								interval = setInterval( function() {
									progress = Math.min( progress + Math.random() * 0.1, 1 );

									instance.setProgress( progress );

									// reached the end
									if( progress === 1 ) {
										classie.remove( container, 'loading' );
										classie.add( container, 'loaded' );
										clearInterval( interval );

										var onEndHeaderAnimation = function(ev) {
											if( support.animations ) {
												if( ev.target !== header ) return;
												this.removeEventListener( animEndEventName, onEndHeaderAnimation );
											}

											classie.add( document.body, 'layout-switch' );
											window.removeEventListener( 'scroll', noscroll );
										};

										if( support.animations ) {
											header.addEventListener( animEndEventName, onEndHeaderAnimation );
										}
										else {
											onEndHeaderAnimation();
										}
									}
								}, 350 );
						};

						loader.setProgressFn( simulationFn );
					}
					
					function noscroll() {
						window.scrollTo( 0, 0 );
					}

					init();

				// })();

			}()
		});
	};



});



function viewPortWidthHeight() {
  var wh = {};
  if(window.innerWidth) {
      wh.width = window.innerWidth;
      wh.height = window.innerHeight;
  }
  else if(document.documentElement.clientWidth) {
      wh.width = document.documentElement.clientWidth;
      wh.height = document.documentElement.clientHeight;
  }
  else if(document.body.clientWidth) {
      wh.width = document.body.clientWidth;
      wh.height = document.body.clientHeight;
  }
  return wh;
}

function resizeBlock (){
	var $footerWrap = $("#footerWrap"),
		$body = $("body"),
		$slidesLi = $(".flexslider .slides > li"),
		$indexPage = $("body.index_page"),
		viewPortWH = viewPortWidthHeight(),
		viewPortH = viewPortWH.height;

	$footerWrap.height(viewPortH * 2 / 5);
	$indexPage.css('height', viewPortH);
	$slidesLi.css('height', viewPortH * 0.8);
}


$(window).on('resize', function () {
	resizeBlock();
});

$(function () {
	resizeBlock();

	// if (!/*@cc_on!@*/false) {
	// 	console.log('ie?');
	// 	$.material.init('#ftCtrl');
	// }else {

	// }
	if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)  ) {
		$(".loading .ip-loader .ip-inner").append('LOADING');
	}else {
		// console.log('not ie');
		$.material.init();
	}


	$.preload( 'images/banner_about.jpg',
	           'images/banner_product.jpg',
	           'images/outthere-logo.svg',
	           'images/navItem1.svg',
	           'images/navItem2.svg',
	           'images/navItem3.svg',
	           'images/navItem4.svg',
	           'images/navItem5.svg',
	           'images/iconTxt.png'
	);

	$('#cntWra').css('height', $('#mainPage').height);

	$(".sitemap-seg a").each(function() {
		$(this).hover(function() {
			$(this).parent().css('border-bottom', '1px solid #51a506')
		}, function() {
			$(this).parent().css('border-bottom', '1px solid #6b6b6b')
		});
	});

	var ftCtrl = 0;
	$('#ftCtrl').click(function() {
		if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)  ) {
			// console.log(' ie')
		}else {
			// console.log('not ie');
			$.material.init();
		}
		footerCtrler();
	});

	$(".sitemap-seg a").click(function(event) {
		ftCtrl = 1;
		footerCtrler();
	});

	function footerCtrler() {

		if (ftCtrl==0) {
			//  footer open
			$('footer#footerWrap').animate({bottom: '400%'}, 300, 'easeInOutQuart');
			$('#ftCtrl').animate({top: '-315px'}, 0)
			ftCtrl++
		}else {
			//  footer close
			$('footer#footerWrap').animate({bottom: '0'}, 300, 'easeInOutQuart');
			$('#ftCtrl').animate({top: '-30px'}, 0)
			ftCtrl=0
		};
	}

	function MainNavActive(){
        var nav         = $(".main_nav"),
            about       = $(".about_page"),
            product     = $(".product_page"),
            productLi     = $(".productList_page"),
            news        = $(".news_page"),
            contact        = $(".contact_page");

		if (about.length) {nav.find('.navItem1').addClass('active'); };
		if (product.length) {nav.find('.navItem2').addClass('active'); };
		if (productLi.length) {nav.find('.navItem2').addClass('active'); };
		if (news.length) {nav.find('.navItem3').addClass('active'); };
		if (contact.length) {nav.find('.navItem5').addClass('active'); };
	};
	MainNavActive();

	$(window).bind('scroll resize', function() {
		var $this = $(this),
			scroll = $this.scrollTop();

		if (scroll>=200) {
			$("#headerWrap").css('height', '8%');
			$("nav.main_nav ul").css('bottom', '1em');
			$(".logo").css({'height': '90%', 'position': 'relative', 'left': '-5%'});
			$(".page_banner").css({
				'background-attachment': 'fixed',
				'background-position': '50% -80%'
			});
		}else {
			$("#headerWrap").css('height', '');
			$("nav.main_nav ul").css('bottom', '');
			$(".logo").css({'height': '', 'position': '', 'left': ''});
			$(".page_banner").css({
				'background-attachment': '',
				'background-position': ''
			});
		};
	});

})
/*
	// change color of SVG image using CSS (jQuery SVG image replacement)
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');
			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');

	});


var $win = $(window),
	$leftAside = $('#leftAside'),
	$wsLeftAside = $('#leftAsideDontScroll'),
	_moveSpeed = 1000,	// 移動的速度
	number = 100;

$win.bind('scroll resize', function(){
	var $this = $(this);
	var MM = $this.scrollTop();

	if(MM>=150){
		$leftAside.stop().animate({
			top: 50
		}, _moveSpeed, 'easeOutQuint');
	}else {
		$leftAside.stop().animate({
			top: 290
		}, _moveSpeed, 'easeOutQuint');
	};
	

}).scroll();

$(function () {
	//#main 最小高度
	var $asideH = $('#leftAside').outerHeight(),
		$asideH2 = $wsLeftAside.outerHeight();
	$('#main').css('min-height', $asideH + 60 + 'px');
	$('#main.workshop_cnt_page').css('min-height', $asideH2 + 60 + 'px');
	$('#main.faq_page').css('min-height', $asideH2 + 60 + 'px');

	//首頁 下方 List
	$('#newsPic2').css('opacity', '0');
	$('#newsList2').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#newsPic1').stop().animate({opacity: 0}, 500);
		$('#newsPic2').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});
	$('#newsList1').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#newsPic2').stop().animate({opacity: 0}, 500);
		$('#newsPic1').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});

	$('#news2Pic2').css('opacity', '0');
	$('#news2List2').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#news2Pic1').stop().animate({opacity: 0}, 500);
		$('#news2Pic2').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});
	$('#news2List1').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#news2Pic2').stop().animate({opacity: 0}, 500);
		$('#news2Pic1').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});

	// 控制 loginBlock 顯示與否
	$('#login').stop().hover(function() {
		$(this).toggleClass('open').children('#loginBlock').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).toggleClass('open').children('#loginBlock').stop().animate({opacity: 0}, 500);
	});




	$('a.fancybox2').fancybox({
		width	    : 700,
		// minHeight	: 600,
		padding     : 0,
		margin      : 0,
		wrapCSS     : 'fancybox_style2'
	});

});
*/





//mCustomScrollbar
(function($){
	$(window).load(function(){
		
		$.mCustomScrollbar.defaults.theme="inset"; //set "inset" as the default theme
		$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
		
		$(".outer, .member_wrapper, .contact_wrapper, .textarea, .left_aside").mCustomScrollbar({
			snapAmount : 50,
			mouseWheel :{ enable: true },
			mouseWheel :{ scrollAmount: 100 },
			advanced   :{autoExpandHorizontalScroll:true}
		});

		$('#wra').find('#mCSB_2_scrollbar_vertical').css('opacity', '1');

		
		if ($(window).width() <= 1280){	
			$(".news_wrapper, .prod_wrapper, .know_wrapper, .brandStory_content").mCustomScrollbar({
				advanced:{autoExpandHorizontalScroll:true}
			});
		}
	});
})(jQuery);

//preload
$( function(){
	$.preload( 'images/bg_index_mini.jpg',
				'images/bg_knowledge.jpg',
				'images/bg_news.jpg',
				'images/bg_BrandStory.jpg',
				'images/bg_member.jpg',
				'css/mCSB_buttons.png'
	);
});


//custom
$(document).ready(function() {

	$('li#subNavAct').click(function() {
		$('li#subNav2Act').next('.sub_nav').hide('slow');
		$(this).next('.sub_nav').show().animate({opacity: "1"}, 1000);
		
	});
	$('li#subNav2Act').click(function() {
		$('li#subNavAct').next('.sub_nav').hide('slow');
		$(this).next('.sub_nav').show().animate({opacity: "1"}, 1000);
		
	});

	$(".fancybox").fancybox({
		maxWidth	: 850,
		maxHeight	: 550,
	});
	$(".fancybox2").fancybox({
		maxWidth	: 600,
		maxHeight	: 400,
        padding     : 0
	});


	var fade_btn = $('aside .fade, input.collect_submit, #delete');
	fade_btn.hover(
		function(){
			$(this).stop(false,true).fadeTo(130, 0.4);
		},function(){
			$(this).stop(false,true).fadeTo(200, 1);
		}
	);


	$('span#delete').click(function() {
		$(this).parent('section.collect_item').animate({right: "-100%"}, 300).hide(500);
	});

	$('#collectBtn').click(function() {
		$(this).animate({right: "-100%"}, 500).css('display', 'none').parent('aside').css('background', 'transparent').animate({width: "335px"}, 500);
		$(this).next('#collectWra').css('display', 'block').animate({right: "0%",top: "0%", opacity: "1"},500);
	});
	$('#closeBtn').click(function(event) {
		$(this).parent('#collectWra').animate({right: "-100%"},500).delay(500).css('display', 'none');
		$(this).parents('aside#rightAside').animate({width: "45px", background: "rgba(0, 0, 0, 0.85)"}, 300).find('#collectBtn').animate({right: "0%"}, 500).css('display', 'block');
	});


	if ($(window).width() <= 1024){	
		$('.join_btn_style1').delay(1000).animate({top: "20px", opacity: "0.4"},1000).delay(100).animate({left: "60%", opacity: "1"},500);
		$('.forget_btn_style1, .login_btn_style1').delay(1000).animate({left: "10%"},1000);

		$('.join_btn_style2').delay(1000).animate({left: "10%"},1000);
		$('.forget_btn_style2, .login_btn_style2').delay(1000).animate({left: "20%"},1000);

		$('div.photos').addClass('clearfix');
	}	
/*
	$('#collectBtn').click(function() {
		$(this).animate({right: "-100%"}, 500).css('display', 'none');
		$(this).parent('aside').css({
			background: 'transparent',
			position: 'absolute'
		}).delay(500).animate({
			width: "335px",
			top: "0"}, 500);
			500, function() {
			$(this).children('#collectWra').show('fast').css('position', 'absolute').animate({
				right: "0%",
				top: "0%"
			},500);
		});
		// $(this).next('#collectWra').css('position', 'absolute').delay(500).show('fast').animate({right: "0%"},500);
	});
	$('#closeBtn').click(function() {
		$(this).parent('#collectWra').animate({right: "-100%"},500).delay(500).hide('slow');
		$(this).parents('aside#rightAside').animate({width: "45px", background: "rgba(0, 0, 0, 0.85)"}, 300).find('#collectBtn').animate({right: "0%"}, 500).show('fast');
	});
*/

	

 
	var viewportwidth;
	var viewportheight;
	var wwww = document.body.clientWidth;
	if (typeof window.innerWidth != 'undefined'){
		viewportwidth = window.innerWidth,
		viewportheight = window.innerHeight;
	}else if (typeof document.documentElement != 'undefined'
	 && typeof document.documentElement.clientWidth !=
	 'undefined' && document.documentElement.clientWidth != 0){
		viewportwidth = document.documentElement.clientWidth,
		viewportheight = document.documentElement.clientHeight;
	}else {
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
		viewportheight = document.getElementsByTagName('body')[0].clientHeight;
	}

	// $('#header, footer, .line1').width(viewportwidth);
	// $('aside').height(viewportheight);


// document.getElementById("").style.width(viewportwidth);
// document.getElementsByTagName("body").style.width(viewportwidth);
// document.getElementsByClassName("line1").style.width(viewportwidth);




});

