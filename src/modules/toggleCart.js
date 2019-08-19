export default function toggleCart() {
    let btnCart = document.getElementById("cart");
    let modalCart = document.querySelector(".cart");
    let modalClose = document.querySelector(".cart-close");

    btnCart.addEventListener("click", () => {
        modalCart.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    modalClose.addEventListener("click", () => {
        modalCart.style.display = "none";
        document.body.style.overflow = "";
    });
}