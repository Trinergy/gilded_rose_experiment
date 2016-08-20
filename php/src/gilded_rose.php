<?php

class GildedRose {

    private $items;

    function __construct($items) {
        $this->items = $items;
    }

    public function update_quality() {
    //     foreach ($this->items as $item) {
    //         // not aged brie, or backstage passes, quality over 0, not ragnaros, quality -1
    //         if ($item->name != 'Aged Brie' and $item->name != 'Backstage passes to a TAFKAL80ETC concert') {
    //             if ($item->quality > 0) {
    //                 if ($item->name != 'Sulfuras, Hand of Ragnaros') {
    //                     $item->quality = $item->quality - 1;
    //                 }
    //             }
    //         // 
    //         } else {
    //             if ($item->quality < 50) {
    //                 $item->quality = $item->quality + 1;
    //                 if ($item->name == 'Backstage passes to a TAFKAL80ETC concert') {
    //                     if ($item->sell_in < 11) {
    //                         if ($item->quality < 50) {
    //                             $item->quality = $item->quality + 1;
    //                         }
    //                     }
    //                     if ($item->sell_in < 6) {
    //                         if ($item->quality < 50) {
    //                             $item->quality = $item->quality + 1;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
            
    //         if ($item->name != 'Sulfuras, Hand of Ragnaros') {
    //             $item->sell_in = $item->sell_in - 1;
    //         }
            
    //         if ($item->sell_in < 0) {
    //             if ($item->name != 'Aged Brie') {
    //                 if ($item->name != 'Backstage passes to a TAFKAL80ETC concert') {
    //                     if ($item->quality > 0) {
    //                         if ($item->name != 'Sulfuras, Hand of Ragnaros') {
    //                             $item->quality = $item->quality - 1;
    //                         }
    //                     }
    //                 } else {
    //                     $item->quality = $item->quality - $item->quality;
    //                 }
    //             } else {
    //                 if ($item->quality < 50) {
    //                     $item->quality = $item->quality + 1;
    //                 }
    //             }
    //         }
    //     }
    // }
        foreach ($this->items as $item) {
            $target = new ItemBase($item);
            $target->update();
        }
    }
}

class Item {

    public $name;
    public $sell_in;
    public $quality;

    function __construct($name, $sell_in, $quality) {
        $this->name = $name;
        $this->sell_in = $sell_in;
        $this->quality = $quality;
    }

    public function __toString() {
        return "{$this->name}, {$this->sell_in}, {$this->quality}";
    }

}

class ItemBase {

    public $item;

    function __construct($item) {
        $this->item = $item;
    }

    public function update() {
        $this->update_sell_in();
        $this->update_quality();
    }

    public function update_sell_in() {
        $this->item->sell_in -= 1;
    }

    public function update_quality() {
        $this->item->quality -= 1;
    }
}

