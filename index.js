
let btnSubmit = document.querySelector('#add-entry');
let btnDelete = document.querySelector('.deleteButton');
let listContainer = document.querySelector("#to-do-items");

let checklist = [];

// btnSubmit.addEventListener("click", ()=>{
//     let newEntry = document.getElementById("new").value;
//     console.log(newEntry);
//     listElement.innerHTML =             
//     `<li>    
//         <input type="checkbox" class="Test-Item" name="Test-Item2"/>
//         <label for="Test-Item2">${newEntry}</label>
//         <input type="button" value="Delete Item"/>
//     </li>`;
//     listContainer.appendChild(listElement);
// });

let printList = (checklist)=>{

    for(let n = 0; n < checklist.length; n++)
    {
        let listElement = document.createElement('li');
        listElement.innerHTML =             
        `<li>    
            <input type="checkbox" class="Test-Item" name="Test-Item-${n + 1}"/>
            <label for="Test-Item-${n + 1}">${checklist[n]}</label>
            <input type="button" value="Delete Item" class="deleteButton"/>
        </li>`;
        listContainer.appendChild(listElement);
    }

};

let resetList = () =>{listContainer.innerHTML = ``};

printList(checklist);

btnSubmit.addEventListener("click", ()=>{
    let newEntry = document.getElementById("new").value;
    checklist.push(newEntry);
    console.log(checklist);
    resetList();
    printList(checklist);
});

