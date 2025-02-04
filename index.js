
const btnSubmit = document.querySelector('#add-entry');
const listContainer = document.querySelector("#to-do-items");
let checklist = [];

let printList = (checklist)=>{
        let listElement = document.createElement('li');
        listElement.innerHTML =             
        `<li id="test">    
            <label class="label">${checklist[checklist.length - 1]}</label>
            <input type="button" id=${checklist.length-1} value="X" class="deleteButton"/>
        </li>`;
        listContainer.appendChild(listElement);
        
          
};

let resetList = () =>{listContainer.innerHTML = ``};

listContainer.addEventListener("click", (event)=>{
    console.log(event.target);
    if(event.target.classList.contains('label'))
    {
        event.target.classList.toggle('strike');
    } 
    else if(event.target.classList.contains('deleteButton'))
    {
        event.target.parentElement.remove();
    }
})

btnSubmit.addEventListener("click", ()=>{
    let newEntry = document.getElementById("new").value;
    checklist.push(newEntry);
    printList(checklist);
    document.getElementById("new").value = '';
});
