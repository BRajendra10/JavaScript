let note_title = document.getElementById('note-title');
let note_text = document.getElementById('note-text');
let body = document.querySelector('.body');

let addNoteBtn = document.getElementById('add-note');

addNoteBtn.addEventListener('click', () => {
    addNote();
});

function addNote(){
    let noteContainer = document.createElement('div');
    noteContainer.className = "note-container";

    let span = document.createElement('span');
    let buttonContainer = document.createElement('div');
    buttonContainer.className = "buttons";

    // span eliments
    let noteTitle = document.createElement('h4');
    noteTitle.className = "title";
    noteTitle.innerHTML = note_title.value;
    let noteText = document.createElement('p');
    noteText.className = "text";
    noteText.innerHTML = note_text.value;

    // buttons eliment
    let bg_color_btn = document.createElement('button');
    bg_color_btn.classList.add('btn', 'bg-color', 'dropdown');
    bg_color_btn.innerHTML = "<i class='ri-palette-line'></i>";

    // dropdown
    let dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-container');

    let box1  = document.createElement('div');
    box1.classList.add('box', 'blue');
    let box2  = document.createElement('div');
    box2.classList.add('box', 'orange');
    let box3  = document.createElement('div');
    box3.classList.add('box', 'sky-blue');
    let box4  = document.createElement('div');
    box4.classList.add('box', 'yellow');
    let box5  = document.createElement('div');
    box5.classList.add('box', 'clay');

    dropdownContainer.appendChild(box1);
    dropdownContainer.appendChild(box2);
    dropdownContainer.appendChild(box3);
    dropdownContainer.appendChild(box4);
    dropdownContainer.appendChild(box5);


    let note_pin_btn = document.createElement('button');
    note_pin_btn.classList.add('btn', 'note-pin');
    note_pin_btn.innerHTML = "<i class='ri-pushpin-2-line'></i>";

    let note_menu_btn = document.createElement('button');
    note_menu_btn.classList.add('btn', 'note-menu');
    note_menu_btn.innerHTML = "<i class='ri-more-2-line'></i>";

    span.appendChild(noteTitle);
    span.appendChild(noteText);

    buttonContainer.appendChild(bg_color_btn);
    buttonContainer.appendChild(note_pin_btn);
    buttonContainer.appendChild(note_menu_btn);

    noteContainer.appendChild(span);
    noteContainer.appendChild(buttonContainer);

    body.appendChild(noteContainer);
    console.log(noteContainer);
}