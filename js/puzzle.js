var table = [
    [0,0,1],
    [1,0,0],
    [0,1,0]
  ];
  
  $('.game div div').click(function() {
    var id = ( $(this).attr('id'));
    var x = id.substr(0,1);
    var y = id.substr(1);
    
    // box around the cell
    if (x > 0) {
      var top = '#' + (x-1) + y;
      $(top).toggleClass('on');
      if ( $(top).hasClass('on') ) {
        table[x-1][y] = 1; 
      } else { table[x-1][y] = 0; }
    }
    
    if (x < 2) {
      var bottom = '#' + (parseInt(x)+1) + y;
      $(bottom).toggleClass('on');
      if ( $(bottom).hasClass('on') ) {
        table[parseInt(x)+1][y] = 1;
      } else { table[parseInt(x)+1][y] = 0; }
    }
    
    if (y > 0) {
      var left = '#' + x + (y-1);
      $(left).toggleClass('on');
      if ( $(left).hasClass('on') ) {
        table[x][y-1] = 1; 
      } else { table[x][y-1] = 0; }
    }
    
    if (y < 2) {
      var right = '#' + x + (parseInt(y)+1);
      $(right).toggleClass('on');
      if ( $(right).hasClass('on') ) {
        table[x][parseInt(y)+1] = 1;
      } else { table[x][parseInt(y)+1] = 0; }
    }
  
    
    $(this).toggleClass('on'); // change color
    if ( $(this).hasClass('on') ) {
      table[x][y] = 1; //if class on, activate cell
    } else { table[x][y] = 0; } // if not on, cell inactive 
    
  if (table[0].every(x => x == 1) && table[1].every(x => x == 1) && table[2].every(x => x == 1)) {
         setTimeout(done(), 100);
    }
  });
  
  
  function done() {
    $('.message').transition({scale: 1}, 800);
    setTimeout(function () {
        $('.game').hide('slow');
        $('.instruction').animate({opacity: 0});
    }, 200);

  }

$('.closemessage').click(function() {
    $('section#page1').css('background','none');
    $('.message').animate({opacity: 0});
    setTimeout(function () {
        $('.message, .game, .instruction').remove();
        $('.memo, .nextfile').removeClass('hidden');
        $('.memo').animate({opacity: 1});
    }, 200);
    return false;
});

var nextCount = 0;

$('.nextfile').one( "click", function() {
  $('.continue').removeClass("hidden");
  return false;
});

$('.nextfile').click(function() {
  if (nextCount == 0) {
    nextCount = 1;
    $('#memo1').transition({ y: '500px', duration: 200, rotate: '-1deg' });
    setTimeout(function () {
      $('#memo1').css( 'z-index', 0);
      $('#memo2').css( 'z-index', 1);
    }, 210);
    $('#memo1').transition({ y: '0px', rotate: '-1deg' });
    return false;
  }
  $('#memo2').transition({ y: '500px', duration: 200,  rotate: '1deg' });
  setTimeout(function () {
    $('#memo2').css( 'z-index', 0);
    $('#memo1').css( 'z-index', 1);
  }, 210);
  $('#memo2').transition({ y: '-500px', rotate: '1deg' });
  nextCount = 0;
  return false;
});

$('#home').click(function() {
  alert('Thank you for playing. You have reached one of the two endings of the first episode. This is it for now, but there will be more to come. Try again for the other ending or check back later for the next episode.');
});