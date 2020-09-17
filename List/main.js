const addBtn = document.querySelector(".add");
const input = document.querySelector(".userIn");
const listContainer = document.querySelector(".list-container");

// const data = JSON.parse(localStorage.getItem('stored'));


// if (data) {
//     newItem(data);
// }

input.addEventListener("keyup", function (event) {
    if (input.value && event.keyCode === 13) {
        event.preventDefault();
        newItem();
    }
});

addBtn.addEventListener('click', function () {
    if (input.value) {
        newItem();
    }
});


function newItem(data) {
    const div = document.createElement('div');
    div.classList.add('list');

    listContainer.appendChild(div);

    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add('.check');
    div.appendChild(checkbox);


    checkbox.addEventListener('click', dash);

    function dash(event) {
        if (event.target.checked) {
            div.classList.add('text');
        } else
            div.classList.remove('text');
    }

    let para = document.createElement('p');

    // if (data) {
    //     para.innerHTML = data;
    // } else {
    //     storedata(para.innerHTML);
    // }

    para.innerHTML = input.value;

    div.appendChild(para);

    let button = document.createElement('button');
    button.classList.add('.remove');
    button.classList.add('fas', 'fa-trash-alt')
    div.appendChild(button);

    button.addEventListener('click', garbage);

    function garbage() {
        listContainer.removeChild(div);
    }

    input.value = "";

};

// let itemArr = [];

// function storedata(para) {
//     itemArr.push(para);
//     localStorage.setItem('stored', JSON.stringify(itemArr));
// }

