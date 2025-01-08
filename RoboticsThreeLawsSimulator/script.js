window.onload = function() {
  
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('closePopup');

 
  setTimeout(() => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
  }, 500); 

 
  closePopupButton.addEventListener('click', function() {
    popup.style.opacity = '0';
    setTimeout(() => {
      popup.style.visibility = 'hidden';
    }, 300); 
  });
};

function simular() {
  const humanCount = document.getElementById("humanCount").value;
  const robotCount = document.getElementById("robotCount").value;
  const action = document.getElementById("actionSelect").value;
  const resultado = document.getElementById("resultado");
  const historicoLista = document.getElementById("historico-lista");

  if (humanCount <= 0 || robotCount <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos.";
    return;
  }

  let res = '';
  let risco = 0;

  switch (action) {
    case "salvarHumano":
      risco = 8;
      if (robotCount >= humanCount) {
        res = `${robotCount} robôs salvaram todos os ${humanCount} humanos em perigo!`;
      } else {
        res = `Somente ${robotCount} robôs foram capazes de salvar ${humanCount} humanos, causando risco de falha.`;
      }
      break;
    case "ajudarTarefas":
      risco = 3;
      res = `Os robôs estão ajudando nas tarefas, com risco baixo de falha.`;
      break;
    case "analisarAmbiente":
      risco = 5;
      res = `Os robôs estão analisando o ambiente para garantir a segurança.`;
      break;
    case "interagirHumano":
      risco = 4;
      res = `Os robôs estão interagindo com os humanos para fornecer assistência.`;
      break;
    default:
      res = "Ação desconhecida.";
  }

  resultado.innerHTML = `${res} (Risco: ${risco})`;

  const listItem = document.createElement("li");
  listItem.textContent = `${res} (Risco: ${risco})`;
  historicoLista.appendChild(listItem);
}
