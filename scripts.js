const items = document.querySelector("ul")
const input = document.querySelector("form input")
const form = document.querySelector("form")
const alertBox = document.querySelector("#alert-box")
const close = document.querySelector("#alert-box p + img")

// Função para adicionar novo item à lista.
function addItem(text) {
  const newItem = document.createElement("li")
  const checkbox = document.createElement("input")
  const itemText = document.createElement("p")
  const deleteBtn = document.createElement("img")
  
  checkbox.type = "checkbox"
  checkbox.className = "item-checkbox"
  
  itemText.textContent = text
  
  deleteBtn.src = "assets/icons/delete.svg"
  deleteBtn.alt = "Ícone de delete"

  deleteBtn.addEventListener("click", () => {
    newItem.remove()
    showAlertBox("O item foi removido da lista")
  })
  
  newItem.append(checkbox, itemText, deleteBtn)
  newItem.classList.add("item")

  items.prepend(newItem)
}

// Evento de submit que ao enviar, adiciona novo item à lista.
form.addEventListener("submit", (event) => {
  event.preventDefault()

  if(input.value.trim() === "") {
    showAlertBox("Digite algo antes de adicionar!")
    return
  }  

  addItem(input.value)
  input.value = ""
})

// Função para mostrar o alerta ao remover item da lista.
function showAlertBox(message) {
  alertBox.querySelector("p").textContent = message
  alertBox.classList.add("show-alert")
}

// Evento de click que ao clicar no X, fecha o alerta.
close.addEventListener("click", () => {
  hideAlertBox()
})

// Função para esconder o alerta.
function hideAlertBox() {
  alertBox.classList.remove("show-alert")
}
