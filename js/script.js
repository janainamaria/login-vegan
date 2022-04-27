function validarFormulario(){
    let nome1 = formulario.nome.value
    let email1 = formulario.email.value
    let senha1= formulario.senha.value
    let select1 = formulario.select.value

    let nome = formulario.nome
    let email = formulario.email
    let senha = formulario.senha
    let select = formulario.select

    if (nome1 == '') {
      nome.style.border = "1px solid red";
      
    }else{
        nome.style.border = "none";
    }
    if (email1 == '') {
        email.style.border = "1px solid red";
    }else{
        nome.style.border = "none";
    }
      if (senha1 == '') {
        senha.style.border = "1px solid red";    
    }else{
        nome.style.border = "none";
    }
    if (select1 == '') {
        select.style.border = "1px solid red";
    }else{
        nome.style.border = "none";
    }
}