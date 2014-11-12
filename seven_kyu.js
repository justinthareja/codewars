/*******************************************************************************************
The Coupon Code
*******************************************************************************************/

// MY SOLUTION

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return Date.parse(expirationDate) >= Date.parse(currentDate) && enteredCode === correctCode;
}