let nome1 = formulario.nome.value
let email1 = formulario.email.value
let senha1= formulario.senha.value
let select1 = formulario.select.value

let nome = formulario.nome
let email = formulario.email
let senha = formulario.senha
let select = formulario.select
 
function validarFormulario(){
    if (nome1 == '') {
        nome.style.border = "1px solid red";
        alert ('preencha o campo nome!')
      }else{
          nome.style.border = "none"
      }
      if (email1 == '') {
          email.style.border = "1px solid red";
          alert ('Preencha o campo email!')
      }else{
          email.style.border = "none";
      }
        if (senha1 == '') {
          senha.style.border = "1px solid red";
          alert ('Preencha o campo senha!')    
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
