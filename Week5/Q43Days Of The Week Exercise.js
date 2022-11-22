// DEFINE YOUR FUNCTION BELOW:
let week =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function returnDay(day){
    if(day <1 || day >7){
        return null;
    }else{
        return day = week[day-1];
    }
}
returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) 