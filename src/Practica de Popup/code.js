const openPopupBtn = document.getElementById("open-popup-btn");
openPopupBtn.addEventListener("click", function(){
    document.getElementsByClassName("popup")
    [0].classList.add("active");
})

const dismissPopupBtn = document.getElementById("dismiss-popup-btn");
dismissPopupBtn.addEventListener("click", function(){
    document.getElementsByClassName("popup")
    [0].classList.remove("active");
})