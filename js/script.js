
function validarFormulario(){
  let nome = formulario.nome
  let email = formulario.email
  let senha = formulario.senha

  if (nome.value == '') {
    window.alert('nome não informado')
  }
  if (email.value == ''){
    window.alert('email não informado')
  }
  if (senha.value == '') {
    window.alert('senha não informado')
  }
}
