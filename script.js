

function validaEmail() {
  const regExp = /\S+@\S+\.\S+/
  if (regExp.test(email.value) == true) {
    alert ("email válido")
  } else {
    alert ("email inválido")
  }
}

