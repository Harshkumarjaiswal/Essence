// Product Cards functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all product cards
    initializeProductCards();
});

function initializeProductCards() {
    // Get all product cards
    const productCards = document.querySelectorAll('.single-product-wrapper');
    
    productCards.forEach(card => {
        // Add data attributes for cart functionality
        const productId = generateProductId(card);
        card.setAttribute('data-product-id', productId);
        
        // Get product details
        const productName = card.querySelector('h6').textContent;
        const productPrice = parseFloat(card.querySelector('.product-price').textContent.replace('$', ''));
        const productImage = card.querySelector('.product-img img').src;
        const productCollection = card.querySelector('.product-description span').textContent;
        
        // Update Add to Cart button
        const addToCartBtn = card.querySelector('.add-to-cart-btn a');
        addToCartBtn.classList.add('add-to-cart');
        addToCartBtn.setAttribute('data-product-id', productId);
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.querySelector('.hover-content').style.opacity = '1';
            this.querySelector('.hover-img').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.hover-content').style.opacity = '0';
            this.querySelector('.hover-img').style.opacity = '0';
        });
        
        // Add click handler for Add to Cart button
        addToCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                collection: productCollection
            };
            
            // Add to cart
            cart.addItem(product);
            
            // Show success message
            showAddToCartSuccess(card);
        });
    });
}

function generateProductId(card) {
    // Generate a unique ID based on product name and collection
    const productName = card.querySelector('h6').textContent;
    const collection = card.querySelector('.product-description span').textContent;
    return `${collection.toLowerCase().replace(/\s+/g, '-')}-${productName.toLowerCase().replace(/\s+/g, '-')}`;
}

function showAddToCartSuccess(card) {
    // Create success message element
    const successMsg = document.createElement('div');
    successMsg.className = 'add-to-cart-success';
    successMsg.textContent = 'Added to Cart!';
    
    // Add success message to card
    card.appendChild(successMsg);
    
    // Remove success message after animation
    setTimeout(() => {
        successMsg.remove();
    }, 2000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .single-product-wrapper {
        position: relative;
        transition: transform 0.3s ease;
    }
    
    .single-product-wrapper:hover {
        transform: translateY(-5px);
    }
    
    .hover-content {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .hover-img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .add-to-cart-success {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        animation: fadeInOut 2s ease;
        z-index: 100;
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    .add-to-cart {
        transition: all 0.3s ease;
    }
    
    .add-to-cart:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 768px) {
        .single-product-wrapper:hover {
            transform: none;
        }
        
        .hover-content {
            opacity: 1;
        }
        
        .add-to-cart-success {
            font-size: 14px;
            padding: 8px 16px;
        }
    }
`;
document.head.appendChild(style); 