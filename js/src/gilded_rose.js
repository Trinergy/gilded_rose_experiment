function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

// update_quality now RETURNS an items variable with updated values

function update_aged_brie(item) {
  sell_in = sell_in_decrease(item.sell_in, 1)
  quality = item.quality

  if (sell_in <= 0) {
    quality = quality_increase(quality, 2)
  }
  else {
    quality = quality_increase(quality, 1)
  }

  return new Item(item.name,sell_in,quality)
}

function update_sulfuras(item) {
  return new Item(item.name, item.sell_in,item.quality)
}

function update_backstage_pass(item) {
  sell_in = sell_in_decrease(item.sell_in, 1)
  quality = item.quality

  if (sell_in < 1) {
    quality = 0
  }
  else if (sell_in < 5) {
    quality = quality_increase(quality, 3)
  }
  else if (sell_in < 11) {
    quality = quality_increase(quality, 2)
  }
  else {
    quality = quality_increase(quality, 1)
  }

  return new Item(item.name, sell_in,quality)
}

function update_item_base(item) {
  sell_in = sell_in_decrease(item.sell_in, 1)
  quality = item.quality

  if (item.quality > 0) {
    quality = quality_decrease(quality, 1)
  }

  return new Item(item.name,sell_in,quality)
}

// math operations
function sell_in_decrease(sell_in, amount) {
  result = sell_in - amount

  if (result < 0) {
    result = 0
  }
  return result
}

function quality_increase(quality, amount) {
  result = quality + amount

  if (result > 50) {
    result = 50
  }
  return result
}

function quality_decrease(quality, amount) {
  result = quality - amount

  if (result < 0) {
    result = 0
  }
  return result
}

function update_quality() {
  updated_items = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == "Aged Brie") {
      updated_items[i] = update_aged_brie(items[i])
    } // aged brie if
    else if (items[i].name == "Sulfuras, Hand of Ragnaros") {
      updated_items[i] = update_sulfuras(items[i])
    } // ragnaraos if
    else if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
      updated_items[i] = update_backstage_pass(items[i])
    } // backstage pass if
    else {
      updated_items[i] = update_item_base(items[i])
    } // default
  }
  return updated_items
}

    // if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //   if (items[i].quality > 0) {
    //     if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //       items[i].quality = items[i].quality - 1
    //     }
    //   }
    // } else {
    //   if (items[i].quality < 50) {
    //     items[i].quality = items[i].quality + 1
    //     if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //       if (items[i].sell_in < 11) {
    //         if (items[i].quality < 50) {
    //           items[i].quality = items[i].quality + 1
    //         }
    //       }
    //       if (items[i].sell_in < 6) {
    //         if (items[i].quality < 50) {
    //           items[i].quality = items[i].quality + 1
    //         }
    //       }
    //     }
    //   }
    // }
    // if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //   items[i].sell_in = items[i].sell_in - 1;
    // }
    // if (items[i].sell_in < 0) {
    //   if (items[i].name != 'Aged Brie') {
    //     if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //       if (items[i].quality > 0) {
    //         if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //           items[i].quality = items[i].quality - 1
    //         }
    //       }
    //     } else {
    //       items[i].quality = items[i].quality - items[i].quality
    //     }
    //   } else {
    //     if (items[i].quality < 50) {
    //       items[i].quality = items[i].quality + 1
    //     }
    //   }
    // }
