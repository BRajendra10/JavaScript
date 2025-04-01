$('.add-task').on('click', () => {
    if($('#task-field').val() === ''){
        alert('input field must be filed to add new task');
    }else{
        createTask($('#task-field').val());
        $('#task-field').val('');
    }
});

function createTask(Task){
    let task = $('<div class="task"></div>').text(Task);
    let flame = $('<i class="ri-fire-fill flame"></i>');

    let today = new Date().toLocaleDateString();
    let time = $('<div class="time"></div>').text(today);

    let timeContainer = $('<div class="time-container"></div>').append(time);
    let taskContainer = $('<article class="task-container"></article>');

    let buttons = createButtons();

    taskContainer.append(flame);
    taskContainer.append(task);
    taskContainer.append(buttons);
    taskContainer.append(timeContainer);
    $('.todo-body').append(taskContainer);
}

function createButtons(){
    let pencil = $('<button class="btn pencil"><i class="ri-pencil-fill"></i></button>');
    let check = $('<button class="btn check"><i class="ri-check-fill"></i></button>');
    let dustBin = $('<button class="btn dustBin"><i class="ri-delete-bin-7-fill"></i></button>');
    let buttons = $('<div> </div>').addClass('buttons');

    buttons.append(pencil);
    buttons.append(check);
    buttons.append(dustBin);

    return buttons;
}

$('.todo-body').on('click', '.check', function () {
    let task = $(this).parent().parent().find('.task');
    task.css({
        'color': 'lightgray',
        'text-decoration': 'line-through',
    });
});

$('.todo-body').on('click', '.dustBin', function () {
    let taskContainer = $(this).parent().parent();
    taskContainer.remove();
});

$('.todo-body').on('click', '.pencil', function () {
    let task = $(this).parent().parent().find('.task').text();
    $('#task-field').val(task);
});
