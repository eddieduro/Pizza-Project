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
	});
});