function libraryFees()
{
    // get amount of days late and convert to a number
var daysLate = parseInt(prompt("How many days late are your items?"));

    // get amount of books and convert
var books = parseInt(prompt("How many books are you returning?"));

    // get amount of DVDs and convert
var dvds = parseInt(prompt("How many DVDs are you returning?"));

    // Multiply 0.25 by the amount of days (for book fee)
var bookFeeCalculation = daysLate * 0.25;

    // Multiply 0.50 by the amount of days (for DVD fee)
var dvdFeeCalculation = daysLate * 0.50;

    // Multiply amount of books by its calculated late fee
var bookFee = books * bookFeeCalculation;

    // Multiply amount of DVDs by its calculated late fee
var dvdFee = dvds * dvdFeeCalculation;

    // Add both fees for total
var totalFee = bookFee * dvdFee;

var totalFeeDisplay = totalFee.toFixed(2);

alert(`Your total fee is $${totalFeeDisplay}`);
}