let date = new Date();
let dayInt = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
let months = ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
let weekData = '';
let daysData = '';
let blankDaysData= '';
let calenderContainer = document.querySelector('#weekdays');
let dateContainer = document.querySelector('#days');
let weekArray = weekDays.map((ele) => {
    return `<li>${ele}</li>`;
})
weekArray.forEach((ele) => weekData += ele);
calenderContainer.insertAdjacentHTML('afterbegin', weekData);
// init calendar
showCalendar(month, year);
function createTotalDays(total) {
    let daysArray = [];
    for (let i = 1; i <= total; i++) {
        daysArray.push(`<li>${i}</li>`);
    }
    daysArray.forEach((ele) => daysData += ele);
    dateContainer.insertAdjacentHTML('beforeend', daysData);
}
function createBlankDays(total) {
    let blankDaysArray = [];
    for (let i = 1; i <= total; i++) {
    blankDaysArray.push(`<li class="blank">${i}</li>`);
    }
    blankDaysArray.forEach((ele) => blankDaysData += ele);
    dateContainer.insertAdjacentHTML('afterbegin', blankDaysData);
}
function showCalendar(month, year) {
    // gives the day on the first date of month taking sunday as 0
    let firstDay = new Date(year, month).getDay();
    let totalDays = daysInMonth(month, year);
    console.log(totalDays);
    // adding the blank boxes so that date start on correct day of the week
    // substracting 1 to set monday as the first weekday
    // and testing for sunday because it became the 7th day
    createBlankDays(firstDay === 0 ? 6 : firstDay - 1);
    createTotalDays(totalDays);
}



// 0 gives the last day for previous month
function daysInMonth(month, year) {
    // day 0 here returns the last day of the PREVIOUS month
    return new Date(year, month + 1, 0).getDate();
}