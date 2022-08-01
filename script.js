const menu = [{
        id: 1,
        title: "aloe heat lotion",
        category: "skin-care",
        price: 64.50,
        img: "https://flptest.site/media/CACHE/images/catalog/product/photo/36/3654/365408a3/365408a365cb4555/a98b1d22f692c367524ead58076fba07.png",
        desc: "Aloe Heat Lotion is a pH-balanced, lubricating lotion designed for a soothing, relaxing massage."
    },
    {
        id: 2,
        title: "bee propolis",
        category: "bee-products",
        price: 34.90,
        img: "https://cdn.shopgo.me/20211215-store-l3m0/products/16172920/20935716.jpg?bg=ffffff&fit=contain&format=jpeg&width=500&enlarge=0",
        desc: "Propolis is the protective substance gathered and used by bees to disinfect and protect their hives."
    },
    {
        id: 3,
        title: "argi+sachets",
        category: "nutritional",
        price: 47.50,
        img: "https://myforeverwellness.com/wp-content/uploads/2020/11/Argi-POUCH_Styled-3_Final.jpg",
        desc: "Forever’s ARGI+ packs a lot more than delicious berry flavor into every stick pack."
    },
    {
        id: 4,
        title: "aloe lips",
        category: "skin-care",
        price: 3.48,
        img: "https://rhodes2safety.com/wp-content/uploads/2018/08/aloe-lips-3.jpg",
        desc: "Forever Aloe Lips is a lip balm that soothes and moisturizes dry and chapped lips."
    },
    {
        id: 5,
        title: "aloe liquid soap",
        category: "household",
        price: 16.87,
        img: "https://static.wixstatic.com/media/ad0cb5_2c9d9fc0498c45f6871ed5462eaa45c3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
        desc: "A beautiful and gentle pearlescent formula that gently washes away dirt and debris."
    },
    {
        id: 6,
        title: "forever kids",
        category: "nutritional",
        price: 13.52,
        img: "https://aloe-health.info/wp-content/uploads/forever_kids.jpg",
        desc: "Delicious, advanced multivitamin for kids Supports healthy growth and development."
    },
    {
        id: 7,
        title: "bee honey",
        category: "bee-products",
        price: 15.45,
        img: "https://3.imimg.com/data3/MF/DW/MY-3847402/forever-living-productsc-bee-honey.jpg",
        desc: "There's only one thing you'll find in a bottle of Forever Bee Honey® and that's pure, natural honey."
    },
    {
        id: 8,
        title: "balancing toner",
        category: "skin-care",
        price: 19.56,
        img: "https://pbs.twimg.com/media/Ez97kdiWQAIejcB.jpg",
        desc: "Balancing Toner removes any traces of dirt, makeup and other surface impurities without damaging the skin."
    },
    {
        id: 9,
        title: "aloe MPD 2x ultra",
        category: "household",
        price: 22.29,
        img: "https://sphinxphenix.files.wordpress.com/2019/02/mpd13.jpg?w=346",
        desc: "The addition of aloe vera makes this a gentle formula that’s safe for use on all types of clothes, leaving them clean."
    },
    {
        id: 10,
        title: "cardiohealth CoQ10",
        category: "nutritional",
        price: 29.94,
        img: "http://www.alojavera.net/uploaded/slike/forever-cardio-health.jpg",
        desc: "CoQ10 is a co-enzyme produced by the body that is shown to help support healthy heart function."
    }
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads 
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        console.log(item);

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            console.log(values);
            return values;

        },
        ["all"]
    );

    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
        ${category}
      </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}