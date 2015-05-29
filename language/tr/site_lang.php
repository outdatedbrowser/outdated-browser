<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*NAVIGATION and META*/
$lang['meta_desc'] = 'Geliştiriciler için zaman kazandıran bir araç. Eski tarayıcıları tespit edip kullanıcıya güncellemesi için tavsiyede bulunur.';
$lang['btn_closenav'] = 'Navigasyonu kapat';
$lang['mainNav_home'] = 'ANA SAYFA';
$lang['mainNav_project'] = 'PROJE';
$lang['mainNav_how'] = 'NASIL KULLANILIR?';
$lang['mainNav_faq'] = 'SSS';
$lang['mainNav_git'] = 'GITHUB SAYFASI';

/*SHARE*/
$lang['share_share'] = 'Paylaş';
$lang['share_twitter'] = '%23Geliştiriciler için zaman kazandıran bir araç. Güncel olmayan %23tarayıcılar tespit edilir ve kullanıcıya %23güncelleme için tavsiyede bulunulur.';
$lang['share_twitter_t'] = 'Twitter&rsquo;da paylaş';
$lang['share_fb_t'] = 'Facebook&rsquo;da paylaş';


/*GENERIC*/
$lang['txt_close'] = 'Kapat';
$lang['txt_keepcalm'] = 'sakin olun <br><span class="xs">bu araç </span>masaüstü içindir<br> mobile uyumlu <span class="xs">değildir</span>';


/*HOMEPAGE*/
$lang['home_subtitle'] = 'Daha iyi bir deneyim için tarayıcınızı güncelleyin. Güncel sürümleri buradan inceleyebilirsiniz.';
$lang['home_subtitle_nojs'] = 'Tarayıcınızda Javascript etkin değil. Daha iyi bir deneyim için Javascript&rsquo;i etkinleştirin.';
$lang['home_subtitle_mobile'] = 'Bu araç masaüstü bilgisayarlar içindir, <br>ama özgürce inceleyebilirsiniz.';
$lang['home_percentage'] = 'kişi bu <br>tarayıcıyı kullanıyor <br>';
$lang['home_download'] = 'İNDİR';
$lang['home_version'] = 'VERSİYON';
$lang['home_available'] = 'ŞUNLAR İÇİN UYGUN';

/*PROJECT*/
$lang['proj_title1'] = 'Umutsuz bir <br> çaba!';
$lang['proj_desc1'] = 'Büro olarak eski tarayıcılar için çok fazla zaman harcadıktan sonra, size zaman kazandıracak ve eve erken gitmenizi sağlayacak bir çözüm oluşturduk.<br><br> Pizzalar dahil değildir!';
$lang['proj_alt1'] = 'umutsuz';
$lang['proj_desc1_2'] = 'Bir geliştirici çıldırdı';

$lang['proj_title2'] = 'Nasıl <br>çalışıyor?';
$lang['proj_desc2'] = 'Bu script çalıştığında, tarayıcının bir CSS özelliğini kontrol eder.Eğer desteklenmiyorsa kullanıcıya güzel tasarlanmış bir uyarı ile tarayıcısını güncellemesi tavsiye edilir.';
$lang['proj_desc2_2'] = 'Eski tarayıcı kullanan bir web sitesi';

$lang['proj_title3'] = 'Başlamak için <br> 3 adım!';
$lang['proj_desc3'] = 'Sadece 3 dakika sürer. JS ve CSS dosyasını ekle ve bir kaç satır HTML yapışır.<br><br>Daha fazla bilgi için <a class="github" href="https://github.com/burocratik/outdated-browser" rel="external" data-track="Github">Github</a> projesini inceleyin ;)';
$lang['proj_desc3_2'] = 'Bürolabs&rsquo;da<br> geliştirildi';

/*HOW*/
$lang['how_title1'] = 'Paketi <br> indir';
$lang['how_desc1'] = "Paket tüm gerekli dosyaları içerir: JS, CSS ve diller.";
$lang['how_desc1_2'] = 'Github&rsquo;dan indir.';

$lang['how_title2'] = 'Projene <br> ekle';
$lang['how_desc2'] = 'CSS dosyasını &lt;head&gt; elementine ve JS dosyasını &lt;body&gt; elementinin kapanışından önce ekle.';
$lang['how_desc2_2'] = 'Panoya kopyala ';
$lang['how_alt2'] = 'tarayıcı ';

$lang['how_title3'] = 'Gerekli <br> HTML&rsquo;i <br> ekle';
$lang['how_desc3'] = 'Bu kodu &lt;/body&gt; elementinin kapanışından önce ekleyebilirsin.';
$lang['how_desc3_2'] = '
<h6>Tarayıcınız güncel değil!</h6>
<p>Web sitemizi düzgün görüntülemek için tarayıcınızı güncelleyin.<a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Şimdi güncelle </a></p>
<p class="last"> <a href="#" id="btnCloseUpdateBrowser" title="Kapat"> &times; </a> </p>
';

$lang['how_title4'] = 'Plugin&rsquo;i <br> çağır';
$lang['how_alt4'] = 'tamam';
$lang['how_desc4'] = 'Bundan sonra, güncel olmayan bir tarayıcı ile sitenizi ziyaret eden kullanıcıya sayfanın üst tarafında havalı bir uyarı gösterilir.<br><br> bu projeyi beğendiyseniz paylaşmanızı rica ederiz!';
$lang['how_desc4_2'] = '//plugin fonksiyonu, DOM ready functionu içerisinde kullan';

/*404*/
$lang['url404'] = "http://outdatedbrowser.com/en";
$lang['txt_keepcalm_error'] = 'sakin olun <br><span class="xs">404 hatası</span>Aradığın <br>sayfa<br><span class="xs">bulunamadı</span>';