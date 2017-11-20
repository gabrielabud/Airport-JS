describe('Airport', function() {
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  describe('when a plane lands', function() {
    it('is in the airport', function() {
      airport.land("plane1");
      expect(airport.planes.length).toEqual(1);
    });

    it('it can take off', function() {
      airport.land("plane1");
      airport.takeOff("plane1");
      expect(airport.planes.length).toEqual(0);
    });
  });


});
