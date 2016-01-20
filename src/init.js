$(document).ready(function() {
  window.dancers = [];

  $(document).on("mousemove", function(event) {
    if (event.pageY-20 < 32) {
      $(".pacman").css({left:(event.pageX-20), top:(32)});      
    } else {
      $(".pacman").css({left:(event.pageX-20), top:(event.pageY-20)});
      $('.game').css({
        'cursor':'none'
      });
    }
  });

  $(".addDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerType;
    if (dancerMakerFunctionName === "TealFlagshipDancer") {
      dancerType = 'tealFlagshipDancer';
    } else if (dancerMakerFunctionName === "BlueFlagshipDancer") {
      dancerType = 'blueFlagshipDancer';
    } else if (dancerMakerFunctionName === "BosconianDancer") {
      dancerType = 'bosconianDancer';
    }

    var dancer = new window[dancerMakerFunctionName](
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      150,
      dancerType
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineUp").on("click", function(event) {
    var rowHeight = $("body").height() / (window.dancers.length + 1) * 2;
    var height = rowHeight / 2;
    for (var i = 0; i < window.dancers.length / 2; i++) {
      window.dancers[i].setPosition(height, 5);
      $(window.dancers[i].$node).addClass("left");
      height += rowHeight;
    }
    height = rowHeight / 2;
    for (i = Math.ceil(window.dancers.length / 2); i < window.dancers.length; i++) {
      window.dancers[i].setPosition(height, $("body").width() - 45);
      $(window.dancers[i].$node).addClass("right");
      height += rowHeight;
    }
  });

  $(document).on("mouseover", ".dancer", function(event) {
    var index = -1;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node[0].outerHTML == $(this)[0].outerHTML) {
        index = i;
        break;
      }
    }
    window.dancers.splice(index,1);

    $(this).remove();
  });  

  $(".nightmareMode").on("click", function(event) {
    if ($(this).text() === 'Turn Nightmare Mode On') {
      var start = window.setInterval(function() {
        var dancer = new TealFlagshipDancer(
          $("body").height() * Math.random(),
          $("body").width() * Math.random(),
          150,
          'tealFlagshipDancer'
        );

        window.dancers.push(dancer);
        $('body').append(dancer.$node);
      }, 1000);
    } else {
      window.clearInterval(start);
    }

    var text = $(this).text() === 'Turn Nightmare Mode On' ? 'Turn Nightmare Mode Off' : 'Turn Nightmare Mode On';
    $(this).text(text);
  });
});