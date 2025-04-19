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

    favorites.forEach((fav, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.gap = "10px";
        li.style.marginBottom = "10px";

        const img = document.createElement("img");
        img.src = fav.imgSrc;
        img.style.width = "50px";
        img.style.height = "50px";
        img.style.borderRadius = "5px";
        img.style.objectFit = "cover";

        const name = document.createElement("span");
        name.textContent = fav.itemName;
        name.style.fontSize = "14px";
        name.style.color = "#555";

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.backgroundColor = "#ff4d4d";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.padding = "5px 10px";
        removeButton.style.borderRadius = "5px";
        removeButton.style.cursor = "pointer";
        removeButton.addEventListener("click", () => {
            const removedItem = favorites.splice(index, 1)[0];

            document.querySelectorAll(".favorite-icon").forEach(icon => {
                const item = icon.parentElement;
                const imgSrc = item.querySelector("img").src;
                if (imgSrc === removedItem.imgSrc) {
                    const heartIcon = icon.querySelector("i");
                    heartIcon.classList.remove("fas"); 
                    heartIcon.classList.add("far"); 
                }
            });

            updateFavoritesList();
        });

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(removeButton);
        favoritesList.appendChild(li);
    });
}






document.addEventListener("DOMContentLoaded", () => {
    const basket = [];
    const basketImg = document.querySelector(".basket-img");
    const basketPopup = document.createElement("div");
    basketPopup.classList.add("basket-popup");
    basketPopup.style.display = "none";
    basketPopup.style.position = "fixed";
    basketPopup.style.top = "70px";
    basketPopup.style.right = "30px";
    basketPopup.style.backgroundColor = "#fff";
    basketPopup.style.border = "1px solid #ccc";
    basketPopup.style.borderRadius = "8px";
    basketPopup.style.padding = "15px";
    basketPopup.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    basketPopup.style.zIndex = "1500";
    basketPopup.style.maxHeight = "300px";
    basketPopup.style.overflowY = "auto";

    const closeButton = document.createElement("span");
    closeButton.textContent = "x";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "18px";
    closeButton.style.color = "#333";
    closeButton.style.fontWeight = "bold";
    closeButton.addEventListener("click", () => {
        basketPopup.style.display = "none";
    });
    basketPopup.appendChild(closeButton);

    document.body.appendChild(basketPopup);

    document.querySelectorAll(".add-to-basket").forEach((button) => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("active")) {
                button.classList.add("active");
                button.textContent = "Added!";
                const item = button.closest(".item");
                const itemName = item.querySelector(".item-name").textContent;
                const itemPrice = item.querySelector(".item-price").textContent.replace("$", "");
                const itemImg = item.querySelector("img").src;

                basket.push({
                    name: itemName,
                    price: parseFloat(itemPrice),
                    img: itemImg,
                    quantity: 1
                });

                updateBasketPopup();
            }
        });
    });

    basketImg.addEventListener("click", () => {
        basketPopup.style.display =
            basketPopup.style.display === "none" ? "block" : "none";
    });

    function updateBasketPopup() {
        basketPopup.innerHTML = "<h3>Basket</h3>";
        basketPopup.appendChild(closeButton);
        if (basket.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.textContent = "Your basket is empty.";
            emptyMessage.style.color = "#555";
            emptyMessage.style.fontSize = "14px";
            emptyMessage.style.marginTop = "10px";
            basketPopup.appendChild(emptyMessage);
        } else {
            const ul = document.createElement("ul");
            basket.forEach((item, index) => {
                const li = document.createElement("li");
                li.style.display = "flex";
                li.style.alignItems = "center";
                li.style.justifyContent = "space-between";
                li.style.gap = "10px";
                li.style.marginBottom = "10px";
                li.style.width = "100%";
                li.style.flexWrap = "nowrap";
    
                const img = document.createElement("img");
                img.src = item.img;
                img.style.width = "50px";
                img.style.height = "50px";
                img.style.borderRadius = "5px";
                img.style.objectFit = "cover";
    
                const text = document.createElement("span");
                text.textContent = `${item.name} - $${(item.price * item.quantity).toFixed(2)}`;
                text.style.flex = "1";
                text.style.fontSize = "14px";
                text.style.color = "#333";
                text.style.whiteSpace = "nowrap";
                text.style.overflow = "hidden";
                text.style.textOverflow = "ellipsis";
    
                const quantityControls = document.createElement("div");
                quantityControls.style.display = "flex";
                quantityControls.style.alignItems = "center";
                quantityControls.style.gap = "5px";
    
                const decreaseBtn = document.createElement("button");
                decreaseBtn.textContent = "-";
                decreaseBtn.style.padding = "5px";
                decreaseBtn.style.cursor = "pointer";
                decreaseBtn.addEventListener("click", () => {
                    if (item.quantity > 1) {
                        item.quantity--;
                        updateBasketPopup();
                    }
                });
    
                const quantity = document.createElement("span");
                quantity.textContent = item.quantity;
                quantity.style.fontSize = "14px";
                quantity.style.fontWeight = "bold";
                quantity.style.minWidth = "20px";
                quantity.style.textAlign = "center";
    
                const increaseBtn = document.createElement("button");
                increaseBtn.textContent = "+";
                increaseBtn.style.padding = "5px";
                increaseBtn.style.cursor = "pointer";
                increaseBtn.addEventListener("click", () => {
                    item.quantity++;
                    updateBasketPopup();
                });
    
                quantityControls.appendChild(decreaseBtn);
                quantityControls.appendChild(quantity);
                quantityControls.appendChild(increaseBtn);
    
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.style.backgroundColor = "#ff4d4d";
                removeButton.style.color = "white";
                removeButton.style.border = "none";
                removeButton.style.padding = "5px 10px";
                removeButton.style.borderRadius = "5px";
                removeButton.style.cursor = "pointer";
                removeButton.style.flexShrink = "0";
                removeButton.style.width = "80px";
                removeButton.addEventListener("click", () => {
                    const removedItem = basket.splice(index, 1)[0];
    
                    document.querySelectorAll(".add-to-basket").forEach(button => {
                        const item = button.closest(".item");
                        const imgSrc = item.querySelector("img").src;
                        if (imgSrc === removedItem.img) {
                            button.classList.remove("active");
                            button.textContent = "Add to Basket +";
                        }
                    });
    
                    updateBasketPopup();
                });
    
                li.appendChild(img);
                li.appendChild(text);
                li.appendChild(quantityControls);
                li.appendChild(removeButton);
                ul.appendChild(li);
            });
            basketPopup.appendChild(ul);
        }
    }
});

