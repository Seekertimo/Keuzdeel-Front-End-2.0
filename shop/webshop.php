<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 10/16/2019
 * Time: 11:57 PM
 */


$item = array (
    array ('Film 1','Dit is de eerste film','100'),
    array ('Film 2','Dit is de tweede film','200'),
    array ('Film 3','Dit is de derde film','300')
);

echo '<h1>Webshop</h1>';

foreach ($item AS $iteminfo) {
    echo '<p><strong>'.$iteminfo[0].'</strong><br />>'.$iteminfo[1].'</p>';
    echo '<p>&euro; '.($iteminfo[2]/100).',- </p>';
}
