/*--------------------------------------*\
	DFocus
			by AuTiMoThY
\*--------------------------------------*/
$(window).load(function(){
	$('.flexslider').flexslider({
		animation: "slide",
		easing: "swing",
        animationLoop: true,
        minItems:1,
        maxItems:5,
        controlsContainer: $('#hcarouselcontrols .well'),
		start: function(){
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
							}, 80 );
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


