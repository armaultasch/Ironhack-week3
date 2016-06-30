# app.rb

class Animal
	attr_accessor :name

	def initialize(name, noise)
		@name = name
		@noise = noise
	end

end

shadow = Animal.new("Shadow", "Ruff")

puts shadow.name
 
 puts "------------"