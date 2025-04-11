let note_title = document.getElementById('note-title');
let note_text = document.getElementById('note-text');
let body = document.querySelector('.body');

let add_note = document.getElementById('add-note');

// add button click event
add_note.addEventListener('click', addNote);

function addNote(){
    let note_container = create_eliment('div', ["note-container"]);
    let span = create_eliment('span', ['text-content']);
    let button_container = create_eliment('div', ['buttons']);

    // span eliments
    let noteTitle = create_eliment('h4', ['title']);
    noteTitle.innerHTML = note_title.value;

    let noteText = create_eliment('p', ['text']);
    noteText.innerHTML = note_text.value;

    // buttons eliment
    let bg_color_btn = create_eliment('button', ['btn', 'bg-color', 'dropdown']);
    bg_color_btn.innerHTML = "<i class='ri-palette-line'></i>";

    // dropdown
    let dropdown_container = create_eliment('div', ['dropdown-container']);

    let box1  = create_eliment('div', ['box', 'blue']);
    let box2  = create_eliment('div', ['box', 'orange']);
    let box3  = create_eliment('div', ['box', 'sky-blue']);
    let box4  = create_eliment('div', ['box', 'yellow']);
    let box5  = create_eliment('div', ['box', 'clay']);

    dropdown_container.appendChild(box1);
    dropdown_container.appendChild(box2);
    dropdown_container.appendChild(box3);
    dropdown_container.appendChild(box4);
    dropdown_container.appendChild(box5);

    bg_color_btn.appendChild(dropdown_container);

    let note_pin_btn = create_eliment('button', ['btn', 'note-pin']);
    note_pin_btn.innerHTML = "<i class='ri-pushpin-2-line'></i>";

    let note_menu_btn = create_eliment('button', ['btn', 'note-menu'])
    note_menu_btn.innerHTML = "<i class='ri-more-2-line'></i>";

    // appending note container child eliments
    span.appendChild(noteTitle);
    span.appendChild(noteText);

    button_container.appendChild(bg_color_btn);
    button_container.appendChild(note_pin_btn);
    button_container.appendChild(note_menu_btn);

    note_container.appendChild(span);
    note_container.appendChild(button_container);

    // appending note container
    body.appendChild(note_container);
}

// function for creating eliment and adding class
function create_eliment(tag, class_name = []){
    let eliment = document.createElement(tag);

    class_name.forEach((e) => {
        eliment.classList.add(e);
    });

    return eliment;
}