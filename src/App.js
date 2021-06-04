import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import ContentList from './ContentList' 
import JockList from './JokeList'
import ProductList from './ProductList'
import Greeting from './Greeting'


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
    </div>
    
  )
}

export default App;
