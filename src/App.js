import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TodoForm from './container/TodoForm';
import Todolist from './container/Todolist';

 export default function App() {
  return (
    <>
    <Router>
    <div>
    <Route exact path="/" component ={TodoForm}/>
    <Route path="/todoslist" component ={Todolist}/>
    </div>
    </Router>
  
  </>
        
    
  );
}
