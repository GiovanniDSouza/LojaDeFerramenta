///Chat

document.addEventListener('DOMContentLoaded', function() {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotChatbox = document.getElementById('chatbot-chatbox');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    chatbotIcon.addEventListener('click', function() {
        chatbotChatbox.style.display = 'flex';
        displayMenu();
    });

    chatbotClose.addEventListener('click', function() {
        chatbotChatbox.style.display = 'none';
    });

    chatbotSend.addEventListener('click', function() {
        handleUserInput(chatbotInput.value.trim());
    });

    chatbotInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            chatbotSend.click();
        }
    });

    function displayMenu() {
        const menu = `
            <div class="chatbot-message">
                <strong>Chatbot:</strong> Olá, sou a Deli sua assistente virtual! Como posso ajudar? Selecione uma das opções abaixo para que possa te auxiliar:<br>
                1. Tipos de chuveiro<br>
                2. Melhor opção para casa<br>
                3. Valores para comprar<br>
                Digite o número da opção desejada.
            </div>
        `;
        chatbotMessages.innerHTML = menu;
    }

    function handleUserInput(userMessage) {
        if (!userMessage) return;

        addMessage('Você', userMessage);

        switch (userMessage) {
            case '1':
                setTimeout(() => addMessage('Chatbot', 'Aqui estão alguns tipos de chuveiro: elétrico, a gás, solar e híbrido.'), 1000);
                break;
            case '2':
                setTimeout(() => addMessage('Chatbot', 'A melhor opção para casa depende das suas necessidades. Para eficiência, um chuveiro elétrico pode ser ideal. Para economia a longo prazo, considere um chuveiro solar.'), 1000);
                break;
            case '3':
                setTimeout(() => addMessage('Chatbot', 'Os preços variam bastante. Um chuveiro elétrico simples podem variar a partir de R$ 79,90 enquanto sistemas mais avançados, como solares, podem custar a partir de R$999,99.'), 1000);
                break;
            default:
                setTimeout(() => addMessage('Chatbot', 'Opção inválida. Por favor, digite 1, 2 ou 3 para selecionar uma opção do menu.'), 1000);
                break;
        }

        chatbotInput.value = '';
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
});

//Finalizar compra

document.addEventListener('DOMContentLoaded', function() {
  const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");
  const modal = document.getElementById("modal");
  const carrinhoTooltip = document.querySelector('.carrinho-tooltip');
finalizarCompraBtn.addEventListener("click", function() {

    carrinhoTooltip.style.display = "none";
    modal.style.display = "block";
    document.getElementById("numero-usuario").style.display = "block";
    document.getElementById("name-usuario").style.display = "block";
    document.getElementById("email-usuario").style.display = "block";
    document.getElementById("gerar-qrcode").style.display = "block";
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("alert").style.display = "none";
});
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("close");
modalClose.addEventListener("click", function() {
    modal.style.display = "none";
    document.getElementById("alert").style.display = "none";
});
});

document.addEventListener('DOMContentLoaded', function() {
  const gerarQRCodeBtn = document.getElementById("gerar-qrcode");
gerarQRCodeBtn.addEventListener("click", function() {
    const numeroUsuario = document.getElementById("numero-usuario").value;
    const nameUsuario = document.getElementById("name-usuario").value;
    const UserEmail= document.getElementById("email-usuario").value;
    document.getElementById("numero-usuario").value = "";
    document.getElementById("name-usuario").value = "";
    document.getElementById("email-usuario").value = "";
    // Aqui você pode gerar o QR Code com base no número do usuário
    const qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = `<img src="Files/image.png?phone=${UserEmail}" name=${nameUsuario} alt="QR Code" id="QrCodeImg">`;
    
    console.log(numeroUsuario,nameUsuario,UserEmail);
    // Simulando o pagamento (após o pagamento real, você pode chamar a função enviarMensagemConfirmacao)
    setTimeout(function() {
        document.getElementById("alert").style.display = "block";
        enviarMensagemConfirmacao(UserEmail, nameUsuario);
    }, 5000); // Simulando um tempo de 5 segundos antes de enviar a mensagem
});

});

// Função fictícia para simular o envio da mensagem de confirmação parte que mostra o número e o nome
function enviarMensagemConfirmacao(email, name) {
    const alert = document.getElementById("alert");
    alert.innerHTML = `Olá ${name} mensagem de confirmação enviada para o e-mail: ${email} `;
    
}


//qrCode
document.addEventListener('DOMContentLoaded', function() {
  const gerarQRCodeBtn = document.getElementById("gerar-qrcode");
gerarQRCodeBtn .addEventListener("click", function() {
    document.getElementById("numero-usuario").style.display = "none";
    document.getElementById("name-usuario").style.display = "none";
    document.getElementById("email-usuario").style.display = "none";
    document.getElementById("gerar-qrcode").style.display = "none";
    document.getElementById("qrcode").style.display = "block";
    document.getElementById("myModal").style.display = "none";
    document.getElementById("carrinho-items").innerHTML = "";
    document.getElementById("preco-total").innerHTML = "R$ 0.00";
});
});

//========================================



document.addEventListener('DOMContentLoaded', function() {
  // Obtém todos os elementos com a classe "controleDaImg"
  var produtos = document.querySelectorAll('.controleDaImg');

  // Adiciona um evento de clique a cada produto e botão de adicionar ao carrinho
  produtos.forEach(function(produto, index) {
      produto.addEventListener('click', function() {
          abrirModal(index);
      });

      var botaoAdicionar = produto.querySelector('.adicionar-carrinho');
      if (botaoAdicionar) {
          botaoAdicionar.addEventListener('click', function(event) {
              event.stopPropagation(); // Impede a propagação do evento de clique para o elemento pai (.controleDaImg)
              adicionarAoCarrinho(index);
          });
      }

      var botaoProdCarrinho = produto.querySelector('.prod-carrinho');
      if (botaoProdCarrinho) {
          botaoProdCarrinho.addEventListener('click', function(event) {
              event.stopPropagation(); // Impede a propagação do evento de clique para o elemento pai (.controleDaImg)
              adicionarAoCarrinho(index);
          });
      }
  });
});

// Função para abrir o modal com os detalhes do produto
function abrirModal(index) {
  var produto = produtos[index];
  var imgSrc = produto.imagem;
  var nomeProduto = produto.nome;
  var precoProduto = produto.preco.toFixed(2);

  // Preenche o modal com os detalhes do produto
  var modalContent = document.getElementById('modal-contentInfo');
  modalContent.innerHTML = `
      <div class="conatineModal">
          <img src="${imgSrc}" alt="principal">
          <div class="nota-produto" id="nota">
              <!-- Estrelas representando a nota do produto -->
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
          </div>
          <p class="produtoNames">${nomeProduto}</p>
          <p class="produtoNames">R$ ${precoProduto}</p>
          <div class="product-images">
              <img src="Files/Torneira.png" alt="Product 1 Image 1" onclick="trocarImagem(this)">
              <img src="${imgSrc}" alt="Product 1 Image 2" onclick="trocarImagem(this)">
          </div>
          <button class="adicionar-carrinho" data-index="${index}">Adicionar ao Carrinho</button>
          <p>${index}</p>
      </div>
  `;

  // Exibe o modal
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';

  // Fecha o modal quando o usuário clica no botão "Fechar" (X)
  var closeModal = document.querySelector('.close-button');
  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Fecha o modal quando o usuário clica fora da área do modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };
}
/* Função para trocar a imagem principal com a imagem clicada
function trocarImagem(img) {
    var imgPrincipal = document.querySelector('.conatineModal img[alt="principal"]');
    var imgSrc = img.src;
    img.src = imgPrincipal.src;
    imgPrincipal.src = imgSrc;
    console.log("oi")
  }*/
// Função para adicionar o produto ao carrinho
function adicionarAoCarrinho(index) {
  adicionarItemCarrinho(produtos[index]);
  document.getElementById("carrinho").style.visibility = "visible";
  document.querySelector('.carrinho-tooltip').style.display = "block";
}
