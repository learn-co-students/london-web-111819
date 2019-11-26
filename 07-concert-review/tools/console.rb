require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

band1 = Band.new("The Killers", "Las Vegas")
band2 = Band.new("The Strokes", "New York")
band3 = Band.new("The Neighbourhood", "London")

venue1 = Venue.new("Madison Square Gardens", "New York")
venue2 = Venue.new("MGM Grand", "Las Vegas")
venue3 = Venue.new("Wembley", "London")

concert1 = Concert.new("12th January", band1, venue1)
concert2 = Concert.new("19th January", band1, venue2)
concert3 = Concert.new("12th February", band2, venue1)
concert4 = Concert.new("7th March", band3, venue3)
concert5 = Concert.new("9th July", band1, venue1)

binding.pry
"start"



# Pry.start
