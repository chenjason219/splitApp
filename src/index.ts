//Creates a person div with given name
//person can be deleted
//calculates price that person owes
//for tax, get users input

const evenSplit = document.querySelector('#evenSplit');

evenSplit?.addEventListener('submit', (event) => {
    event.preventDefault();
    const total = document.querySelector('#total') as HTMLFormElement;
    const people = document.querySelector('#people') as HTMLFormElement;
    const displayResult = document.querySelector('#displayResult') as HTMLElement;
    if(total.value && people.value){
        const result = Math.round((total.value / people.value) * 100) / 100;
        displayResult.innerHTML = result.toString();
    } else{
        alert('Please fill in all fields')
    }
})

//grabs persons input
const personInput = document.querySelector('.personInput') as HTMLFormElement;

//function that removes stuff
function removeItem(minusElement :any){
    minusElement.parentElement.remove();
}

function removePerson(this: any){
    this.parentElement.remove();
}

const items = document.querySelector('.items') as HTMLElement;

//adds another item input row
function addItem(){

    //creates container for items with class item
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    //creates the input elements
    const itemName = document.createElement('input');
    itemName.setAttribute('type', 'text');
    itemName.setAttribute('class', 'itemName');
    itemName.setAttribute('name', 'itemName[]');
    itemName.setAttribute('placeholder', 'item name');
    itemName.setAttribute('required', 'true');

    const itemPrice = document.createElement('input');
    itemPrice.setAttribute('type', 'number');
    itemPrice.setAttribute('class', 'itemPrice');
    itemPrice.setAttribute('name', 'itemPrice[]');
    itemPrice.setAttribute('placeholder', 'item price');
    itemPrice.setAttribute('step', '0.01');
    itemPrice.setAttribute('min', '0');
    itemPrice.setAttribute('required', 'true');

    //creates the minus span element
    const minus = document.createElement('span');
    minus.setAttribute('onclick', 'removeItem(this)');
    const minusText = document.createTextNode("-");
    minus.append(minusText);

    //creates the plus span element
    const plus = document.createElement('span');
    plus.setAttribute('onclick', 'addItem(this)');
    const plusText = document.createTextNode("+");
    plus.append(plusText);

    //appends to item div
    item.append(itemName);
    item.append(itemPrice);
    item.append(minus);
    item.append(plus);

    //appends item div to items div
    items.append(item);
}

//resets the item rows back to 1 after submission
function resetFields(){
    let itemFields = document.querySelectorAll('.item');
    itemFields.forEach(function(element, index){
        if(index > 0){
            element.remove();
        }
    })
}

//calculates total for people
function calculateData(){
    let itemPrices = personInput.querySelectorAll('.itemPrice');
    let itemNames = personInput.querySelectorAll('.itemName');
    let taxInput = personInput.querySelector('#tax') as HTMLInputElement;
    let tipInput = personInput.querySelector('#tip') as HTMLInputElement;
    let itemTotals: number = 0;
    itemPrices.forEach(price => {
        itemTotals += parseFloat((price as HTMLInputElement).value);
    })
    let taxValue = parseFloat(taxInput.value) / 100;
    let tipValue = parseInt(tipInput.value) / 100;

        //appends submitted inputs to person element
        let appendPerson = (finalPrice: any) => {
        
        //creates element we need to append to person
        const people = document.querySelector('.people') as HTMLElement;
        const personName = document.querySelector('#personName') as HTMLInputElement;
        const display = document.createElement('div');
        const displayName = document.createElement('h2');
        const deletePerson = document.createElement('button');
        deletePerson.setAttribute('class', 'deletePerson');
        deletePerson.innerText = 'Delete';
        displayName.innerHTML = `${personName.value.toUpperCase()} PAYS: $${finalPrice}`;
        const person = document.createElement('div');
        const list = document.createElement('ul');
        list.setAttribute('class', 'list');
        
        person.setAttribute('class', 'person');
        display.setAttribute('class', 'displayName');
        display.append(displayName);
        person.append(display);
        person.append(list);
        people.append(person);

        //appends a breakdown of the total price with item name and price
        for(let i = 0; i < itemNames.length; i++){
            const listItem = document.createElement('li');
            let itemName = itemNames[i];
            let itemPrice = itemPrices[i];
                
            listItem.innerHTML = `${(itemName as HTMLInputElement).value}: ${(itemPrice as HTMLInputElement).value}`;
            list.append(listItem);
        }
        
        const taxNtip = document.createElement('div');
        taxNtip.setAttribute('class', 'taxNtip');

        const taxDisplay = document.createElement('p');
        taxDisplay.setAttribute('class', 'taxDisplay');
        taxDisplay.innerHTML = `Tax: $${(itemTotals * taxValue).toFixed(2)}`;

        const tipDisplay = document.createElement('p');
        tipDisplay.setAttribute('class', 'tipDisplay');
        tipDisplay.innerHTML = `Tip: $${(tipValue * (itemTotals + (itemTotals * taxValue))).toFixed(2)}`;
        
        taxNtip.append(taxDisplay);
        taxNtip.append(tipDisplay);
        person.append(taxNtip);
        person.append(deletePerson);

        const removePeople = document.querySelectorAll('.deletePerson');
        removePeople.forEach(removeButton => {
        removeButton.addEventListener('click', removePerson);
        })
        }

    //calculations depending if tax or tip was entered
    if(tipValue === 0){
        let finalPrice = Math.round((itemTotals + (itemTotals * taxValue)) * 100) / 100;
        appendPerson(finalPrice);
    } else {
        let finalPrice = (Math.round((tipValue * (itemTotals + (itemTotals * taxValue))) * 100) / 100
                       + Math.round((itemTotals + (itemTotals * taxValue)) * 100) / 100).toFixed(2);
        appendPerson(finalPrice);
    }
}

//run functions on form submit
personInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateData();
    resetFields();
    personInput.reset();
});