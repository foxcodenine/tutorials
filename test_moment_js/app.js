

const moment = require('moment');
moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('d', 365);
datetime = moment('29/11/2022 20:48:00', "DD/MM/YYYY h:mm:ss").fromNow()

console.log(datetime)