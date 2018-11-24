// Main applicaiton java script

// CART functionality --------------------------------------------
let currentCart = getPendingCart()

function getPendingCart() {
  let pendCart = sessionStorage.getItem("bibliotecaCart")
  return JSON.parse(pendCart)
}

function storePendingCart(pendCart) {
  sessionStorage.setItem("bibliotecaCart", JSON.stringify(pendCart))
}

function removePendingCart() {
  sessionStorage.removeItem("bibliotecaCart")
}

function getSectionId(sectName, targetArr) {
  let sectId = undefined
  targetArr.forEach(section => {
    if (sectName === section.description) {
      sectId = section.id
    }
  });
  return sectId
}

function getSectionName(sectId, targetArr) {
  sectId = parseInt(sectId)
  let sectionName = undefined
  targetArr.forEach(section => {
    if (sectId === parseInt(section.id)) {
      sectionName = section.description
    }
  });
  return sectionName
}