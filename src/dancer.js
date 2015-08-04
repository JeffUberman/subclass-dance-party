var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.time = timeBetweenSteps;
  this.setPosition(top, left);
};

BlinkyDancer.prototype = new Dancer();

var oldStep = BlinkyDancer.prototype.step;

BlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  Dancer.prototype.step.call(this);
};

createBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);
  return blinkyDancer;
};

//Creates and returns a new dancer object that can step

  // use jQuery to create an HTML <span> tag
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
