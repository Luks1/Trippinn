module.exports = function(line){
  var total = 0;
  line.forEach(function(list){
    total+= list.Trips
  });
  return total;
}
