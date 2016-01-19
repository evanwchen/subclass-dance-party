$(document).ready(function() {
  window.dancers = [];

  $(".addTealFlagshipDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("TealFlagshipDancer");

    var dancerMakerFunction = window[TealFlagshipDancer];

    var tealFlagshipDancer = new TealFlagshipDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      150,
      'tealFlagshipDancer'
    );

    window.dancers.push(tealFlagshipDancer);
    $('body').append(tealFlagshipDancer.$node);
  });

  $(".addBlueFlagshipDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("BlueFlagshipDancer");

    var dancerMakerFunction = window[BlueFlagshipDancer];

    var blueFlagshipDancer = new BlueFlagshipDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      150,
      'blueFlagshipDancer'
    );

    window.dancers.push(blueFlagshipDancer);
    $('body').append(blueFlagshipDancer.$node);
  });

  $(".addBosconianDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("BosconianDancer");

    var dancerMakerFunction = window[BosconianDancer];

    var bosconianDancer = new BosconianDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      150,
      'bosconianDancer'
    );

    window.dancers.push(bosconianDancer);
    $('body').append(bosconianDancer.$node);
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
      if (window.dancers[i].$node[0]['outerHTML'] == $(this)[0]['outerHTML']) {
        index = i;
        break;
      }
    }
    window.dancers.splice(index,1);

    $(this).remove();
  });  

  // $(".nightmareMode").on("click", function(event) {
  //   setTimeout(function() {
  //     var dancerMakerFunctionName = $(this).data("BlueFlagshipDancer");

  //     var dancerMakerFunction = window[BlueFlagshipDancer];

  //     var blueFlagshipDancer = new BlueFlagshipDancer(
  //       $("body").height() * Math.random(),
  //       $("body").width() * Math.random(),
  //       150,
  //       'blueFlagshipDancer'
  //     );

  //     window.dancers.push(blueFlagshipDancer);
  //     $('body').append(blueFlagshipDancer.$node);
  //   }, 5);
  // });


});

