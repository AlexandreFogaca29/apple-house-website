const recuperarSenha = (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("email").value.trim();
  const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioEncontrado = usuariosSalvos.find(
    (user) => user.email === emailInput,
  );

  if (usuarioEncontrado) {
    alert(
      `Instruções de redefinição de senha foram enviadas para o e-mail: ${emailInput}`,
    );
    window.location.href = "../login/login.html";
  } else {
    alert(
      "E-mail não encontrado em nossa base de cadastros. Verifique o endereço digitado ou faça seu cadastro.",
    );
  }
};
