const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generate');
const downloadBtn = document.getElementById('download');


const qrBody = document.querySelector('.qr-body');


let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
})
downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-code img');
    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href',imgAttr);
    }
    else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
    }
})

function isEmptyInput(){
    // if(qrText.value.length>0){
    //     generateQrCode();
    // }
    // else{
    //     alert('Enter a text or URL')
    // }

    qrText.value.length > 0 ? generateQrCode() : alert('Enter a text or URL');
}

function generateQrCode(){
    qrBody.innerHTML = '';
    new QRCode(qrBody,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}