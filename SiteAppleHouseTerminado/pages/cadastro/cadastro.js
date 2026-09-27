const cadastrarUsuario = (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmSenha = document.getElementById("confirmSenha").value.trim();
  const rg = document.getElementById("rg").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();
  const pais = document.getElementById("pais").value.trim();
  const dataNascimento = document.getElementById("dataNascimento").value;

  if (senha !== confirmSenha) {
    alert("As senhas não coincidem. Verifique e tente novamente.");
    return;
  }

  const listaRecuperada = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const emailExistente = listaRecuperada.some((user) => user.email === email);
  if (emailExistente) {
    alert(
      "Este e-mail já está cadastrado. Tente fazer login ou use outro e-mail.",
    );
    return;
  }

  const novaLista = [
    ...listaRecuperada,
    {
      nome,
      email,
      senha,
      rg,
      cpf,
      endereco,
      cep,
      cidade,
      estado,
      pais,
      dataNascimento,
    },
  ];

  localStorage.setItem("usuarios", JSON.stringify(novaLista));

  alert("Cadastro efetuado com sucesso!");
  window.location.href = "../login/login.html";
};
