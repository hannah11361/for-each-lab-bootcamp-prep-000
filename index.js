function iterativeLog(array){
  array.forEach(logArrayElements);
}
    
function logArrayElements (element, index, array)
{
    console.log(`${index}: ${element}`);
}


function iterate (callback){
  var array = ["one", "two", "three", "okie"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}