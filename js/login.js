let usuario1 = formulario.usuario.value
let senha1 = formulario.senha.value

let usuario = formulario.usuario
let senha = formulario.senha

let campousuario = document.getElementById("p1")
let camposenha = document.getElementById("p2")

function validarFormulario(){
    if (usuario1 == '') {
        usuario.style.border = "1px solid red";
        campousuario.innerHTML = 'Preencha este campo!'
      }else{
          usuario.style.border = "none"
      }
     if (senha1 == '') {
          senha.style.border = "1px solid red";
          camposenha.innerHTML = 'Preencha este campo!'
      }else{
          senha.style.border = "none";
      }
}
