var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('should genrate correct message opbject',()=>{
   var from = 'mayur';
   var text = 'some message';
   var message = generateMessage(from,text);
   expect(message.CreatedAt).toBeA('number');
   expect(message).toInclude({from,text});
  });
});
