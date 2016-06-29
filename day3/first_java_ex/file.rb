# file.rb

colors_array = ["indigo", "black", "indigo", "purple", "indigo", "chartreuse", "indigo", "magenta", "chartreuse", "scarlet"]

def count_colors(color, the_array)
	color_occurances = 0


the_array.each do |color_from_array|
	if color_from_array == color
		color_occurances += 1
	end
end
color_occurances
end

puts "Testing count_colors method"

p count_colors("chartreuse", colors_array) == 2
p count_colors("indigo", colors_array) == 4
p count_colors("black", colors_array) == 1
p count_colors("pink", colors_array) == 0
