describe('BogoSort', () => {
  it('Should accept an array', () => {
    expect(BogoSortR, []).not.toThrow();
  });

  it('should sort an array of numbers'), () => {
    const unsortedArray = [9, 5, 2, 8, 30];
    const sortedArray = [2, 5, 8, 9, 30];
    const result = BogoSortR(unsortedArray);
    expect(result).toEqual(sortedArray);
  }
});
