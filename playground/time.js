var moment = require('moment');
// Jan 1st 1970 00:00:00 am  (seconds from this date)

var bday = new Date(1962, 5, 15, 1, 14).getTime();
// timestamp: 1515447720631
console.log(`BDAY: ${bday}`);

var now = new Date().getTime();
console.log(`NOW: ${now}`);

var someTimestamp = moment().valueOf();
console.log(`Timestamp: ${someTimestamp}`);

var bdayTimestamp = -238186800000;

var date = moment(bday);

var bdate = moment(bdayTimestamp);
console.log(bdate.format('MMM Do YYYY, h:mm a'));
console.log(date.format('MMM Do YYYY, h:mm a'));

//date.add(1,'year');
// console.log(date.format('MMM Do YYYY'));
//
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));



var createdAt = 1515447720631;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY, h:mm a'));


// var date = moment(createAt);
// console.log(date.format('MMM Do YYYY, h:mm a'));
