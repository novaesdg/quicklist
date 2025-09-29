const items = document.querySelector("ul")
const input = document.querySelector("form input")
const form = document.querySelector("form")

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
  deleteBtn.style.cursor = "pointer"
  
  newItem.append(checkbox, itemText, deleteBtn)
  
  newItem.classList.add("item")
  
  items.prepend(newItem)
}

// Evento de submit que ao enviar, adiciona novo item à lista.
form.addEventListener("submit", (event) => {
  event.preventDefault()

  if(input.value.trim() === "") {
    alert("Digite algo antes de adicionar!")
    return
  }  

  addItem(input.value)
  input.value = ""
})
