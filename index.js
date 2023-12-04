let selectedProducts = 0;
const maxProducts = 6;
const productArray = [];

function updateProgress(event) {
    const clickedTile = event.currentTarget;
    const tileData = clickedTile.getAttribute('data-productName');

    if (selectedProducts < maxProducts) {
        selectedProducts++;
        updateButtonBackground();
        productArray.push(`${tileData}`);
        console.log(productArray);
    } else if (selectedProducts >= 6) {
        alert('Product Maximum')
    };

    const container = document.getElementById('added-items');
    container.innerHTML = '';
    productArray.forEach((product, index) => {
        const tile = document.createElement('div');
        tile.classList.add('product-tile');
        tile.innerHTML = `
            <h3>${product}</h3>
            <button class="remove-icon" data-index="${index}">X</button>
        `;

        container.appendChild(tile);
    });

    // Add event listeners to the new remove icons
    const removeIcons = container.querySelectorAll('.remove-icon');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeProduct);
    });
}

function removeProduct(event) {
    const clickedIndex = event.currentTarget.getAttribute('data-index');
    productArray.splice(clickedIndex, 1);
    selectedProducts--;
    updateButtonBackground();
    console.log(productArray);

    const container = document.getElementById('added-items');
    container.innerHTML = '';
    productArray.forEach((product, index) => {
        const tile = document.createElement('div');
        tile.classList.add('product-tile');
        tile.innerHTML = `
            <h3>${product}</h3>
            <button class="remove-icon" data-index="${index}">X</button>
        `;

        container.appendChild(tile);
    });

    // Add event listeners to the new remove icons
    const removeIcons = container.querySelectorAll('.remove-icon');
    removeIcons.forEach(icon => {
        icon.addEventListener('click', removeProduct);
    });
}

const productTiles = document.querySelectorAll('.product-tile');
productTiles.forEach(productTile => {
    productTile.addEventListener('click', updateProgress);
});

function updateButtonBackground() {
    const fillPercentage = (selectedProducts / maxProducts) * 100;
    const gradient = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${fillPercentage}%, #fff ${fillPercentage}%, #fff 100%)`;
    const continueButton = document.getElementById('box-submit');

    continueButton.style.background = gradient;

    if (selectedProducts === maxProducts) {
        continueButton.innerHTML = 'Proceed to Cart';
    } else {
        const remainingItems = maxProducts - selectedProducts;
        continueButton.innerHTML = `Add ${remainingItems} more item${remainingItems > 1 ? 's' : ''}`;
    }
}


// FEATURE LIST
// 1 - Add counter to tiles for how many times they've been added
// 2 - Add 'X' to added-items for deleting
// 3 - 'X' button functionality