module.exports = function(en,reg){
  var total = 0;

  en.forEach(function(naam){
    if(naam.RegistrationNumber === reg){
          total += Number(naam.Fare) *Number(naam.Trips);
    }
  });
//console.log(total);
  return total;
}
