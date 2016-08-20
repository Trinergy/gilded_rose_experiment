<?php

require_once 'gilded_rose.php';

class GildedRoseTest extends PHPUnit_Framework_TestCase {

    function testFoo() {
        $items = array(new Item("foo", 0, 0));
        $gildedRose = new GildedRose($items);
        $gildedRose->update_quality();
        $this->assertEquals("foo", $items[0]->name);
    }

// ItemBase 
    // Quality
    function test_Item_Quality_should_decrease_by_1() {
      $items = array(new Item("Item One", 2, 4));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("3", $items[0]->quality);
    }

    function test_Item_Quality_should_not_be_negative() {
      $items = array(new Item("Item One", 2, 0));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("0", $items[0]->quality);
    }
    // Sell_In
    function test_Item_Sell_In_should_decrease_by_1() {
      $items = array(new Item("Item One", 2, 4));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("1", $items[0]->sell_in);
    }

// Aged Brie

    function test_Aged_Brie_Name() {
      $items = array(new Item("Aged Brie", 2, 0));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("Aged Brie", $items[0]->name);
    }

    function test_Aged_Brie_Quality_Should_Increase_by_one() {
      $items = array(new Item("Aged Brie", 2, 0));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("1", $items[0]->quality);
    }

    function test_Aged_Brie_Quality_Should_Increase_by_two_when_sell_in_is_below_zero() {
      $items = array(new Item("Aged Brie", 0, 0));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("2", $items[0]->quality);
    }

    function test_Item_Quality_Should_not_be_over_50() {
      $items = array(new Item("Aged Brie", 0, 49));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("50", $items[0]->quality);
    }

// Sulfuras

    function test_Sulfuras_sell_in_does_not_change() {
      $items = array(new Item("Sulfuras, Hand of Ragnaros", 0, 49));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("0", $items[0]->sell_in);
    }

    function test_Sulfuras_quality_does_not_change() {
      $items = array(new Item("Sulfuras, Hand of Ragnaros", 0, 49));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("49", $items[0]->quality);
    }

// Backstage Pass

    function test_Backstage_Pass_quality_increase_by_3_when_sell_in_is_lesser_than_6() {
      $items = array(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 46));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("49", $items[0]->quality);
    }

    function test_Backstage_Pass_quality_increase_by_2_when_sell_in_is_lesser_than_11_and_greater_than_5() {
      $items = array(new Item("Backstage passes to a TAFKAL80ETC concert", 6, 46));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("48", $items[0]->quality);
    }

    function test_Backstage_Pass_quality_is_0_when_sell_in_is_lesser_than_0() {
      $items = array(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 46));
      $gildedRose = new GildedRose($items);
      $gildedRose->update_quality();
      $this->assertEquals("0", $items[0]->quality);
    }

}
