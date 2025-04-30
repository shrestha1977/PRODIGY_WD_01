function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach(section => {
      const offsetTop = section.offsetTop - 100;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        navbar.className = '';
        navbar.classList.add(section.classList[0] + '-color');
      }
    });
  
    // Show back to top
    document.getElementById('backToTop').style.display = scrollPos > 300 ? 'block' : 'none';
  });
  
  // Form submission (for now it just alerts)
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message sent! Thank you for contacting us.");
  });


  // JavaScript for the site functionality

let cart = [];

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(cake, price, quantity) {
  let item = {
    cake: cake,
    price: price,
    quantity: parseInt(quantity),
    total: price * quantity
  };
  
  cart.push(item);
  displayCart();
}

function displayCart() {
  let cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = ''; // Clear previous items

  cart.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `${item.cake} x${item.quantity} - $${item.total}`;
    cartItemsDiv.appendChild(div);
  });
}

function placeOrder() {
  let address = document.getElementById('address').value;
  if (address && cart.length > 0) {
    alert('Order placed successfully!');
    cart = []; // Clear cart
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('address').value = '';
  } else {
    alert('Please fill in the address and add items to the cart.');
  }
}

  