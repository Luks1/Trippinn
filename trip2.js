module.exports = function(one, reg){
  var rr = [];
one.forEach(function(real){

    if(real.RegistrationNumber === reg){

rr.push(real);
    }
return rr;
  });

}
