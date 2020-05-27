
exports.getDate = function() {

  //check the current day of the week
  const today = new Date();


  //create an object to format date options
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  // set variable 'day' as today formatted with the options object
return today.toLocaleDateString('en-US', options);


}
//////////////////

exports.getDay = function() {

  //check the current day of the week
  const today = new Date();


  //create an object to format date options
  const options = {
    weekday: 'long'
  };

  // set variable 'day' as today formatted with the options object
return today.toLocaleDateString('en-US', options);


}
