
//Date object
const now = new Date(); // creates a new Date object with the current date and time
console.log(now); // output: current date and time

const date1 = new Date('2021-12-31'); // creates a new Date object with the specified date and time
console.log(date1); // output: 2021-12-31T00:00:00.000Z

const date2 = new Date(2021, 11, 31); // creates a new Date object with the specified date and time
console.log(date2); // output: 2021-12-31T00:00:00.000Z

const date3 = new Date(2021, 11, 31, 12, 0, 0); // creates a new Date object with the specified date and time
console.log(date3); // output: 2021-12-31T12:00:00.000Z

const date4 = new Date(0); // creates a new Date object with the specified date and time
console.log(date4); // output: 1970-01-01T00:00:00.000Z

const date5 = new Date(1000 * 60 * 60 * 24); // creates a new Date object with the specified date and time
console.log(date5); // output: 1970-01-02T00:00:00.000Z

const date6 = new Date('2021-12-31T12:00:00'); // creates a new Date object with the specified date and time
console.log(date6); // output: 2021-12-31T12:00:00.000Z

const date7 = new Date('2021-12-31T12:00:00Z'); // creates a new Date object with the specified date and time
console.log(date7); // output: 2021-12-31T12:00:00.000Z

//Date methods
const date = new Date('2021-12-31T12:00:00');

console.log(date.getFullYear()); // output: 2021
console.log(date.getMonth()); // output: 11 (months are zero-based)
console.log(date.getDate()); // output: 31
console.log(date.getDay()); // output: 5 (days are zero-based)
console.log(date.getHours()); // output: 12
console.log(date.getMinutes()); // output: 0
console.log(date.getSeconds()); // output: 0
console.log(date.getMilliseconds()); // output: 0
console.log(date.getTime()); // output: 1640985600000 (number of milliseconds since January 1, 1970 00:00:00 UTC)
console.log(date.getTimezoneOffset()); // output: -60 (time zone offset in minutes)
console.log(date.toDateString()); // output: Fri Dec 31 2021
console.log(date.toTimeString()); // output: 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toISOString()); // output: 2021-12-31T11:00:00.000Z
console.log(date.toLocaleString()); // output: 31.12.2021, 12:00:00
console.log(date.toLocaleDateString()); // output: 31.12.2021
console.log(date.toLocaleTimeString()); // output: 12:00:00
console.log(date.toString()); // output: Fri Dec 31 2021 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toUTCString()); // output: Fri, 31 Dec
console.log(date.toDateString()); // output: Fri Dec 31 2021
console.log(date.toTimeString()); // output: 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toISOString()); // output: 2021-12-31T11:00:00.000Z
console.log(date.toLocaleString()); // output: 31.12.2021, 12:00:00
console.log(date.toLocaleDateString()); // output: 31.12.2021
console.log(date.toLocaleTimeString()); // output: 12:00:00
console.log(date.toString()); // output: Fri Dec 31 2021 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toUTCString()); // output: Fri, 31 Dec 2021 11:00:00 GMT
console.log(date.toDateString()); // output: Fri Dec 31 2021
console.log(date.toTimeString()); // output: 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toISOString()); // output: 2021-12-31T11:00:00.000Z
console.log(date.toLocaleString()); // output: 31.12.2021, 12:00:00
console.log(date.toLocaleDateString()); // output: 31.12.2021
console.log(date.toLocaleTimeString()); // output: 12:00:00
console.log(date.toString()); // output: Fri Dec 31 2021 12:00:00 GMT+0100 (Central European Standard Time)
console.log(date.toUTCString()); // output: Fri, 31 Dec 2021 11:00:00 GMT

//Date comparison
const date_1 = new Date('2021-12-31');
const date2_2 = new Date('2022-01-01');

console.log(date_1 < date_2); // output: true
console.log(date_1 > date_2); // output: false
console.log(date_1 == date_2); // output: false