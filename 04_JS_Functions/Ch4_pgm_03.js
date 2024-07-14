// Adding tax to find the total cost

var sale1;
var sale2;
var sale3;
var sale4;

sale1 = { price: 140, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };
sale4 = { price: 80, taxRate: 5 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;
sale4.tax = sale4.price * sale4.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
sale4.total = sale4.price + sale4.tax;


function logSale(sale) {
    console.log("Price = $" + sale.price);
    console.log("Tax @" + sale.taxRate + "% = $" + sale.tax);
    console.log("Total cost = $" + sale.total);
    console.log("------------------------------"); 
}

logSale(sale1);
logSale(sale2);
logSale(sale3);
logSale(sale4);


/* Further Adventures
 *
 * 1) Add the details for a fourth sale.
 *
 * 2) Log the fourth sale to the console.
 *    Use the same format as the others.
 *
 * 3) Add code to separate out the different
 *    sales on the console.
 *
 */