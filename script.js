// Example categories
const categories = ['All', 'Kids', 'Birthday', 'Anniversary'];

// Example product data with links to Flipkart, Amazon, and Meesho
const products = [
    {
        name: 'Creative Kids Activity & Coloring Sheets',
        image: './images/catalogue_1.jpg',
        description: '100 pages of A5 size (5.8" X 8.3")',
        category: 'Kids',
        flipkart: 'https://www.flipkart.com/product-1',
        amazon: 'https://www.amazon.com/product-1',
        meesho: 'https://meesho.com/creative-kids-activity--coloring-sheets---100-sheets-of-fun-for-children/p/77aw9w?_ms=1.2'
    },
    {
        name: 'Exercise Sheets For Kids',
        image: './images/catalogue_2.jpg',
        description: '100 pages of A5 size (5.8" X 8.3")',
        category: 'Kids',
        flipkart: 'https://www.flipkart.com/product-2',
        amazon: 'https://www.amazon.com/product-2',
        meesho: 'https://meesho.com/exercise-book-for-kids--worksheets/p/7aqz8w?_ms=1.2'
    },
    {
        name: 'Coloring and Calculation Sheets',
        image: './images/catalogue_3.jpg',
        description: '100 pages of A5 size (5.8" X 8.3")',
        category: 'Kids',
        flipkart: 'https://www.flipkart.com/product-3',
        amazon: 'https://www.amazon.com/product-3',
        meesho: 'https://meesho.com/100-sheets-of-coloring-and-calculation-sheets-for-kids-of-age-4yr/p/7b9ab7?_ms=1.2'
    }
];

// Function to display categories
function loadCategories() {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = '#';
        a.innerText = category;
        a.addEventListener('click', () => filterProducts(category));
        li.appendChild(a);
        categoryList.appendChild(li);
    });
}

// Function to display products
function loadProducts(filteredProducts = products) {
    const catalogue = document.getElementById('catalogue');
    catalogue.innerHTML = ''; // Clear previous content
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'col-6 col-lg-3 product-item';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.image;
        img.className = 'card-img-top';
        img.alt = product.name;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const h5 = document.createElement('h6');
        h5.className = 'card-title';
        h5.innerText = product.name;

        const p = document.createElement('p');
        p.className = 'card-text';
        p.innerText = product.description;

        // Create buttons for Flipkart, Amazon, and Meesho
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'btn-group';
        buttonGroup.role = 'group';

        // Flipkart button
        const flipkartBtn = document.createElement('a');
        flipkartBtn.href = product.flipkart;
        flipkartBtn.target = '_blank';
        flipkartBtn.className = 'btn btn-primary';
        flipkartBtn.innerText = 'Buy on Flipkart';

        // Amazon button
        const amazonBtn = document.createElement('a');
        amazonBtn.href = product.amazon;
        amazonBtn.target = '_blank';
        amazonBtn.className = 'btn btn-warning';
        amazonBtn.innerText = 'Buy on Amazon';

        // Meesho button
        const meeshoBtn = document.createElement('a');
        meeshoBtn.href = product.meesho;
        meeshoBtn.target = '_blank';
        meeshoBtn.className = 'btn btn-danger';
        meeshoBtn.innerText = 'Buy on Meesho';

        // Append buttons to button group
        // buttonGroup.appendChild(flipkartBtn);
        // buttonGroup.appendChild(amazonBtn);
        buttonGroup.appendChild(meeshoBtn);

        // Append elements to card body and card
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(buttonGroup);
        card.appendChild(img);
        card.appendChild(cardBody);
        productItem.appendChild(card);
        catalogue.appendChild(productItem);
    });
}

// Filter products based on category
function filterProducts(category) {
    if (category === 'All') {
        loadProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        loadProducts(filteredProducts);
    }
}

// Initial load
window.onload = () => {
    loadCategories();
    loadProducts();
};
