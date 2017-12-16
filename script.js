// welcome page
$('#page1 h2').click(function() {
    $('#page1').addClass("hidden"); 
    return false;
});

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



$('.taskmanager button').click(function() {
  if ($('#task-1').hasClass("checked")) {
    $('#task-2').removeClass("hidden");
    $('#link2').removeClass("hiddentext");
    if ($('#task-2').hasClass("checked") && $('#task-1').hasClass("checked")) {
      $('#task-3').removeClass("hidden");
      $('#link3').removeClass("hiddentext");
      $('.taskmanager button').html("Done!");
      if ($('#task-1').hasClass("checked") && $('#task-2').hasClass("checked") && $('#task-3').hasClass("checked")) {
      alert('You have finished episode 0. Please check back soon for new content.')
      return false;
      }
    }
  } else {
    return false;
  }
});


$("#files .file").click(function() {
  var fileid = "#opened"+$(this).attr('id');
  $(fileid).removeClass("hidden");
});

$('#file3').one( "click", function() {
    $('img.glitch').removeClass("hidden");
    $('img.glitch').toggle("pulsate",800); 
    return false;
});

// open corresponding email
$( ".maillist table tr:not(:first-child)" ).click(function() {
    if ($(this).hasClass("unread")) {
      $(this).removeClass("unread")
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
$('.close .fa-close').click(function() {
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
    return false;
});



// Object for Messages received
var sender1 = new Object();
sender1.name = "Jupiter47";
sender1.message1 = "uh .. you actually contacted me.";
sender1.message2 = "let's forget about that. the important thing is i know what you can do and we can help each other if you join us, fight for the cause.";
sender1.message3a = "not very talkative, uh?";
sender1.message3b = "these are all important questions, and we'll get to it..";
sender1.message4 = "first can you make sure you're alone? that no one is watching us?";
sender1.message5 = "Touché. Ok, basically we are an underground group that prides itself for being off the grid. And I know that you found something about NovaCorp and that you want answers.";
sender1.message6 = "Good. So, obviously you don't want Nova to find out about you discovered, or even your new employer, right? Because what you found can only be accessed by hacking the system and you might have hacked your crime coefficient to always look clean but if they find you out it's treason.";
sender1.message7 = "I am part of UN-ABLE, do you know us?";
sender1.message8 = "Nope, we real, girl! We took out our implant because we didn't want everything we see, say or do to be recorded. Soon after we found out about the same thing that you just discovered. And now we need someone on the inside to get more info so we can convinced everyone that NovaCorp and the Government are using us.";
sender1.message9 = "You're probably the only hacker in the underground community that was actually appointed to a internship within the system, and who has reasons to fight back. You are Law Enforcement inclined, right?";
sender1.message10 = "So that means that you always wanna do what's right. You're gonna have access to files there, and you're gonna see stuff.. probably nothing classified but still things that the population doesn't know about.";
sender1.message11 = "Do you know a single person who chose to work in a different field than the one assigned to them? Why would they willingly screw over their own employer? And anyway it's not like they can't erase all your memories at the press of a button.";
sender1.message12 = "So.. What do you think?";
sender1.message13 = "I know and I wouldn't ask you to do that. This is something none of us can actually do. We need you, someone who still has the implant. We need your feed.";
sender1.message14 = "Look, we need to SEE what's going on in there, and with multiple pair of eyes we can catch things that you might miss. So I want to connect to your vision feed and watch. Hell… you have a full implant, I could easily do it without your consent.";
sender1.message15 = "It's not like I'll watch when you go to the bathroom, strictly business. Look at it this way: if you ever get caught — and I hope you really won't — you can just say that you were hacked! you never knew that I was there, watching and listening. You got used, you are innocent.";
sender1.message16 = "I knew you would come to your senses. We are gonna be great friends!";
sender1.message17 = "Partners in crime! Let me send you some files that you can look over before we start. TTYL!";


// Object for Messages sent
var sender2 = new Object();
sender2.name = "Sal";
sender2.answer1a = "Who the  fuck are you?";
sender2.answer1b = "You literally  blackmailed me dude..";
sender2.answer2a = "*do not answer*";
sender2.answer2b = "Who are you? How do you know me? Who is us? What is the cause?";
sender2.answer3 = "Oh you mean like you did?";
sender2.answer4 = "I'm listening.";
sender2.answer5 = "And everyone know what happens to traitors. What's your point?";
sender2.answer6 = "I thought it was just a rumor going around the underground web..";
sender2.answer7 = "How am I supposed to help with that? Why me anyway? It sounds like you can pretty much reach anyone you want , so …";
sender2.answer8 = "You already know that. Crime Management Unit.";
sender2.answer9 = "Are they not worried about leaks if they do that with every interns?";
sender2.answer10 = "Yeah.. You’ve got a point.";
sender2.answer11 = "I think that something fishy is going on with our implant and what they do with it. And yeah I'm intrigued by your organization but there is no way I am getting rid of my implant.";
sender2.answer12 = "Ex-fucking-cuse me?!";
sender2.answer13 = "Fuck off.. I never really have a choice with you, right? You threaten to rat me out to the authorities if I don't help you and even after I agree, you're wanna tap in my feed no matter what I feel about it.";
sender2.answer14 = "Fine.";
sender2.answer15 = "No, we won't. We are partners.";


$('.restart').click(function() {
  $('.end, .message, .answer').addClass('hidden');
  $('#code, .start, .askstart').removeClass('hidden');
});

// Fill link for answers with content from object
    $("#option1a").append(sender2.answer1a);
    $("#option1b").append(sender2.answer1b);
    $("#option2a").append(sender2.answer2a);
    $("#option2b").append(sender2.answer2b);
    $("#option3").append(sender2.answer3);
    $("#option4").append(sender2.answer4);
    $("#option5").append(sender2.answer5);
    $("#option6").append(sender2.answer6);
    $("#option7").append(sender2.answer7);
    $("#option8").append(sender2.answer8);
    $("#option9").append(sender2.answer9);
    $("#option10").append(sender2.answer10);
    $("#option11").append(sender2.answer11);
    $("#option12").append(sender2.answer12);
    $("#option13").append(sender2.answer13);
    $("#option14").append(sender2.answer14);
    $("#option15").append(sender2.answer15);
  

// SHOW MESSAGE 1
function showmessage1() {
  new TypeIt('.typeit-box1', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message1)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box1').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer1').removeClass('hidden')
                }, 500);
              
              //option A
              showoption1a();
              
              //option B
              showoption1b();
            }
  });
}

// OPTION 1A
function showoption1a() {
  $('#option1a').click(function() {
     $("#answer1 .choices").addClass("hidden");
     new TypeIt('.typeit-answer1', {
         speed: 100,
         lifeLike: true,
         autoStart: false
     })
     .type(sender2.answer1a)
     .options({
        // SHOW ANSWER TO OPTION 1A
         callback: function() {
            $('.typeit-answer1').find('.ti-cursor').addClass('hidden');
            setTimeout(function() {
              $('.typeit-box2').parent().removeClass('hidden');
              showmessage2(); 
            }, 800);
        }
    });
  });
}
                                   
// OPTION 1B
function showoption1b() {
  $('#option1b').click(function() {
                    $("#answer1 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer1', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer1b)
                    .options({
                        callback: function() {
                            $('.typeit-answer1').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box2').parent().removeClass('hidden');
                              showmessage2(); 
                            }, 800);
                        }
                    })
              });
}
                                  
// SHOW MESSAGE 2
function showmessage2() {
  new TypeIt(".typeit-box2", {
    speed: 100,
    lifeLike: true,
    autoStart: false
  })
    .pause(500)
    .type(sender1.message2)
    .options({
    callback: function() {
      //delete cursor
      $(".typeit-box2").find(".ti-cursor").addClass("hidden");
      
      //show options
      setTimeout(function() {
        $("#answer2, #answer2 .choices").removeClass("hidden")
      }, 500);
      //option A
      showoption2a();
      //option B
      showoption2b();
    }
  });
}

// OPTION 2A
function showoption2a() {
  $('#option2a').click(function() {
     $("#answer2 .choices").addClass("hidden");
     new TypeIt('.typeit-answer2', {
         speed: 100,
         lifeLike: true,
         autoStart: false
     })
     .type("...")
     .options({
        // SHOW ANSWER TO OPTION 1A
         callback: function() {
            $('.typeit-answer2').find('.ti-cursor').addClass('hidden');
            setTimeout(function() {
              $('.typeit-box3').parent().removeClass('hidden');
              showmessage3a(); 
            }, 800);
        }
    });
  });
}
                                   
// OPTION 2B
function showoption2b() {
  $("#option2b").click(function() {
    $("#answer2 .choices").addClass("hidden");
    new TypeIt(".typeit-answer2", {
      speed: 100,
      lifeLike: true,
      autoStart: false
    })
      .type(sender2.answer2b)
      .options({
      callback: function() {
        $(".typeit-answer2").find(".ti-cursor").addClass("hidden");
        setTimeout(function() {
          $(".typeit-box3").parent().removeClass("hidden");
          showmessage3b();
        }, 800);
      }
    });
  });

}

// SHOW MESSAGE 3a
function showmessage3a() {
  new TypeIt(".typeit-box3", {
    speed: 100,
    lifeLike: true,
    autoStart: false
  })
    .pause(500)
    .type(sender1.message3a)
    .options({
    callback: function() {
      //delete cursor
      $(".typeit-box3").find(".ti-cursor").addClass("hidden");
      
      setTimeout(function() {
          $(".typeit-box4").parent().removeClass("hidden");
          showmessage4();
      }, 800);
    }
  });
}

// SHOW MESSAGE 3a
function showmessage3b() {
  new TypeIt(".typeit-box3", {
    speed: 100,
    lifeLike: true,
    autoStart: false
  })
    .pause(500)
    .type(sender1.message3b)
    .options({
    callback: function() {
      //delete cursor
      $(".typeit-box3").find(".ti-cursor").addClass("hidden");
      
      setTimeout(function() {
          $(".typeit-box4").parent().removeClass("hidden");
          showmessage4();
      }, 800);
    }
  });
}

// SHOW MESSAGE 4
function showmessage4() {
  new TypeIt('.typeit-box4', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message4)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box4').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer3').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer3();
            }
  });
}

// OPTION 3
function showanswer3() {
  $('#option3').click(function() {
                    $("#answer3 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer3', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer3)
                    .options({
                        callback: function() {
                            $('.typeit-answer3').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box5').parent().removeClass('hidden');
                              showmessage5(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage5() {
  new TypeIt('.typeit-box5', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message5)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box5').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer4').removeClass('hidden')
                }, 500);
              
              //answer 4
              showanswer4();
            }
  });
}

//answer 4
function showanswer4() {
  $('#option4').click(function() {
                    $("#answer4 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer4', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer4)
                    .options({
                        callback: function() {
                            $('.typeit-answer4').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box6').parent().removeClass('hidden');
                              showmessage6(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage6() {
  new TypeIt('.typeit-box6', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message6)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box6').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer5').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer5();
            }
  });
}

// answer 5
function showanswer5() {
  $('#option5').click(function() {
                    $("#answer5 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer5', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer5)
                    .options({
                        callback: function() {
                            $('.typeit-answer5').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box7').parent().removeClass('hidden');
                              showmessage7(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage7() {
  new TypeIt('.typeit-box7', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message7)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box7').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer6').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer6();
            }
  });
}

//answer 6
function showanswer6() {
  $('#option6').click(function() {
                    $("#answer6 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer6', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer6)
                    .options({
                        callback: function() {
                            $('.typeit-answer6').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box8').parent().removeClass('hidden');
                              showmessage8(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage8() {
  new TypeIt('.typeit-box8', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message8)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box8').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer7').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer7();
            }
  });
}

//answer 7
function showanswer7() {
  $('#option7').click(function() {
                    $("#answer7 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer7', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer7)
                    .options({
                        callback: function() {
                            $('.typeit-answer7').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box9').parent().removeClass('hidden');
                              showmessage9(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage9() {
  new TypeIt('.typeit-box9', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message9)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box9').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer8').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer8();
            }
  });
}

//answer 8
function showanswer8() {
  $('#option8').click(function() {
                    $("#answer8 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer8', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer8)
                    .options({
                        callback: function() {
                            $('.typeit-answer8').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box10').parent().removeClass('hidden');
                              showmessage10(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage10() {
  new TypeIt('.typeit-box10', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message10)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box10').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer9').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer9();
            }
  });
}

// answer 9
function showanswer9() {
  $('#option9').click(function() {
                    $("#answer9 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer9', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer9)
                    .options({
                        callback: function() {
                            $('.typeit-answer9').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box11').parent().removeClass('hidden');
                              showmessage11(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage11() {
  new TypeIt('.typeit-box11', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message11)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box11').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer10').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer10();
            }
  });
}

// answer 10
function showanswer10() {
  $('#option10').click(function() {
                    $("#answer10 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer10', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer10)
                    .options({
                        callback: function() {
                            $('.typeit-answer10').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box12').parent().removeClass('hidden');
                              showmessage12(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage12() {
  new TypeIt('.typeit-box12', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message12)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box12').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer11').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer11();
            }
  });
}

// answer 11
function showanswer11() {
  $('#option11').click(function() {
                    $("#answer11 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer11', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer11)
                    .options({
                        callback: function() {
                            $('.typeit-answer11').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box13').parent().removeClass('hidden');
                              showmessage13(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage13() {
  new TypeIt('.typeit-box13', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message13)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box13').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer12').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer12();
            }
  });
}

// answer 12
function showanswer12() {
  $('#option12').click(function() {
                    $("#answer12 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer12', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer12)
                    .options({
                        callback: function() {
                            $('.typeit-answer12').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box14').parent().removeClass('hidden');
                              showmessage14(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage14() {
  new TypeIt('.typeit-box14', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message14)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box14').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer13').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer13();
            }
  });
}

// answer 13
function showanswer13() {
  $('#option13').click(function() {
                    $("#answer13 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer13', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer13)
                    .options({
                        callback: function() {
                            $('.typeit-answer13').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box15').parent().removeClass('hidden');
                              showmessage15(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage15() {
  new TypeIt('.typeit-box15', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message15)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box15').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer14').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer14();
            }
  });
}

// answer 14
function showanswer14() {
  $('#option14').click(function() {
                    $("#answer14 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer14', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer14)
                    .options({
                        callback: function() {
                            $('.typeit-answer14').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box16').parent().removeClass('hidden');
                              showmessage16(); 
                            }, 800);
                        }
                    })
              });
}


function showmessage16() {
  new TypeIt('.typeit-box16', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message16)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box16').find('.ti-cursor').addClass('hidden');
              
              //show options
                setTimeout(function() {
                  $('#answer15').removeClass('hidden')
                }, 500);
              
              //answer 3
              showanswer15();
            }
  });
}

// answer 15
function showanswer15() {
  $('#option15').click(function() {
                    $("#answer15 .choices").addClass("hidden");
                    new TypeIt('.typeit-answer15', {
                      speed: 100,
                      lifeLike: true,
                      autoStart: false
                    })
                    .type(sender2.answer15)
                    .options({
                        callback: function() {
                            $('.typeit-answer15').find('.ti-cursor').addClass('hidden');
                            setTimeout(function() {
                              $('.typeit-box17').parent().removeClass('hidden');
                              showmessage17(); 
                            }, 800);
                        }
                    })
              });
}

function showmessage17() {
  new TypeIt('.typeit-box17', {
          speed: 100,
          lifeLike: true,
          autoStart: false
        })
        .pause(500)
        .type(sender1.message17)
        .options({
        // DELETE CURSOR + REVEAL CHOICES
            callback: function() {
                $('.typeit-box17').find('.ti-cursor').addClass('hidden');
              //show end
                setTimeout(function() {
                  $(".end, .restart").removeClass("hidden");
                }, 500);   
            }
  });
}


// START THE CHAT AFTER CLICKING ON BUTTON
function startchat() {
  
  var value = $("#code").val();
  
  $('#code').on('change', function () {
    var value = $("#code").val();
  }).change();
  
  if(value != 'jpt47.rev19#drknt') {
    return false;
  }
  
  $('#code, .start, .askstart').addClass('hidden');
  $('#message1').removeClass('hidden');
  
  showmessage1();

}
                          
                          
// START THE CHAT AFTER CLICKING ON BUTTON
$('.start').click(function() {
  $('.start').addClass('hidden');
  $('#message1').removeClass('hidden');
  startchat();
});