export default function getData() {
    let goodsWrap = document.querySelector(".goods");

    return fetch("../db/db.json")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(`No data was received: ${response.status}`);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
            goodsWrap.innerHTML = "<div style='color:red; font-size:30px;'>Упс, что-то пошло не так..</div>";

        });
}