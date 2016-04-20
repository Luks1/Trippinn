module.exports = function(min2){
  var min = 1000;

  min2.forEach(function(name){

    if(name.Trips < min){

      min = name.Trips;
    }

})
//console.log(min);
return min;
};
