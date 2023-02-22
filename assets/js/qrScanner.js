let QRvalue = "";
var scanner;
    function openQRScanner(){
        scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: true });
        scanner.addListener('scan', function (content) {
            document.getElementById("scannedValue").style.display = "block"
            document.getElementById("scannedValue").innerHTML = "The Scanned QR Code is <b>"+content+"</b>";
            QRvalue = content;
            document.getElementById("preview").style.display = "none";
            scanner.stop();
            document.getElementById("popUpFooter").style.display = "block"
          });
          Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
             scanner.start(cameras[0]);
            } else {
             console.error('No cameras found.');
            }
          }).catch(function (e) {
            console.error(e);
          });
    }
    function assignQR(){
        document.getElementById("qrValue").innerHTML = "<b>"+QRvalue+"</b>";
    }
    function videoOff(){
        scanner.stop();
    }
    document.getElementById("newsectionbtn").onclick = function() {
        var container = document.getElementById("input-row");
        var section = document.getElementById("grid-pattern");
        container.appendChild(section.cloneNode(true));
        }