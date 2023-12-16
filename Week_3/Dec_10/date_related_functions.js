const d = Date();
// The Date() function returns a new string which has date data
console.log(d, typeof d)

const dt = new Date(); // to get a date object we do new Date() , this returns a special object having date related properties
console.log(dt);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date
console.log(dt.getDate());
console.log(dt.getMonth()); // based on 0 based indexing, Jan - 0, Dec - 11
console.log(dt.getFullYear())
console.log(dt.getHours())
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getDay())
console.log(dt.toDateString())
console.log(dt.toLocaleDateString())
// interesting function
console.log(dt.getTime()); // This tells how many milliseconds have passed from 01/Jan/1970


const custom = new Date("0,10,2021");
console.log(custom.toDateString());