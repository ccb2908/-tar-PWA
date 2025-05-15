function responder(console.log) {
  const input = document.getElementById("userInput").value.trim();
  const respostaDiv = document.getElementById("resposta");

  if (input) {
    respostaDiv.textContent = `Ainda estou aprendendo, mas estou aqui para ouvir: "${input}"`;
  } else {
    respostaDiv.textContent = "Digite algo para que eu possa responder.";
  }
}
