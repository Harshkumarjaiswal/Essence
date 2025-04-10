// Cart functionality
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
        this.updateCartTotal();
    }

    // Add item to cart
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.updateCartTotal();
    }

    // Remove item from cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.updateCartTotal();
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, Math.min(12, quantity));
            this.saveCart();
            this.updateCartTotal();
        }
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    // Update cart count in header
    updateCartCount() {
        const cartCount = document.querySelector('.cart-area span');
        if (cartCount) {
            const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    // Update cart total
    updateCartTotal() {
        const subtotalElement = document.querySelector('.cart-total-chart li:first-child span:last-child');
        const totalElement = document.querySelector('.cart-total-chart li:last-child span:last-child');
        
        if (subtotalElement && totalElement) {
            const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
            totalElement.textContent = `$${subtotal.toFixed(2)}`;
        }
    }

    // Render cart items
    renderCartItems() {
        const tbody = document.querySelector('.cart-table tbody');
        if (!tbody) return;

        tbody.innerHTML = this.items.map(item => `
            <tr>
                <td class="cart_product_img d-flex align-items-center">
                    <a href="#"><img src="${item.image}" alt="${item.name}"></a>
                    <h6>${item.name}</h6>
                </td>
                <td class="price"><span>$${item.price.toFixed(2)}</span></td>
                <td class="qty">
                    <div class="quantity">
                        <input type="number" class="qty-text" step="1" min="1" max="12" 
                               value="${item.quantity}" 
                               onchange="cart.updateQuantity('${item.id}', this.value)">
                    </div>
                </td>
                <td class="total_price"><span>$${(item.price * item.quantity).toFixed(2)}</span></td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="cart.removeItem('${item.id}')">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
}

// Initialize cart
const cart = new Cart();

// Add to cart button click handler
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.single-product');
        if (productCard) {
            const product = {
                id: productCard.dataset.productId,
                name: productCard.querySelector('h5').textContent,
                price: parseFloat(productCard.querySelector('.price').textContent.replace('$', '')),
                image: productCard.querySelector('img').src
            };
            cart.addItem(product);
            
            // Show success message
            alert('Product added to cart!');
        }
    }
});

// Initialize cart page if on cart page
if (document.querySelector('.cart-table')) {
    cart.renderCartItems();
} 