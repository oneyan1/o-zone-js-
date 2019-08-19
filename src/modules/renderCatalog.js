import filter from './filter';

export default function renderCatalog() {
    let cards = document.querySelectorAll(".goods .card");
    let catalogList = document.querySelector(".catalog-list");
    let catalogBnt = document.querySelector(".catalog-button");
    let catalogWrap = document.querySelector(".catalog");
    let category = new Set();
    let filterTitle = document.querySelector(".filter-title h5");

    cards.forEach((item) => {
        category.add(item.dataset.category);
    });

    category.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        catalogList.appendChild(li);
    });

    let allLi = catalogList.querySelectorAll("li");

    catalogBnt.addEventListener("click", (event) => {
        if (catalogWrap.style.display) {
            catalogWrap.style.display = "";
        }
        else {
            catalogWrap.style.display = "block";
        }

        if (event.target.tagName == "LI") {
            allLi.forEach((item) => {
                if (item === event.target) {
                    item.classList.add("active");
                }
                else {
                    item.classList.remove("active");
                }
            });
            filterTitle.textContent = event.target.textContent;
            filter();
        }
    });
}