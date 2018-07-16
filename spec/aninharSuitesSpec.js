describe("Suíte externa", function() {
	var contadorExterno = 0;

	beforeEach(function() {
		contadorExterno++;
	});

	it("Deve conter 1 para contador externo", function() {
		expect(contadorExterno).toEqual(1);
	});

	describe("Suíte interna", function() {
		var contadorInterno = 0;

		beforeEach(function() {
			contadorInterno++;
		});

		it("Deve validar o valor dos contadores", function() {
			expect(contadorInterno).toEqual(1);
			expect(contadorExterno).toEqual(2);
		});
	});
});