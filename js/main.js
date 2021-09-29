function changeMenuToVertical() {
  let menu = document.querySelector('.btn-group-vertical')
  menu.classList.add('btn-group-horizontal')
  menu.classList.remove('btn-group-vertical')
}

function changeJumbotron() {
  let jumbotron = document.querySelector('.jumbotron')
  jumbotron.classList.add('text-right', 'bg-secondary', 'text-white')

  let btn = jumbotron.querySelector('.btn')
  btn.classList.add('btn-success')
  btn.classList.remove('btn-primary')
}

function changeThirdCardColor() {
  let thirdCard = document.querySelectorAll('.card')[2]

  let btn = thirdCard.querySelector('.btn')
  btn.classList.add('btn-success')
  btn.classList.remove('btn-primary')
}

function addNewListItems() {
  let list = document.querySelector('.list-group')

  const createItem = (text) => {
    let item = document.createElement('li')
    item.classList.add('list-group-item')
    item.appendChild(document.createTextNode(text))
    list.appendChild(item)
  }

  createItem('Quarto item')
  createItem('Quinto item')

  list.querySelectorAll('.list-group-item')[0].classList.remove('active')
  list.querySelectorAll('.list-group-item')[3].classList.add('active')
}

changeMenuToVertical()
changeJumbotron()
changeThirdCardColor()
addNewListItems()
