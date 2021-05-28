import React from 'react';
import Todo from './Todo';


const TodoList = ({todo, todos, setTodos, filteredTodos }) => {
  return(
     <div className="todo-container">
       <ul className="todo-list">
         {filteredTodos.map((todo) => (
           <Todo  setTodos={setTodos} key={todo.id}
            todos={todos}  todo={todo}
            text={todo.text}
           />
         ))}
       </ul>
     </div>
  );
}

export default TodoList;     // proveriti todos={todos} gde sve treba da se stavi!!!