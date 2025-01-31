function GenerateQRCode() {
    // Toggle button background color
    const btn = document.getElementById('btn');
    btn.style.backgroundColor = btn.style.backgroundColor === 'red' ? 'blue' : 'red';

    // Generate QR code
    const qrtext = document.getElementById('qrtext').value;
    const qrimage = document.getElementById('qrimage');
    if(qrtext){
      qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext);
      console.log("QR CODE GENERATED: ")
    }
  }