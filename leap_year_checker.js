function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
}

// Test the function
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2023));
