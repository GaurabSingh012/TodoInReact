import { useState } from 'react'
import { TodoProvider } from './context'

const App = () => {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos(prev => [ {todo, ...prev}])
  }
  return (
    <TodoProvider value={{ }}>
      hello
    </TodoProvider>
  )
}

export default App