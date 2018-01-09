const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(71);
    expect(res).toBeFalsy();
  });

  it('should reject strings with only spaces', () => {
    var res = isRealString("     \n   ");
    expect(res).toBeFalsy();
  });

  it('should allow strings with non-space characters', () => {
    var res = isRealString(" Some string that contains non space characters");
    expect(res).toBeTruthy();
  });
});
