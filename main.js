const items = []

function addItem() {
    const itemName = document.querySelector("#item").value.trim()

  

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    items.map((item, index) => {
        sectionList.innerHTML += `
      <div class="item">
        <div>
          <input type="checkbox" name="list" id="item-${index}">
          <div class="custom-checkbox"></div>
          <label for="item-${index}">${item.name}</label>
        </div>
        <button onclick="removeItem(${index})">
          <img src="trash-icon.svg" alt="trash icon">
        </button>
      </div>`
    })
}

function removeItem(index) {
    items.splice(index, 1)
    showItemsList()

 
}

