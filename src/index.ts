//Creates a person div with given name
//person can be deleted
//live updates the price that person owes
//for tax, get users input

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

//function that removes the person
function removeParent(this: any){
    this.parentElement.remove();
}

//user inputs items and price associated with item that the person had

const addPerson = () => {
    const createPerson = document.createElement('div');
    const displayName = document.createElement('h1');
    const newItem = document.createElement('button');
    const remove = document.createElement('button');
    const personName = document.querySelector('#personName') as HTMLFormElement;

    function itemInput(){
        const flex = document.createElement('div');
        flex.className = 'flex'
    
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

    if(personName.value){
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

    } else {
        alert('Please enter a name');
    }
}

personInput?.addEventListener('submit', (event) => {
    event.preventDefault();
    addPerson();
    personInput.reset();
});
