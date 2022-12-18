"use strict";
const evenSplit = document.querySelector('#evenSplit');
evenSplit === null || evenSplit === void 0 ? void 0 : evenSplit.addEventListener('submit', (event) => {
    event.preventDefault();
    const total = document.querySelector('#total');
    const people = document.querySelector('#people');
    const displayResult = document.querySelector('#displayResult');
    if (total.value && people.value) {
        const result = Math.round((total.value / people.value) * 100) / 100;
        displayResult.innerHTML = result.toString();
    }
    else {
        alert('Please fill in all fields');
    }
});
const personInput = document.querySelector('.personInput');
function removeItem(minusElement) {
    minusElement.parentElement.remove();
}
function removePerson() {
    this.parentElement.remove();
}
const items = document.querySelector('.items');
function addItem() {
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
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
    const minus = document.createElement('span');
    minus.setAttribute('onclick', 'removeItem(this)');
    const minusText = document.createTextNode("-");
    minus.append(minusText);
    const plus = document.createElement('span');
    plus.setAttribute('onclick', 'addItem(this)');
    const plusText = document.createTextNode("+");
    plus.append(plusText);
    item.append(itemName);
    item.append(itemPrice);
    item.append(minus);
    item.append(plus);
    items.append(item);
}
function resetFields() {
    let itemFields = document.querySelectorAll('.item');
    itemFields.forEach(function (element, index) {
        if (index > 0) {
            element.remove();
        }
    });
}
function calculateData() {
    let itemPrices = personInput.querySelectorAll('.itemPrice');
    let itemNames = personInput.querySelectorAll('.itemName');
    let taxInput = personInput.querySelector('#tax');
    let tipInput = personInput.querySelector('#tip');
    let itemTotals = 0;
    itemPrices.forEach(price => {
        itemTotals += parseFloat(price.value);
    });
    let taxValue = parseFloat(taxInput.value) / 100;
    let tipValue = parseInt(tipInput.value) / 100;
    let appendPerson = (finalPrice) => {
        const people = document.querySelector('.people');
        const personName = document.querySelector('#personName');
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
        for (let i = 0; i < itemNames.length; i++) {
            const listItem = document.createElement('li');
            let itemName = itemNames[i];
            let itemPrice = itemPrices[i];
            listItem.innerHTML = `${itemName.value}: ${itemPrice.value}`;
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
        });
    };
    if (tipValue === 0) {
        let finalPrice = Math.round((itemTotals + (itemTotals * taxValue)) * 100) / 100;
        appendPerson(finalPrice);
    }
    else {
        let finalPrice = (Math.round((tipValue * (itemTotals + (itemTotals * taxValue))) * 100) / 100
            + Math.round((itemTotals + (itemTotals * taxValue)) * 100) / 100).toFixed(2);
        appendPerson(finalPrice);
    }
}
personInput === null || personInput === void 0 ? void 0 : personInput.addEventListener('submit', (event) => {
    event.preventDefault();
    calculateData();
    resetFields();
    personInput.reset();
});
//# sourceMappingURL=index.js.map