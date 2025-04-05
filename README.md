Objective:

Create a simple React application that allows users to add products to a shopping cart, update quantities, and track their progress towards earning a free gift.

Requirements:

1. Display Products:

• Use the given PRODUCTS constant to render a list of products.

• Each product should have a quantity selector with + and -buttons and an "Add to Cart" button.

2. Shopping Cart:

• Display the cart below the products.

cart • Allow users to update product quantities in the cart.

• Allow users to remove products from the cart.

3. Free Gift Rule:

• If the cart subtotal reaches THRESHOLD (1000), add the FREE_GIFT product automatically.

• Show a progress bar above the cart indicating how much more needs to be added before the free gift is unlocked.

• Ensure only one free gift is added, and it cannot be removed manually.

• Make sure the cart gift item is removed if the cart value goes below the Threshold value

4. State Management:

• Use React's built-in state management (useState, useEffect).

• Maintain separate states for products and cart.

5. User Experience:Show a message when the free gift is added.

Shopping Cart App

• Ensure smooth interactions for adding/removing items.
Code for Data (CodePen):

const PRODUCTS = [

{id: 1, name: "Laptop", price: 500),

{ id: 2, name: "Smartphone", price: 300 },

{ id: 3, name: "Headphones", price: 100},

{id: 4, name: "Smartwatch", price: 150),

1.

const FREE_GIFT = (id: 99, name: "Wireless Mouse", price: 0);

const THRESHOLD = 1000;

Notes:

I • Implement the missing features like the quantity selector, cart updates, and free gift logic.

• You can use any styling approach (CSS, styled-components, Tailwind, etc.).

• Feel free to add more Ul enhancements for a better user experience.
