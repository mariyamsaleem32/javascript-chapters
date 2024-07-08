/* switch statements:
How to start them */

// let dayOfWeak = "friday";
// switch (dayOfWeak) {
// case "monday":
// document.write("Today is monday"); 
// break;
// case "tuesday":
// document.write("Today is tuesday"); 
// break;
// case "wednesday":
// document.write("Today is wednesday"); 
// break;
// case "monday":
// document.write("Today is tharsday"); 
// break;
// case "friday":
// document.write("Today is friday"); 
// break;
// case "saturday":
// document.write("Today is saturday"); 
// case "sunday":
// document.write("Today is sunday"); 
// default :
// document.write("I can not regonaized the day"); 
// }

// let dayOfWk = 6;
//  switch(dayOfWk) {
//      case 1 :  case 2 :
//      alert("Whoopee");
//      break;
//      case 3 :
//      alert("Whoopee");
//      break;
//     case 4 : case 5 :
//      alert("TGIF!");
//      break;
//      default :
//      alert("Shoot me now!");
//      }

// function getMyBirthdayMonth(month) {
//     switch(month) {
//         case 1:
//             return "the month is jan";
//         case 2:
//             return "the month is feb";
//         case 3:
//             return "the month is march";
//         case 4:
//             return "the month is april";
//         case 5:
//             return "the month is may";
//         case 6:
//             return "the month is june";
//         case 7:
//             return "the month is july It's my birthday month";
//         case 8:
//             return "the month is aug";
//         case 9:
//             return "the month is sep";
//         case 10:
//             return "the month is oct";
//         case 11:
//             return "the month is nov";
//         case 12:
//             return "the month is dec";
//         default:
//             return "I cannot recognize the month name";
//     }
// }
// console.log(getMyBirthdayMonth(7)); // Outputs: the month is july


function calculateDiscount(productType, price) {
    let discountedPrice = price; // Initialize discounted price with the original price

    switch(productType) {
        case "Electronics":
            discountedPrice = price * 0.90; // Apply 10% discount
            break;
        case "Clothing":
            discountedPrice = price * 0.80; // Apply 20% discount
            break;
        case "Books":
            discountedPrice = price * 0.85; // Apply 15% discount
            break;
        default:
            // For any other product type, return the original price
            break;
    }
    // Round discountedPrice to two decimal places
    discountedPrice = Math.round(discountedPrice * 100) / 100;
    return discountedPrice;
}
// Example usage:
console.log(calculateDiscount("Electronics", 100)); // Output: 90.00
console.log(calculateDiscount("Clothing", 50));    // Output: 40.00
console.log(calculateDiscount("Books", 80));       // Output: 68.00
console.log(calculateDiscount("Toys", 30));        // Output: 30.00 (no discount applied)
