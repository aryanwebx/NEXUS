const now = new Date();

const specificDate = new Date(2023, 11, 3);//month_Index range (0-11) not 1-12

const dateFromString = new Date("2024-11-12");

const dateFromTimestamp = new Date(12927293723221);// measure time from Unix Epoch(1970-01-01) here the timestamp given as parameter is in milliseconds

console.log(now);
console.log(specificDate);
console.log(dateFromString);
console.log(dateFromTimestamp);
