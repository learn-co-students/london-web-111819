class Concert

  attr_reader :date, :band, :venue

  @@all = []
    
  def initialize(date, band, venue)
    @date = date
    @band = band
    @venue = venue
    @@all << self
  end

  def self.all
    @@all
  end

  def hometown_show?
    self.band.hometown == self.venue.city
  end

  def introduction
    "Hello #{self.venue.city}!!!!!, we are #{self.band.name} and we're from #{self.band.hometown}"
  end

end