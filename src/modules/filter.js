export default function filter() {
    let cards = document.querySelectorAll(".goods .card");
    let discCheckbox = document.querySelector("#discount-checkbox");
    let minInput = document.querySelector("#min");
    let maxInput = document.querySelector("#max");
    let activeLi = document.querySelector(".catalog-list .active");

    cards.forEach((item) => {
        let cardPrice = item.querySelector(".card-price");
        let price = parseFloat(cardPrice.textContent);
        let discount = item.querySelector(".card-sale");

        item.parentNode.style.display = "";

        if ((minInput.value && price < minInput.value) || maxInput.value && price > maxInput.value) {
            item.parentNode.style.display = "none";
        }
        else if (discCheckbox.checked && !discount) {
            item.parentNode.style.display = 'none';
        }
        else if (activeLi) {
            if (item.dataset.category !== activeLi.textContent) {
                item.parentNode.style.display = "none";
            }
        }

    });
}