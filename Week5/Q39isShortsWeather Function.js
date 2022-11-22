// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temp) {
  if (typeof temp === 'number' && temp >= 75 ) {
      return true;
  } return false;
}
isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75)