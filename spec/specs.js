describe('pingPong', function() {
  it('will return the number provided', function() {
    expect(pingPong(1)).to.equal(1);
  });
  it('will return ping when given numbers divisible by 3', function() {
    expect(pingPong(6)).to.equal('ping');
  });
  it('will return pong when given numbers divisible by 5', function() {
    expect(pingPong(10)).to.equal('pong');
  });

});
