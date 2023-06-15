const qrBtn = document.querySelector("button");
const qrInput = document.querySelector("input");
const qrImgBox = document.querySelector(".qr-img");
const qrImage = document.querySelector("img");

qrBtn.addEventListener("click", () => {
    let inputValue = qrInput.value;

    if (!inputValue) {
        return alert("سید یه متن وارد کن !")
    }
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    qrBtn.innerHTML = "درحال تولید QR Code"

    qrImage.addEventListener("load", () => {
        qrImgBox.classList.remove("hidden");
        qrBtn.innerHTML = "تولید QR Code";
    })

})
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
      qrImgBox.classList.add("hidden");
    }
    
})

