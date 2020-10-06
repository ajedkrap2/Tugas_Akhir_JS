function buat_login() {
  let elem = document.getElementById("x")
  elem.parentElement.removeChild(elem)

  let element = document.getElementsByTagName("div")[0]

  let p = document.createElement('p')

  let form = document.createElement("form")
  let submit = document.createElement("button")

  p.className = "tulisan_login"
  p.innerHTML = "SILAHKAN MENDAFTAR"
  submit.className = "tombol_login"
  submit.innerHTML = "DAFTAR SEKARANG"

  element.appendChild(p)
  element.appendChild(form)
  addInput("user", form)
  addInput("handphone", form)
  addInput("username", form)
  addInput("password", form)
  form.appendChild(submit)
}

function addInput(string ,form){
  let label = document.createElement("label")
  let input = document.createElement("input")
  label.innerHTML = capitalize(string);
  input.type = "text"
  input.className = "form_login"
  switch(string) {
    case "user":
      label.innerHTML = "Nama " + label.innerHTML;
      input.placeholder = "Nama "+string+".."
      break
    case "handphone":
      label.innerHTML = "Nomor " + label.innerHTML;
      input.placeholder = "Nomor "+string+"."
      break
    case "username":
      input.placeholder = capitalize(string)+" atau email .."
      break
    case "password":
      input.type = string.toLowerCase()
      input.placeholder = capitalize(string)+" .."
      break
    default:
      break
  }
  form.appendChild(label)
  form.appendChild(input)
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
