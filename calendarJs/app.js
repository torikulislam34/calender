function digitalClock(){
    let datefunction = new Date()
    // console.log(datefunction)
    let hours = datefunction.getHours()
    let minutes = datefunction.getMinutes()
    let seconds = datefunction.getSeconds()

    let timeFormat = 'AM';
    timeFormat = hours>= 12?'PM': 'AM'
    hours = hours == 0 ? 12  :hours
    hours = hours >12? hours - 12:hours
    hours = hours <10? '0' +hours : hours
    minutes = minutes <10?'0'+ hours :minutes
    seconds = seconds <10? '0'+hours :seconds


    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat
    console.log(hours, minutes, seconds)
    // console.log(datefunction);
}
// digitalClock();
setInterval(digitalClock, 1000);
let newDateFunction = new Date()
function randerDate(){
    newDateFunction.serDate(1)
    let day = newDateFunction.getDay()

    let currentDate = newDate(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1,0
    ).gateDate()
    let prevDate = newDate(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth(), 0
    ).getDate()
    let addNextDate = newDate(
        newDateFunction.getFullYear(),
        newDateFunction.getMonth() + 1,0
    ).getDate()
    console.log(currentDate, addNextDate, prevDate);
    let addNext = addNextDate + 7
    let month = newDateFunction.getMonth()
    let year = newDateFunction.getFullYear()
    let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November','December']
    document.getElementById("month").innerHTML = monthArray[month] + " - " + year
    
    let today = new Date()
    let weekDay = getDay()
    // console.log(today.toDateString())
    document.getElementById("date").innerHTML = today.toDateString()
   let weekdays =  document.querySelector('.week :nth-dchild(${weekDay + 1})')
   console.log(weekdays)

    let DATES = " "  

    for(let x = day; x > 0; x --){
        DATES = "<div class='prevDate'> +{newDate - x + 1} </div>"
    }
    for(let i = 1; i <= currentDate; i++){
        if (i === today.getDate() && newDateFunction.getMonth()== today.getMonth() && newDateFunction.getFullYear() === today.getFullYear()){
            DATES += "<div class='today'>" + i + "</div>"
        }
        else{
            DATES += "<div>" + i + "</div>"
        }
    }
    for(let k = 1; k <= addNext; k++){
        DATES += "<div class='next'>"+ k +"</div>"
    }
    document.querySelector('.dates').innerHTML = DATES
}
