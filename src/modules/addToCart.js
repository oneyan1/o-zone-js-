export default function addToCart() {
    //add items to a card
    // tu oniej przepisać z użyciem event 
    // let cardsWrap = document.querySelector(".goods");

    let cards = document.querySelectorAll(".goods .card");
    let cartWrap = document.querySelector(".cart-wrapper");
    let cartEmpty = document.getElementById("cart-empty");
    let countItems = document.querySelector(".counter");

    cards.forEach((item) => {
        let btn = item.querySelector("button");
        btn.addEventListener("click", () => {
            let newCard = item.cloneNode(true);
            cartWrap.appendChild(newCard);
            showQuantity();


            let removeBtn = newCard.querySelector(".btn");
            removeBtn.textContent = "Удалить из корзины";
            removeBtn.addEventListener("click", () => {
                cartWrap.removeChild(newCard);
                showQuantity();
            });
        });
    });

    function showQuantity() {
        let cardsCart = cartWrap.querySelectorAll(".card");
        let cardPrice = cartWrap.querySelectorAll(".card-price");
        let cardTotal = document.querySelector(".cart-total span");
        let sumTotal = 0;

        countItems.textContent = cardsCart.length;
        cardPrice.forEach((item) => {
            sumTotal += parseFloat(item.textContent);
        });
        cardTotal.innerHTML = sumTotal;

        if (cardsCart.length !== 0) {
            cartEmpty.remove()
        }
        else {
            cartWrap.appendChild(cartEmpty);
        }

    }
}