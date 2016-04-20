module.exports = function(naam,rgN){

	var list = [];

	naam.forEach(function(tx){

		if(tx.RegistrationNumber === rgN){

			list.push(tx.Route);
		}

	});
  //console.log(list);
  return list;
}
