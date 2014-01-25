<?php
$geo = 'http://maps.google.com/maps/api/geocode/xml?latlng='.htmlentities(htmlspecialchars(strip_tags($_GET['latlng']))).'&sensor=true';
$xml = simplexml_load_file($geo);
list($lat,$long) = explode(',',htmlentities(htmlspecialchars(strip_tags($_GET['latlng']))));
$geodata['latitude'] = $lat;
$geodata['longitude'] = $long;
$geodata['google_api_src'] = $geo;
echo '<input id="localizacao" value="'.$lat.', '.$long.'" />';
?> 