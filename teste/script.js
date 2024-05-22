const modal = document.getElementById("modal");
const modalClose = document.getElementById("close");
const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");
const gerarQRCodeBtn = document.getElementById("gerar-qrcode");

finalizarCompraBtn.addEventListener("click", function() {
    modal.style.display = "block";
    document.getElementById("numero-usuario").style.display = "block";
    document.getElementById("name-usuario").style.display = "block";
    document.getElementById("gerar-qrcode").style.display = "block";
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("alert").style.display = "none";
});

modalClose.addEventListener("click", function() {
    modal.style.display = "none";
    document.getElementById("alert").style.display = "none";
});

gerarQRCodeBtn.addEventListener("click", function() {
    const numeroUsuario = document.getElementById("numero-usuario").value;
    const nameUsuario = document.getElementById("name-usuario").value;
    document.getElementById("numero-usuario").value = "";
    document.getElementById("name-usuario").value = "";
    // Aqui você pode gerar o QR Code com base no número do usuário
    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = `<img src="image.png?phone=${numeroUsuario}" name=${nameUsuario} alt="QR Code" id="QrCodeImg">`;

    // Simulando o pagamento (após o pagamento real, você pode chamar a função enviarMensagemConfirmacao)
    setTimeout(function() {
        document.getElementById("alert").style.display = "block";
        enviarMensagemConfirmacao(numeroUsuario, nameUsuario);
    }, 5000); // Simulando um tempo de 5 segundos antes de enviar a mensagem
});

// Função fictícia para simular o envio da mensagem de confirmação
function enviarMensagemConfirmacao(numero, name) {
    const alert = document.getElementById("alert");
    alert.innerHTML = `Olá ${name} mensagem de confirmação enviada para o número: ${numero}`;
    
}


//qrCode
gerarQRCodeBtn .addEventListener("click", function() {
    document.getElementById("numero-usuario").style.display = "none";
    document.getElementById("name-usuario").style.display = "none";
    document.getElementById("gerar-qrcode").style.display = "none";
    document.getElementById("qrcode").style.display = "block";
});