// Write unit tests to check for the existence of the following functions:
describe("The specification for basic math", function() {

  // add()
    it("should have an add function", function() {
      expect(add).toBeDefined();
    });
    
    it("should add two integers", function() {
      expect(add(2, 5)).toBe(7);
    });
  // subtract()
    it("should have a subtract function", function() {
      expect(subtract).toBeDefined();
    });

    it("should subtract two integers", function() {
      expect(subtract(7, 5)).toBe(2);
    });

    // multiply()
    it("should have a multiply function", function() {
      expect(multiply).toBeDefined();
    });

  it("should multiply two integers", function() {
      expect(multiply(7, 5)).toBe(35);
    });

  // divide()
    it("should have a divide function", function() {
      expect(divide).toBeDefined();
    });
    it("should divide two integers", function() {
      expect(divide(6, 3)).toBe(2);
    });

   // square()
    it("should have a square function", function() {
      expect(square).toBeDefined();
    });
    it("should calcuate the square of one integer", function() {
      expect(square (5)).toBe(25);
    });

  // squareRoot()
    it("should have a squareRoot function", function() {
      expect(squareRoot).toBeDefined();
    });

  it("should calcuate the squareRoot on one integer", function() {
      expect(squareRoot(49)).toBe(7);
   
  });

})


// Write unit tests that will verify the expected output of each of those functions.