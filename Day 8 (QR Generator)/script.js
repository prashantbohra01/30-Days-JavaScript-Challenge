let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR(){
    
    if(qrText.value.length > 0){
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        qrText.style.borderColor = "red";
        showPopup();
        setTimeout(()=>{
             qrText.classList.remove('error');
             qrText.style.borderColor = "";
        }, 1000)
    }

}

function showPopup() {
    alert("Please enter some text to generate QR code."); // Display popup alert
}
