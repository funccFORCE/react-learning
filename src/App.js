import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import ContentList from './ContentList' 
import JockList from './JokeList'
import ProductList from './ProductList'
import Greeting from './Greeting'
import Hooks from './Hooks'

function App (){
  return (
    <div>
    <TodoList />
    <hr />
    <ContentList />
    <JockList />
    <hr />
    <ProductList />
    <hr />
    <Greeting />
    <hr />
    <Hooks />
    </div>
    
  )
}

export default App;
