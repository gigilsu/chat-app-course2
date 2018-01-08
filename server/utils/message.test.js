var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Gigi";
    var text = "Just testing";
    var message = generateMessage(from, text);

    expect(typeof(message.createdAt)).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Dev';
    var latitude = 14;
    var longitude = 20;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof(message.createdAt)).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});
