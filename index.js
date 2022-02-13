let addBtn = document.querySelector('.add-btn')
let list = document.querySelector('.list')
let addInput = document.querySelector('.add-input')

let allBtnFilter = document.querySelector('.all-filter')
let activeBtnFilter = document.querySelector('.active-filter')
let completedBtnFilter = document.querySelector('.completed-filter')

let tasks = []

const v2 = () => {
    return Number(new Date).toString(16)
}

const v1 = () => {
    return +Math.random().toString().replace('.', '').split('').reverse().join('')
}

const removeTask = (id) => {
    tasks = tasks.filter(t => t.id !== id)
    render(tasks)
}

const render = (tasks) => {
    list.innerHTML = tasks.reduce((prev, item) => `<li><input ${item.isDone ? 'checked' : ''} type="checkbox"/>${item.title}<button onclick=removeTask(${item.id})>x</button></li>` + prev, '')
}


addBtn.addEventListener('click', () => {
    addInput.value && tasks.push({id: v1(), title: addInput.value, isDone: Math.random() > 0.5})
    console.log(tasks)
    addInput.value = ''
    render(tasks)
})

addInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        addInput.value && tasks.push({id: v1(), title: addInput.value, isDone: Math.random() > 0.35})
        console.log(tasks)
        addInput.value = ''
        render(tasks)
    }
})

activeBtnFilter.addEventListener('click', () => {
    let filteredTasks = tasks.filter(t => !t.isDone)
    activeBtnFilter.classList.add('active')
    completedBtnFilter.classList.remove('active')
    allBtnFilter.classList.remove('active')
    render(filteredTasks)
})

completedBtnFilter.addEventListener('click', () => {
    let filteredTasks = tasks.filter(t => t.isDone)
    activeBtnFilter.classList.remove('active')
    completedBtnFilter.classList.add('active')
    allBtnFilter.classList.remove('active')
    render(filteredTasks)
})

allBtnFilter.addEventListener('click', () => {
    activeBtnFilter.classList.remove('active')
    completedBtnFilter.classList.remove('active')
    allBtnFilter.classList.add('active')
    render(tasks)
})

/*?-----------------------------------*/
















