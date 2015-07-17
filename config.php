<?php 
define('IMG_PATH', 'asset/images/');
define('TEMP_IMG_PATH', 'asset/images/temp/');
define('INC_PATH', 'views/inc/');

define('PROJECT', '肢端肥大症 衛教資訊網');
define('KEYWORDS', '網站關鍵字在這');
define('DESCRIPTION', '網站描述在這');
define('COPYRIGHT', '網站Copyright在這');



function path_au($what) {
	switch ($what) {
		case 'img':
			echo IMG_PATH;
			break;
		case 'temp':
			echo TEMP_IMG_PATH;
			break;

		default:
			echo IMG_PATH;
			break;
	}
}

function designByDFocus(){
	echo "Design by <a href=\"http://www.ecmd.com.tw/\" target=\"_blank\"><img src=\"" . IMG_PATH . "df-logo.png\" alt=\"\"></a>";
}

?>