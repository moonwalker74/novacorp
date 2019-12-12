// draggable windows
$( ".window" ).draggable({
  stack: ".window"
});

// resizeable windows
$( "#window2" ).resizable({
  minWidth: 600,
  minHeight: 300
});


//task manager
$('#task-1').click(function() {
  if ($(this).hasClass("checked")) {
      $(this).removeClass("checked");
    return false;
    } else {
      $(this).addClass("checked");
      return false;
    }
});

$('#task-2').click(function() {
  if ($(this).hasClass("checked")) {
      $(this).removeClass("checked");
    return false;
    } else {
      $(this).addClass("checked");
      return false;
    }
});

$('#task-3').click(function() {
  if ($(this).hasClass("checked")) {
      $(this).removeClass("checked");
    return false;
    } else {
      $(this).addClass("checked");
      return false;
    }
});

// shortcut in email to open chat
$('.opensesame').click(function() {
  $('#window3').removeClass("hidden");
  // Create a dummy input to copy the string array inside it
  var dummy = document.createElement("input");

  // Add it to the document
  document.body.appendChild(dummy);

  // Set its ID
  dummy.setAttribute("id", "dummy_id");

  // Output the array into it
  document.getElementById("dummy_id").value= $('.opensesame').text();

  // Select it
  dummy.select();

  // Copy its contents
  document.execCommand("copy");

  // Remove it as its not needed anymore
  document.body.removeChild(dummy);

  alert('Username copied to clipboard.')
});

// open corresponding files
$("#files .file").click(function() {
  var fileid = "#opened"+$(this).attr('id');
  $(fileid).removeClass("hidden");
});

// glitch
$('#file3').one( "click", function() {
    $('img.glitch').removeClass("hidden");
    $('img.glitch').toggle("pulsate",250); 
    return false;
});

$('#file5').one( "click", function() {
  $('#file6').parent().removeClass("hidden").css('z-index', '0');
  return false;
});

// open corresponding email
$( ".maillist table tr:not(:first-child)" ).click(function() {
    if ($(this).hasClass("unread")) {
      $(this).find("i.fa.fa-envelope").removeClass("fa-envelope").addClass("fa-envelope-open")
      $(this).removeClass("unread");
    }
      var mailid = $(this).attr('id');
      var contentid = "#content"+mailid.substr(-1);
    if ($(contentid).hasClass("hidden")) {
      $(".email").removeClass("visible").addClass("hidden");
      
      $(contentid).removeClass("hidden").addClass("visible");
      return false;
    }
});


// close windows when clicking on 'x'
$('.close .fa-times').click(function() {
    $(this).parent().parent().parent().addClass("hidden");
    var windowid = $(this).parent().parent().parent().attr('id');
  if(windowid.slice(0,-1) != 'window') {
      return false;
     };
    var linkid = "a#link"+windowid.substr(-1);
    $(linkid).removeClass("hiddentext");
    return false;
});

// add link to open closed windows
$('.open').click(function() {
    $(this).addClass("hiddentext");
    var windowid = "#window"+$(this).attr('id').substr(-1);
    $(windowid).removeClass("hidden");
    return false;
});

// close welcome window
$('.closewelcome').click(function() {
    $('.tempbg').addClass("hidden");
    $('html').animate({backgroundColor: 'white'}, 800);
    return false;
});

// make prologue appear when clicking on next
$('.prologue .links').click(function() {
  if ($(this).attr('id') == 'clear') {
    $('.part1').remove();
    $('.part2').fadeIn(2000).removeClass('hidden');
    return false
  }
  $(this).nextAll(':lt(2)').fadeIn(2000).removeClass("hidden");
  $(this).remove();
  return false;
});

// START THE CHAT AFTER CLICKING ON BUTTON
function startchat() {
  
  var value = $("#code").val();
  
  $('#code').on('change', function () {
    var value = $("#code").val();
  }).change();
  
  if(value != 'jpt47.rev19#drknt') {
    $('.error').removeClass('hidden');
    return false;
  }
  
  $('#code, .start, .askstart, .error').addClass('hidden');
  $('iframe').removeClass('hidden');

}
                          
                          
// START THE CHAT AFTER CLICKING ON BUTTON
$('.start').click(function() {
  startchat();
});


$('.closemessage').click(function() {
  $('.message').animate({opacity: 0});
  setTimeout(function () {
    $('.message').remove();
  }, 200);
  $('.section1').css('display', 'block');
  $('.section1').animate({opacity: 1});
  return false;
});

$('#next').click(function() {
  $('.section1').remove();
  $('.section2').fadeIn(2000).removeClass('hidden');
  return false
});

$('#home').click(function() {
  alert('Thank you for playing. You have reached one of the two endings of the first episode. Try again for the other ending or check back later for the next episode.');
});