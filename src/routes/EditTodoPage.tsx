import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../components/TodoForm'
import { useTodos } from '../hooks/useTodos'

export const EditTodoPage = () => {
  const { editTodo, getTodo } = useTodos()
  const location = useLocation()
  const params = useParams()
  const id = Number(params.id)

  console.log({ location })

  const todo = getTodo(id)
  return (
    <div className='h-screen w-full p-4'>
      <TodoForm labelForm='Edit your Todo' submitText='Edit' submitTodo={(text: string) => editTodo(id, text)} defaultTodoTextForm={todo?.description} />
    </div>
  )
}
