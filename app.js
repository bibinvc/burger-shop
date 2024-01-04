//app.js

const menu = [
  {
    category: 'STARTERS',
    image: 'burgers-category.jpg',
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
    image: 'French-fries.jpg',
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
