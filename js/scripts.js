function pingPong(number) {
  var output = parseInt(number);
  if(number%15 === 0)
    output = 'pingpong';
  else if(number%3 === 0)
    output = 'ping';
  else if( number%5 === 0 )
    output = 'pong';
  return output;
}
