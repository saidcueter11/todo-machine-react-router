import { FormEvent, useState } from 'react'
import { ContextType } from '../types'
import { useNavigate } from 'react-router-dom'

export const TodoForm = ({ submitTodo, labelForm, submitText, defaultTodoTextForm }: Pick<ContextType, 'submitTodo' | 'labelForm' | 'submitText' | 'defaultTodoTextForm'>) => {
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoTextForm ?? '')
  const navigate = useNavigate()

  const handleChange = ({ value }: HTMLTextAreaElement) => {
    setNewTodoValue(value)
  }

  const handleCancel = () => {
    navigate('/')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submitTodo(newTodoValue)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className='py-6 px-4 h-full w-full m-auto bg-gray-100 flex flex-col items-center rounded-md justify-evenly shadow'>
      <label className='text-center text-xl font-semibold w-full'>{labelForm}</label>
      <textarea placeholder="Add your new Todo" value={newTodoValue} onChange={(e) => handleChange(e.target)} className='w-full h-3/5 p-2 rounded-md bg-gray-50 shadow text-lg'></textarea>
      <div className='flex justify-evenly w-full'>
        <button className='bg-gray-50 w-32 h-fit px-6 py-1 shadow rounded-md hover:bg-gray-200 hover:scale-105 duration-150' type="button" onClick={handleCancel}>Cancel</button>
        <button className='bg-blue-200 w-32 sm:w-36 h-fit px-6 py-1 shadow rounded-md hover:bg-blue-400 hover:scale-105 duration-150' type="submit">{submitText}</button>
      </div>
    </form>
  )
}
