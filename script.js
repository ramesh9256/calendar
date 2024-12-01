


let currantDate = new Date();
let GetMonth = currantDate.getMonth();
let GetDay = currantDate.getDay();
let GetDate = currantDate.getDate();
let GetYear = currantDate.getFullYear();
console.log(currantDate);


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


const showMonth = document.querySelector(".box1");
const showDay =  document.querySelector(".box2");
const showDate =document.querySelector(".box3");
const showYear = document.querySelector(".box4");






showMonth.textContent = months[GetMonth];
showDay.textContent = days[GetDay];
showDate.textContent = GetDate;
showYear.textContent = GetYear;
 

incognito







