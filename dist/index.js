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
const itemInput = () => {
};
function removePerson() {
    this.parentElement.remove();
}
const addPerson = () => {
    const createPerson = document.createElement('div');
    const personName = document.querySelector('#personName');
    const displayName = document.createElement('h1');
    const remove = document.createElement('button');
    if (personName.value) {
        createPerson.className = 'person';
        displayName.innerHTML = personName.value;
        remove.className = 'delete';
        remove.innerHTML = '&times';
        remove.addEventListener('click', removePerson);
        people.appendChild(createPerson);
        createPerson.appendChild(displayName);
        createPerson.appendChild(remove);
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