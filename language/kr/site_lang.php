<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*NAVIGATION and META*/
$lang['meta_desc'] = 'Outdated Browser는 개발자들의 시간을 단축해 주는 도구입니다. 오래된 브라우저를 자동으로 감지하여 사용자들에게 최신 브라우저로 업그레이드할 것을 권장하는 팝업을 표시합니다.';
$lang['btn_closenav'] = '네비게이션 메뉴 닫기';
$lang['mainNav_home'] = '홈페이지';
$lang['mainNav_project'] = '이 프로젝트에 관하여';
$lang['mainNav_how'] = '사용 방법';
$lang['mainNav_faq'] = '자주 묻는 질문';
$lang['mainNav_git'] = 'GitHub 저장소';

/*SHARE*/
$lang['share_share'] = '공유하기';
$lang['share_twitter'] = 'Outdated Browser는 개발자들의 시간을 단축해 주는 도구입니다. 오래된 브라우저를 자동으로 감지하여 사용자들에게 최신 브라우저로 업그레이드할 것을 권장하는 팝업을 표시합니다.';
$lang['share_twitter_t'] = 'Twitter로 공유하기';
$lang['share_fb_t'] = 'Facebook으로 공유하기';


/*GENERIC*/
$lang['txt_close'] = '닫기';
$lang['txt_keepcalm'] = '진정하세요! <br><span class="xs">이 도구는 </span>데스크탑을 위한 도구이지, <br>모바일 기기를 위한 도구가 <span class="xs">아닙니다.</span>';


/*HOMEPAGE*/
$lang['home_subtitle'] = '최상의 브라우징 경험을 위해서는, 브라우저를 최신 버전으로 업그레이드하세요. 최신 버전의 브라우저를 다운로드 받으려면, 이 웹사이트를 참조하세요.';
$lang['home_subtitle_nojs'] = 'Javascript가 비활성화되어 있습니다. 보다 더 나은 경험을 제공하기 위하여 Javascript를 활성화하세요.';
$lang['home_subtitle_mobile'] = '이 도구는 데스크탑만을 위한 도구이지만, <br>모바일에서도 마음껏 설명을 읽어보셔도 좋습니다.';
$lang['home_percentage'] = '의 사람들이 <br>이 브라우저를 사용하고 있습니다';
$lang['home_download'] = '다운로드';
$lang['home_version'] = '버전: ';
$lang['home_available'] = '사용 가능한 플랫폼';

/*PROJECT*/
$lang['proj_title1'] = '지원이 <br>급히 필요합니다!';
$lang['proj_desc1'] = '오래된 브라우저를 위해 우리의 웹사이트를 수정하는 일에 많은 시간을 쏟아부은 끝에, Büro에서는 개발자 여러분의 시간을 절약해 줄 뿐 아니라, 여러분을 집에 더 일찍 보내드릴 수 있는 솔루션을 개발하기로 했습니다.<br><br> 피자는 들어있지 않습니다! :P';
$lang['proj_alt1'] = 'desperate';
$lang['proj_desc1_2'] = '미쳐가는 개발자';

$lang['proj_title2'] = '어떻게 <br>동작합니까?';
$lang['proj_desc2'] = '이 스크립트가 실행되면, 스크립트는 사용자의 브라우저가 특정 CSS 속성을 지원하는지 자동으로 검사합니다. 만약 그렇지 않다면, 이 스크립트는 사용자에게 브라우저를 업그레이드할 것을 권고하는 멋있는 경고 팝업을 보여 줄 것입니다.';
$lang['proj_desc2_2'] = '오래된 브라우저에서 열린 웹 사이트';

$lang['proj_title3'] = 'Outdated Browser를 <br>사용하기 위한 3단계!';
$lang['proj_desc3'] = '단 3분 정도밖에 걸리지 않습니다. 웹 사이트가 JS와 CSS 파일을 포함하도록 선언한 뒤, HTML 몇 줄을 붙여 넣으면 됩니다. <br><br>더 자세한 정보는 <a class="github" href="https://github.com/burocratik/outdated-browser" rel="external" data-track="Github">Github</a> 페이지를 참조하세요 ;) ;)';
$lang['proj_desc3_2'] = 'Bürolabs에서 개발됨';

/*HOW*/
$lang['how_title1'] = '패키지 <br> 다운로드';
$lang['how_desc1'] = "이 패키지는 언어 번역 파일과 JS, CSS 등 필요한 모든 파일을 포함합니다.";
$lang['how_desc1_2'] = 'Github에서 다운로드';

$lang['how_title2'] = '당신의 프로젝트에 <br> 포함 선언 넣기';
$lang['how_desc2'] = 'CSS 파일을 &lt;head&gt; 에서, JS 파일을 &lt;body&gt; 끝부분에서 로드되도록 하세요.';
$lang['how_desc2_2'] = '이 코드를 클립보드에 복사 ';
$lang['how_alt2'] = 'browser ';

$lang['how_title3'] = '필요한 HTML <br> 삽입';
$lang['how_desc3'] = '이 코드를 &lt;/body&gt; 태그 바로 전에 넣으시면 됩니다.';
$lang['how_desc3_2'] = '
<h6>브라우저가 오래되었습니다!</h6>
<p>이 웹 페이지가 현재 브라우저에서는 정상적으로 보이지 않을 수 있습니다. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">지금 브라우저를 업그레이드하세요! </a></p>
<p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
';

$lang['how_title4'] = '플러그인을 <br> 호출하면';
$lang['how_alt4'] = '끝';
$lang['how_desc4'] = '이제부터, 오래된 브라우저를 사용하는 모든 사용자는 웹 페이지의 맨 위에 멋진 알림이 표시될 것입니다.<br><br> 이 프로젝트가 마음에 드신다면, 프로젝트 소스 코드를 Fork하고 세계와 나누세요!';
$lang['how_desc4_2'] = '//DOM ready function 안에 코드를 넣으세요.';

/*404*/
$lang['url404'] = "http://outdatedbrowser.com/kr";
$lang['txt_keepcalm_error'] = '진정하세요! <br><span class="xs">404 에러</span>요청하신 <br> 페이지를<br><span class="xs">찾을 수 없습니다./span>';