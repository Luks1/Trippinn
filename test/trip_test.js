var trip2 = require('../trip2');
var records = require('../records');
var minimum = require('../minimum');
var trip = require('../trip');
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

it('it should give me all the reacords of "CA 123 456"', function(){
  var recp =

    [{
        "RegistrationNumber": "CA 123 456",
        "Route": "Cape Town - Bellville",
        "Fare": 13,
        "Trips": 9
      },

      {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  }];


  assert.deepEqual(records(capeTownTaxis,"CA 123 456"), recp);
});

it('it should tell me how many trips did "CA 234 567" make', function(){
  var results = trip2(capeTownTaxis);
  assert.equal(results, 11)
})


});


var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];

describe('A trip function', function(){

    it('it should give me the total of all trips of taxis', function(){

      var results = trip(durbanTaxis);
        assert.equal(results,117);
});

it('it should give me the minimum number of trip on taxis', function(){
       var results = minimum(durbanTaxis);
        assert.equal(results,9);

})


it('it should give me all the reacords of "ND 123 456"', function(){
  var recp =
    [{
        "RegistrationNumber": "ND 123 456",
        "Route": "Durban - University of KZN",
        "Fare": 7,
        "Trips": 14
      },
      {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  }];

  assert.deepEqual(records(durbanTaxis,"ND 123 456"), recp);
})

});
