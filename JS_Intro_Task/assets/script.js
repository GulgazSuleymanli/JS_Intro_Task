let nameInput = document.getElementById('name');
let surnameInput = document.getElementById('surname');
let ageInput = document.getElementById('age');
let pointInput = document.getElementById('point');
let table = document.querySelector('#table');
let button = document.getElementById('btn');
let form = document.getElementById('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.innerText = nameInput.value;

    let tdSurname = document.createElement('td');
    tdSurname.innerText = surnameInput.value;

    let tdAge = document.createElement('td');
    tdAge.innerText = ageInput.value;

    let tdPoint = document.createElement('td');
    tdPoint.innerText = pointInput.value;

    // tr.innerText = tdName.value + tdSurname.value + tdAge.value + tdPoint.value;
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdAge);
    tr.appendChild(tdPoint);

    table.appendChild(tr)
    nameInput.value = "";
    surnameInput.value = "";
    ageInput.value = "";
    pointInput.value = "";

})
