
# Items END_DAY

# Brie cheese quality increases (max 50)

# Backstage passes quality increases 
  #cares about sell_in date
  #once the sell_in date is 0, itts quality drops to 0

# Ragnaros stays 80 at all times

# All items sell_in -1

class GildedRose

  def initialize(items)
    @items = items
  end

  def update_quality()
    @items.each do |item|
      case item.name
      when 'Aged Brie'
        target = AgedBrie.new(item)
      when 'Backstage passes to a TAFKAL80ETC concert'
        target = BackstagePass.new(item)
      when 'Sulfuras, Hand of Ragnaros'
        target = Sulfuras.new(item)
      when 'Conjured Mana Cake'
        target = ManaCake.new(item)
      else
        target = item
      end
      target.update
    end
  end

  # when i tried to reassign the array element to a new object, it would not pass the test. it is because the test expects you to manipulate the referenced variable. reassigning it will not change the referenced variable. with map! it also only replaces, not actualy manipulation of passed argument by calling associated methods. is there another way of doing this? i dont really like wrapping stuff
  # Example item = Item.new(x) will fail tests but item.method works fine
end
#       if item.name != "Aged Brie" and item.name != "Backstage passes to a TAFKAL80ETC concert"
#         if item.quality > 0
#           if item.name != "Sulfuras, Hand of Ragnaros"
#             item.quality = item.quality - 1
#           end
#         end
#       else
#         if item.quality < 50
#           item.quality = item.quality + 1
#           if item.name == "Backstage passes to a TAFKAL80ETC concert"
#             if item.sell_in < 11
#               if item.quality < 50
#                 item.quality = item.quality + 1
#               end
#             end
#             if item.sell_in < 6
#               if item.quality < 50
#                 item.quality = item.quality + 1
#               end
#             end
#           end
#         end
#       end
#       if item.name != "Sulfuras, Hand of Ragnaros"
#         item.sell_in = item.sell_in - 1
#       end
#       if item.sell_in < 0
#         if item.name != "Aged Brie"
#           if item.name != "Backstage passes to a TAFKAL80ETC concert"
#             if item.quality > 0
#               if item.name != "Sulfuras, Hand of Ragnaros"
#                 item.quality = item.quality - 1
#               end
#             end
#           else
#             item.quality = item.quality - item.quality
#           end
#         else
#           if item.quality < 50
#             item.quality = item.quality + 1
#           end
#         end
#       end
#     end
#   end
# end

class Item
  attr_accessor :name, :sell_in, :quality

  def initialize(name, sell_in, quality)
    @name = name
    @sell_in = sell_in
    @quality = quality
  end

  def to_s()
    "#{@name}, #{@sell_in}, #{@quality}"
  end

  def update
    update_sell_in
    update_quality
  end

  def update_sell_in
    @sell_in -= 1
  end

  def update_quality
    if @sell_in < 0
      @quality -= 2 unless @quality <= 0
    else
      @quality -= 1 unless @quality <= 0
    end
  end

end

class AgedBrie < Item
  attr_accessor :item

  def initialize(item)
    @item = item
  end

  def update_sell_in
    item.sell_in -= 1
  end

  def update_quality
    if item.sell_in < 0
      item.quality += 2 if item.quality < 50
    else
      item.quality += 1 if item.quality < 50
    end
  end

end

class BackstagePass < Item
  attr_accessor :item

  def initialize(item)
    @item = item
  end

  def update_sell_in
    item.sell_in -= 1
  end

  def update_quality
    if item.sell_in < 0
      item.quality = 0
    elsif item.sell_in < 5
      item.quality += 3
    elsif item.sell_in.between?(5,9)
      item.quality += 2
    else
      item.quality += 1
    end

    if item.quality > 50
      item.quality = 50
    end
  end

end

class Sulfuras < Item
  attr_accessor :item

  def initialize(item)
    @item = item
  end

  def update
  end
end

class ManaCake < Item
  attr_accessor :item

  def initialize(item)
    @item = item
  end

  def update_sell_in
    item.sell_in -= 1
  end

  def update_quality
    if item.sell_in < 2
      item.quality -= 2 unless item.quality <= 0
    else
      item.quality -= 1 unless item.quality <= 0
    end
  end
end
