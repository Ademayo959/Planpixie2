//Code to toggle the Search Bar
const search = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput');

search.addEventListener('click', ()=>{
if(searchInput.classList.contains('hidden')){
        searchInput.classList.remove('hidden')
    }else{
        searchInput.classList.add('hidden')
    }
});

//Adding and Removing todos
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const Search = document.querySelector('.searchInput input');

const generateTemplate = todo => {
    const html = `
        <li class="flex mx-8 text-2xl mt-4 justify-between">
            <p class="ml-3 cursor-pointer">${todo}</p>
            <svg class="delete h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </li>
    `;

    list.innerHTML += html;
    updateTodos();

};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo)
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// deleting todos 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        updateTodos();
    }
});

const filterTodos = (term) => {

    Array.from(list.children).filter( (todo) => { 
        return !todo.textContent.toLowerCase().includes(term); 
    }).forEach((todo)=>{
        todo.classList.add('hidden');
    });

    Array.from(list.children).filter( (todo) => { 
        return todo.textContent.toLowerCase().includes(term); 
    }).forEach((todo)=>{
        todo.classList.remove('hidden');
    });
};

// keyup events
Search.addEventListener('keyup', ()=> {
    const term = Search.value.trim().toLowerCase();
    filterTodos(term);
});

const numOfTodos = document.querySelector('.numOfTodos')
function updateTodos () {
const numOfList = Array.from(list.children).length
numOfTodos.textContent = numOfList
//console.log(numOfList)
}

    











