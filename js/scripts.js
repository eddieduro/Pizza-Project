var Pizza = function(size, topping){
	this.size = size;
	this.pepperoni = false;
	this.bacon = false;
	this.delivery = false;
}

Pizza.prototype.addPepperoni = function(){
	return this.pepperoni = true;
}

Pizza.prototype.addBacon = function(){
	return this.bacon = true;
}
Pizza.prototype.addDelivery = function(){
	return this.delivery = true;
}


$(document).ready(function(){
	$('form#orderPizza').submit(function(event){
		event.preventDefault();
		var sizeValue = parseInt($('#sizeSelect option:selected').val());
		var toppingValue = parseInt($('#toppingSelect option:selected').val());
		var deliveryValue = parseInt($('input[name=delivery]:checked').val());

		var size = $('#sizeSelect option:selected').text();
		var topping = $('#toppingSelect option:selected').text();
		var delivery = $('input[name=delivery]:checked').val();

		var newPizza = new Pizza(size, topping);
		var totalCost = sizeValue + toppingValue;
		var totalCostDelivery = sizeValue + toppingValue + deliveryValue;
		var pizzaType;
		var orderCount = 0;
		if(topping === "Pepperoni"){
			newPizza.addPepperoni();
		} else if (topping === "Bacon") {
			newPizza.addBacon();
		}

		if(delivery === "Delivery"){
			newPizza.addDelivery();
		}

	$('#pizzaBorder, h3, hr').slideUp(280).dequeue().fadeOut(150);
 	$('#orderPizza').slideUp(280).dequeue().fadeOut(150);

 	$('#results').slideUp(250).dequeue().fadeIn(200);
 		//if pickup option has been checked//
		if(newPizza.pepperoni && !delivery){
			orderCount += 1;
			pizzaType = "Pepperoni Pizza";
			$('#results').prepend("<h4 class='text-center'>Order Summary</h4><hr id='hr-receipt'><br/><p id='receipt' class='text-center'>You ordered " + orderCount + ", " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCost + " flat - got to love no tax in Oregon! <br/>Our location is listed below.</p>");
			$('.hideme').fadeIn(200);
			$('#map').toggle();
		} else if (newPizza.bacon && !delivery){
			orderCount += 1;
			pizzaType = "Bacon Pizza"
			$('#results').prepend("<h4 class='text-center'>Order Summary</h4><hr id='hr-receipt'><br/><p id='receipt' class='text-center'>You ordered " + orderCount + ", " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCost + " flat - got to love no tax in Oregon! <br/> Our location is listed below.</p>");
			$('.hideme').fadeIn(200);
			$('#map').toggle();
		// delivery option has been check below//
		} else if(newPizza.pepperoni && delivery){
			orderCount += 1;
			pizzaType = "Pepperoni Pizza";
			$('#results').prepend("<h4 class='text-center'>Order Summary</h4><hr id='hr-receipt'><br/><p id='receipt' class='text-center'>You ordered " + orderCount + ", " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCostDelivery +"( $" + deliveryValue +" fee has been added for delivery)" + " flat!</p>");

		} else if (newPizza.bacon && delivery){
			orderCount += 1;
			pizzaType = "Bacon Pizza"
			$('#results').prepend("<h4 class='text-center'>Order Summary</h4><hr id='hr-receipt'><br/><p id='receipt' class='text-center'>You ordered " + orderCount + ", " + size + " " + pizzaType +".</p><br/>");
			$('#receipt').append('<p>Your total comes out to $' + totalCostDelivery +"( $" + deliveryValue +" fee has been added for delivery)" + " flat!</p>");
		}
		$('.btn-refresh').show();
	});

	$('.btn-refresh').click(function(){
		$('.hideme').fadeOut(100);
		$('#map').toggle();
		$('#pizzaBorder, h3, hr').slideDown(250).dequeue().fadeIn(250);
		$('#orderPizza').slideDown(250).dequeue().fadeIn(250);
		$('#results').slideDown(250).dequeue().fadeOut(200);
		$('.btn-refresh').hide();
	});
});