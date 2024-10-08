const {
  convertToCelsius,
  convertToFahrenheit,
} = require('./tempConversion-solution');

describe('convertToCelsius', () => {
  test.skip('works', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  tes('works', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test('rounds to 1 decimal', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test('works with negatives', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
  });
});
