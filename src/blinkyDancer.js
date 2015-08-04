var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
 // this.time = timeBetweenSteps;
 // this.step();
  this.setPosition(top, left);
}
BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.step = function(){
    this.$node.toggle();
    Dancer.prototype.step.call(this);
    // setTimeout(function(){console.log('blinky'); currThis.step();}, currTime);
  };

var createBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);
  return blinkyDancer;
}



// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

    // call the old version of step at the beginning of any call to this new version of step

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
