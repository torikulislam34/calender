function digitalClock(){
    let datefunction = new Date()
    // console.log(datefunction)
    let hours = datefunction.getHours()
    let minutes = datefunction.getMinutes()
    let seconds = datefunction.getSeconds()

    let timeFormat = 'AM';
    // timeformat = hours>= 12?'PM': 'AM'

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat
    console.log(hours, minutes, seconds)
    // console.log(datefunction);
}
digitalClock();
setInterval(digitalClock, 1000)