var TealFlagshipDancer = function(top, left, timeBetweenSteps, dancerType) {
  Dancer.call(this, top, left, timeBetweenSteps, dancerType);
};

TealFlagshipDancer.prototype = Object.create(Dancer.prototype);

TealFlagshipDancer.prototype.constructor = TealFlagshipDancer;

TealFlagshipDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};