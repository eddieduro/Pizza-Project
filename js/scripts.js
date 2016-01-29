var Pizza = function(size, topping){
	this.size = size;
	this.pepperoni = false;
	this.bacon= false;
}

Pizza.prototype.addPepperoni = function(){
	return this.pepperoni = true;
}

Pizza.prototype.addBacon = function(){
	return this.bacon = true;
}

$(document).ready(function(){
	$('form#orderPizza').submit(function(event){
		event.preventDefault();
		var sizeValue = parseInt($('#sizeSelect option:selected').val());
		var toppingValue = parseInt($('#toppingSelect option:selected').val());
		
		var size = $('#sizeSelect option:selected').text();
		var topping = $('#toppingSelect option:selected').text();
		var newPizza = new Pizza(size, topping);
		var totalCost = sizeValue + toppingValue;
		var pizzaType;

		if(topping === "Pepperoni"){
			newPizza.addPepperoni();
		} else if (topping === "Bacon") {
			newPizza.addBacon();
		}
 	$('#orderPizza').slideUp(280).dequeue().fadeOut(150);
 	$('#results').slideDown(250).dequeue().fadeIn(200);
		if(newPizza.pepperoni){
			pizzaType = "Pepperoni Pizza";
			$('#results').prepend("<p id='receipt'>You ordered a " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCost + " flat - got to love no tax in Oregon!</p>");
		} else if (newPizza.bacon){
			pizzaType = "Bacon Pizza"
			$('#results').prepend("<p id='receipt'>You ordered a " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCost + " flat - got to love no tax in Oregon!</p>");
		}
	});
});