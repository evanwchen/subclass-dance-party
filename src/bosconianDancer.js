var BosconianDancer = function(top, left, timeBetweenSteps, dancerType) {
  Dancer.call(this, top, left, timeBetweenSteps, dancerType);
};

BosconianDancer.prototype = Object.create(Dancer.prototype);

BosconianDancer.prototype.constructor = BosconianDancer;

BosconianDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};