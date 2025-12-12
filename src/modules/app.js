import { CreateToDo } from './todo';

export default function App() {
  
    
    
    const myTodo = new CreateToDo('Today', 'Code', 'never');
    const myTodo1 = new CreateToDo('Today', 'Code', 'never');
    const myTodo2 = new CreateToDo('Today', 'Code', 'never');
    myTodo2.delete();
    console.log(myTodo1)
}