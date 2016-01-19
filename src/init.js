$(document).ready(function() {
  window.dancers = [];

  $(".addBlinkyDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("BlinkyDancer");

    var dancerMakerFunction = window[BlinkyDancer];

    var blinkyDancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      //Math.random() * 1000,
      1,
      'blinkyDancer'
    );

    window.dancers.push(blinkyDancer);
    $('body').append(blinkyDancer.$node);
  });

  $(".addBlueDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("BlueDancer");

    var dancerMakerFunction = window[BlueDancer];

    var blueDancer = new BlueDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      //Math.random() * 1000,
      1,
      'blueDancer'
    );

    window.dancers.push(blueDancer);
    $('body').append(blueDancer.$node);
  });

  $(".addGreenDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("GreenDancer");

    var dancerMakerFunction = window[GreenDancer];

    var greenDancer = new GreenDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      //Math.random() * 1000,
      1,
      'greenDancer'
    );

    window.dancers.push(greenDancer);
    $('body').append(greenDancer.$node);
  });

  $(".lineUp").on("click", function(event) {
    // set a var of height = $("body").height() / array.length
    var rowHeight = $("body").height() / window.dancers.length;
    var height = rowHeight / 2;
    // loop through each value in window.dancers
    for (var i = 0; i < window.dancers.length; i++) {
      // .setPosition method with a new top (height) and left (5px) arguments
      window.dancers[i].setPosition(height, 5);
      // increase height by height
      height += rowHeight;
    }
  });


});

