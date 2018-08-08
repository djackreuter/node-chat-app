const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {      
    let from = 'Admin';
    let text = 'Some test text';
    let message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('Generate location message', () => {
  it('should generate correct location object', () => {
    let from = 'Admin';
    let lat = 1;
    let lng = 1;
    let location = generateLocationMessage(from, lat, lng);
    expect(location.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    expect(typeof location.createdAt).toBe('number');
  });
});