<div id="fb-root"></div>
<!-- <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&appId=1436061923294298&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script> -->

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '494835137321739',
      xfbml      : true,
      version    : 'v2.2'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<?php 
require_once 'inc/aunav.php';
 ?>
<div id="top"></div>
<header class="global_hd">
	<div class="wrapper">
		<header id="logo" class="ib"><a href="<?php webPageUrlAu('indexPage'); ?>" title="寰宇財金網首頁"><img src="images/logo.png" alt=""></a></header>
		<nav class="main_nav ib">
			<ul class="cf">
			<?php headerNavAu(); ?>

			<?php
				// $mainNav = array(
				// 				'首頁'        => $indexPageUrlAu,
				// 				'書城'        => "index_bookShop.php",
				// 				'課程'        => $webPageBuild,
				// 				'財金觀點'    => $webPageBuild,
				// 				'哈燒快訊'    => $webPageBuild,
				// 				'我的IPC'     => $webPageBuild);
				// $mainNavLen = 0;
				// $mainNavLen ++;

				// foreach ($mainNav as $item => $url) {
			?>
<!-- 				<li class="main_nav-item nav-IPC item<?php //echo $mainNavLen; ?>">
					<a href="<?php //echo $url; ?>">
						<span class="wrap"><span class="main_nav-icon"></span><span><?php //echo $item; ?></span></span>
					</a>
				</li> -->
			<?php
				// 	++$mainNavLen;
				// }
			?>
			</ul>
		</nav>
		<div class="quick_login ib">
			<a href="<?php webPageUrlAu('loginPage'); ?>" class="login_btn">登入 | 註冊</a>
			<a href="<?php webPageUrlAu('loginPage'); ?>" class="fb_btn"><span class="icon"></span>登入</a>
		</div>
	</div>
</header>
<header class="quick_bar">
	<div class="wrapper">
		<ul class="social ib">
			<li class="line_r"></li>
			<li><a href="<?php webPageUrlAu('webPageBuild'); ?>" class="social-icon icon1 hide_txt">RSS</a></li>
			<li><a href="<?php webPageUrlAu('webPageBuild'); ?>" class="social-icon icon2 hide_txt">Facebook</a></li>
			<li><a href="<?php webPageUrlAu('webPageBuild'); ?>" class="social-icon icon3 hide_txt">Google Plus</a></li>
			<li class="line_l"></li>
		</ul>
		<div class="fb-like" data-href="http://www.ipci.com.tw/demo/" data-layout="button_count" data-action="recommend" data-show-faces="false" data-share="true"></div>
		<div class="search_block ib">
			<form action="" class="search_form">
				<span class="search_form-inp ib"><input type="text" name="" id="" class="" placeholder="輸入想尋找的關鍵字..."></span>
				<span class="search_form-btn ib"><input type="button" name="" id="" class="" onclick="<?php webPageUrlAu('webPageBuild'); ?>"></span>
			</form>
		</div>
	</div>
</header>