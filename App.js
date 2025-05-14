function responder() {
  const input = document.getElementById("userInput").value.trim();
  const respostaDiv = document.getElementById("resposta");

  if (input) {
    respostaDiv.innerText = `Ainda estou aprendendo, mas estou aqui para ouvir: "${input}"`;
  } else {
    respostaDiv.innerText = "Digite algo para que eu possa responder.";
  }
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
