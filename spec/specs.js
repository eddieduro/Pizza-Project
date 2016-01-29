describe('Pizza', function(){
	it('will create a new Pizza based on give properties', function(){
		var testPizza = new Pizza(10);
		expect(testPizza.size).to.equal(10);
	});

	it('will add the addTopping method to the pizza', function(){
		var testPizza = new Pizza(10);
		expect(testPizza.addTopping).to.equal("pepperoni");
	});
});