const expect = require('expect');
const {isRealString} = require('./validation');

describe('string validation' , () => {
  it('should reject non-string values', () => {
    var res = 123;
    expect(isRealString(res)).toBe(false);
  }); 

  it('should reject strings with only spaces', () => {
    var res = '   ';
    expect(isRealString(res)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = ' Test string ';
    expect(isRealString(res)).toBe(true);
  });
});