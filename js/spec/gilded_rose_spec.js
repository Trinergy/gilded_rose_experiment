describe("Gilded Rose", function() {
// IS JASMINE EVEN WORKING?!
  it("should foo", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });
});

describe("Item Base", function() {
// Sell_in
  it("should decrease sell_in by 1", function() {
    items = [ new Item("foo", 1, 1) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
  });

// Quality
  it("should decrease quality by 1", function() {
    items = [ new Item("foo", 1, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should not decrease quality below 0", function() {
    items = [ new Item("foo", 1, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
});

describe("Aged Brie", function() {
// Sell_in
  it("should decrease sell_in by 1", function() {
    items = [ new Item("Aged Brie", 1, 1) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
  });

// Quality
  it("should increase quality by 1", function() {
    items = [ new Item("Aged Brie", 1, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

  it("should increase quality by 2 when sell_in is below zero", function() {
    items = [ new Item("Aged Brie", 0, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(3);
  });

  it("should increase quality up to 50", function() {
    items = [ new Item("Aged Brie", 0, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });
});

describe("Sulfuras", function() {
// Sell_in
  it("should not change sell_in", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 1, 49) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
  });

// Quality
  it("should not change quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 1, 49) ];
    update_quality();
    expect(items[0].quality).toEqual(49);
  });
});

describe("Backstage Pass", function() {
// Sell_in
  it("should decrease sell_in by 1", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 46) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
  });

// Quality
  it("should increase quality by 3 when sell_in is lesser than 6", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 46) ];
    update_quality();
    expect(items[0].quality).toEqual(49);
  });

  it("should increase quality by 2 when sell_in is lesser than 11 and greater than 5", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 46) ];
    update_quality();
    expect(items[0].quality).toEqual(48);
  });

  it("should change quality to 0 when sell_in is lesser than 0", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 49) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
});