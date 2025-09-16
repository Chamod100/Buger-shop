const menuItems = [
    {
        id: 1,
        name: "Royal Deluxe Burger",
        description: "Premium beef patty with aged cheddar, crispy bacon, lettuce, tomato, and our special royal sauce",
        price: 1890,
        category: "signature",
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 2,
        name: "King's Special",
        description: "Double beef patties with swiss cheese, caramelized onions, mushrooms, and truffle mayo",
        price: 2290,
        category: "signature",
        image: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 3,
        name: "BBQ Beast",
        description: "Smoky BBQ beef patty with onion rings, coleslaw, and tangy BBQ sauce",
        price: 2190,
        category: "signature",
        image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 13,
        name: "Mushroom Swiss Deluxe",
        description: "Grilled beef patty with sautéed mushrooms, swiss cheese, caramelized onions, and garlic aioli",
        price: 2090,
        category: "signature",
        image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 14,
        name: "Spicy Jalapeño Burger",
        description: "Beef patty with jalapeños, pepper jack cheese, spicy mayo, lettuce, and crispy onions",
        price: 2150,
        category: "signature",
        image: "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 15,
        name: "Avocado Ranch Burger",
        description: "Premium beef with fresh avocado, ranch dressing, bacon, lettuce, and tomato",
        price: 2250,
        category: "signature",
        image: "https://images.pexels.com/photos/1854043/pexels-photo-1854043.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 16,
        name: "Teriyaki Pineapple Burger",
        description: "Beef patty with grilled pineapple, teriyaki sauce, swiss cheese, and crispy lettuce",
        price: 2190,
        category: "signature",
        image: "https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 4,
        name: "Classic Cheeseburger",
        description: "Traditional beef patty with melted cheese, lettuce, tomato, pickles, and ketchup",
        price: 1490,
        category: "classic",
        image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 5,
        name: "Big Mac Style",
        description: "Two beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame bun",
        price: 1790,
        category: "classic",
        image: "https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 6,
        name: "Bacon Burger",
        description: "Juicy beef patty with crispy bacon, cheese, lettuce, and our house sauce",
        price: 1690,
        category: "classic",
        image: "https://images.pexels.com/photos/1854043/pexels-photo-1854043.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 17,
        name: "Double Cheeseburger",
        description: "Two beef patties with double cheese, lettuce, tomato, pickles, and special sauce",
        price: 1890,
        category: "classic",
        image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 18,
        name: "Mushroom Burger",
        description: "Beef patty with grilled mushrooms, cheese, lettuce, and herb mayo",
        price: 1650,
        category: "classic",
        image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 19,
        name: "Fish Burger",
        description: "Crispy fish fillet with tartar sauce, lettuce, and cheese on a sesame bun",
        price: 1590,
        category: "classic",
        image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 20,
        name: "Veggie Burger",
        description: "Plant-based patty with lettuce, tomato, onions, and special veggie sauce",
        price: 1450,
        category: "classic",
        image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 7,
        name: "Crispy Chicken Deluxe",
        description: "Crispy fried chicken breast with coleslaw, cheese, and spicy mayo",
        price: 1690,
        category: "chicken",
        image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 8,
        name: "Grilled Chicken Supreme",
        description: "Grilled chicken breast with avocado, swiss cheese, and herb mayo",
        price: 1790,
        category: "chicken",
        image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 9,
        name: "Spicy Chicken Burger",
        description: "Spicy fried chicken with jalapeños, pepper jack cheese, and chipotle sauce",
        price: 1750,
        category: "chicken",
        image: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 21,
        name: "Buffalo Chicken Burger",
        description: "Crispy chicken with buffalo sauce, blue cheese, lettuce, and celery",
        price: 1850,
        category: "chicken",
        image: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 22,
        name: "Honey Mustard Chicken",
        description: "Grilled chicken breast with honey mustard sauce, swiss cheese, and fresh greens",
        price: 1750,
        category: "chicken",
        image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 23,
        name: "BBQ Chicken Deluxe",
        description: "Grilled chicken with BBQ sauce, cheddar cheese, onion rings, and coleslaw",
        price: 1890,
        category: "chicken",
        image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 24,
        name: "Chicken Club Burger",
        description: "Crispy chicken with bacon, lettuce, tomato, mayo, and avocado",
        price: 1950,
        category: "chicken",
        image: "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 10,
        name: "Crispy French Fries",
        description: "Golden crispy fries seasoned with our special blend of spices",
        price: 590,
        category: "sides",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 11,
        name: "Onion Rings",
        description: "Crispy beer-battered onion rings served with ranch dipping sauce",
        price: 650,
        category: "sides",
        image: "https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 12,
        name: "Soft Drinks",
        description: "Choose from Coca-Cola, Sprite, Fanta, or Pepsi (500ml)",
        price: 290,
        category: "sides",
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    
    {
        id: 25,
        name: "Chicken Nuggets",
        description: "6 pieces of crispy chicken nuggets served with your choice of dipping sauce",
        price: 750,
        category: "sides",
        image: "https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 26,
        name: "Mozzarella Sticks",
        description: "Golden fried mozzarella sticks served with marinara sauce",
        price: 690,
        category: "sides",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 27,
        name: "Milkshakes",
        description: "Creamy milkshakes in vanilla, chocolate, or strawberry flavors",
        price: 450,
        category: "sides",
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 28,
        name: "Loaded Nachos",
        description: "Crispy nachos topped with cheese, jalapeños, sour cream, and guacamole",
        price: 890,
        category: "sides",
        image: "https://images.pexels.com/photos/4061662/pexels-photo-4061662.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 29,
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries seasoned with herbs and served with aioli",
        price: 650,
        category: "sides",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        id: 30,
        name: "Iced Coffee",
        description: "Refreshing iced coffee with your choice of flavoring and cream",
        price: 350,
        category: "sides",
        image: "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
];

let cart = [];
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    updateCartUI();
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
function renderMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);
    
    menuGrid.innerHTML = filteredItems.map(item => {
        const cartItem = cart.find(cartItem => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 1;
        
        return `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="item-price">Rs. ${item.price.toLocaleString()}</div>
                        <div class="item-actions">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                <span class="quantity-display" id="quantity-${item.id}">${quantity}</span>
                                <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                            </div>
                            <button class="add-to-cart" onclick="addToCart(${item.id})">
                                <i class="fas fa-cart-plus"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    renderMenuItems();
}

function increaseQuantity(itemId) {
    const quantityDisplay = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityDisplay.textContent);
    quantity++;
    quantityDisplay.textContent = quantity;
}

function decreaseQuantity(itemId) {
    const quantityDisplay = document.getElementById(`quantity-${itemId}`);
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
}

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const quantityDisplay = document.getElementById(`quantity-${itemId}`);
    const quantity = parseInt(quantityDisplay.textContent);
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...item,
            quantity: quantity
        });
    }
    
    quantityDisplay.textContent = '1';
    
    updateCartUI();
    showAddToCartAnimation();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateCartQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Rs. ${item.price.toLocaleString()} x ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = menuSection.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function showAddToCartAnimation() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    cartIcon.style.background = 'rgba(56, 161, 105, 0.3)';
    
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.background = 'rgba(255, 255, 255, 0.2)';
    }, 200);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.name} x ${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const confirmMessage = `Order Summary:\n\n${orderSummary}\n\nTotal: Rs. ${total.toLocaleString()}\n\nConfirm your order?`;
    
    if (confirm(confirmMessage)) {
        alert('Thank you for your order! Your delicious burgers will be ready in 15-20 minutes.');
        
        cart = [];
        updateCartUI();
        toggleCart();
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(229, 62, 62, 0.95), rgba(197, 48, 48, 0.95))';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #E53E3E, #C53030)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target) && cartSidebar.classList.contains('open')) {
        toggleCart();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('cartSidebar').classList.contains('open')) {
        toggleCart();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        scrollToMenu();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.item-image, .hero-image img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
});

function searchMenu(query) {
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = filteredItems.map(item => {
        const cartItem = cart.find(cartItem => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 1;
        
        return `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="item-price">Rs. ${item.price.toLocaleString()}</div>
                        <div class="item-actions">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                <span class="quantity-display" id="quantity-${item.id}">${quantity}</span>
                                <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                            </div>
                            <button class="add-to-cart" onclick="addToCart(${item.id})">
                                <i class="fas fa-cart-plus"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

setTimeout(() => {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}, 100);