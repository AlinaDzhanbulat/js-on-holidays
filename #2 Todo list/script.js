let textIn = document.querySelector('.textIn');
let addBtn = document.getElementById('addBtn');
let list = document.querySelector('ul');

let todosArray = [
    {id: 1, text: "home work", checked: false},
    {id: 1, text: "go to market", checked: false},
    {id: 1, text: "teach JS", checked: false},
]

const addTodo = () => {
    // console.log('test');
    let newTask = textIn.value

    if(newTask != ' '){
        let li = document.createElement('li')
        li.className = 'taskItem'

        let doneBtn = document.createElement('img')
        doneBtn.src = './done.png'
        doneBtn.className = 'btn'
        doneBtn.addEventListener('click', completeTodo);

        let deleteBtn = document.createElement('img')
        deleteBtn.src = './delete.png'
        deleteBtn.className = 'btn'
        deleteBtn.addEventListener('click', deleteTodo)

        li.append(newTask)
        li.append(doneBtn)
        li.append(deleteBtn)

        list.prepend(li)
        textIn.value = ' '
    }    
}

const deleteTodo = (e) => {
// console.log(e.currentTarget.parentNode); // currentTarget кайсы тег корсотот(img), parentNode главный тег li + class
e.currentTarget.parentNode.remove(e.parentNode)
}
const completeTodo = (e) => {
let isDone = e.currentTarget.parentNode.classList.contains('done')
isDone 
?
e.currentTarget.parentNode.classList.remove('done') : 
e.currentTarget.parentNode.classList.add('done') 
}
addBtn.addEventListener('click', addTodo);