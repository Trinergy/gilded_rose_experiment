function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

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

function get_updated_item(item) {
  types = {
    'Aged Brie' : function() {
      return update_aged_brie(item)
    },
    'Sulfuras, Hand of Ragnaros' : function() {
      return update_sulfuras(item)
    },
    'Backstage passes to a TAFKAL80ETC concert' : function() {
      return update_backstage_pass(item)
    },
    'default' : function() {
      return update_item_base(item)
    }
  }

  return (types[item.name] || types['default'])()
}

function update_quality() {
  updated_items = []
  for (var i = 0; i < items.length; i++) {
    updated_items[i] = get_updated_item(items[i])
  }
  return updated_items
}
