import { MdOutlineClose } from 'react-icons/md'
import { createPortal } from 'react-dom'

interface LimitTodosProps {
  totalTodos: number
}

export const LimitTodos = ({ totalTodos }: LimitTodosProps) => {
  if (totalTodos >= 8) {
    return createPortal(
      <div className='w-44 h-14 fixed z-10 top-5 right-5 '>
        <div className='w-full h-full flex items-center justify-center rounded-lg shadow p-2 ease-in-out bg-slate-50'>
          <p className='text-center'>Ya papi ya</p>
          <div className='bg-gray-50 border-2 border-indigo-700 shadow-md w-7 rounded-full h-7 absolute flex items-center justify-center -top-2 right-1 hover:bg-red-500 group cursor-pointer hover:scale-110 transition-all duration-200'>
              <MdOutlineClose className='text-xl font-medium group-hover:fill-slate-50 cursor-pointer'/>
            </div>
        </div>
      </div>,
      document.getElementById('limit') as HTMLElement
    )
  } else return <></>
}
