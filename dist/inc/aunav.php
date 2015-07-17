<?php 


/**
* 
*/
class PageUrlAu {
	public $webPageBuild    = "javascript: alert('網頁建置中，敬請稍待!');";
	public $index           = "index.php";
	public $news            = "news.php";
	public $understanding_1 = "understanding_1.php";
	public $understanding_2 = "understanding_2.php";
	public $understanding_3 = "understanding_3.php";
	public $symptoms_1      = "symptoms_1.php";
	public $symptoms_2      = "symptoms_2.php";
	public $diagnosis_1     = "diagnosis_1.php";
	public $diagnosis_2     = "diagnosis_2.php";
	public $diagnosis_3     = "diagnosis_3.php";
	public $diagnosis_4     = "diagnosis_4.php";
	public $diagnosis_5     = "diagnosis_5.php";
	public $coexisting_1    = "coexisting_1.php";
	public $coexisting_2    = "coexisting_2.php";
	public $coexisting_3    = "coexisting_3.php";
	public $information     = "information.php";
	public $upload_step1    = "upload_step1.php";
	public $faq             = "faq.php";
	public $discuss         = "discuss.php";
	public $media           = "media.php";
	public $links           = "links.php";


}
/**
* 
*/
class navAu extends PageUrlAu {

	function navListAu($headerOrFooter) {

		$understanding_sub = array(
		                '什麼是肢端肥大症'=>$this->understanding_1,
		                '疾病重要三激素'=>$this->understanding_2,
		                '發病率'=>$this->understanding_3
		                );


		$Nav = array(
						'最新消息<br><span class="en">NEWS</span>'        => $this->news,
						'認識肢端肥大症<br><span class="en">UNDERSTANDING</span>'=> $understanding_sub,
						'臨床症狀<br><span class="en">SYMPTOMS</span>'=> $symptoms_sub,
						'診斷與治療<br><span class="en">DIAGNOSIS</span>'=> $diagnosis_sub,
						'與肢端肥大症共存<br><span class="en">COEXISTING</span>'=> $coexisting_sub,
						'就醫資訊<br><span class="en">INFORMATION</span>'=> $information_sub,
						'分享 & 影音<br><span class="en">MEDIA</span>'=> $media_sub
						);
		$NavLen = 0;
		$NavLen ++;

		if ($headerOrFooter == 'headerNav') {
			foreach ($Nav as $item => $url) {
						# code...
echo "<li class=\"main_nav-item nav-IPC item$NavLen\">";
if (is_array($url)) {
echo "	<a href=\"javascript:mainNavLink('goto$NavLen');\">";
}else{
echo "	<a href=\"$url\">";
}
echo "		<span class=\"wrap\"><i class=\"main_nav-icon\"></i><span>$item</span></span>";
echo "	</a>";
if (is_array($url)) {
$subNavLen = 0;
$subNavLen ++;
echo "	<ul class=\"subNav js-subNav\">";
	foreach ($url as $subNav => $subUrl) {
echo "		<li class=\"subNav-item item{$NavLen}_{$subNavLen}\">";
echo "			<a href=\"{$subUrl}\">{$subNav}</a>";
echo "		</li>";
++$subNavLen;
	}
echo "		<li class=\"padding\"></li>";
echo "	</ul>";
}
echo "</li>";

				++$NavLen;
			}
		} elseif ($headerOrFooter == 'footerNav') {
			foreach ($Nav as $item => $url) {

echo <<<_OUTPUT
<li class="footer_nav-item nav-IPC item$NavLen">
	<a href="$url">
		<span class="wrap"><span class="footer_nav-icon"></span><span>$item</span></span>
	</a>
</li>
_OUTPUT;

				++$NavLen;
			}
		}
	}
}

/**
* function
*/

function headerNavAu(){
	$navAu = new navAu();
	$navAu -> navListAu($headerOrFooter ='headerNav');

}

function footerNavAu(){
	$navAu = new navAu();
	$navAu -> navListAu($headerOrFooter ='footerNav');

}

function webPageUrlAu($url){
	$PageUrlAu = new PageUrlAu();
	echo $PageUrlAu->{$url};
}



 ?>