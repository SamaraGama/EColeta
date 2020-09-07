function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // Não refatorado: () => { return res.json() } 
    .then( states => {
        
        for ( const state of states ) {
            ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`
        }
        
    } )
}

populateUFs()

function getCity(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json() ) // Não refatorado: () => { return res.json() } 
    .then( cities => {
        
        for ( const city of cities ) {
            citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`
        }
        
        citySelect.disabled = false
    } )

}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCity)

//itens de coleta
//registra todos os li's 

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}
const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    
    // adiciona ou remove uma classe com JavaScript

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log('itemId: ', itemId)
    
    // verifica se há itens selecionados e, se positivo, os armazena
    
    const alreadySelected = selectedItems.findIndex ( item =>  {
        const itemFound = item == itemId // retorna true ou false
        return itemFound 
    })
    
    // se o item já estiver selecionado, é retirado da seleção
    if ( alreadySelected >= 0 ) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else { 
        // se o item não estiver selecionado, é incluído na seleção
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)
    
    // atualiza o campo escondido com os itens selecionados 
    collectedItems.value = selectedItems

    
}
