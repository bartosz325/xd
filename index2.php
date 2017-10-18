<?php
$a=file_get_contents('https://fronter.com/uczelnia/');
$head=explode('<head>',$a);
$head=explode('</head>',$head[1]);
$body=explode('<body>',$head[1]);
$body=explode('</body>',$body[0]);
$body=str_replace('index.phtml','https://fronter.com/uczelnia/index.phtml',$body[0]);
$tab=[$head[0],$body];
echo json_encode($tab);
?>