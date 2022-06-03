const YEAR = 1991;

function checkYear() {
    let msg;
    if ((YEAR % 400) === 0 || (YEAR % 4) === 0) {
         msg = `${YEAR} is a leap year.`
        } else {
        msg = `${YEAR} isn't a leap year.`
        }
     return msg;
};

console.log(checkYear());