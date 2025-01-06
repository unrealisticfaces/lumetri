const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const details = item.querySelector('.item-details');
        const itemRect = item.getBoundingClientRect();
        const detailsRect = details.getBoundingClientRect();

        // Check if details would go off-screen to the right
        if (itemRect.right + detailsRect.width > window.innerWidth) {
            details.style.left = 'auto';
            details.style.right = '0';
        } else {
            details.style.left = '0';
            details.style.right = 'auto';
        }

        // Check if details would go off-screen at the bottom
        if (itemRect.bottom + detailsRect.height > window.innerHeight) {
            details.style.top = 'auto';
            details.style.bottom = '100%';
        } else {
            details.style.top = '0';
            details.style.bottom = 'auto';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar');
    const itemsGrid = document.getElementById('itemsGrid');
    const items = itemsGrid.querySelectorAll('.item');

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();

        items.forEach(item => {
            const itemName = item.querySelector('.item-info h3').textContent.toLowerCase();
            const itemType = item.querySelector('.item-details .type').textContent.toLowerCase();
            const itemPlatform = item.querySelector('.item-details .platform').textContent.toLowerCase();

            const match = itemName.includes(searchTerm) || itemType.includes(searchTerm) || itemPlatform.includes(searchTerm);

            item.classList.toggle('hidden', !match); // Use a class to hide/show
        });
    });
});

// Function for dynamic positioning of item details (Keep this part as it is)


items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const details = item.querySelector('.item-details');
        const itemRect = item.getBoundingClientRect();
        const detailsRect = details.getBoundingClientRect();

        // Check if details would go off-screen to the right
        if (itemRect.right + detailsRect.width > window.innerWidth) {
            details.style.left = 'auto';
            details.style.right = '0';
        } else {
            details.style.left = '0';
            details.style.right = 'auto';
        }

        // Check if details would go off-screen at the bottom
        if (itemRect.bottom + detailsRect.height > window.innerHeight) {
            details.style.top = 'auto';
            details.style.bottom = '100%';
        } else {
            details.style.top = '0';
            details.style.bottom = 'auto';
        }
    });
});