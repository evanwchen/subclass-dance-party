var Dancer = function(top, left, timeBetweenSteps, dancerType) {
  this.$node = $('<span class='+dancerType+'></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top,left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};