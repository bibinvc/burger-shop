//app.js

const menu = [
  {
    category: 'STARTERS',
    image: 'Falafel.jpg',
    items: [
      { name: 'Cheese samoosa 6 pcs', price: 90 },
      { name: 'Felafil Starter 6 pcs', price: 80 },
      { name: 'Cheese balls 6 pcs', price:110},
      { name: 'Chicken Satay', price:130},
      { name: 'Fried Chicken Popers', price:120},
      { name: 'Dynamite Chicken ', price:140},
      { name: 'Dynamite Shrimps', price:220},
      { name: 'Nuggets', price:120},
      { name: 'Fish Finger', price:140},
      { name: 'Crab Claw', price:160},
      // Add more burger items as needed
      // ...
    ],
  },
  {
    category: 'FRIES',
    image: 'Loaded Chicken Fries.jpeg.jpg',
    items: [
      { name: 'French Fries Small ', price: 60},
      {name: 'French Fries Medium ', price: 110},
      { name: 'French Fries peri peri S/M', price: 70/120 },
      {name: 'Dynamite Fries', price:130 },
      {name: 'Loaded Cheesy Fries', price:130 },
      {name: 'Loaded Chicken Fries', price:140 },
      {name: 'Loaded Beef Fries', price:150 },
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'Healthy Salads',
    image: 'Caesar Chicken Salad.jpg',
    items: [
      { name: 'Ceasar Salad Veg', price: 120},
      { name: 'Ceasar Salad Chicken', price:150 },
      { name: 'Greek Salad', price: 90},
      { name: 'Hummus With Kubus', price: 120},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'Normal Burger',
    image: 'Supreme Fried Burger.jpg',
    items: [
      { name: 'Chicken Burger', price: 90},
      { name: 'Chicken Cheese burger', price: 100},
      { name: 'Chicken Double Burger', price: 120},
      { name: 'Zinger Burger', price:140 },
      { name: 'Chicken Nuggets burger', price: 140},
      { name: 'BeefBurger', price: 90},
      { name: 'Beef Cheese Burger', price: 100},
      { name: 'Beef Double Burger', price: 120},
      { name: 'VEG BURGER', price: 90},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'LOAF SANDWICH',
    image: 'Chicken NUggets  sandwich.jpg',
    items: [
      { name: 'Chicken Sandwich', price: 90},
      { name: 'Chicken steak Sandwich', price: 140},
      { name: 'Hot dog Sandwich', price: 130},
      { name: 'Chicken tikka sandwich ', price: 140},
      { name: 'Egg Sandwich', price: 40},
      { name: 'Veg Sandwich', price: 40},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'WRAP ROLLS',
    image: 'Supreme Fried Burger.jpg',
    items: [
      { name: 'Chicken tawa roll', price:110 },
      { name: 'Spicy Chicken wraps ', price:120 },
      { name: 'Felafil Wrap', price: 100},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'CLUB SANDWICHES',
    image: 'Bun Burg Club Sandwich.jpeg.jpg',
    items: [
      { name: 'Bun Burg Club Sandwiches', price: 180},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'Served With Fries',
    image: 'French-fries.jpg',
    items: [
      { name: 'Zinger Club sandwich', price: 150},
      { name: 'Mixed Club Sandwich', price: 160},
      { name: 'Egg club sandwich', price:110 },
      { name: 'Veg Club sandwich', price: 110},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'BUN BURG TREATS',
    image: 'Mushroom beef burger.jpg',
    items: [
      { name: 'Felafil burger', price: 110},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'Served With Fries',
    image: 'French-fries.jpg',
    items: [
      { name: 'Crispy Fire Burger', price:160 },
      { name: 'Grilled Chicken Burger', price:140 },
      { name: 'Jumbo Chicken Burger', price: 160},
      { name: 'Chicken Breast Burger', price: 150},
      { name: 'Dynamite Chicken Burger', price: 150},
      { name: 'Persian Delights', price:160 },
      { name: 'Mushroom Beef Burger', price: 180},
      { name: 'Double Bull Burger', price:200 },
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'ADDONS',
    image: 'French-fries.jpg',
    items: [
      { name: 'Cheese Slice', price: 12},
      { name: 'Special Sauce', price:15 },
      { name: 'Mayonnaise', price: 15},
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'MEALS COMBO',
    image: 'French-fries.jpg',
    items: [
      { name: 'Chicken Burger ,Fries and Softdrinks', price: 120},
      { name: 'Beef Burger fries With Softdrinks', price: 120},
      { name: 'Crispy Wrap Combo', price: 140},
      { name: 'Kids Meals with fries and juice', price:120 },
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'SLIDERS',
    image: 'French-fries.jpg',
    items: [
      { name: 'Chicken Sliders', price:190 },
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: '3 Burger',
    image: 'French-fries.jpg',
    items: [
      { name: 'Beef Sliders', price: 210},
      { name: 'Mix SLiders', price:210 },
      // Add more side items as needed
      // ...
    ],
  },
  {
    category: 'PIZZA',
    image: 'French-fries.jpg',
    items: [
      { name: 'Mini Pizza', price:0 },
      { name: 'Fusion Chicken Pizza', price:0 },
      { name: 'B b q Chicken Pizza', price: 0},
      // Add more side items as needed
      // ...
    ],
  },

  
  // Add more categories with their respective items
  // ...
];

// Use an object to store selected items and their quantities
const selectedItems = {};

function renderMenu() {
  const productContainer = document.getElementById('productContainer');

  menu.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    const categoryName = document.createElement('h2');
    categoryName.textContent = category.category;
    categoryDiv.appendChild(categoryName);

    const categoryImage = document.createElement('img');
    categoryImage.src = `images/${category.image}`;
    categoryImage.alt = category.category;
    categoryImage.classList.add('category-image');
    categoryDiv.appendChild(categoryImage);

    category.items.forEach(item => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const itemName = document.createElement('span');
      itemName.textContent = item.name;

      const itemPrice = document.createElement('span');
      itemPrice.classList.add('item-price'); // Add this line to assign the class
      itemPrice.textContent = `${item.price.toFixed(2)}`;

      const quantityInput = document.createElement('input');
      quantityInput.type = 'text';
      quantityInput.className = 'quantity-input';
      quantityInput.value = '0';
      quantityInput.readOnly = true;

      const minusButton = document.createElement('button');
      minusButton.textContent = '-';
      minusButton.className = 'qbutton';
      minusButton.addEventListener('click', () => decrementQuantity(item.name, item.price, quantityInput));

      const plusButton = document.createElement('button');
      plusButton.textContent = '+';
      plusButton.className = 'qbutton';
      plusButton.addEventListener('click', () => incrementQuantity(item.name, item.price, quantityInput));

      productDiv.appendChild(itemName);
      productDiv.appendChild(itemPrice);
      productDiv.appendChild(minusButton);
      productDiv.appendChild(quantityInput);
      productDiv.appendChild(plusButton);
      categoryDiv.appendChild(productDiv);
    });

    productContainer.appendChild(categoryDiv);
  });
}

function incrementQuantity(itemName, itemPrice, quantityInput) {
  const currentQuantity = parseInt(quantityInput.value, 10);
  quantityInput.value = currentQuantity + 1;

  updateTotalPrice(itemPrice, currentQuantity + 1, itemName, itemPrice); // Pass itemPrice as an argument
}

function decrementQuantity(itemName, itemPrice, quantityInput) {
  const currentQuantity = parseInt(quantityInput.value, 10);

  if (currentQuantity > 0) {
    quantityInput.value = currentQuantity - 1;
    updateTotalPrice(-itemPrice, currentQuantity - 1, itemName, itemPrice); // Pass itemPrice as an argument
  }
}

function updateTotalPrice(priceChange, quantity, itemName, itemPrice) {
  const totalPriceElement = document.getElementById('totalPrice');
  let currentTotal = parseFloat(totalPriceElement.textContent.replace(/[^\d.]/g, ''));

  currentTotal = isNaN(currentTotal) ? 0 : currentTotal;
  const newTotal = currentTotal + priceChange;

  totalPriceElement.textContent = `Total: ${newTotal.toFixed(2)}`;
  showSelectedItem(quantity, itemName, priceChange, itemPrice); // Pass itemPrice as an argument

  // Store selected items and total amount in local storage
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  localStorage.setItem("totalAmount", newTotal.toFixed(2));
}
function showSelectedItem(quantity, itemName, priceChange, itemPrice) {
  const selectedItemsElement = document.getElementById('selectedItems');
  const itemTotal = (quantity * itemPrice).toFixed(2);

  // Check if the item is already selected
  if (selectedItems[itemName]) {
    // If it is, update the quantity and total price
    selectedItems[itemName].quantity = quantity;
    selectedItems[itemName].total = parseFloat(itemTotal);
  } else {
    // If it's not, add a new entry
    selectedItems[itemName] = {
      quantity: quantity,
      total: parseFloat(itemTotal),
    };
  }
  console.log(selectedItems[itemName])

  // Update the display
  updateSelectedItemsDisplay(itemName, quantity, selectedItems[itemName].total); // Pass itemName, current quantity, and updated total as arguments
}


function updateSelectedItemsDisplay() {
  // Clear existing content
  const selectedItemsElement = document.getElementById('selectedItems');
  selectedItemsElement.innerHTML = '';

  // Iterate through selected items and display them
  for (const itemName in selectedItems) {
    if (selectedItems.hasOwnProperty(itemName)) {
      const item = selectedItems[itemName];
      const selectedItem = ` ${itemName}(s) X ${item.quantity} - ${item.total.toFixed(2)}`;
      const itemDiv = document.createElement('div');
      itemDiv.textContent = selectedItem;
      selectedItemsElement.appendChild(itemDiv);
    }
  }
}

// Call renderMenu when the page loads
window.onload = () => {
  renderMenu();
};


function placeOrder() {
  // Check if at least one item is selected
  if (Object.keys(selectedItems).length === 0) {
    alert("Please select at least one item before placing an order.");
    return;
}
    // Redirect to the cart page
    window.location.href = "cart.html";

  // Store the selected items and total amount in localStorage
  localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  localStorage.setItem('totalAmount', document.getElementById('totalPrice').textContent);
}

function toggleMenu() {
  const navWrapper = document.querySelector('.nav-wrapper');
  navWrapper.classList.toggle('active');
}




// function placeOrder() {
//   const selectedOrders = [];

//   // Loop through each product
//   menu.forEach(category => {
//     category.items.forEach(item => {
//       const itemName = item.name;
//       const quantitySelectorId = `${itemName.replace(/\s+/g, '-').toLowerCase()}Selector`;
//       const quantityInput = document.querySelector(`.${quantitySelectorId}`);
//       const quantity = quantityInput ? parseInt(quantityInput.value, 10) : 0;

//       if (quantity > 0) {
//         selectedOrders.push(`${quantity} ${itemName}(s)`);
//       }
//     });
//   });

//   if (selectedOrders.length > 0) {
//     const orderMessage = `I would like to order:\n${selectedOrders.join('\n')}`;

//     // Replace the server endpoint with your actual server endpoint
//     const serverEndpoint = 'https://your-server-endpoint';

//     // Make a POST request to the server
//     fetch(serverEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message: orderMessage,
//       }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the server's response if needed
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   } else {
//     alert('Please select at least one item and specify the quantity.');
//   }
// }
