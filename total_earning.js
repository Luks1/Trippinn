module.exports = function(line){

var arr = [];

  var myRslts = line.map(function(line){

    answer = {
            RegistrationNumber : line.RegistrationNumber,
            Earning : line.Fare * line.Trips
          };
           arr.push(answer);

  });

    return arr;
}
