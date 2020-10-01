class Todo {
    constructor () {
        this.totaltasks = document.querySelectorAll('#task-result').length
    }

    addTask(taskText) {
            
            let template = document.querySelector('#task-result').cloneNode (true); // cria novo template
            template.classList.remove('hide'); // remove a classe hide
            
            let templateText = template.querySelector('.task-title'); // manipular texto
            templateText.textContent = taskText;

            let list = document.querySelector ('#tasks-container');

            list.appendChild(template)

            this.addEvents() // adiciona evento as tasks

            this.checkTasks ('add')
        
    }

    removeTask (task) {
        //achar o elemento pai
        let parentEl = task.parentElement;
        //remover da lista
        parentEl.remove()

        this.checkTasks ('remove')
    }

    completeTask (task) {
        //adiciona a classe de done
        task.classList.add('done')
    }


    addEvents() {
        let removeBtns = document.querySelectorAll ('#trash')
        let removeBtn = removeBtns[removeBtns.length - 1]
        let doneBtns = document.querySelectorAll ('#check')
        let doneBtn = doneBtns[doneBtns.length -1];
        
        removeBtn.addEventListener ('click', function () {
            todo.removeTask (this)
        })

        doneBtn.addEventListener ('click', function () {
            todo.completeTask (this)
        })

    }

    checkTasks (command) {

        let msg = document.querySelector('#empty-tasks')
        // adicionar ou remover tasks
        if (command === 'add') {
            this.totaltasks += 1;
        } else if (command === 'remove') {
            this.totaltasks -= 1
        }

        // checa se tem mais de uma task e adiciona ou remove a classe
        if (this.totalTasks === 1) {
            msg.classList.remove('hide')
        } else {
            msg.classList.add('hide')
        }
    }
}

let todo = new Todo ();

let addBtn = document.querySelector ('#add')

addBtn.addEventListener ('click', function (evt) {
    evt.preventDefault()

    let taskText = document.querySelector('#task');

    

    if (taskText.value != '') {
        todo.addTask (taskText.value)
    }

    taskText.value = '';

})