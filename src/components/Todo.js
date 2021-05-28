import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    // Event Listeners
    const deleteHandler = () => {
       setTodos(todos.filter((el) => el.id !== todo.id)) // ispitati i prouciti OBAVEZNO!!!!
                                       // RESENJE: Ako KLIKNUTI element NIJE JEDNAK sa id 
                                       //od elementa sa liste(niza) onda PRIKAZI taj element
                                       // u suprotnom-ako se POKLAPA ID-UKLONI taj isti element
      
    }; 
    const completeHandler = () => {
        setTodos(todos.map((item) => {
           if(item.id === todo.id) {
               return {
                   ...item, completed: !item.completed // ispitati OBAVEZNO!!!!
               }
           }
           return item; // u slucaju da nema poklapanja prikazi ono sto je bilo vec
        }));
    }
    return(
       <div className="todo">
         <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
           <button onClick={completeHandler} className="complete-btn">
                   <i className="fas fa-check"></i>
           </button>
           <button onClick={deleteHandler} className="trash-btn">
                   <i className="fas fa-trash"></i>
           </button>
       </div>
    );
} 

export default Todo;