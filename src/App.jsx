import { useState } from 'react'
import Navbar from "./components/nav"
import Createtodo from './components/create-todo'
import TodoList from './components/todolist'
import Footer from './components/footer';
function App() {
  const [refresh, setRefresh] = useState()
  // const [todoitems, settodoitems] = useState(["Pen lekar aana hai ",'sabji lani hai'])
  const [inputvalue, setinputvalue] = useState("")
  {
    var todoitems = []
    var key = "";
    var index = 0;
    while(key != null ){

      key = localStorage.key(index);
      if(key != null){

        todoitems.push(key);
        index++;

      }
      else{
        break;
      }
    }
  }
  return (
    
    <>

    <Navbar/>
    <br />
     <Createtodo setrefresh = {setRefresh} setinputvalue={setinputvalue} inputvalue={inputvalue}></Createtodo>
      <TodoList items = {todoitems}  setinputvalue={setinputvalue}> </TodoList>
     <Footer></Footer>
     
    </>
  )
}

export default App
