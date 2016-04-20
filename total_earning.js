module.exports = function(lists){

var mapList = {};

  lists.forEach(function(list){

    var reg = list.RegistrationNumber;

    var ger = list.Trips * list.Fare

    if(mapList[reg]=== undefined){

      mapList[reg] = 0;
    }
   mapList[reg]+= ger;
  });
    console.log(mapList);

    return mapList;
};
