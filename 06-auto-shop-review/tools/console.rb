require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

owner1 = CarOwner.new("Ian")
owner2 = CarOwner.new("Joe")

mechanic1 = Mechanic.new("Daniel", "Supercars")
mechanic2 = Mechanic.new("Amir", "Vintage")
mechanic3 = Mechanic.new("Paul", "Vintage")

car1 = Car.new("Ford", "Fiesta", "Vintage", owner1, mechanic2)
car2 = Car.new("Ferrari", "F40", "Vintage", owner2, mechanic3)
car3 = Car.new("Porshce", "911", "Supercars", owner1, mechanic1)





binding.pry
