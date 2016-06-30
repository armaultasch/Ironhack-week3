# app.rb

class Animal
	attr_accessor :name

	def initialize(name, noise)
		@name = name
		@noise = noise
	end
	def shout
		puts "Mooo!"
	end

	def makeNoise
		puts "#{@noise}!!!"
	end

end

shadow = Animal.new("Shadow", "Ruff")

puts shadow.name
shadow.shout
shadow.makeNoise

princess = Animal.new("Princess", "Meow")
puts princess.name
princess.shout
princess.makeNoise
 
