describe('pingPong', function() {
  it('will count up to the number provided', function() {
    expect(pingPong(2)).to.eql([1,2]);
  });
  it('will return ping when counting numbers divisible by 3', function() {
    expect(pingPong(3)).to.eql([1,2,'ping']);
  });
  it('will return pong when counting numbers divisible by 5', function() {
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });
  it('will return pingpong when counting numbers divisible by 15', function() {
    expect(pingPong(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']);
  });
});
