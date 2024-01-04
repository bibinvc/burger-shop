// cart.js

document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
    displayTotalAmount();
});

function displayCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");

    // Retrieve selected items from local storage
    const storedSelectedItems = JSON.parse(localStorage.getItem("selectedItems")) || {};

    for (const itemName in storedSelectedItems) {
        if (storedSelectedItems.hasOwnProperty(itemName)) {
            const item = storedSelectedItems[itemName];
            const cartItem = ` ${itemName}(s) X ${item.quantity} - ${item.total.toFixed(2)}`;
            const itemDiv = document.createElement("div");
            itemDiv.textContent = cartItem;
            cartItemsContainer.appendChild(itemDiv);
        }
    }
}

function displayTotalAmount() {
    const totalAmountContainer = document.getElementById("totalAmount");

    // Retrieve total amount from local storage
    const storedTotalAmount = localStorage.getItem("totalAmount") || "0.00";

    const totalAmountDiv = document.createElement("div");
    totalAmountDiv.textContent = `Total Amount: ${storedTotalAmount}`;
    totalAmountContainer.appendChild(totalAmountDiv);
}

function sendToWhatsapp() {
    const number = "+919744622185";

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const comment = document.getElementById('comment').value;
    const storedSelectedItems = JSON.parse(localStorage.getItem("selectedItems")) || {};
    const storedTotalAmount = localStorage.getItem("totalAmount") || "0.00";
    
    // Convert the object to a formatted string
    const selectedItemsString = Object.entries(storedSelectedItems)
        .map(([itemName, item]) => ` ${itemName}(s) X ${item.quantity} - ${item.total.toFixed(2)}`)
        .join("%0a");


    const url = "https://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a"
	+ "Address : " +address+ "%0a"
	+ "Contact : " +contact+ "%0a"
    + "Comment : " +comment+ "%0a"
	+ "SelectedItems : " +selectedItemsString+ "%0a"
	+ "TotalAmount : " +storedTotalAmount+ "%0a"

	window.open(url, '_blank').focus();
}

function toggleMenu() {
    const navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.classList.toggle('active');
  }




//     // Retrieve user information from the input fields
//     const name = document.getElementById("name").value;
//     const address = document.getElementById("address").value;
//     const contact = document.getElementById("contact").value;
//     const comment = document.getElementById("comment").value;

//     // Retrieve selected items and total amount from local storage
//     const storedSelectedItems = JSON.parse(localStorage.getItem("selectedItems")) || {};
//     const storedTotalAmount = localStorage.getItem("totalAmount") || "0.00";

//     // Prepare the data to be sent in the request body
//     const data = {
//         name: name,
//         address: address,
//         contact: contact,
//         comment: comment,
//         selectedItems: storedSelectedItems,
//         totalAmount: storedTotalAmount,
//     };

//     // Replace 'YOUR_API_ENDPOINT' and 'YOUR_API_KEY' with your actual values
//     const apiEndpoint = 'https://your-api-endpoint.com/order';
//     const apiKey = 'your-api-key';

//     // Initiate the API call using fetch
//     fetch(apiEndpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('API Response:', data);
//         // Handle the response as needed
//     })
//     .catch(error => {
//         console.error('API Error:', error);
//         // Handle the error as needed
//     });
// }

