var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Gigi";
    var text = "Just testing";
    var message = generateMessage(from, text);

    expect(typeof(message.createdAt)).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});
