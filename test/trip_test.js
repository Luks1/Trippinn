var total_earning = require('../total_earning')
var earning = require('../earning');
var names = require('../names');
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

var reg = trip2(capeTownTaxis);
  assert.equal(trip2(capeTownTaxis,"CA 234 567"), reg)
})
it('it should give me the routine names for "CA 345 678"', function(){
       var results = names(capeTownTaxis, "CA 345 678");
        assert.deepEqual(results, ["Cape Town - Langa","Cape Town - Cape Town"]);

});

it('it should give me the total earning for "CA 234 567"', function(){
  var results = earning(capeTownTaxis, "CA 234 567");
  assert.equal(results, 132);
})
it('it should give me the total earning for each taxi', function(){

  //var results = total_earning(capeTownTaxis);
  assert.deepEqual(total_earning(capeTownTaxis), {"CA 123 456": 249,"CA 234 567": 132,"CA 345 678": 234});


});

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

});


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
});

it('it should tell me how many trips did "ND 234 567" make', function(){

var reg = trip2(durbanTaxis);
  assert.equal(trip2(durbanTaxis,"ND 234 567"), reg)
});

it('it should give me the routine names for "ND 345 678"', function(){
       var results = names(durbanTaxis, "ND 345 678");
        assert.deepEqual(results, ["Durban - Umbilo","Durban - University of KZN","Durban - Umlazi Station"]);

});


it('it should give me the total earning for "ND 234 567"', function(){
  var results = earning(durbanTaxis, "ND 234 567");
  assert.equal(results, 387);
});

it('it should give me the total earning for each taxi', function(){
  //var results = total_earning(durbanTaxis);
  assert.deepEqual(total_earning( durbanTaxis),{"ND 123 456":218,"ND 234 567":387,"ND 345 678":518});

});
});
