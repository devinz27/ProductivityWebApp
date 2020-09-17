const addBtn = document.querySelector(".add");

// const notes = JSON.parse(localStorage.getItem("note")); //changes Json string to object

// if (notes) {    // checks if notes exist
//     notes.forEach((note) => {
//         addNewNote(note); // adds new note
//     });
//  }

addBtn.addEventListener('click', addNewNote);

function addNewNote() { //text = ''
    const note = document.createElement('div'); // creates element div
    note.classList.add('note'); // references div element and adds 'notes'

    // the innerHtml of new  note created
    note.innerHTML = `
            <div class="tools">
                <button class="edit"><i class="far fa-edit"></i></button>
                <button class="delete"><i class="far fa-trash-alt"></i></button>
            </div>
            <div class="main hidden"></div> 
            <textarea></textarea>      
`; //${text ? "" : "hidden"}//${text ? "hidden" : ""}

    document.body.appendChild(note); // appends the note to the doc body

    // declarations of identifiers
    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    // textArea.value = text;
    // main.innerHTML = marked(value);

    editBtn.addEventListener("click", hide);

    function hide() {     // toggles hidden class
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    }

    deleteBtn.addEventListener("click", del);

    function del() {
        note.remove();
        //  store();
    }

    textArea.addEventListener("input", display);

    function display(event) {
        const value = event.target.value; // event.target represents dom element textarea and value gets the text entered
        main.innerHTML = marked(value); // changes main to the value(text) with marked library
        // store();
    }

}



// function store() {
//     const userText = document.querySelectorAll('textarea');

//     const textArr = [];

//     userText.forEach(note => {
//         textArr.push(note.value);
//     });
    
//     console.log(textArr);
//     localStorage.setItem("note", JSON.stringify(textArr));
// }
