document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        { name: "Qiyma Kabob", description: "Mazzali Qiyma go'shtida bo'lgan shashlik.", img: "assets/qiyma.jpg" },
        { name: "Qiyma G'ijdivon", description: "Mazzali Qiyma go'shtidan bo'lgan shashlik.", img: "assets/gijdivon1.jpg" },
        { name: "Adana Kabob", description: "Ko'mirda pishirilgan qiyma qo'zi go'shtidan iborat turk taomi.", img: "assets/adana kabob.jpg" },
        // More menu items here...
    ];

    const menuGrid = document.querySelector('.menu-grid');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;

        menuGrid.appendChild(menuItem);
    });
});
