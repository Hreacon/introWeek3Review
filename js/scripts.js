function pingPong(number) {
  var output = parseInt(number);
  if( output%15 === 0 )
    output = 'pingpong';
  else if( output%3 === 0 )
    output = 'ping';
  else if( output%5 === 0 )
    output = 'pong';
  return output;
}
