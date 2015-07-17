<footer class="global_ft">
	<div class="wrapper">
		<section class="affiliate col">
			<div class="affiliate-block">
				<!-- <p class="hide_txt">affiliate with</p> -->
				<div class="pic"><img src="images/pic2.png" alt=""></div>
			</div>
		</section>
		<section class="epaper col">
			<div class="epaper-block">
				<p><span class="hide_txt">馬上訂閱所有人都在關注的財金電子報！再也不要錯過賺錢熱訊！</span></p>
				<form action="">
					<input type="text" name="" id="" class="epaper-inp" placeholder="請輸入您的EMAIL">
					<span class="btn btn-IPC"><input type="submit" name="" id="" class="epaper-ft-submit" value="SEND"></span>
				</form>
			</div>
			<nav class="footer_nav">
				<ul>
				<?php footerNavAu(); ?>
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
<!-- 					<li class="footer_nav-item nav-IPC item<?php //echo $mainNavLen; ?>">
						<a href="<?php //echo $url; ?>">
							<span class="wrap"><span class="footer_nav-icon"></span><span><?php //echo $item; ?></span></span>
						</a>
					</li> -->
				<?php
					// 	++$mainNavLen;
					// }
				?>

				</ul>
			</nav>
		</section>
		<section class="sitemap col">
			<nav class="cf">
				<div class="col left small-4">
					<section class="sitemap-seg">
						<h2>寰宇財金網</h2>
						<ul>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">關於寰宇</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">企業合作</a></li>
						</ul>
					</section>
				</div>
				<div class="col left small-4">
					<section class="sitemap-seg">
						<h2>財金人物</h2>
						<ul>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">達人專區</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">講師專區</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">作者專區</a></li>
						</ul>
					</section>
				</div>
				<div class="col left small-4">
					<section class="sitemap-seg">
						<h2>顧客服務</h2>
						<ul>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">連絡我們</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">相關連結</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">常見問題</a></li>
							<li><a href="<?php webPageUrlAu('webPageBuild'); ?>">購買據點</a></li>
						</ul>
					</section>
				</div>
			</nav>
		</section>
	</div>
</footer>
<footer class="copyright">
	<div class="wrapper cf">
		<p class="left">Copyright ©2014 IPC寰宇財金網版權所有 All Rights Reserved.</p>
		<p class="right">Designed by <a href="http://ecmd.com.tw/" target="_blank">DFOCUS</a></p>
	</div>
</footer>