
var minimum = require('./minimum');
var trip = require('./trip');
var assert = require('assert');


var capeTownTaxis = [
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  },
  {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
  }
];



describe('A trip function', function(){

    it('it should give me the total of all trips of taxis', function(){

      var results = trip(capeTownTaxis);
        assert.equal(results,54);
});

it('it should give me the minimum number of trip on taxis', function(){
       var results = minimum(capeTownTaxis);
        assert.equal(results,9);

})

});
