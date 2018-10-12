const median = require('./index.js');
// put your tests here
test('test median: same size', () => {
    expect(median([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual(5);
    expect(median([1, 2, 3, 8, 9], [4, 5, 6, 7, 10])).toEqual(5);
    expect(median([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])).toEqual(16);
    expect(median([1, 2, 8, 9, 10], [4, 5, 8, 11, 12])).toEqual(8);
});

test('test median: different size', () => {
    expect(median([2, 3, 4], [6, 7, 8, 9, 10])).toEqual(6);
    expect(median([1, 2, 3], [4, 5, 6, 7, 10])).toEqual(4);
    expect(median([1], [2, 3])).toEqual(2);
});