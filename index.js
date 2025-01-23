const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Step 1: Define the getPrices function
function getPrices(taxBoolean) {
    // Step 2: Loop through all objects in the dishData array
    for (let dish of dishData) {
        // Step 3: Declare the finalPrice variable
        let finalPrice;

        // Step 4: Check if taxBoolean is true
        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        }
        // Step 5: Check if taxBoolean is false
        else if (taxBoolean === false) {
            finalPrice = dish.price;
        }
        // Step 6: Handle invalid input
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        // Step 7: Log the dish name and final price
        console.log("Dish: ", dish.name, "Price: $", finalPrice);
    }
}

// Step 8: Define the getDiscount function
function getDiscount(taxBoolean, guests) {
    // Step 9: Invoke the getPrices function
    getPrices(taxBoolean);

    // Step 10: Defensive coding to validate the guests parameter
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        // Step 11: Determine the discount amount
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        // Step 12: Handle invalid guests input
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Example calls to test the functions
getDiscount(true, 2); // Should log prices with tax and a discount of $5
getDiscount(false, 10); // Should log prices without tax and a discount of $10

