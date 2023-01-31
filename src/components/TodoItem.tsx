import { TodoType } from '../types'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

interface ItemProps extends TodoType {
  onComplete: () => void
  onDelete: () => void
}

export const TodoItem = ({ description, completed, onComplete, onDelete, id }: ItemProps) => {
  const navigate = useNavigate()
  return (
    <li className='w-full h-20 bg-white p-2 rounded-md relative flex items-center'>
      <BsCheckCircleFill className='cursor-pointer hover:fill-emerald-300 hover:scale-110 transition-all duration-200' size={28} onClick={onComplete} color={completed ? 'green' : 'gray'} />
      <div className='flex items-center pl-1'>
        <p className={`py-1 ml-2 w-full text font-medium text-gray-900 ${completed && 'line-through'}`}>{description}</p>
      </div>
      <div className='bg-gray-50 border-2 border-indigo-700 shadow-md w-7 rounded-full h-7 absolute flex items-center justify-center -top-3 right-10 hover:bg-indigo-300 group cursor-pointer hover:scale-110 transition-all duration-200' onClick={() => navigate('/edit/' + id, { state: description })}>
        <GrEdit className='group-hover:text-slate-50 cursor-pointer' />
      </div>
      <div onClick={onDelete} className='bg-gray-50 border-2 border-indigo-700 shadow-md w-7 rounded-full h-7 absolute flex items-center justify-center -top-3 right-2 hover:bg-rose-600 group cursor-pointer hover:scale-110 transition-all duration-200'>
        <MdOutlineClose className='text-xl font-bold group-hover:fill-slate-50 cursor-pointer' />
      </div>
    </li >
  )
}
