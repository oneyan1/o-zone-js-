import filter from './filter';

export default function filterAndSearch() {
    let cards = document.querySelectorAll(".goods .card");
    let discCheckbox = document.querySelector("#discount-checkbox");
    let minInput = document.querySelector("#min");
    let maxInput = document.querySelector("#max");
    let search = document.querySelector(".search-wrapper_input");
    let searchBtn = document.querySelector(".search-btn");


    discCheckbox.addEventListener("click", filter);
    minInput.addEventListener("change", filter);
    maxInput.addEventListener("change", filter);

    searchBtn.addEventListener("click", () => {
        let searchText = new RegExp(search.value.trim(), "i");
        cards.forEach((item) => {
            let title = item.querySelector(".card-title");
            if (!searchText.test(title.textContent)) {
                item.parentNode.style.display = "none";
            }
            else {
                item.parentNode.style.display = "";
            }
        });
    });
}