let selectedProducts = 0;
const maxProducts = 6;
const productArray = [];


function updateProgress(event) {
    const clickedTile = event.currentTarget;
    const tileInnerHTML = clickedTile.innerHTML;

    if (selectedProducts < maxProducts) {
        selectedProducts++;
        updateButtonBackground();
        highlightClickedTile(clickedTile);
        productArray.push(`${tileInnerHTML}`);
        console.log(productArray);
    } else if (selectedProducts >= 6) {
        alert('Product Maximum')
    }
}

const productTiles = document.querySelectorAll('.product-tile');
productTiles.forEach(productTile => {
    productTile.addEventListener('click', updateProgress);
})


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

function highlightClickedTile(tile) {
    tile.style.background = 'green';

    const removeIcon = document.createElement('button');
    removeIcon.classList.add('remove-icon');
    removeIcon.innerHTML = "x";
    tile.appendChild(removeIcon);
}

