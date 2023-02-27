const inputLogin = () => {
  const email = document.getElementsByClassName('trybewarts-login-input')[0].value;
  const password = document.getElementsByClassName('trybewarts-login-input')[1].value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
const habilitarEnvio = (event) => {
  const enviar = document.getElementById('submit-btn');
  if (event.target.checked) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
};
const alteraContador = (event) => {
  const contador = document.getElementById('counter');
  const caracteres = event.target.value.length;
  contador.innerHTML = `${500 - caracteres}`;
//   console.log(typeof(contador.innerHTML));
//   console.log(event.target.value.length);
};
window.onload = () => {
  const button = document.querySelector('#button-login');
  button.addEventListener('click', inputLogin);
  document.getElementById('submit-btn').disabled = true;
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', habilitarEnvio);
  const textarea = document.getElementsByTagName('textarea');
  textarea[0].addEventListener('input', alteraContador);
  console.log(textarea[0].length);
};


