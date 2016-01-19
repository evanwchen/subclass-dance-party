$(document).ready(function() {
  window.dancers = [];

  $(".addBlinkyDancerButton").on("click", function(event) {
    var dancerMakerFunctionName = $(this).data("BlinkyDancer");

    var dancerMakerFunction = window[BlinkyDancer];

    var blinkyDancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      5,
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
      5,
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
      5,
      'greenDancer'
    );

    window.dancers.push(greenDancer);
    $('body').append(greenDancer.$node);
  });

  $(".lineUp").on("click", function(event) {
    var rowHeight = $("body").height() / window.dancers.length;
    var height = rowHeight / 2;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(height, 5);
      height += rowHeight;
    }
  });

  $(document).on("mouseover", ".dancer", function(event) {
    // remove from window.dancers
    window.dancers.splice(window.dancers.indexOf($(this)),1);

    // remove node from $('body')
    $(this).remove();
  });  


});

