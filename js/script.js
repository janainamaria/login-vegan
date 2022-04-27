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
      nome.style.border = "2px solid red";
      alert('preencha o campo nome!')
    }
    if (email1 == '') {
        email.style.border = "2px solid red";
        alert('preencha o campo email!')
      }
      if (senha1 == '') {
        senha.style.border = "2px solid red";
        alert('preencha o campo nome!')
      }
      if (select1 == '') {
        select.style.border = "2px solid red";
        alert('preencha o campo nome!')
      }
}
