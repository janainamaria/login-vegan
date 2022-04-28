function validarFormulario(){
    let nome1 = formulario.nome.value
    let email1 = formulario.email.value
    let senha1= formulario.senha.value
    let select1 = formulario.select.value

    let nome = formulario.nome
    let email = formulario.email
    let senha = formulario.senha
    let select = formulario.select

    let camponome = document.getElementById("pnome")
    let campoemail = document.getElementById("pemail")
    let camposenha = document.getElementById("psenha")

    if (nome1 == '') {
        nome.style.border = "1px solid red";
        camponome.innerHTML = 'Preencha este campo!'
      }else{
          nome.style.border = "none"
          camponome.style.display = "none"
      }
      if (email1 == '') {
          email.style.border = "1px solid red";
          campoemail.innerHTML = 'Preencha este campo!'
      }else{
          email.style.border = "none";
      }
        if (senha1 == '') {
          senha.style.border = "1px solid red";
          camposenha.innerHTML = 'Preencha este campo!'    
      }else{
          senha.style.border = "none";
      }
      if (select1 == '') {
          select.style.border = "1px solid red";
          alert ('Preencha o campo select!')
      }else{
          select.style.border = "none";
      }
}
