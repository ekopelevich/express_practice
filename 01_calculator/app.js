var express = require('express'),
    url = require('url'),
    app = express(),
    operator,
    a,
    b,
    total;

app.listen(3000, function() {
  console.log( 'Starting a server on localhost: 3000');
});

app.set('view engine', 'ejs');

app.get('/:operator/:a/:b', function( request, response ){
  console.log( request.params.operator );

  switch ( request.params.operator ) {
    case 'add':
      operator = '+';
      break;
    case 'sub':
      operator = '-';
      break;
    case 'mult':
      operator = '*';
      break;
    case 'div':
      operator = '/';
      break;
    default:
  }

  //I know eval is bad
  total = eval(request.params.a + operator + request.params.b);

  response.render( 'index', {total: total});

});


// app.get('/add/9/3', function( request, response ){
//   console.log(request.params);
//   response.send('12');
// });
//
// app.get('/sub/9/3', function( request, response ){
//   response.send('6');
// });
//
// app.get('/mult/9/3', function( request, response ){
//   response.send('27');
// });
//
// app.get('/div/9/3', function( request, response ){
//   response.send('3');
// });
