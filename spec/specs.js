describe('Pizza', function(){
	it('will create a new Pizza based on give properties', function(){
		var testPizza = new Pizza(10);
		expect(testPizza.size).to.equal(10);
	});

	it('will add the addPepperoni method to the pizza', function(){
		var testPizza = new Pizza(10);
		expect(testPizza.addPepperoni()).to.equal(true);
	});

	it('will add the addBacon method to the pizza', function(){
		var testPizza = new Pizza(10);
		expect(testPizza.addBacon()).to.equal(true);
	});

	
});