//скролл кнопки
document.getElementById("button1").addEventListener("click",function() {
    document.querySelector(".form").scrollIntoView({ behavior: "smooth" });;
})
document.getElementById("button2").addEventListener('click',function() {
    document.querySelector(".slider").scrollIntoView({ behavior: "smooth" });;
})

//кнопка отправки
document.getElementById("send_btn").addEventListener("click", ()=>{
    alert("Форма отправлена");
})

//смена цвета при переключении тумблера
const checkbox = document.getElementById("check1");
const block = document.querySelector(".block");

checkbox.addEventListener("change", () => {
if (checkbox.checked) {
    block.style.background = "#897ACC";
} 
else {
    block.style.background = "linear-gradient(to right,#897ACC, #CC29A3, #F23051)";
}
});

//аккордеон
const accordion_headers = document.querySelectorAll(".accordion_header");

accordion_headers.forEach((header) => {
    header.addEventListener("click", () => {
        const accordion = header.parentElement;
        const accordion_text = accordion.querySelector(".accordion_text");
        //открыть/закрыть
        accordion_text.classList.toggle("active");
    });
});

//закрытие аккордеона при нажатии на текст
const accordion_texts = document.querySelectorAll(".accordion_text");

accordion_texts.forEach((text) => {
    text.addEventListener("click", () => {
        text.classList.remove("active");
    });
});

//маска для номера
Inputmask({mask: "8 999 999 99 99", showMaskOnHover: false, showMaskOnFocus: true}).mask(document.getElementById("phone"));