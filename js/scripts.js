function pingPong(number) {
  var output = parseInt(number);
  if( isNaN(output) )
    output = '';
  else if( output%15 === 0 )
    output = 'pingpong';
  else if( output%3 === 0 )
    output = 'ping';
  else if( output%5 === 0 )
    output = 'pong';
  return output;
}
