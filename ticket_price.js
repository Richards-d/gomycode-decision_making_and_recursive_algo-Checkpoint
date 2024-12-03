function ticketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18) {
        return "The ticket price is $20.";
    } else {
        return "Invalid age entered.";
    }
}

// Test the function
console.log(ticketPrice(10));
console.log(ticketPrice(15));
console.log(ticketPrice(25));
