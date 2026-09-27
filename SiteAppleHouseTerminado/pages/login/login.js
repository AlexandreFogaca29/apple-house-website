const validarLogin = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioEncontrado = usuariosSalvos.find(
    (user) => user.email === email && user.senha === senha,
  );

  if (usuarioEncontrado) {
    alert("Login realizado com sucesso! Bem-vindo, " + usuarioEncontrado.nome);
    window.location.href = "../../index.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }
};
