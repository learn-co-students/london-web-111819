class CarOwner

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def cars
    Car.all.select{|car| car.owner == self }
  end

  def mechanics
    self.cars.map{|car| car.mechanic }.uniq
  end

  def self.average_cars
    Car.all.length.to_f / self.all.length
  end

end
