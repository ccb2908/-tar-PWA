async function responder() {
  const input = document.getElementById("userInput").value.trim();
  const respostaDiv = document.getElementById("resposta");

  if (!input) {
    respostaDiv.textContent = "Digite algo para que eu possa responder.";
    return;
  }

  respostaDiv.textContent = "Pensando...";

  try {
    const response = await fetch("https://ataraapp-apl.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();

    if (data && data.reply) {
      respostaDiv.textContent = data.reply;
    } else {
      respostaDiv.textContent = "Resposta inesperada da IA.";
    }
  } catch (error) {
    respostaDiv.textContent = "Erro ao tentar se conectar com Ātarā.";
    console.error(error);
  }
}
