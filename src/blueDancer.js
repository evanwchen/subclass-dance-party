var BlueDancer = function(top, left, timeBetweenSteps, dancerType) {
  Dancer.call(this, top, left, timeBetweenSteps, dancerType);
};

BlueDancer.prototype = Object.create(Dancer.prototype);

BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};