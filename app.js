function hideAllImgs() {
    let allimgs = document.querySelectorAll(".img-div img");
    allimgs.forEach(img => {
        img.style.display = "none";
    });
}

function showAllImgs() {
    let allimgs = document.querySelectorAll(".img-div img");
    allimgs.forEach(img => {
        img.style.display = "block";
    });
}

function showSeasonalImgs() {
    let seasonalImgs = document.getElementsByClassName("seasonal");
    for (let i = 0; i < seasonalImgs.length; i++) {
        seasonalImgs[i].style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showAllImgs();
});

document.querySelector(".seasonal-btn").addEventListener("click", () => {
    hideAllImgs();
    showSeasonalImgs();
});

document.querySelector(".best-sellers-btn").addEventListener("click", () => {
    hideAllImgs();
    let bestSellersImgs = document.getElementsByClassName("best-sellers");
    for (let i = 0; i < bestSellersImgs.length; i++) {
        bestSellersImgs[i].style.display = "block";
    }
});

document.querySelector(".gifting-btn").addEventListener("click", () => {
    hideAllImgs();
    let giftingImgs = document.getElementsByClassName("gifting");
    for (let i = 0; i < giftingImgs.length; i++) {
        giftingImgs[i].style.display = "block";
    }
});

document.querySelectorAll(".menu-div a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".img-div .item").forEach(item => {
            item.style.display = "none"; 
        });

        if (link.classList.contains("seasonal-btn")) {
            document.querySelectorAll(".img-div .seasonal").forEach(item => {
                item.parentElement.style.display = "block"; 
            });
        } else if (link.classList.contains("best-sellers-btn")) {
            document.querySelectorAll(".img-div .best-sellers").forEach(item => {
                item.parentElement.style.display = "block"; 
            });
        } else if (link.classList.contains("gifting-btn")) {
            document.querySelectorAll(".img-div .gifting").forEach(item => {
                item.parentElement.style.display = "block"; 
            });
        }
    });
});

document.querySelectorAll(".menu-div a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelectorAll(".menu-div a").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});





document.querySelector(".search-img").addEventListener("click", () => {
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.style.display = searchPopup.style.display === "block" ? "none" : "block";
});

document.querySelector("#search-btn").addEventListener("click", () => {
    const searchValue = document.querySelector("#search-input").value.toLowerCase();
    const items = document.querySelectorAll(".img-div .item");

    items.forEach(item => {
        const itemName = item.querySelector(".item-name").textContent.toLowerCase();
        if (itemName.includes(searchValue)) {
            item.style.display = "block"; 
        } else {
            item.style.display = "none"; 
        }
    });
});




document.querySelector("#search-btn").addEventListener("click", () => {
    const searchValue = document.querySelector("#search-input").value.toLowerCase(); 
    const items = document.querySelectorAll(".img-div .item"); 
    const searchResults = document.querySelector(".search-results"); 
    const noResultMessage = document.querySelector(".no-result");
    let found = false;

    searchResults.innerHTML = "";

    items.forEach(item => {
        const itemName = item.querySelector(".item-name").textContent.toLowerCase(); 
        if (itemName.includes(searchValue)) {
            const resultItem = document.createElement("div");
            resultItem.textContent = item.querySelector(".item-name").textContent; 
            resultItem.classList.add("result-item");
            resultItem.style.cursor = "pointer";

            resultItem.addEventListener("click", () => {
                items.forEach(i => i.style.border = "none"); 
                item.style.border = "2px solid #fac564";
                item.scrollIntoView({ behavior: "smooth", block: "center" }); 
            });

            searchResults.appendChild(resultItem); 
            found = true; 
        }
    });

    if (!found) {
        noResultMessage.style.display = "block"; 
    } else {
        noResultMessage.style.display = "none"; 
    }
});




document.querySelector(".account-img").addEventListener("click", () => {
    window.location.href = "./register.html"; 
});





const favorites = [];

document.querySelectorAll(".favorite-icon").forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.stopPropagation(); 

        const item = icon.parentElement; 
        const imgSrc = item.querySelector("img").src;
        const itemName = item.querySelector(".item-name").textContent;
        const heartIcon = icon.querySelector("i");

        if (favorites.some(fav => fav.imgSrc === imgSrc)) {
            const index = favorites.findIndex(fav => fav.imgSrc === imgSrc);
            favorites.splice(index, 1);
            heartIcon.classList.remove("fas"); 
            heartIcon.classList.add("far"); 
        } else {
            favorites.push({ imgSrc, itemName });
            heartIcon.classList.remove("far"); 
            heartIcon.classList.add("fas"); 
        }

        updateFavoritesList();
    });
});

function updateFavoritesList() {
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = ""; 

    favorites.forEach(fav => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = fav.imgSrc;
        const name = document.createElement("span");
        name.textContent = fav.itemName;

        li.appendChild(img);
        li.appendChild(name);
        favoritesList.appendChild(li);
    });
}

document.querySelector(".wish-img").addEventListener("click", () => {
    const favoritesPopup = document.querySelector(".favorites-popup");
    favoritesPopup.style.display = favoritesPopup.style.display === "block" ? "none" : "block";
});




document.querySelector(".close-btn").addEventListener("click", () => {
    const favoritesPopup = document.querySelector(".favorites-popup");
    favoritesPopup.style.display = "none";
});




document.querySelector(".close-search-btn").addEventListener("click", () => {
    const searchPopup = document.querySelector(".search-popup");
    searchPopup.style.display = "none"; 
});




function updateFavoritesList() {
    const favoritesList = document.getElementById("favorites-list");
    favoritesList.innerHTML = ""; 

    favorites.forEach(fav => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = fav.imgSrc;
        const name = document.createElement("span");
        name.textContent = fav.itemName;

        const quantityControls = document.createElement("div");
        quantityControls.classList.add("quantity-controls");

        const decreaseBtn = document.createElement("button");
        decreaseBtn.textContent = "-";
        decreaseBtn.classList.add("decrease-btn");

        const quantity = document.createElement("span");
        quantity.textContent = "0";
        quantity.classList.add("quantity");

        const increaseBtn = document.createElement("button");
        increaseBtn.textContent = "+";
        increaseBtn.classList.add("increase-btn");

        increaseBtn.addEventListener("click", () => {
            quantity.textContent = parseInt(quantity.textContent) + 1;
        });

        decreaseBtn.addEventListener("click", () => {
            const currentQuantity = parseInt(quantity.textContent);
            if (currentQuantity > 0) {
                quantity.textContent = currentQuantity - 1;
            }
        });

        quantityControls.appendChild(decreaseBtn);
        quantityControls.appendChild(quantity);
        quantityControls.appendChild(increaseBtn);

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(quantityControls);
        favoritesList.appendChild(li);
    });
}