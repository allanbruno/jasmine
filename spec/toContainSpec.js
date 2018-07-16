describe("Teste do toContain", function() {
	it("Deve demonstrar o uso do toContain", function() {
		var texto = "Meu nome é Allan";
		var frutas = ["laranja", "banana", "pera"];

		expect(texto).toContain("Allan");
		expect(texto).not.toContain("allan");

		expect(frutas).toContain("laranja");
		expect(frutas).not.toContain("uva");
	});
});