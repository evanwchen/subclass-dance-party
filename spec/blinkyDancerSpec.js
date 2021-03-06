describe("tealFlagshipDancer", function() {

  var tealFlagshipDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tealFlagshipDancer = new TealFlagshipDancer(10, 20, timeBetweenSteps,"tealDancer");
  });

  it("should have a jQuery $node object", function() {
    expect(tealFlagshipDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it("should have a 'tealDancerClass dancer' class on the $node object", function() {
    expect(tealFlagshipDancer.$node[0].classList.contains('tealDancer')).to.be.true;
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(tealFlagshipDancer.$node, 'toggle');
    tealFlagshipDancer.step();
    expect(tealFlagshipDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(tealFlagshipDancer, "step");
      expect(tealFlagshipDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tealFlagshipDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tealFlagshipDancer.step.callCount).to.be.equal(2);
    });
  });
});
