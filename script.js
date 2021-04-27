const userMailPhone = document.getElementById('user-email-phone');
document.getElementById("button-login").addEventListener("click", function(){
  alert(userMailPhone.value); //alert(document.getElementById('user-email-phone').value);
});

const buttonSubmit = document.getElementById('facebook-register');
const allInput = document.querySelectorAll('.input');
const form = document.querySelector('.form');
const rightContent = document.getElementsByClassName('right-content');

function mostrarCadastro() {
  const nome = allInput[0].value;
  const sobrenome = allInput[1].value;
  const emailTell = allInput[2].value;
  const nascimento = allInput[4].value;
  const genero = document.querySelector('input[type="radio"]:checked').value;
    
  rightContent[0].innerHTML = `Olá, ${nome} ${sobrenome}, <br>E-mail/Telefone: ${emailTell}, <br>
  Data de Nascimento: ${nascimento}, <br>Genêro: ${genero}.`;
}
function buttonListener() {
  buttonSubmit.addEventListener('click', function (event){
    event.preventDefault();
    confereInput();
  });
}
buttonListener();

function confereInput () {
  for (let index = 0; index < allInput.length; index += 1){
    if (allInput[index].value === ''){
      document.getElementById('invalido').innerHTML = 'Campos inválidos'; 
    }else {
      mostrarCadastro();
    }
  }
}

const idPersonalizado = document.getElementById('personalizado');
const inputRadio = document.getElementsByClassName('inputRadio');
let criaPersonalizado = document.createElement('input');

idPersonalizado.addEventListener('click', mostrarPesonalizado);
function mostrarPesonalizado() {
  criaPersonalizado.classList.add('personalizado');
  criaPersonalizado.placeholder='Gênero (opcional)';
  criaPersonalizado.name='gender-custom';
  form.appendChild(criaPersonalizado);
}
for (let index = 0; index < 2; index += 1){
  inputRadio[index].addEventListener('click', function(){
    if (inputRadio[index].checked === true){
      criaPersonalizado.remove();
    } 
  })
}
