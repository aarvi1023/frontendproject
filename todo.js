let todoList = [
    {item:'Buy Milk',
     dueDate: '02-03-2025'}
    ,{item:'Go to gym ',
     dueDate:'02-03-2025'}];
displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
    
}
function displayItems(){
    let containerElements = document.querySelector('#item-container');
    let newHtml = '';
   
    for(i=0;i<todoList.length;i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `
        
           <span>${item}</span>
           <span>${dueDate}</span>
           <button class = "todo-delete" onclick="todoList.splice(${i},1);
           displayItems();
           ">Delete</button>
      


        `;
    }
    containerElements.innerHTML = newHtml;
    
}