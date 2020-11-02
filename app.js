const addForm = document.querySelector(".add")
const list = document.querySelector(".todos")
const noTodo = document.querySelector("p")
const article = document.querySelector("article")
const search = document.querySelector(".search input")

const generateTodo = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `; 
    return html
}

addForm.addEventListener("submit", e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();
    console.log(todo)
    let newTodo = generateTodo(todo)
    if (todo) {
        list.innerHTML += newTodo;
        addForm.reset();
    }
})

//delete todos
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})

console.log(article.children)

Array.from(article.children).forEach(child => {
    child.classList.add("article-element")
})

console.log(article)
console.log(noTodo.previousElementSibling)

const filterTodos = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add("filtered"));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove("filtered"))
}

//key up event - Filters todos
search.addEventListener("keyup", () => {
    const term = search.value.trim();
    filterTodos(term)
})

