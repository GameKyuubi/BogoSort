describe('BogoSort', () => {
  it('Should accept an array', () => {
    expect(() => { BogoSortR([]) }).not.toThrow();
  });

  it('should sort an array of numbers', () => {
    const unsortedArray = [9, 5, 2, 8, 30];
    const sortedArray = [2, 5, 8, 9, 30];
    const result = BogoSortR(unsortedArray);
    expect(result).toEqual(sortedArray);
  });

  it('should work with negative numbers', () => {
    const unsortedArray = [-9, 5, 2, 8, -30];
    const sortedArray = [-30, -9, 2, 5, 8];
    const result = BogoSortR(unsortedArray);
    expect(result).toEqual(sortedArray);
  });

  it('should return an array', () => {
    const input = [];
    const output = BogoSortR(input);
    expect(output instanceof Array).toBe(true);
  });

  describe('Returned array', () => {
    it('should be same length as input', () => {
      const input = [1, 1, 3, 6, 0];
      const output = BogoSortR(input);
      expect(output.length).toEqual(input.length);
    });
  });
});
