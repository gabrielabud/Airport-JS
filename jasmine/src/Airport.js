var Airport = function() {
  this.planes = [];
};

Airport.prototype.land = function (plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1)
};
