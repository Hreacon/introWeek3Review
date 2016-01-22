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
  it('will return pingpong when given numbers divisible by 15', function() {
    expect(pingPong(30)).to.equal('pingpong');
  });
  it('will return ping even when given negative numbers divisible by 3', function() {
    expect(pingPong(-6)).to.equal('ping');
  });
  it('will handle being given numbers as strings', function() {
    expect(pingPong('4')).to.equal(4);
  });
  it('will ignore characters and use the number at the beginning of a given string', function() {
    expect(pingPong('3abc')).to.equal('ping');
  });
  it('will ignore strings that contain no numbers at the front', function() {
    expect(pingPong('hello')).to.equal('');
  });
});
