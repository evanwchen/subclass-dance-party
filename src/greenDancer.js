var GreenDancer = function(top, left, timeBetweenSteps, dancerType) {
  Dancer.call(this, top, left, timeBetweenSteps, dancerType);
};

GreenDancer.prototype = Object.create(Dancer.prototype);

GreenDancer.prototype.constructor = GreenDancer;

GreenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};