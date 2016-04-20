module.exports = function(rcd, regN){
  var reco = [];
  rcd.forEach(function(repo){

    if(repo.RegistrationNumber === regN){

reco.push(repo);
    }

  });
  //console.log(reco);
  return reco;
}
