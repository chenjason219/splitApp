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
const personInput = document.querySelector('#personInput');
const people = document.querySelector('.people');
const deleteBtn = document.querySelector('delete');
function removeParent() {
    this.parentElement.remove();
}
const addPerson = () => {
    const createPerson = document.createElement('div');
    const displayName = document.createElement('h1');
    const newItem = document.createElement('button');
    const remove = document.createElement('button');
    const personName = document.querySelector('#personName');
    function itemInput() {
        const flex = document.createElement('div');
        flex.className = 'flex';
        const itemName = document.createElement('input');
        itemName.type = 'text';
        itemName.placeholder = 'Item Name';
        const price = document.createElement('input');
        price.type = 'number';
        price.placeholder = 'price';
        const remove = document.createElement('button');
        remove.className = 'delete';
        remove.innerHTML = '&times';
        remove.addEventListener('click', removeParent);
        createPerson.append(flex);
        flex.append(itemName);
        flex.append(price);
        flex.append(remove);
    }
    if (personName.value) {
        createPerson.className = 'person';
        displayName.innerHTML = personName.value;
        newItem.className = 'add';
        newItem.innerHTML = 'add item';
        remove.className = 'delete';
        remove.innerHTML = '&times';
        people.append(createPerson);
        createPerson.append(displayName);
        createPerson.append(remove);
        createPerson.append(newItem);
        newItem.addEventListener('click', itemInput);
        remove.addEventListener('click', removeParent);
    }
    else {
        alert('Please enter a name');
    }
};
personInput === null || personInput === void 0 ? void 0 : personInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addPerson();
    personInput.reset();
});
//# sourceMappingURL=index.js.map