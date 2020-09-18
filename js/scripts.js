class Todo {
    constructor () {
        this.totaltasks = document.querySelectorAll ('.task').length
    }

    addTask(taskText) {
            
            let template = document.querySelector('.task').cloneNode (true);
            template.classList.remove('hide');
            
            let templateText = template.querySelector('.task-title');
            templateText.textContent = taskText;

            let list = document.querySelector ('#tasks-container');

            list.appendChild(template)

            this.addEvents ()
        
    }

    removeTask (task) {
        console.log ('deu certo')
    }

    completeTask () {
        
    }

    addEvents () {
        let removeBtns = document.querySelector ('#trash')
        let removeBtn = removeBtns[removeBtns.length -1]
        let doneBtns = document.querySelector ('#check')
        let doneBtn = removeBtns[doneBtns.length -1];
        
        removeBtn.addEventListener ('click', function () {
            todo.removeTask (this)
        })

        doneBtn.addEventListener ('click', function () {
            todo.completeTask (this)
        })

    }
}

let todo = new Todo ();

let addBtn = document.querySelector ('#add')

addBtn.addEventListener ('click', function (evt) {
    evt.preventDefault()

    let taskText = document.querySelector('#task');
    if (taskText.value !== '') {
        todo.addTask (taskText.value)
    }

    
    /* limpa input */
    taskText.value = ''
})