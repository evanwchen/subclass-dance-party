var BlueFlagshipDancer = function(top, left, timeBetweenSteps, dancerType) {
  Dancer.call(this, top, left, timeBetweenSteps, dancerType);
};

BlueFlagshipDancer.prototype = Object.create(Dancer.prototype);

BlueFlagshipDancer.prototype.constructor = BlueFlagshipDancer;

BlueFlagshipDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};