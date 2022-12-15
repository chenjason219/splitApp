const evenSplit = document.querySelector('#evenSplit');

evenSplit?.addEventListener('submit', (event) => {
    event.preventDefault();
    const total = document.querySelector('#total') as HTMLFormElement;
    const people = document.querySelector('#people') as HTMLFormElement;
    const displayResult = document.querySelector('#displayResult') as HTMLFormElement;
    if(total.value && people.value){
        const result = Math.round((total.value / people.value) * 100) / 100;
        displayResult.innerHTML = result.toString();
    } else{
        alert('Please fill in all fields')
    }
})

//user enters a persons name
const personInput = document.querySelector('#personInput') as HTMLFormElement;
const people = document.querySelector('.people') as HTMLFormElement;

//selects delete buttons
const deleteBtn = document.querySelector('delete') as HTMLFormElement;

//Creates a person div with given name
//person can be deleted
//user inputs items and price associated with item that the person had
const itemInput = () => {
    
}
//live updates the price that person owes
//for tax, get users input

//function that removes the person
function removePerson(this: any){
    this.parentElement.remove();
}

const addPerson = () => {
    const createPerson = document.createElement('div');
    const personName = document.querySelector('#personName') as HTMLFormElement;
    const displayName = document.createElement('h1');
    const remove = document.createElement('button');

    if(personName.value){
        createPerson.className = 'person';
        displayName.innerHTML = personName.value;
        remove.className = 'delete';
        remove.innerHTML = '&times';

        remove.addEventListener('click', removePerson);

        people.appendChild(createPerson);
        createPerson.appendChild(displayName);
        createPerson.appendChild(remove);
    } else {
        alert('Please enter a name');
    }
}

personInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    addPerson();
    personInput.reset();
});
