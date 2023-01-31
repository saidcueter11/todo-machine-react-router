import { RiTodoFill } from 'react-icons/ri'

export const EmptyTodo = () => {
  return (
    <div className='w-full h-full grid place-content-center mb-24'>
      <div className='w-full h-full flex flex-col gap-6'>
        <RiTodoFill size={60} fill='white' className='m-auto' />
        <p className='text-center font-semibold text-xl text-gray-50'>You do not have Todos pending</p>

      </div>
    </div>
  )
}
