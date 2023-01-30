import { TodoForm } from '../components/TodoForm'
import { useTodos } from '../hooks/useTodos'

export const NewTodoPage = () => {
  const { addTodo } = useTodos()
  return (
    <div className='h-screen w-full p-4'>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}
